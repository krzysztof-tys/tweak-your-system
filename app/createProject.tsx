import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Link } from 'expo-router';
import { useStore } from '../store';

const CreateProject = () => {
  const store = useStore();

  const createProject = () => {
    store.addProject();
  };

  return (
    <View style={styles.container}>
      <Text>Name:</Text>
      <TextInput style={styles.input} />
      <Text>Time frame:</Text>
      <TextInput style={styles.input} />
      <Text>Resources</Text>
      <TextInput style={styles.input} />
      <Text>---</Text>
      <Text>Progress metrics:</Text>
      <TextInput style={styles.input} />
      <Text>Commitment</Text>
      <TextInput style={styles.input} />
      <Text>---</Text>
      <Link href={'/'} asChild>
        <Button title={'create'} onPress={createProject} />
      </Link>
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
  input: {
    borderColor: 'gray',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});

export default CreateProject;
