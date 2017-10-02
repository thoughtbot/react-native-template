import React from "react";
import { Platform } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";

import { Counter, Welcome } from "screens";
import { colors, navigation } from "app/styles";

const WelcomeNavigator = StackNavigator(
  {
    Welcome: { screen: Welcome },
  },
  navigation.stackConfig
);

const CounterNavigator = StackNavigator(
  {
    Counter: { screen: Counter },
  },
  navigation.stackConfig
);

const AppNavigator = TabNavigator(
  {
    Welcome: { screen: WelcomeNavigator },
    Counter: { screen: CounterNavigator },
  },
  navigation.tabConfig
);

export { AppNavigator };
