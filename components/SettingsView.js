import React from "react";
import { Text, View } from "react-native";
import EmailForm from "./EmailForm";

export default function SettingsView({ screenProps }) {
  return (
    <View>
      <Text>Settings</Text>
      <EmailForm
        onSetEmail={screenProps.onSetEmail}
        email={screenProps.email}
      />
    </View>
  );
}
