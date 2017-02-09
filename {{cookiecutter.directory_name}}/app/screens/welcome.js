import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import * as counterActions  from '../redux/modules/counter';

class Welcome extends Component {
  static navigationOptions = {
    title: '{{cookiecutter.project_name}}',
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

const styles = StyleSheet.create({
  text: {
    color: '#29292c',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    margin: 5,
  },
});

export default connect(
  ({counter}) => counter,
  {
    increment: counterActions.increment,
    decrement: counterActions.decrement,
  }
)(Welcome);
