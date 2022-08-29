import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ButtonOutline from "../components/ButtonOutline";
import TakePhoto from "../components/TakePhoto";
import TitleInput from "../components/TitleInput";

export default function AddImage() {
  const saveHandler = () => {
    
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <TitleInput />
        <TakePhoto />
        <ButtonOutline title="Save" onPress={saveHandler} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  innerContainer: {
    marginVertical: 24,
  },
});
