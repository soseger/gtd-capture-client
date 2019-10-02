import React from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';
import { setEmail } from '../utils/Store';

export default function EmailForm(props) {
  const [email, onEmailChange] = React.useState(props.email);

  function handlePress() {
    setEmail(email)
      .then(() => {
        Alert.alert('Your email has been updated successfully', '', [
          { text: 'OK' }
        ]);
        props.onSetEmail();
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Invalid email!', '', [{ text: 'OK' }]);
      });
  }

  return (
    <View style={styles.main}>
      <TextInput
        style={styles.text}
        placeholder='Type your email here'
        onChangeText={text => onEmailChange(text)}
        value={email}
      />
      <View style={styles.button}>
        <Button title='Save' color='white' onPress={handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    padding: 15,
    color: 'blue',
    marginBottom: 25
  },
  button: {
    backgroundColor: 'blue',
    width: 90,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center'
  }
});
