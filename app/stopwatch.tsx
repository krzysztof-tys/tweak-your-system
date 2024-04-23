import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { produce } from 'immer';
import { router } from 'expo-router';
import { Timer } from '../components/timer';

const NO_ACTIVITY = -1;

export type Activity = {
  id: number;
  name?: string;
};

export type TRecord = {
  activity: Activity;
  startDate?: number;
  endDate?: number;
};

const Stopwatch = () => {
  const activities = [
    { id: 0, name: 'first' },
    { id: 1, name: 'second' },
    { id: 2, name: 'third' },
  ];
  const [records, setRecords] = useState<TRecord[]>([]);

  const [currentActivityIndex, setCurrentActivityIndex] =
    useState<number>(NO_ACTIVITY);

  const currentRecord = records[records.length - 1];
  const isLastActivity = currentActivityIndex === activities.length - 1;

  useEffect(() => {
    if (currentActivityIndex !== NO_ACTIVITY) {
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
    records: TRecord[],
    activity: Activity
  ): TRecord[] => {
    const newRecord = {
      activity,
      startDate: Date.now(),
    };

    return produce(records, (draft: TRecord[]) => {
      draft.push(newRecord);
    });
  };

  const stopTimerForActivity = (records: TRecord[], activity: Activity) => {
    const recordIndex = records.findIndex(
      (record) => record.activity.id === activity.id
    );

    if (recordIndex === -1) {
      console.log(JSON.stringify(activity));
      throw Error('Something went wrong while stopping activity');
    }

    return produce(records, (draft: TRecord[]) => {
      draft[recordIndex].endDate = Date.now();
    });
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

    router.navigate('/summary');
  };

  const isLast = () => currentActivityIndex === activities.length - 1;

  return (
    <View style={styles.container}>
      <Text>
        {currentActivityIndex !== NO_ACTIVITY &&
          activities[currentActivityIndex]?.name}
      </Text>
      {records.length > 0 && <Timer record={currentRecord} />}
      <Button onPress={isLast() ? finishTiming : nextActivity} title=">" />
      <Text>
        {currentActivityIndex !== NO_ACTIVITY &&
          !isLastActivity &&
          activities[currentActivityIndex + 1]?.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'gray',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});

export default Stopwatch;
