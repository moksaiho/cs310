import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import Message from '../components/Message.jsx';
import io from 'socket.io-client';

import MessageInput from '../components/MessageInput.js';
import {request, requestURL} from '../query/request.js';
import {useState, useEffect} from 'react';
import {getCurrentUser} from 'aws-amplify/auth';
import {KeyboardAvoidingView} from 'react-native';
import {Pressable} from 'react-native';
export default function ChatRoomScreen() {
  const socket = io('http://10.0.2.2:3000/');

  const [chat, setChat] = useState([]);
  const [currentid, setCurrentId] = useState('');

  useEffect(() => {
    // socket.on('message', data => {
    //   console.log(data);
    // });
    // socket.emit('message', {text: 'Hello, server!'});

    const fetchAllmessages = async () => {
      try {
        const {data} = await request(requestURL.messages, [], {
          method: 'get',
        });
        setChat(data);
      } catch (_) {
        console.log(_);
      }
    };
    fetchAllmessages();
    getCurrentUser().then(({userId}) => {
      setCurrentId(userId);
    });
    socket.on('message', data => {
      console.log('socket io get data', data, chat);
      setChat(chat => [data, ...chat]);
      // setChat([data, ...chat]);
    });
    return () => {
      socket.off('message');
    };
  }, []);

  return (
    // <Pressable onPress={setEmojiOpen.bind(null, false)}>
    <>
      <FlatList
        data={chat}
        style={{flex: 1, maxHeight: '90%'}}
        renderItem={({item}) => {
          return (
            <Message
              item={item}
              content={item.content}
              myMessage={currentid == item.userid}
            />
          );
        }}
        inverted
      />

      <MessageInput currentid={currentid} socket={socket} />
    </>
    // </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
});
