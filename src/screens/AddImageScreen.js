import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import ButtonOutline from '../components/ButtonOutline';
import TakePhoto from '../components/TakePhoto';
import TitleInput from '../components/TitleInput';
import {Colors} from '../constants/Colors';
import uploadFile from '../utils/uploadFile';

export default function AddImage({navigation}) {
  const [title, setTitle] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [imageUri, setImageUri] = useState('');
  const [imageFile, setImageFile] = useState({});
  const [transferred, setTransferred] = useState(0);
  const [uploading, setUploading] = useState(false);

  const options = {
    saveToPhotos: true,
    mediaType: 'photo',
    includeBase64: false,
    quality: 0.5,
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
      const image = result.assets[0];
      setImageUri(image.uri);
      setImageFile({...image});
    }
  };

  const saveHandler = async () => {
    setUploading(true);
    await uploadFile({...imageFile, setTransferred});
    setUploading(false);
    navigation.navigate('Home');
  };

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
        {uploading ? (
          <View>
            <ActivityIndicator size="large" color={Colors.primary200} />
            <Text style={styles.uploadProgressText}>
              {transferred} % Completed!
            </Text>
          </View>
        ) : (
          <ButtonOutline
            title="Save"
            onPress={saveHandler}
            disabled={buttonDisabled}
          />
        )}
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
  uploadProgressText: {
    fontSize: 16,
    color: Colors.primary200,
    marginVertical: 12,
    textAlign: 'center',
  },
});
