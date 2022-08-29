/* eslint-disable react-native/split-platform-components */
import React, { useState } from "react";
import { PermissionsAndroid, ScrollView, StyleSheet, View } from "react-native";
import { launchCamera } from 'react-native-image-picker';
import ButtonOutline from "../components/ButtonOutline";
import TakePhoto from "../components/TakePhoto";
import TitleInput from "../components/TitleInput";

export default function AddImage() {
  const [imageUri, setImageUri] = useState('');

  const options =   {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
  }

  const openCamera = async () => {
    const grantedCamera = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
    const grantedStorage = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
    if(grantedCamera === PermissionsAndroid.RESULTS.GRANTED && grantedStorage === PermissionsAndroid.RESULTS.GRANTED){
      const result = await launchCamera(options);
      setImageUri(result.assets[0].uri)
    }
  }

  const saveHandler = () => {};
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <TitleInput />
        <TakePhoto imageUri={imageUri} onOpenCamera={openCamera} />
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
