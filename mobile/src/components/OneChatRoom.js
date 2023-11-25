import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function OneChatRoom({
  name,
  time,
  imageURL,
  noMessage,
  lastMessage,
}) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: imageURL,
        }}
        style={styles.image}
      />
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{noMessage}</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <Text numberOfLines={1}>{lastMessage}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'relative',
    padding: 10,
    justifyContent: 'center',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badgeContainer: {
    backgroundColor: '#1f7baf',
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 45,
    top: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
  name: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    marginBottom: 3,
  },
  time: {color: 'gray'},
  rightContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
});
