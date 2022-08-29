import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function ImageItem({imageUri, title}) {
  return (
    <View>
      <Image source={imageUri} style={styles.image} />
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
  }
})