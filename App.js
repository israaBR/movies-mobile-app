import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Home } from "./components/home";
import { Movie } from "./components/movie";
import { MovieDetails } from "./components/movieDetails";

export default function App() {
  return (
    <View style={styles.container}>
      <Home></Home>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
