import React from 'react';
import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const ProjectId = () => {
  const { projectId } = useLocalSearchParams<{ projectId: string }>();

  return (
    <View>
      <Text>{projectId}</Text>
    </View>
  );
};

export default ProjectId;
