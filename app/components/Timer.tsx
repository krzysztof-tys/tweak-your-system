import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { TRecord } from '../common';
import { formatTime } from '../utils/time';

type TimerProps = {
    record: TRecord;
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
