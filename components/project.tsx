import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IProject } from '../store/models';
import { router } from 'expo-router';

interface ProjectComponentProps {
  project: IProject;
}

const Project: React.FC<ProjectComponentProps> = ({ project }) => {
  const enterFocusMode = () => {
    router.navigate('/stopwatch');
  };

  return (
    <View style={styles.container}>
      <Text onPressOut={enterFocusMode}>
        {project.name},{project.resources},{project.timeframe},{' '}
        {project.progressMetrics},{project.commitment}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
});

export default Project;
