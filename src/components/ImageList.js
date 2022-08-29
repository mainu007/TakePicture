import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import ImageItem from "./ImageItem";

export default function ImageList({ data }) {
  if (!data) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No image added yet - start adding some!
        </Text>
      </View>
    );
  }

  return (
    <ScrollView>
      {data.map(({ imageUri, title }) => (
        <ImageItem imageUri={imageUri} title={title} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fallbackContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  fallbackText: {
    color: Colors.primary200,
    fontSize: 16,
  },
});
