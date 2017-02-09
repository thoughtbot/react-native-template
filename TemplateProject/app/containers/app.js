import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Welcome from '../screens/welcome'
import styles, { ralph } from '../styles';

const routes = {
  Welcome: {screen: Welcome},
};

const config = {
  navigationOptions: {
    header: {
      style: {
        backgroundColor: ralph.primaryColor,
      },
      tintColor: ralph.backgroundColor,
    },
  },
};

const Navigator = StackNavigator(routes, config);

const App = () => (
  <View style={styles.app}>
    <StatusBar barStyle='light-content' />
    <Navigator />
  </View>
);

export default App;
