import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../constants/Colors';

export default function ImageItem({imageUri, title}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={{uri: imageUri}}
        style={styles.imageContainer}
      >
        {/* <Image source={{uri: imageUri}} style={styles.image} /> */}
        <Text style={styles.titleText}>{title}</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '47%',
    height: 170,
    marginBottom: 16,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  titleText: {
    color: Colors.primary50,
    textAlign: 'center',
    backgroundColor: Colors.grayTran600,
  },
});
