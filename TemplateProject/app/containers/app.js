import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import * as counterActions  from '../redux/modules/counter';

class App extends Component {
  render() {
    const {value, increment, decrement} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit app/containers/app.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text>Counter: {value}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={decrement}>
            <Text>Decrement</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={increment}>
            <Text>Increment</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
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
)(App);
