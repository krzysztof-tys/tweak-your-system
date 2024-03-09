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

type RootStackParamList = {
    SetupScreen: undefined;
    TimerScreen: undefined;
    SummaryScreen: undefined;
};

export default function App() {
    const [activities, setActivities] = useState<Activity[]>([]);

    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"SetupScreen"}>
                    {() => (
                        <SetupScreen
                            activities={activities}
                            setActivities={setActivities}
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen name={"TimerScreen"}>
                    {() => (
                        <TimerScreen
                            activities={activities}
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen name={"SummaryScreen"}>
                    {() => (
                        <SummaryScreen
                            activities={activities}
                            setActivities={setActivities}
                        />
                    )}
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
