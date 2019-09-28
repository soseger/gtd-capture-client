import React from "react";
import { Text, View } from "react-native";
import EmailForm from "./EmailForm";

export default function SetupView({ onSetEmail }) {
  return (
    <View>
      <Text>Get started!</Text>
      <EmailForm onSetEmail={onSetEmail} />
    </View>
  );
}
