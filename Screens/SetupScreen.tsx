import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { produce } from "immer";
import { useState } from "react";
import {
    Button,
    NativeSyntheticEvent,
    StyleSheet,
    Text,
    TextInput,
    TextInputChangeEventData,
    View,
} from "react-native";
import { Activity, SCREEN } from "../types";

type ScreenProps = {
    activities: Activity[];
    setActivities: React.Dispatch<React.SetStateAction<Activity[]>>;
};

const SetupScreen = ({ activities, setActivities }: ScreenProps) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [nextId, setNextId] = useState(3);

    const addActivity = () => {
        setActivities(
            produce(activities, (draft) => {
                draft.push({ id: nextId });
            })
        );
        setNextId(nextId + 1);
    };

    const changeActivity = (activity: Activity, event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        const nextActivities = produce(activities, (draftActivities) => {
            const index = draftActivities.findIndex((draftActivity) => draftActivity.id === activity.id);

            draftActivities[index].name = event.nativeEvent.text;
        });

        setActivities(nextActivities);
    };

    const renderActivities = () => {
        return (
            <>
                {activities.map((activity) => (
                    <TextInput
                        key={activity.id}
                        onChange={(event) => changeActivity(activity, event)}
                        value={activity.name}
                        placeholder="type in activity name"
                    />
                ))}
            </>
        );
    };

    const startTimer = () => {
        navigation.navigate(SCREEN.TimerScreen);
    };

    return (
        <View style={styles.container}>
            <Text>Hello</Text>
            {renderActivities()}
            <Button onPress={addActivity} title="+" />
            <Button onPress={startTimer} title=">" />
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default SetupScreen;
