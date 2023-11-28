import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import Message from '../components/Message.jsx';
import Chats from '../assets/dummy-data/Chats';
import MessageInput from '../components/MessageInput.js';
export default function ChatRoomScreen() {
  const myid = Chats.users[1].id;
  console.log(Chats.messages);
  return (
    <>
      <FlatList
        data={Chats.messages}
        renderItem={({item}) => {
          return (
            <Message content={item.content} myMessage={myid == item.user.id} />
          );
        }}
        style={styles.container}
        inverted
      />
      <MessageInput />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
});
