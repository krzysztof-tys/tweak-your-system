import { ParamListBase, useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import { produce } from "immer"
import React, { useState } from "react"
import {
  Button,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native"
import { Activity, RealmType, SCREEN, styles } from "../common"
import { useRealm } from "@realm/react"
import { Realm } from "realm"

type ScreenProps = {
  activities: Activity[]
  setActivities: React.Dispatch<React.SetStateAction<Activity[]>>
}

export const SetupScreen = ({ activities, setActivities }: ScreenProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const [nextId, setNextId] = useState(3)
  const realm = useRealm()

  const addActivity = () => {
    realm.write(() => {
      realm.create(RealmType.Action, { name: "something", _id: new Realm.BSON.ObjectID(nextId) })
    })

    // todo delete when realm working
    setActivities(
      produce(activities, (draft: any) => {
        draft.push({ id: nextId })
      }),
    )
    setNextId(nextId + 1)
  }

  const changeActivity = (
    activity: Activity,
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const nextActivities = produce(activities, (draftActivities: any) => {
      const index = draftActivities.findIndex(
        (draftActivity: any) => draftActivity.id === activity.id,
      )

      draftActivities[index].name = event.nativeEvent.text
    })

    setActivities(nextActivities)
  }

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
    )
  }

  const startTimer = () => {
    navigation.navigate(SCREEN.TimerScreen)
  }

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      {renderActivities()}
      <Button onPress={addActivity} title="+" />
      <Button onPress={startTimer} title=">" />
      <StatusBar style="auto" />
    </View>
  )
}
