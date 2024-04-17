import { Button, ScrollView, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import Category from '../components/category';
import { Link } from 'expo-router';
import { useEffect } from 'react';
import { useStore } from '../store';

const EditCategories = () => {
  const store = useStore();

  useEffect(() => {
    if (store.hasEmptyCategory()) {
      return;
    }

    store.addEmptyCategory();
  }, [JSON.stringify(store.categories)]);

  const finish = () => {
    store.clearEmptyCategory();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {store.getAllCategories.map((category) => (
        <Category
          key={category.id}
          category={category}
          update={store.updateCategory}
          remove={store.removeCategory}
        />
      ))}
      <Link href={'/'} asChild>
        <Button title="finish" onPress={finish} />
      </Link>
    </ScrollView>
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
