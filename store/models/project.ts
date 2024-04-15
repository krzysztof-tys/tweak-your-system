import { Instance, t } from 'mobx-state-tree';

export const Project = t.model({
  id: t.identifier,
  name: '',
  timeframe: '',
  resources: '',
  progressMetrics: '',
  commitment: '',
  actions: '',
});

export interface IProject extends Instance<typeof Project> {}
