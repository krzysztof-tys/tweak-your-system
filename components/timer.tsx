import { TRecord } from '../app/stopwatch';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';

type TimerProps = {
  record: TRecord;
};

export const formatTime = (date: Date): string => {
  const milliseconds = ('000' + date.getMilliseconds()).slice(-3);
  const seconds = ('00' + date.getSeconds()).slice(-2);
  const minutes = ('00' + date.getMinutes()).slice(-2);

  return `${minutes}:${seconds}:${milliseconds}`;
};

export const Timer = ({ record }: TimerProps) => {
  const [timePassed, setTimePassed] = useState<Date>();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!record.startDate) {
        throw Error();
      }

      const delta = Date.now() - record.startDate;

      setTimePassed(new Date(delta));
    }, 75);

    return () => clearInterval(intervalId);
  }, [record]);

  return <Text>{timePassed && formatTime(timePassed)}</Text>;
};
