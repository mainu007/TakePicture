import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../constants/Colors';

export default function ButtonOutline({title, onPress}) {
  return (
    <Pressable style={({pressed})=>[styles.container, pressed && styles.pressed]} onPress={onPress}>
      <AntDesign name="save" size={24} color={Colors.primary700} />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: Colors.primary700,
    borderRadius: 4,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: "center",
  },
  pressed: {
    backgroundColor: Colors.gray800,
  },
  text: {
    color: Colors.primary700,
    fontSize: 16,
    marginLeft:4,
    paddingVertical: 8,
    textAlign: "center"
  }
});
