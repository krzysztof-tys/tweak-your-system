import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export interface Project {
  name: string;
  timeframe: string;
  resources: string;
  progress: string;
  commitment: string;
  actions: string;
}

export default function App() {
  const [projects, setProjects] = useState<Project>([]);

  const openCreateNewProject = () => {};

  return (
    <View style={styles.container}>
      <Text>start working on your app!</Text>
      <Button onPress={openCreateNewProject} title={"Create new project"} />
      <Text>hot reload</Text>
      <StatusBar style="auto" />
    </View>
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
