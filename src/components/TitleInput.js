import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function TitleInput() {
  return (
    <View style={styles.container}>
      <TextInput placeholder='Please enter title' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {}
});
