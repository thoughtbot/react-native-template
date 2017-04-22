import React from 'react';
import { StatusBar, View } from 'react-native';
import { AppNavigator } from '../routes';
import styles from '../styles';

const App = () => (
  <View style={styles.app}>
    <StatusBar barStyle='light-content' />
    <AppNavigator />
  </View>
);

export default App;
