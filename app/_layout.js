import { Slot } from 'expo-router';
import {Text} from "react-native";

export default function HomeLayout() {
    return (
        <>
            <Text>header</Text>
            <Slot/>
            <Text>footer</Text>
        </>
    );
}
