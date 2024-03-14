import { Text, View } from 'react-native';
import { Record } from '../Common/types';
import { styles } from '../Common/style';

type SummaryProps = {
    records: Record[];
};

const SummaryScreen = ({ records }: SummaryProps) => {
    return (
        <View style={styles.container}>
            <Text>records with time</Text>
            <Text>summary time of all records</Text>
        </View>
    );
};

export default SummaryScreen;
