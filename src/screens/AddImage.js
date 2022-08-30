import React, {useEffect, useState} from 'react';
import {PermissionsAndroid, ScrollView, StyleSheet, View} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import ButtonOutline from '../components/ButtonOutline';
import TakePhoto from '../components/TakePhoto';
import TitleInput from '../components/TitleInput';

export default function AddImage() {
  const [title, setTitle] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [imageUri, setImageUri] = useState('');
  const [file, setFile] = useState({
    uri: '',
    type: '',
    name: '',
  });

  const options = {
    saveToPhotos: true,
    mediaType: 'photo',
    includeBase64: false,
  };

  const openCamera = async () => {
    const grantedCamera = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    const grantedStorage = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );
    if (
      grantedCamera === PermissionsAndroid.RESULTS.GRANTED &&
      grantedStorage === PermissionsAndroid.RESULTS.GRANTED
    ) {
      const result = await launchCamera(options);
      const {uri, type, fileName} = result.assets[0];
      setImageUri(uri);
      setFile({uri, type, name: fileName});
    }
  };

  const saveHandler = async () => {};

  useEffect(() => {
    if (title && imageUri) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [title, imageUri]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <TitleInput title={title} setTitle={setTitle} />
        <TakePhoto imageUri={imageUri} onOpenCamera={openCamera} />
        <ButtonOutline
          title="Save"
          onPress={saveHandler}
          disabled={buttonDisabled}
        />
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
