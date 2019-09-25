import React from "react";
import { Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import CaptureView from "./components/CaptureView";
import SettingsView from "./components/SettingsView";

const TabNavigator = createBottomTabNavigator(
  {
    Home: CaptureView,
    Settings: SettingsView
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        const iconName =
          routeName === "Settings" ? "ios-settings" : "ios-paper";
        return <Icon name={iconName} size={32} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "blue",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(TabNavigator);
