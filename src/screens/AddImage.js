import React from "react";
import { StyleSheet, View } from "react-native";
import TakePhoto from "../components/TakePhoto";
import TitleInput from "../components/TitleInput";

export default function AddImage() {
  return (
    <View style={styles.container}>
      <TakePhoto />
      <TitleInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 24,
    paddingHorizontal: 24,
  },
});
