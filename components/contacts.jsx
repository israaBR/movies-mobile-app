import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import * as Contacts from "expo-contacts";

export const ContactsComponent = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });
        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {contacts.map((contact, index) => {
          return (
            <View key={index} style={styles.contactItem}>
              <Text style={styles.text}> {contact.name}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  contactItem: {
    flex: 1,
    paddingVertical: "2%",
    paddingHorizontal: "3%",
  },
  text: {
    fontSize: 16,
    color: "green",
  },
});
