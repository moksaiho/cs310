import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import Message from '../components/Message.jsx';
import Chats from '../assets/dummy-data/Chats';
import MessageInput from '../components/MessageInput.js';
import {request, requestURL} from '../query/request.js';
import {useState, useEffect} from 'react';
import {getCurrentUser} from 'aws-amplify/auth';
import {KeyboardAvoidingView} from 'react-native';
import {Pressable} from 'react-native';
export default function ChatRoomScreen() {
  const [chat, setChat] = useState([]);
  const [currentid, setCurrentId] = useState('');
  const [emojiOpen, setEmojiOpen] = useState(false);
  useEffect(() => {
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

      <MessageInput currentid={currentid} />
    </>
    // </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
});
