import React from "react";
import { Platform } from "react-native";
import { createStackNavigator, createTabNavigator } from "react-navigation";
import { Counter, Welcome } from "./screens";
import { colors } from "./styles";

const stackConfig = {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.background,
  },
};

const tabConfig = {
  tabBarOptions: Platform.select({
    ios: {
      activeTintColor: colors.primary,
    },
    android: {
      activeTintColor: colors.background,
      style: {
        backgroundColor: colors.primary,
      },
    },
  }),
};

const WelcomeNavigator = createStackNavigator(
  {
    Welcome: { screen: Welcome },
  },
  stackConfig
);

const CounterNavigator = createStackNavigator(
  {
    Counter: { screen: Counter },
  },
  stackConfig
);

const AppNavigator = createTabNavigator(
  {
    Welcome: { screen: WelcomeNavigator },
    Counter: { screen: CounterNavigator },
  },
  tabConfig
);

export { AppNavigator };
