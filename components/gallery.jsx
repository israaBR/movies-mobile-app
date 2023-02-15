import { StyleSheet, Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export const Gallery = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick image from gallery" onPress={pickImage} />
      {selectedImage && (
        <Image style={styles.image} source={{ uri: selectedImage }} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: { width: 350, height: 350, borderRadius: 10, padding: 10 },
});
