import { IRootStore, RootStore } from '../services/models';
import { createContext, useContext } from 'react';
import App from './app';

const StoreContext = createContext<IRootStore>({} as IRootStore);

export const useStore = () => useContext(StoreContext);
export const StoreProvider = StoreContext.Provider;

export default function Root() {
  return <App />;
}
