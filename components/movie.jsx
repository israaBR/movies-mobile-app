import { StyleSheet, Button, Image, Text, View } from "react-native";

export const Movie = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          height: 150,
          width: 100,
          uri: props.image,
        }}
      />
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "30%",
    paddingVertical: "5%",
  },
  image: {
    flex: 1,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "monospace",
    color: "#ffffff",
  },
});
