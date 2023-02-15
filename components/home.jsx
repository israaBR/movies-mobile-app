import { StyleSheet, Button, View } from "react-native";

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          color="black"
          title="Movies List"
          onPress={() => {
            navigation.navigate("Movies List");
          }}
        ></Button>
      </View>
      <View style={styles.button}>
        <Button
          color="black"
          title="Contacts"
          onPress={() => {
            navigation.navigate("Contacts");
          }}
        ></Button>
      </View>
      <View style={styles.button}>
        <Button
          color="black"
          title="Calendar"
          onPress={() => {
            navigation.navigate("Calendar");
          }}
        ></Button>
      </View>
      <View style={styles.button}>
        <Button
          color="black"
          title="Browser"
          onPress={() => {
            navigation.navigate("Browser");
          }}
        ></Button>
      </View>
      <View style={styles.button}>
        <Button
          color="black"
          title="Gallery"
          onPress={() => {
            navigation.navigate("Gallery");
          }}
        ></Button>
      </View>
      <View style={styles.button}>
        <Button
          color="black"
          title="Camera"
          onPress={() => {
            navigation.navigate("Camera");
          }}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: "20%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: "25%",
    paddingVertical: "5%",
    backgroundColor: "black",
    borderRadius: 10,
  },
});
