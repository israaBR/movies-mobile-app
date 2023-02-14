import {
  StyleSheet,
  Button,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export const Movie = ({ navigation, title, image, description }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Movie Details", {
          title,
          image,
          description,
        });
      }}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            height: 150,
            width: 100,
            uri: image,
          }}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "30%",
    paddingVertical: "3%",
    // alignItems: "center",
  },
  image: {
    flex: 1,
  },
  title: {
    flex: 1,
    width: 100,
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "monospace",
    color: "#ffffff",
  },
});
