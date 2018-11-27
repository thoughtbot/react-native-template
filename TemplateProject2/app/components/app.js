import React, { Component } from "react";
import { StatusBar, StyleSheet, View, Text } from "react-native";
import AppNavigator from "../routes";
import { createAppContainer, createStackNavigator } from "react-navigation";
import styles from "../styles";
import { Counter, Welcome } from "../screens";

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <StatusBar barStyle="light-content" />
        <AppNavigator />
      </View>
    )
  }
}

// const AppNavigator = createStackNavigator({
//   Home: Welcome
// })

export default App;
