import { Instance, t } from 'mobx-state-tree';

export const Category = t
  .model({
    id: t.identifier,
    name: '',
  })
  .actions((self) => ({
    setName(newName: string) {
      self.name = newName;
    },
  }));

export interface ICategory extends Instance<typeof Category> {}
