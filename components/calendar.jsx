import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Platform,
  ScrollView,
} from "react-native";
import * as Calendar from "expo-calendar";

export const CalendarComponent = ({ navigation }) => {
  let [calendars, setCalendars] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        const calendars = await Calendar.getCalendarsAsync(
          Calendar.EntityTypes.EVENT
        );
      }
    })();
  }, []);
  async function getDefaultCalendarSource() {
    const defaultCalendar = await Calendar.getDefaultCalendarAsync();
    return defaultCalendar.source;
  }

  async function createNewCalendar() {
    const defaultCalendarSource =
      Platform.OS === "ios"
        ? await getDefaultCalendarSource()
        : { isLocalAccount: true, name: "Expo Calendar" };
    const newCalendarID = await Calendar.createCalendarAsync({
      title: "Expo Calendar",
      color: "blue",
      entityType: Calendar.EntityTypes.EVENT,
      sourceId: defaultCalendarSource.id,
      source: defaultCalendarSource,
      name: "internalCalendarName",
      ownerAccount: "personal",
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });
    setCalendars([...calendars, newCalendarID]);
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        {calendars.map((calendar, index) => (
          <Text key={index}>Calendar: {calendar}</Text>
        ))}
        <Button title="New Calendar" onPress={createNewCalendar} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
