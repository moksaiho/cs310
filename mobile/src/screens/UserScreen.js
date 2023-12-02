import {View, Text, StyleSheet, Image, FlatList, Pressable} from 'react-native';
import React from 'react';
import OneChatRoom from '../components/OneChatRoom';
import {useState, useEffect} from 'react';
import data from '../assets/dummy-data/Users';
import AWS from 'aws-sdk';
import {DataStore} from '@aws-amplify/datastore';
import {User} from '../models';
import {signOut} from 'aws-amplify/auth';
import OneUser from '../components/OneUser';
import config from '../aws-exports';
// AWS.config.update({ region: 'us-east-2' });
export default function UserScreen() {
  const [users, setUsers] = useState([]);
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const params = {
    TableName: 'User-jhipe2ueijfhlkdozgsfg2x4za-staging',
    // Other parameters
  };
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log('start fetching');
        console.log(User);
        const fetchedUsers = DataStore.query(User).then(
          data => {
            setUsers(data);
            console.log('get data', data);
          },
          err => {
            console.log(err, 'error happened');
          },
        );
        // const data = await dynamoDb.scan(params).promise();
        // setUsers(data.Items);
        console.log('fetched user is', fetchedUsers);
        // setUsers(fetchedUsers);
      } catch (e) {
        console.log('error message', e);
        alert(e);
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
