import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {request, requestURL} from '../query/request';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useState} from 'react';
import React from 'react';
import EmojiSelector, {Categories} from 'react-native-emoji-selector';
import {KeyboardAvoidingView} from 'react-native';
import {v4 as uuidv4} from 'uuid';

import RNFS from 'react-native-fs';
export default function MessageInput({currentid, socket}) {
  // console.log('launchImageLibrary is ', launchImageLibrary);
  const [text, changeText] = useState('');
  const [image, setSelectedImage] = useState('');
  const resetField = () => {
    setSelectedImage('');
    changeText('');
  };

  const sendImage = async () => {
    if (!image) {
      return;
    }

    // send message
    try {
      const base64Image = await RNFS.readFile(image, 'base64');

      const resFromS3 = await request(requestURL.uploadImage, {
        name: uuidv4(),
        image: base64Image,
      });
      // console.log(resFromS3);
      // is {"data": {"Bucket": "photoapp-rivermu-cs310", "ETag": "\"01375385c01b78bc0be9942f4dbdd029\"", "Key": "River310App/1701905143906.jpg",
      //  "Location": "https://photoapp-rivermu-cs310.s3.us-east-2.amazonaws.com/River310App/1701905143906.jpg",
      //   "ServerSideEncryption": "AES256", "key": "River310App/1701905143906.jpg"}, "msg": "File uploaded successfully"}
      console.log('return', resFromS3?.data?.Location);
      return resFromS3?.data?.Location;
    } catch (_) {
      console.log(_);
      alert('upload image to S3 bucket failed!');
    }
  };
  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options).then(async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };
  const sendMessage = async () => {
    console.log('sending ', text);

    try {
      const location = await sendImage();
      console.log('location is ', location);
      // await request(requestURL.messages, );
      socket.emit('message', {
        userid: currentid,
        content: text,
        image: location,
      });
    } catch (_) {
      console.log(_);
      alert(_);
    }

    resetField();
  };
  const handlePlus = () => {
    console.log('on plus clicked');
  };

  const handleSend = () => {
    if (text || image) {
      sendMessage();
    } else {
      handlePlus();
    }
  };

  const getImageBlob = async () => {
    if (!image) return null;
  };
  return (
    <>
      {image && (
        <View style={styles.sendImageContainer}>
          <Image
            source={{uri: image}}
            style={{width: 100, height: 100, borderRadius: 10}}
          />

          <Pressable onPress={() => setSelectedImage(null)}>
            <AntDesign
              name="close"
              size={24}
              color="black"
              style={{margin: 5}}
            />
          </Pressable>
        </View>
      )}
      <View style={styles.root}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={changeText}
            value={text}
            placeholder="message..."
          />
          <Pressable onPress={openImagePicker}>
            <FontIcon name="photo" size={25} color="gray" style={styles.icon} />
          </Pressable>
          <SimpleLineIcon name="microphone" size={25} color="gray" />
        </View>
        <Pressable style={styles.buttonContainer} onPress={handleSend}>
          {text || image ? (
            <FontIcon name="send-o" size={20} color="white" />
          ) : (
            <Text style={styles.buttonText}>+</Text>
          )}
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 10,
    minHeight: 120,

    justifyContent: 'center',
    alignItems: 'flex-start',
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
  sendImageContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
  },
});
