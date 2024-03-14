import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Record } from '../Common/types';
import { formatTime } from '../Services/time';

type TimerProps = {
    record: Record;
};

const Timer = ({ record }: TimerProps) => {
    const [timePassed, setTimePassed] = useState<Date>();

    useEffect(() => {
        let intervalId = setInterval(() => {
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

export default Timer;
