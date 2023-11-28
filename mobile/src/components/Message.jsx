import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Message({myMessage, content}) {
  console.log(myMessage, content);
  return myMessage ? (
    <View style={styles.container}>
      <Text style={styles.text}>{content}</Text>
    </View>
  ) : (
    <View
      style={[
        styles.container,
        {alignSelf: 'flex-end', backgroundColor: 'lightgrey'},
      ]}>
      <Text style={[styles.text, {color: 'black'}]}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3777f0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 10,
    borderRadius: 10,
    maxWidth: '70%',
    // flex: 0,
    alignSelf: 'flex-start',
  },
  text: {
    color: 'white',
  },
});
