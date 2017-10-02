import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import { AppNavigator } from "app/routes";
import { styles } from "app/styles";

const App = () => (
  <View style={styles.app}>
    <StatusBar barStyle="light-content" />
    <AppNavigator />
  </View>
);

export default App;
