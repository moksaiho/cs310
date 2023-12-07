import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function Message({myMessage, content, item, image}) {
  return !myMessage ? (
    <View style={styles.container}>
      {image && (
        <View style={{marginBottom: content ? 10 : 0}}>
          <Image
            source={{uri: image}}
            // style={{width: '65%',height}}
            style={{width: 100, height: 100}}
            resizeMode="contain"
          />
        </View>
      )}
      {content && <Text style={styles.text}>{content}</Text>}
    </View>
  ) : (
    <View
      style={[
        styles.container,
        {alignSelf: 'flex-end', backgroundColor: 'lightgrey'},
      ]}>
      {image && (
        <View style={{marginBottom: content ? 10 : 0}}>
          <Image
            source={{uri: image}}
            // style={{width: '65%'}}
            style={{width: 100, height: 100}}
            resizeMode="contain"
          />
        </View>
      )}
      {content && (
        <Text style={[styles.text, {color: 'black'}]}>{content}</Text>
      )}
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
