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
        width: width - 30,
        // marginLeft: -25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
      }}>
      <Pressable>
        <Text numberOfLines={1} style={{fontWeight: '900', fontSize: 20}}>
          Northwestern chatting room
        </Text>
      </Pressable>

      <Pressable
        onPress={signOut}
        style={{
          position: 'absolute',
          right: -10,
          backgroundColor: 'red',
          borderColor: 'white',
          borderWidth: 1,
          borderRadius: 8,
          padding: 5,
        }}>
        <Text style={{color: 'white'}}>log out</Text>
      </Pressable>
    </View>
  );
};
