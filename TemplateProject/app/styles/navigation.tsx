import { Platform } from "react-native";
import { TabViewConfig } from "react-navigation";

import { colors } from "./colors";

const stackConfig = {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.background,
  },
};

const androidTabConfig: TabViewConfig = {
  tabBarOptions: {
    activeTintColor: colors.background,
    style: {
      backgroundColor: colors.primary,
    },
  },
};

const iosTabConfig: TabViewConfig = {
  tabBarOptions: {
    activeTintColor: colors.primary,
  },
};

const tabConfig = Platform.select({
  android: androidTabConfig,
  ios: iosTabConfig,
});

export { stackConfig, tabConfig };
