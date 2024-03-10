import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { produce } from "immer";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Activity, Record, SCREEN } from "../types";

type TimerProps = {
    activities: Activity[];
    records: Record[];
    setRecords: React.Dispatch<React.SetStateAction<Record[]>>;
};

const TimerScreen = ({ activities, records, setRecords }: TimerProps) => {
    const navigation =
        useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [currentActivityIndex, setCurrentActivityIndex] =
        useState<number>(-1);

    useEffect(() => {
        if (currentActivityIndex !== null) {
            return;
        }

        startTimer();
    }, []);

    const createAndStartRecord = (activity: Activity): void => {
        const newRecord = {
            activity: activity,
            startDate: Date.now(),
        };

        setRecords(
            produce(records, (draft) => {
                draft.push(newRecord);
            })
        );
    };

    const startTimer = () => {
        const firstActivity = activities[0];
        createAndStartRecord(firstActivity);
        setCurrentActivityIndex(0);
    };

    const stopTimerForActivity = (activity: Activity): void => {
        const record = records.find(
            (record) => record.activity.id === activity.id
        );

        if (record == null || record == undefined) {
            throw Error("Something went wrong while stopping activity");
        }

        record.endDate = Date.now();
    };

    const nextActivity = () => {
        const isLastActivity = currentActivityIndex == activities.length - 1;
        if (isLastActivity) {
            finishTiming();
            return;
        }

        const tempIndex = currentActivityIndex + 1;

        stopTimerForActivity(activities[currentActivityIndex]);
        createAndStartRecord(activities[tempIndex]);
        setCurrentActivityIndex(tempIndex);
    };

    const finishTiming = () => {
        stopTimerForActivity(activities[currentActivityIndex]);
        setCurrentActivityIndex(-1);
        navigation.navigate(SCREEN.SummaryScreen);
    };

    return (
        <View>
            <Text>Hello</Text>
        </View>
    );
};

export default TimerScreen;
