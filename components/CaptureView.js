import React from 'react';
import { Alert, Button, TextInput, Text, View } from 'react-native';
import axios from 'axios';
import config from '../config';
import { API_SECRET } from 'react-native-dotenv';

export default function CaptureView({ screenProps }) {
  const [message, onMessageChange] = React.useState('');

  function handlePress() {
    const headers = {
      'x-api-secret': API_SECRET
    };

    const data = {
      email: screenProps.email,
      message: message
    };

    axios
      .post(config.url, data, { headers: headers })
      .then(() => {
        Alert.alert('Message sent!', '', [{ text: 'OK' }]);
        onMessageChange('');
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Sending message failed', '', [{ text: 'OK' }]);
      });
  }

  return (
    <View>
      <Text>GET THINGS DONE</Text>
      <TextInput
        placeholder="Type something"
        onChangeText={text => onMessageChange(text)}
        value={message}
      />
      <Button title="Send" onPress={handlePress} />
    </View>
  );
}
