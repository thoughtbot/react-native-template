import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
} from "react-navigation";
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

const createTabNavigator = Platform.select({
  ios: config => {
    return createBottomTabNavigator(config, {
      tabBarOptions: {
        activeTintColor: colors.primary,
      },
    });
  },
  android: config => {
    return createMaterialTopTabNavigator(config, {
      tabBarOptions: {
        activeTintColor: colors.background,
        style: {
          backgroundColor: colors.primary,
        },
      },
    });
  },
});

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

const AppNavigator = createTabNavigator({
  Welcome: { screen: WelcomeNavigator },
  Counter: { screen: CounterNavigator },
});

export default createAppContainer(AppNavigator);
