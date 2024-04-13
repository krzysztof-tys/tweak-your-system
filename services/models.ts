import { Instance, t } from "mobx-state-tree"; // alternatively, `import { t } from "mobx-state-tree"`

interface ProjectProps {
  category: string;
  name: string;
  timeframe: string;
  resources: string;
  progressMetrics: string;
  commitment: string;
  actions: string;
}

const Project = t
  .model({
    category: "",
    name: "",
    timeframe: "",
    resources: "",
    progressMetrics: "",
    commitment: "",
    actions: "",
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
    setCategory(category: string) {
      self.category = category;
    },
    setName() {},
    setTimeframe() {},
    setResources() {},
    setProgressMetrics() {},
    setCommitment() {},
    setActions() {},
  }));

const RootStore = t.model({
  projects: t.map(Project),
});

const store = RootStore.create({
  projects: {},
});

export interface IProject extends Instance<typeof Project> {}

export { Project, store };
