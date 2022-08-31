import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../constants/Colors';
import ImageItem from './ImageItem';

export default function ImageList({data}) {
  if (!data) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No image added yet - start adding some!
        </Text>
      </View>
    );
  }
  console.log('mr🎉', data);
  return (
    <FlatList
      data={data}
      numColumns={2}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      keyExtractor={({id}) => id}
      renderItem={({item}) => (
        <ImageItem imageUri={item.imageUri} title={item.title} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  fallbackContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  fallbackText: {
    color: Colors.primary200,
    fontSize: 16,
  },
});
