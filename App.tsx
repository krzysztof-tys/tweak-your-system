import { StatusBar } from 'expo-status-bar';
import { createRef, useState } from 'react';
import {
    Button,
    NativeSyntheticEvent,
    StyleSheet,
    TextInput,
    TextInputChangeEventData,
} from 'react-native';
import { produce } from 'immer';
import {
    createNavigationContainerRef,
    NavigationContainer,
    NavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SetupScreen from './Screens/SetupScreen';
import SummaryScreen from './Screens/SummaryScreen';
import TimerScreen from './Screens/TimerScreen';
import { Activity, Record, RootStackParamList, SCREEN } from './Common/types';

export default function App() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [records, setRecords] = useState<Record[]>([]);

    const Stack = createNativeStackNavigator<RootStackParamList>();

    // created for test purposes
    const navigationRef = createNavigationContainerRef<RootStackParamList>();

    // created for test purposes
    const navigate = (name: keyof RootStackParamList, params?: any) => {
        if (navigationRef.isReady()) {
            navigationRef.navigate(name);
        }
    };

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                <Stack.Screen name={SCREEN.SetupScreen}>
                    {() => (
                        <SetupScreen
                            activities={activities}
                            setActivities={setActivities}
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen name={SCREEN.TimerScreen}>
                    {() => (
                        <TimerScreen
                            activities={activities}
                            records={records}
                            setRecords={setRecords}
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen name={SCREEN.SummaryScreen}>
                    {() => <SummaryScreen records={records} />}
                </Stack.Screen>
            </Stack.Navigator>
            <Button
                onPress={() => navigate(SCREEN.SummaryScreen)}
                title="test"
            />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
