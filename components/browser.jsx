import { StyleSheet, Button, View } from "react-native";
import { openBrowserAsync } from "expo-web-browser";

export const Browser = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="Go to google"
          onPress={() => openBrowserAsync("https://www.google.com")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
