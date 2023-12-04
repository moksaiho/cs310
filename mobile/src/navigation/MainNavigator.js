import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import {signOut} from 'aws-amplify/auth';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import UserScreen from '../screens/UserScreen';
import {useNavigation} from '@react-navigation/core';
const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{headerTitle: HomeHeader, headerStyle: null}}
      /> */}
      <Stack.Screen
        name="Chatroom"
        component={ChatRoomScreen}
        options={{headerTitle: ChatroomHeader, headerBackTitleVisible: false}}
      />
      <Stack.Screen name="Users" component={UserScreen} />
    </Stack.Navigator>
  );
}

const HomeHeader = props => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        marginLeft: -10,
        width: '100%',
        position: 'relative',
      }}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
        }}
        style={{
          width: 30,
          height: 30,
          borderRadius: 30,
        }}
      />
      <View
        style={{
          flex: 1,
        }}>
        <Text
          style={{
            position: 'absolute',
            left: '50%',

            transform: [{translateX: 0}, {translateY: 5}],
          }}>
          Signal
        </Text>
      </View>
      <Icon name="camerao" size={25} color="gray" style={{marginRight: 20}} />
      <Pressable
        onPress={() => {
          // console.log("let's navigate");
          navigation.navigate('Users');
        }}>
        <FeatherIcon
          name="edit-2"
          size={24}
          color="black"
          style={{marginHorizontal: 10}}
        />
      </Pressable>
    </View>
  );
};

const ChatroomHeader = props => {
  const {width} = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width - 55,
        // marginLeft: -25,
        padding: 10,
        alignItems: 'center',
        // backgroundColor: 'red',
      }}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
        }}
        style={{width: 30, height: 30, borderRadius: 30}}
      />

      <Pressable style={{flex: 1, marginLeft: 10}}>
        <Text numberOfLines={1} style={{fontWeight: 'bold'}}>
          Northwestern online chatting room
        </Text>
      </Pressable>

      {/* <FeatherIcon
        name="camera"
        size={24}
        color="black"
        style={{marginHorizontal: 10}}
      />

      <FeatherIcon
        name="edit-2"
        size={24}
        color="black"
        style={{marginHorizontal: 10}}
      /> */}
      <Pressable onPress={signOut}>
        <Text>log out</Text>
      </Pressable>
    </View>
  );
};
