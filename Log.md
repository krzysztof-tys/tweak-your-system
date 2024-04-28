## Day 59 [28.04.2024]
vacation

## Day 58 [26.04.2024]
Investigation on react-native architecture. Found promising resource on github; Also New Architecture is worth checking out.
I know custom hook should be used for repeating things but it seems like the most natural way to handle focus mode logic.

Initially I wanted to create a class FocusModeController but hook seems much more simple and readable. 

## Dat 47 [16.04.2024]
react-hook-form vs formik  
https://react-hook-form.com/get-started#ReactNative

user can create project
main page displays projects
react-hook-form used

next -> timer

## Day 46 
refactor of store

next -> create project creates project

## Day 45 [14.04.2024]
editable, removable, stored in mst categories

next: categories dropdown in create project  
nnext: list of projects in main view  
nnnext: timer when clicked on project in main view  
nnnnext: save timer records in database 

## Day 44 [ 13/04.2024 ]
mobx-state-tree

Today I integrated mobx-state-tree with the app. It took me some time to find out that to utilize `useContext` I have to put the provider in the root _layout file. The phrase for google I was searching so long was `useContext with expo router`. 

⏭ next steps: 
- create categories and projects
- create models for records
- create timer feature
- persist data

⏭⏭ further steps:
- add actions to projects
- allow to plan actions during the week
  - for the begining - no exact time - just morning, afternoon, evening and order of action.
- actions appear on the list on main screen according to the plan

⏭⏭⏭ 
- export records to csv
- present nice graph

⭐ nice to have
- fancy tutorial
- bearable graphic design

👁 Vision:
When user first time opens the app the tutorial is started. The app is 'live creating' initial data with narrator describing what and why it's doing. 
1. Creating some basic categories
2. Creating projects for these categories 
3. a

For now it's called categories but I think I'd prefer 'Area'

## Day 43 [ 12.04.2024 ]
Expo router

## Day 1 - Day 42 
Searching for the answer for life, the universe and everything 
