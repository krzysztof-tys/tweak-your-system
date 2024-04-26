import React from 'react';
import Project from './project';
import { useStore } from '../store';
import { View } from 'react-native';

const ProjectList = () => {
  const store = useStore();

  return (
    <View>
      {store.getProjects.map((project) => (
        <Project key={project.id} project={project}></Project>
      ))}
    </View>
  );
};

export default ProjectList;