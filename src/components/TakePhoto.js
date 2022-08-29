import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../constants/Colors";
import IconButton from "./IconButton";

export default function TakePhoto() {
  return (
    <View style={styles.takeContainer}>
      <View style={styles.iconContainer}>
        <IconButton
          Icon={MaterialCommunityIcons}
          name="camera-plus-outline"
          size={70}
          color={Colors.primary200}
        />
      </View>
      <Text style={styles.iconText}>Take a photo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignSelf: "center",
  },
  iconText: {
    color: Colors.primary200,
    fontSize: 16,
  },
  takeContainer: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: Colors.gray600,
    borderRadius: 6,
    height: 220,
    justifyContent: "center",
    marginBottom: 12,
    padding: 16,
    width: "100%",
  },
});
