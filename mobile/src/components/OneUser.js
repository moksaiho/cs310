import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';

export default function OneUser({
  name,

  imageURL,
}) {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        // navigation.navigate('Chatroom');
      }}>
      <Image
        source={{
          uri: imageURL,
        }}
        style={styles.image}
      />

      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    // backgroundColor: 'red',
    // justifyContent: '',
    alignItems: 'center',
  },
  image: {
    marginLeft: 30,
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 10,
  },

  name: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    marginBottom: 3,
  },
});
