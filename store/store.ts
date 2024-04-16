import { Instance, t } from 'mobx-state-tree'; // alternatively, `import { t } from "mobx-state-tree"`

import uuid from 'react-native-uuid';
import { Project } from './models';
import { Category } from './models';
import { createContext, useContext } from 'react';
import { ProjectProps } from '../app/createProject';

const RootStore = t
  .model({
    projects: t.map(Project),
    categories: t.map(Category),
  })
  .views((self) => ({
    get getAllCategories() {
      return Array.from(self.categories.values());
    },
    get getProjects() {
      return Array.from(self.projects.values());
    },
  }))
  .actions((self) => ({
    hasEmptyCategory() {
      return Array.from(self.categories.values()).some(
        (category) => category.name === ''
      );
    },
    addEmptyCategory() {
      const newCategory = { id: uuid.v4().toString(), name: '' };
      self.categories.put(newCategory);
    },
    clearEmptyCategory() {
      const emptyCategory = Array.from(self.categories.values()).find(
        (category) => category.name === ''
      );

      if (emptyCategory === undefined) {
        return;
      }

      self.categories.delete(emptyCategory.id);
    },
    updateCategory(id: string, newName: string) {
      self.categories.get(id)?.setName(newName);
    },
    removeCategory(id: string) {
      self.categories.delete(id);
    },
    addProject(data: ProjectProps) {
      self.projects.put({
        id: uuid.v4().toString(),
        name: data.name,
        actions: '',
        commitment: data.commitment,
        progressMetrics: data.progressMetrics,
        resources: data.resources,
        timeframe: data.timeFrame,
      });
    },
  }));

const StoreContext = createContext<IRootStore>({} as IRootStore);
export const useStore = () => useContext(StoreContext);
export const StoreProvider = StoreContext.Provider;
export interface IRootStore extends Instance<typeof RootStore> {}

export { RootStore };
