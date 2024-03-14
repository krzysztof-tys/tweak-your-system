import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Record } from '../Common/types';

type TimerProps = {
    record: Record;
};

const Timer = ({ record }: TimerProps) => {
    const [timePassed, setTimePassed] = useState<Date>();

    const formatTime = (date: Date): string =>
        `${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;

    useEffect(() => {
        let intervalId = setInterval(() => {
            if (!record.startDate) {
                throw Error();
            }

            const delta = Date.now() - record.startDate;
            console.log(delta + ' ' + JSON.stringify(record));

            setTimePassed(new Date(delta));
        }, 90);

        return () => clearInterval(intervalId);
    }, [record]);

    return <Text>{timePassed && formatTime(timePassed)}</Text>;
};

export default Timer;
