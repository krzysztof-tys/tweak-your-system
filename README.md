<p align="center"><img src="/docs/abstract_geometric_dragon.png" width="260em" height="260em" /></p>

# Tweak Your System - a simple time tracker with remarkable effects
<img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />

Effortless, one button life tracker. Organize your life, build healthy habits and set systems for inevitable succes.

## Level 0 - Relaxed mode and Focused mode

Every other time tracking app is trying to measure everything you're doing.  
Which is exauhsting, especially if you're not used to this. 

Healthy change must occur slowly. It's not natural to switch from not really paying attention to constant focus on your every action. That's why Tweak Your System is designed to track only a small part of your life at the beginning. Take one goal or one habit and start with that. Later on when you will get used to planning and extended periods of focus you'll be able comfortably add more items to your schedule. 

You have two states of the app:
- Relaxed -> measures the time you're not in focused mode.
- Focused -> measures the time of activities you decided to track

<img src="/docs/20240329_0_relaxed_focused.jpg" />

## Level 1 - The Time Tracker (Focused mode)

Time Tracker is the heart of this application. But it's not an ordinary time tracker. It's heavily based on the OODA loop[^1]. It's designed in a way that is noninterruptive so that you can put your whole power into the activity you're doing.

1. Stop and think. Plan your immediate future. Divide your task into smaller steps. Let's say you want to play the guitar for an hour so you set up 4 steps: theory, warm-up, technique, jamm.
2. Press start, when you're ready.
3. The app will measure the time.
4. Press next when you proceed to the next action.
5. Press finish at the end of the last action.
6. The app will display the summary for all the steps.

<img src="/docs/20240329_1_timer.jpg" />

The benefits: more focus (measuring the time), dividing task into smaller, more focus

## Level 2 - Routines

After you work some time with dividing your action into steps you'll notice you have some things that repeat and you'd like to save that. That's what you use routines for. A routine is simply a saved set of actions.

<img src="/docs/20240329_2_routines.jpg" />

## Level 3 - History

Simple history with CSV export so that you can analyze your progress and compare it with your plan

<img src="/docs/20240329_3_history.jpg" /> 

## Level 4 - Designer

After you work some time with routines and create a bunch of them you'll notice you'd like to add some properties to them like category or expected duration. 

That's when Designer Mode comes into play so that you can create more complex routines or even whole projects.

## Level 5 - Planner 

Arrange your routines in the callendar. 

# Instalation and running 

## Prerequisites
For Android Virtual Device:  
- install android studio
- create a new virtual device (android studio -> virtual device manager -> create new virtual device; preferably choose pixel 4 with google play tools available)

- download and install nodejs (https://nodejs.org/en)
- install pnpm (or use npm if you like) (https://pnpm.io/installation)
- install java 17 on your device 
- add java folder (for example C:\Program Files\java\java-17) to environmental variable as JAVA_HOME
- add java bin folder to PATH

- in project folder create file android/local.properties and put there path to sdk folder on your devide (ex. `sdk.dir=C:\\Users\\USERNAME\\AppData\\Local\\Android\\sdk`)

### Running app

- `pnpm install` (or `npm install`)

Android Virtual Device:
- `npx expo run:android`  
> this will build our app and you'll be able to run it  
press `a` to run it on an android virtual device  
after app builds you'll be able to find an icon with ignite and clicking on it will open our app  

Expo Go:  
- `npx expo start`
- `s` to switch to expo go build if needed
- scan qr with expo go app on your device
- chose expo go build on your device


🔥📱🧠🐰🐣🎨🤕


[^1]: What's an OODA loop? It's a decision-making framework created by Colonel John Boyd, a United States Air Force fighter pilot who later became known for his contributions to military theory. The OODA loop consists of four stages: Observe, Orient, Decide, and Act.

