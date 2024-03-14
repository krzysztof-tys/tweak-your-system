import { Text, View } from 'react-native';
import { Record } from '../Common/types';
import { styles } from '../Common/style';
import { formatTime } from '../Services/time';

type SummaryProps = {
    records: Record[];
};

type EnsuredRecord = NonNullable<Record> & {
    startDate: number;
    endDate: number;
};

const SummaryScreen = ({ records }: SummaryProps) => {
    const validateRecord = (record: Record): EnsuredRecord => {
        if (
            record.startDate === null ||
            record.endDate === null ||
            record.startDate === undefined ||
            record.endDate === undefined
        ) {
            console.log(JSON.stringify(records));
            throw Error('Summary record is missing data.');
        }

        return {
            activity: record.activity,
            startDate: record.startDate,
            endDate: record.endDate,
        };
    };

    return (
        <View style={styles.container}>
            {records.map((record) => {
                const ensuredRecord = validateRecord(record);

                return (
                    <Text key={record.activity.id}>
                        {record.activity.name} -{' '}
                        {formatTime(
                            new Date(
                                ensuredRecord.endDate - ensuredRecord.startDate
                            )
                        )}
                    </Text>
                );
            })}
        </View>
    );
};

export default SummaryScreen;
