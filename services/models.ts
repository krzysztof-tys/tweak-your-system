import { Instance, t } from 'mobx-state-tree'; // alternatively, `import { t } from "mobx-state-tree"`

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

const Category = t.model({
  id: t.identifier,
  name: '',
});

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
      return Array.from(self.categories).values();
    },
  }));

export interface IProject extends Instance<typeof Project> {}

export interface ICategory extends Instance<typeof Category> {}

export interface IRootStore extends Instance<typeof RootStore> {}

export { RootStore };
