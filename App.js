import React from "react";
import { Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CaptureView from "./components/CaptureView";
import SettingsView from "./components/SettingsView";

const TabNavigator = createBottomTabNavigator({
  Home: CaptureView,
  Settings: SettingsView
});

export default createAppContainer(TabNavigator);
