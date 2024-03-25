/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { observer } from "mobx-react-lite"
import React from "react"
import { useColorScheme } from "react-native"
import Config from "../config"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import { colors } from "app/theme"
import { SetupScreen, TimerScreen, SummaryScreen } from "../screens"
import { Activity, type TRecord, type RootStackParamList, SCREEN, Action, Record } from "app/common"
import { RealmProvider } from "@realm/react"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  Welcome: undefined
  // 🔥 Your screens go here
  // IGNITE_GENERATOR_ANCHOR_APP_STACK_PARAM_LIST
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<RootStackParamList>()

const AppStack = observer(function AppStack() {
  const [activities, setActivities] = React.useState<Activity[]>([])
  const [records, setRecords] = React.useState<TRecord[]>([])

  return (
    <React.Fragment>
      <Stack.Navigator
        screenOptions={{ headerShown: false, navigationBarColor: colors.background }}
      >
        <Stack.Screen name={SCREEN.SetupScreen}>
          {() => <SetupScreen activities={activities} setActivities={setActivities} />}
        </Stack.Screen>
        <Stack.Screen name={SCREEN.TimerScreen}>
          {() => <TimerScreen activities={activities} records={records} setRecords={setRecords} />}
        </Stack.Screen>
        <Stack.Screen name={SCREEN.SummaryScreen}>
          {() => <SummaryScreen records={records} />}
        </Stack.Screen>
      </Stack.Navigator>
    </React.Fragment>
  )
})

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <RealmProvider schema={[Action, Record]}>
      <NavigationContainer
        ref={navigationRef}
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        {...props}
      >
        <AppStack />
      </NavigationContainer>
    </RealmProvider>
  )
})
