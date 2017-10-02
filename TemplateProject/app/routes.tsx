import React from "react";
import { Platform } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";

import { Counter, Welcome } from "screens";
import { colors } from "app/styles/colors";
import { stackConfig, tabConfig } from "app/styles/navigation";

const WelcomeNavigator = StackNavigator(
  {
    Welcome: { screen: Welcome },
  },
  stackConfig
);

const CounterNavigator = StackNavigator(
  {
    Counter: { screen: Counter },
  },
  stackConfig
);

const AppNavigator = TabNavigator(
  {
    Welcome: { screen: WelcomeNavigator },
    Counter: { screen: CounterNavigator },
  },
  tabConfig
);

export { AppNavigator };
