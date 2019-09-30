import React from 'react';
import { Alert, Button, StyleSheet, TextInput, Text, View } from 'react-native';
import axios from 'axios';
import config from '../config';
import { API_SECRET } from 'react-native-dotenv';
import Header from './Header';

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
      <Header title="NEW TO-DO" />
      <View style={styles.inputStyle}>
        <TextInput
          style={styles.textStyle}
          placeholder="Type something"
          onChangeText={text => onMessageChange(text)}
          value={message}
        />
      </View>
      <Button style={styles.buttonStyle} title="Send" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'blue',
    height: 20,
    justifyContent: 'center'
  },
  inputStyle: {
    height: 300,
    borderColor: 'gray',
    borderRadius: 10
  },
  textStyle: {
    fontSize: 16,
    padding: 15
  }
});
