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
    <View>
      <TextInput
        style={styles.textStyle}
        placeholder="Type your email here"
        onChangeText={text => onEmailChange(text)}
        value={email}
      />
      <Button title="Save" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    padding: 15,
    textAlign: 'center',
    color: 'blue'
  }
});
