import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import ChatRoomScreen from './src/screens/ChatRoomScreen';
import {withAuthenticator} from '@aws-amplify/ui-react-native';
import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';

Amplify.configure(config);
function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <MainNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default withAuthenticator(App);
