import { Platform } from "react-native";

import { colors } from "./colors";

const stackConfig = {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.background,
  },
};

const androidTabConfig = {
  activeTintColor: colors.background,
  style: {
    backgroundColor: colors.primary,
  },
};

const iosTabConfig = {
  activeTintColor: colors.primary,
};

const tabConfig = Platform.select({
  android: androidTabConfig,
  ios: iosTabConfig,
});

export { stackConfig, tabConfig };
