import React from 'react';
import { Text, View } from 'react-native';
import { IProject } from '../store/models';

interface ProjectComponentProps {
  project: IProject;
}
const Project: React.FC<ProjectComponentProps> = ({ project }) => {
  return (
    <View>
      <Text>{project.name}</Text>
    </View>
  );
};

export default Project;
