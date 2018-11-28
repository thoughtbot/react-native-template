import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";

class Counter extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  };

  decrementCount = () => {
    this.setState({
      ...this.state,
      count: this.state.count - 1,
    });
  };

  static navigationOptions = {
    title: "Counter",
  };

  render() {
    const { count } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Counter: {count}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={this.decrementCount}>
            <Text style={styles.text}>Decrement</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.incrementCount}>
            <Text style={styles.text}>Increment</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Counter;
