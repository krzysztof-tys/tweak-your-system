import { useState } from 'react';
import { router } from 'expo-router';

export type FocusModeState = 'setup' | 'measurements' | 'summary' | 'invalid';

const useFocusModeController = () => {
  const [state, setState] = useState<FocusModeState>('setup');

  const nextState = () => {
    if (state === 'setup') {
      setState('measurements');
      return;
    }

    if (state === 'measurements') {
      setState('summary');
      return;
    }

    if (state === 'summary') {
      setState('invalid');

      router.navigate('/');
      // finish
      return;
    }

    throw new Error('[FocusModeController]: invalid state during nextState()');
  };

  const getNextButtonTitle = () => (state === 'summary' ? 'finish' : 'next');

  return {
    state,
    nextState,
    getNextButtonTitle,
  };
};

export default useFocusModeController;
