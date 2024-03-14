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
        const newRecords = createAndStartRecord(records, firstActivity);

        setCurrentActivityIndex(0);
        setRecords(newRecords);
    };

    const createAndStartRecord = (
        records: Record[],
        activity: Activity
    ): Record[] => {
        const newRecord = {
            activity: activity,
            startDate: Date.now(),
        };

        return produce(records, (draft) => {
            draft.push(newRecord);
        });
    };

    const stopTimerForActivity = (records: Record[], activity: Activity) => {
        const recordIndex = records.findIndex(
            (record) => record.activity.id === activity.id
        );

        if (recordIndex === -1) {
            console.log(JSON.stringify(activity));
            throw Error('Something went wrong while stopping activity');
        }

        const newRecords = produce(records, (draft) => {
            draft[recordIndex].endDate = Date.now();
        });

        return newRecords;
    };

    const nextActivity = () => {
        const tempIndex = currentActivityIndex + 1;

        let newRecords = stopTimerForActivity(
            records,
            activities[currentActivityIndex]
        );
        newRecords = createAndStartRecord(newRecords, activities[tempIndex]);

        setRecords(newRecords);
        setCurrentActivityIndex(tempIndex);
    };

    const finishTiming = () => {
        const newRecords = stopTimerForActivity(
            records,
            activities[currentActivityIndex]
        );
        setCurrentActivityIndex(-1);
        setRecords(newRecords);

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
