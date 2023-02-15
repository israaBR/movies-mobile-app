import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useState } from "react";

export const CameraComponent = ({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    return <View />;
  }
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.alert}>
          Permission is required to access camera
        </Text>
        <Button onPress={requestPermission} title="allow access" />
      </View>
    );
  }
  function switchCamera() {
    setType((type) =>
      type === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.button}>
          <TouchableOpacity style={styles.button} onPress={switchCamera}>
            <Text style={styles.text}>Switch Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  alert: {
    textAlign: "center",
    paddingVertical: "10%",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
