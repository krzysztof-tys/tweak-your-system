import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [activities, setActivities] = useState([{ id: 1, name: "aaa" }, { id: 2, name: "bbb" }]);

  const addActivity = () => setActivities(produce(activities, draft => { draft.push({ id: uuidv4() }) }))

  const changeActivity = (activity, value) => {
    const nextActivities = produce(activities, draftActivities => {
      const index = draftActivities.indexOf(draftActivity => draftActivity.id == activity.id);
      draftActivities[index].value = value;
    });

    setActivities(nextActivities);
  }

  const renderActivities = () => {
    return activities.map(activity => (<TextInput key={activity.id} onChange={value => changeActivity(activity, value)} value={activity.value} placeholder="type in activity name" />))
  }

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      {renderActivities}
      <Button
        onPress={addActivity}
        title="+"
      />
      <StatusBar style="auto" />
    </View>
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
