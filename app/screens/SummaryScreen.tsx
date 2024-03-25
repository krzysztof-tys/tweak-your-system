import React from "react"
import { Text, View } from "react-native"
import { type TRecord, styles } from "../common"
import { formatTime } from "../utils/time"

type SummaryProps = {
  records: TRecord[]
}

type EnsuredRecord = NonNullable<TRecord> & {
  startDate: number
  endDate: number
}

export const SummaryScreen = ({ records }: SummaryProps) => {
  const validateRecord = (record: TRecord): EnsuredRecord => {
    if (
      record.startDate === null ||
      record.endDate === null ||
      record.startDate === undefined ||
      record.endDate === undefined
    ) {
      console.log(JSON.stringify(records))
      throw Error("Summary record is missing data.")
    }

    return {
      activity: record.activity,
      startDate: record.startDate,
      endDate: record.endDate,
    }
  }

  return (
    <View style={styles.container}>
      {records.map((record) => {
        const ensuredRecord = validateRecord(record)

        return (
          <Text key={record.activity.id}>
            {record.activity.name} -{" "}
            {formatTime(new Date(ensuredRecord.endDate - ensuredRecord.startDate))}
          </Text>
        )
      })}
    </View>
  )
}

export default SummaryScreen
