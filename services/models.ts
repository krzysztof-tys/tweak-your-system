import { Instance, t } from 'mobx-state-tree'; // alternatively, `import { t } from "mobx-state-tree"`

import uuid from 'react-native-uuid';

// Generate a UUID
interface ProjectProps {
  category: ICategory;
  name: string;
  timeframe: string;
  resources: string;
  progressMetrics: string;
  commitment: string;
  actions: string;
}

const Project = t
  .model({
    category: t.maybe(t.reference(t.late(() => Category))),
    name: '',
    timeframe: '',
    resources: '',
    progressMetrics: '',
    commitment: '',
    actions: '',
  })
  .actions((self) => ({
    addProject(newProject: ProjectProps) {
      self.category = newProject.category;
      self.name = newProject.name;
      self.timeframe = newProject.timeframe;
      self.resources = newProject.resources;
      self.progressMetrics = newProject.progressMetrics;
      self.commitment = newProject.commitment;
      self.actions = newProject.actions;
    },
  }));

const Category = t
  .model({
    id: t.identifier,
    name: '',
  })
  .actions((self) => ({
    setName(newName: string) {
      self.name = newName;
    },
  }));

const RootStore = t
  .model({
    projects: t.map(Project),
    categories: t.map(Category),
  })
  .views((self) => ({
    get areCategoriesEmpty() {
      return Array.from(self.categories).length === 0;
    },
    get getAllCategories() {
      return Array.from(self.categories.values());
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
  }));

export interface IProject extends Instance<typeof Project> {}

export interface ICategory extends Instance<typeof Category> {}

export interface IRootStore extends Instance<typeof RootStore> {}

export { RootStore };
