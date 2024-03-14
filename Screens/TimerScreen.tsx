import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { produce } from 'immer';
import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import Timer from '../Components/Timer';
import { Activity, Record, SCREEN } from '../Common/types';
import { styles } from '../Common/style';

type TimerProps = {
    activities: Activity[];
    records: Record[];
    setRecords: React.Dispatch<React.SetStateAction<Record[]>>;
};

const NO_ACTIVITY = -1;

const TimerScreen = ({ activities, records, setRecords }: TimerProps) => {
    const navigation =
        useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const [currentActivityIndex, setCurrentActivityIndex] =
        useState<number>(NO_ACTIVITY);

    const currentRecord = records[records.length - 1];
    const isLastActivity = currentActivityIndex == activities.length - 1;

    useEffect(() => {
        if (currentActivityIndex !== -1) {
            return;
        }

        startTimer();
    }, []);

    const startTimer = () => {
        const firstActivity = activities[0];
        createAndStartRecord(firstActivity);
        setCurrentActivityIndex(0);
    };

    const createAndStartRecord = (activity: Activity): void => {
        const newRecord = {
            activity: activity,
            startDate: Date.now(),
        };

        console.log(JSON.stringify(newRecord));

        setRecords(
            produce(records, (draft) => {
                draft.push(newRecord);
            })
        );
    };

    const stopTimerForActivity = (activity: Activity): void => {
        const record = records.find(
            (record) => record.activity.id === activity.id
        );

        if (record == null || record == undefined) {
            throw Error('Something went wrong while stopping activity');
        }

        record.endDate = Date.now();
    };

    const nextActivity = () => {
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

    const isLast = () => currentActivityIndex == activities.length - 1;

    return (
        <View style={styles.container}>
            <Text>
                {currentActivityIndex !== NO_ACTIVITY &&
                    activities[currentActivityIndex].name}
            </Text>
            {records.length > 0 && <Timer record={currentRecord} />}
            <Button
                onPress={isLast() ? finishTiming : nextActivity}
                title=">"
            />
            <Text>
                {currentActivityIndex !== NO_ACTIVITY &&
                    !isLastActivity &&
                    activities[currentActivityIndex + 1].name}
            </Text>
        </View>
    );
};

export default TimerScreen;
