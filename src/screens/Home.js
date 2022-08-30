import React from 'react';
import {StyleSheet, View} from 'react-native';
import ImageList from '../components/ImageList';

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
