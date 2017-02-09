import React from 'react';
import { StatusBar, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Welcome from '../screens/welcome'

const routes = {
  Welcome: {screen: Welcome},
};

const config = {
  navigationOptions: {
    header: {
      style: {
        backgroundColor: '#ed3e44',
      },
      tintColor: 'white',
    },
  },
};

const Navigator = StackNavigator(routes, config);

const App = () => (
  <View style={{flex: 1}}>
    <StatusBar barStyle='light-content' />
    <Navigator />
  </View>
);

export default App;
