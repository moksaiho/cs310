import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import Message from '../components/Message.jsx';
import Chats from '../assets/dummy-data/Chats';
import MessageInput from '../components/MessageInput.js';
import {request, requestURL} from '../query/request.js';
import {useState, useEffect} from 'react';
import {getCurrentUser} from 'aws-amplify/auth';
export default function ChatRoomScreen() {
  const [chat, setChat] = useState([]);
  const [currentid, setCurrentId] = useState('');
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
    <>
      <FlatList
        data={chat}
        renderItem={({item}) => {
          console.log(currentid, item.userid);
          return (
            <Message
              item={item}
              content={item.content}
              myMessage={currentid == item.userid}
            />
          );
        }}
        style={styles.container}
        inverted
      />
      <MessageInput currentid={currentid} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
});
