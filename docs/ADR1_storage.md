# Storage solution
## Status
accepted

## Context
- We need to keep data of the actions measured by users. At the moment it's simple date-action relation and action collection. It is expected to grow into action templates, some goals / habits tracking and certaing filtering, sorting and visualization of that data. 
- There are basically two options for local storage [more on that in storage-notes.md](https://github.com/krzysztof-tys/tweak-your-system/blob/main/docs/storage-notes.md)
  - React Native SQLite
  - Realm

## Decision
- Realm
  - object-oriented database
  - possibility of cloud sync

## Consequences
- easier to use, requires less code
- learning curve


## Additional notes
https://www.mongodb.com/docs/atlas/app-services/tutorial/react-native/
