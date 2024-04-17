import { Button, StyleSheet, Text, View } from 'react-native';
import { Link, router } from 'expo-router';
import { useStore } from '../store';
import { useForm } from 'react-hook-form';
import ControlledTextInput from '../components/controlledTextInput';

export interface ProjectProps {
  name: string;
  timeFrame: string;
  resources: string;
  progressMetrics: string;
  commitment: string;
}

const CreateProject = () => {
  const store = useStore();

  const createProject = (data: ProjectProps) => {
    store.addProject(data);
    router.navigate('/');
  };

  const { control, handleSubmit } = useForm<ProjectProps>({
    defaultValues: {
      name: '',
      timeFrame: '',
      resources: '',
      progressMetrics: '',
      commitment: '',
    },
  });

  return (
    <View style={styles.container}>
      <Text>Name:</Text>
      <ControlledTextInput
        name={'name'}
        control={control}
        style={styles.input}
      />
      <Text>Time frame:</Text>
      <ControlledTextInput
        name={'timeFrame'}
        control={control}
        style={styles.input}
      />
      <Text>Resources</Text>
      <ControlledTextInput
        name={'resources'}
        control={control}
        style={styles.input}
      />
      <Text>---</Text>
      <Text>Progress metrics:</Text>
      <ControlledTextInput
        name={'progressMetrics'}
        control={control}
        style={styles.input}
      />
      <Text>Commitment</Text>
      <ControlledTextInput
        name={'commitment'}
        control={control}
        style={styles.input}
      />
      <Text>---</Text>
      <Link href={'/'} asChild>
        <Button title={'create'} onPress={handleSubmit(createProject)} />
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
