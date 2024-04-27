import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
import ProjectList from '../components/projectList';

export default function App() {
  return (
    <View style={styles.container}>
      <Link href={'/editCategories'} asChild>
        <Button title={'Edit categories'} />
      </Link>
      <Link href={'/createProject'} asChild>
        <Button title={'Create new project'} />
      </Link>
      <ProjectList />
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
