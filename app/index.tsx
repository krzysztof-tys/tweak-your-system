import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  const openCreateNewProject = () => {};

  return (
    <View style={styles.container}>
      <Text>start working on your app!</Text>
      <Link href={"/createProject"} asChild>
        <Button onPress={openCreateNewProject} title={"Create new project"} />
      </Link>
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
