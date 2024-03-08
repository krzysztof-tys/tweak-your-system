import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    NativeSyntheticEvent,
    StyleSheet,
    TextInput,
    TextInputChangeEventData,
} from "react-native";
import { produce } from "immer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SetupScreen from "./Screens/SetupScreen";
import SummaryScreen from "./Screens/SummaryScreen";
import TimerScreen from "./Screens/TimerScreen";

type Activity = {
    id: number;
    name?: string;
};

const ScreenName = {
    Setup: "Setup",
    Timer: "Timer",
    Summary: "Summary",
}

const Stack = createNativeStackNavigator();

export default function App() {
    const [activities, setActivities] = useState<Activity[]>([]);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={ScreenName.Setup}>
                     {() => <SetupScreen activities={activities} setActivities={setActivities}/>}
                </Stack.Screen>
                <Stack.Screen name={ScreenName.Timer}>
                    {() => <TimerScreen activities={activities} setActivities={setActivities} />}
                </Stack.Screen>
                <Stack.Screen name={ScreenName.Summary}>
                    {() => <SummaryScreen activities={activities} setActivities={setActivities} /> }
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
