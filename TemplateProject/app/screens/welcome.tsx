import React, { Component } from "react";
import { Text, View } from "react-native";

import styles from "app/styles";

class Welcome extends Component {
  static navigationOptions = {
    title: "TemplateProject",
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.welcome, styles.text]}>
          Welcome to React Native!
        </Text>
        <Text style={[styles.instructions, styles.text]}>
          To get started, edit app/screens/welcome.js
        </Text>
        <Text style={[styles.instructions, styles.text]}>
          Press Cmd+R to reload,{"\n"}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

export default Welcome;
