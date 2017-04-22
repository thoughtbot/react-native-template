import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import * as counterActions from '../redux/modules/counter';
import { AppState } from '../redux/modules/index';
import styles from '../styles';

interface ConnectStateProps {
  value: number;
}

interface ConnectDispatchProps {
  increment: () => any;
  decrement: () => any;
}

type Props = ConnectStateProps & ConnectDispatchProps;

class Counter extends Component<Props, void> {
  static navigationOptions = {
    title: 'Counter',
  };

  render() {
    const {value, increment, decrement} = this.props;

    return (
      <View style={styles.container}>
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
}

export default connect(
  ({counter}: AppState): ConnectStateProps => ({
    ...counter,
  }),
  {
    increment: counterActions.increment,
    decrement: counterActions.decrement,
  },
)(Counter);
