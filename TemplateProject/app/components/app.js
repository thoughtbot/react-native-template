import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Counter, Welcome } from '../screens';
import styles, { ralph } from '../styles';

const stackConfig = {
  navigationOptions: {
    header: {
      style: {
        backgroundColor: ralph.primaryColor,
      },
      tintColor: ralph.backgroundColor,
    },
  },
};

const tabConfig = {
  tabBarOptions: {
    activeTintColor: ralph.primaryColor,
  },
};

const WelcomeNavigator = StackNavigator({
  Welcome: {screen: Welcome},
}, stackConfig);

const CounterNavigator = StackNavigator({
  Counter: {screen: Counter},
}, stackConfig);

const AppNavigator = TabNavigator({
  Welcome: {screen: WelcomeNavigator},
  Counter: {screen: CounterNavigator},
}, tabConfig);

const App = () => (
  <View style={styles.app}>
    <StatusBar barStyle='light-content' />
    <AppNavigator />
  </View>
);

export default App;
