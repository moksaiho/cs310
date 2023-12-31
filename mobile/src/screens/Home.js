import {View, Text, StyleSheet, Image, FlatList, Pressable} from 'react-native';
import React from 'react';
import OneChatRoom from '../components/OneChatRoom';
import data from '../assets/dummy-data/ChatRooms';
import {signOut} from 'aws-amplify/auth';
export default function Home() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <OneChatRoom // can use flatlist to dynamically load
              //   key={item.id}
              name={item.users[1].name}
              time={item.lastMessage.createdAt}
              imageURL={item.users[1].imageUri}
              noMessage={4}
              lastMessage={item.lastMessage.content}
            />
          );
        }}
      />
      <Pressable onPress={signOut}>
        <Text>log out</Text>
      </Pressable>
    </View>
  );
}
