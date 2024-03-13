import { Text } from 'react-native';
import { Record } from '../types';

type TimerProps = {
    record: Record;
};

const Timer = ({ record }: TimerProps) => {
    if (record.startDate == null) {
        throw Error('trying to time not started record');
    }

    const delta = Date.now() - record.startDate;
    return <Text>{}</Text>;
};

export default Timer;
