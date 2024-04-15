import { Button, StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';

interface CategoryProps {
  category: {
    id: string;
    name: string;
  };
  update: (categoryId: string, newName: string) => void;
  remove: (id: string) => void;
}

const Category: React.FC<CategoryProps> = ({ category, update, remove }) => {
  const [newName, setNewName] = useState<string>(category.name);

  return (
    <View style={styles.container}>
      <TextInput
        value={newName}
        onChangeText={(text) => setNewName(text)}
        onEndEditing={() => update(category.id, newName)}
        style={styles.categoryText}
      />
      <Button title={'x'} onPress={() => remove(category.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
  },
  categoryText: {
    width: '75%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default Category;
