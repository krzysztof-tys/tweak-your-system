import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
import { useStore } from '../store';
import Project from '../components/project';

export default function App() {
  const store = useStore();
  return (
    <View style={styles.container}>
      <Link href={'/editCategories'} asChild>
        <Button title={'Edit categories'} />
      </Link>
      <Link href={'/createProject'} asChild>
        <Button title={'Create new project'} />
      </Link>
      {store.getProjects.map((project) => (
        <Project key={project.id} project={project}></Project>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
