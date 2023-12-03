import {View, Text, StyleSheet, Image, FlatList, Pressable} from 'react-native';
import React from 'react';

import {useState, useEffect} from 'react';
import {request, requestURL} from '../query/request';
import {DataStore} from '@aws-amplify/datastore';
import {User} from '../models';
import {signOut} from 'aws-amplify/auth';
import OneUser from '../components/OneUser';
import config from '../aws-exports';
// AWS.config.update({ region: 'us-east-2' });
export default function UserScreen() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const {data} = await request(requestURL.getUsers, [], {method: 'GET'});
        console.log(data);
        setUsers(data);
      } catch (_) {
        console.log(_);
      }
    };
    fetchUsers();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={users}
        renderItem={({item}) => {
          return (
            <OneUser // can use flatlist to dynamically load
              //   key={item.id}
              name={item.username}
              imageURL={item.imageUri}
            />
          );
        }}
      />
      <Pressable onPress={signOut}>
        <Text>log in?</Text>
      </Pressable>
    </View>
  );
}
