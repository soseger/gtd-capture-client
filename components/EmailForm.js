import React from "react";
import { Button, TextInput, View } from "react-native";
import { setEmail } from "../utils/Store";

export default function EmailForm({ onSetEmail }) {
  const [email, onEmailChange] = React.useState("");

  function handlePress() {
    setEmail(email)
      .then(() => {
        onSetEmail();
      })
      .catch(error => {
        // TODO: Implement and show ErrorPanel or so
        console.error;
      });
  }

  return (
    <View>
      <TextInput
        placeholder="Type your email here"
        onChangeText={text => onEmailChange(text)}
        value={email}
      />
      <Button title="Save" onPress={handlePress} />
    </View>
  );
}
