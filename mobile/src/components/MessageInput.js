import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import {request, requestURL} from '../query/request';
import {useState} from 'react';
import React from 'react';

export default function MessageInput({currentid}) {
  const [text, changeText] = useState('');
  const sendMessage = async () => {
    // console.log('sending ', message);
    try {
      await request(requestURL.messages, {userid: currentid, content: text});
    } catch (_) {
      console.log(_);
      alert(_);
    }
    changeText('');
  };
  const handlePlus = () => {
    console.log('on plus clicked');
  };

  const handleSend = () => {
    if (text) {
      sendMessage();
    } else {
      handlePlus();
    }
  };
  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <Icon name="smileo" size={25} color="gray" />
        <TextInput
          style={styles.input}
          onChangeText={changeText}
          value={text}
          placeholder="Signal message..."
        />
        <Icon name="camerao" size={25} color="gray" style={styles.icon} />
        <SimpleLineIcon name="microphone" size={25} color="gray" />
      </View>
      <Pressable style={styles.buttonContainer} onPress={handleSend}>
        {text ? (
          <FontIcon name="send-o" size={20} color="white" />
        ) : (
          <Text style={styles.buttonText}>+</Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#dedede',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#3777f0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
  },
  input: {
    marginHorizontal: 5,
    flex: 1,
  },
  icon: {
    marginHorizontal: 5,
  },
});
