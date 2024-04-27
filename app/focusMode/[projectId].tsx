import React from 'react';
import { Button, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import SetupFocusMode from '../../components/focusMode/setupFocusMode';
import FocusModeMeasurements from '../../components/focusMode/focusModeMeasurements';
import FocusModeSummary from '../../components/focusMode/focusModeSummary';
import useFocusModeController from '../../services/useFocusModeController';

const FocusMode = () => {
  const { projectId } = useLocalSearchParams<{ projectId: string }>();

  const { state, nextState, getNextButtonTitle } = useFocusModeController();

  return (
    <View>
      <Text>{projectId}</Text>
      <Text>{state}</Text>
      {state === 'setup' && <SetupFocusMode />}
      {state === 'measurements' && <FocusModeMeasurements />}
      {state === 'summary' && <FocusModeSummary />}
      <Button title={getNextButtonTitle()} onPress={nextState} />
    </View>
  );
};

export default FocusMode;
