import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import OneChatRoom from '../components/OneChatRoom';
export default function Home() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <OneChatRoom />
      <OneChatRoom />
      <OneChatRoom />
      <OneChatRoom />
      <OneChatRoom />
    </View>
  );
}
