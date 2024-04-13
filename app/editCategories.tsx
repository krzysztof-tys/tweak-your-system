import { StyleSheet, Text, View } from 'react-native';
import { useStore } from './index';
import { observer } from 'mobx-react-lite';

const EditCategories = (props: unknown) => {
  const store = useStore();

  console.log('store:', store);

  console.log('props:', props);

  return (
    <View style={styles.container}>
      <Text>test</Text>
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
});

export default observer(EditCategories);
