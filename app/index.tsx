import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

interface Project {}

export default function App() {
  const [projects, setProjects] = useState<Project>([]);

  const createNewProject = () => {};

  return (
    <View style={styles.container}>
      <Text>start working on your app!</Text>
      <Button onPress={createNewProject} title={"Create new project"} />
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
