import { Slot } from 'expo-router';
import { Text } from 'react-native';
import { RootStore, StoreProvider } from '../store';

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
