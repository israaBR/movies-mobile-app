import { StyleSheet, Button, Image, Text, View } from "react-native";

export const MovieDetails = (props) => {
  return (
    <View style={StyleSheet.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Breaking_Dawn_Part_1_Poster.jpg/220px-Breaking_Dawn_Part_1_Poster.jpg",
        }}
      />
      <View style={styles.body}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
      <View style={styles.button}>
        <Button title="Watch Now" color={"#ff9409"}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 7,
    paddingHorizontal: "1%",
    paddingVertical: "5%",
    height: "auto",
    borderRadius: 5,
  },
  body: {
    flex: 3,
    backgroundColor: "#02091e",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingHorizontal: "4%",
    paddingVertical: "3%",
  },
  title: {
    flex: 2,
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "monospace",
    color: "#ffffff",
    alignContent: "center",
  },
  description: {
    flex: 3,
    fontSize: 16,
    fontFamily: "monospace",

    color: "#fff",
  },
  button: {
    flex: 1,
    color: "#ff9409",
  },
});
