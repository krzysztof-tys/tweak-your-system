import { Instance, t } from 'mobx-state-tree';
import { Category, ICategory } from './category';

export interface ProjectProps {
  category: ICategory;
  name: string;
  timeframe: string;
  resources: string;
  progressMetrics: string;
  commitment: string;
  actions: string;
}

export const Project = t.model({
  id: t.identifier,
  category: t.maybe(t.reference(t.late(() => Category))),
  name: '',
  timeframe: '',
  resources: '',
  progressMetrics: '',
  commitment: '',
  actions: '',
});

export interface IProject extends Instance<typeof Project> {}
