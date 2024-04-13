import { Slot } from 'expo-router';
import { Text } from 'react-native';
import { StoreProvider } from './index';
import { RootStore } from '../services/models';

const store = RootStore.create({
  projects: {},
  categories: {
    1: {
      id: '1',
      name: 'cat',
    },
  },
});

export default function HomeLayout() {
  return (
    <>
      <StoreProvider value={store}>
        <Text>header</Text>
        <Slot />
        <Text>footer</Text>
      </StoreProvider>
    </>
  );
}
