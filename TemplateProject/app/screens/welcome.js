import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import * as counterActions  from '../redux/modules/counter';

class Welcome extends Component {
  static navigationOptions = {
    title: 'TemplateProject',
  };

  render() {
    const {value, increment, decrement} = this.props;

    return (
      <View style={styles.container}>
        <Text style={[styles.welcome, styles.text]}>
          Welcome to React Native!
        </Text>
        <Text style={[styles.instructions, styles.text]}>
          To get started, edit app/screens/welcome.js
        </Text>
        <Text style={[styles.instructions, styles.text]}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text style={styles.text}>Counter: {value}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={decrement}>
            <Text style={styles.text}>Decrement</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={increment}>
            <Text style={styles.text}>Increment</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default connect(
  ({counter}) => counter,
  {
    increment: counterActions.increment,
    decrement: counterActions.decrement,
  }
)(Welcome);
