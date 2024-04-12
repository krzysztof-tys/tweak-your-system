import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const CreateProject = () => {
  const createProject = () => {};

  return (
    <View style={styles.container}>
      <Text>Name:</Text>
      <TextInput style={styles.input} />
      <Text>Time frame:</Text>
      <TextInput style={styles.input} />
      <Text>Resources</Text>
      <TextInput style={styles.input} />
      <Text>Progress metrics:</Text>
      <Text>---</Text>
      <TextInput style={styles.input} />
      <Text>Commitment</Text>
      <TextInput style={styles.input} />
      <Text>---</Text>
      <Button title={"create"} onPress={createProject} />
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
  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});

export default CreateProject;
