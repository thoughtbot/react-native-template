import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { connect, Dispatch } from "react-redux";

import styles from "app/styles";
import * as counterActions from "app/redux/modules/counter/actions";
import { CounterAction } from "app/redux/modules/counter/types";
import { AppState } from "app/types";

export interface Props {
  decrement?: () => void;
  increment?: () => void;
  value?: number;
}

class Counter extends Component<Props> {
  static navigationOptions = {
    title: "Counter",
  };

  render() {
    const { value, increment, decrement } = this.props;

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

const mapStateToProps = ({ counter }: AppState): Props => counter;

const mapDispatchToProps: Props = { ...counterActions };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
