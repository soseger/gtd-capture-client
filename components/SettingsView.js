import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EmailForm from './EmailForm';
import Header from './Header';

export default function SettingsView({ screenProps }) {
  return (
    <View>
      <Header title="SETTINGS" />
      <View style={styles.inputStyle}>
        <Text style={styles.textStyle}>
          Update your email over here, current one is:
        </Text>
        <EmailForm
          onSetEmail={screenProps.onSetEmail}
          email={screenProps.email}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 300,
    borderColor: 'gray',
    borderRadius: 10
  },
  textStyle: {
    fontSize: 16,
    padding: 15,
    color: 'gray',
    textAlign: 'center'
  }
});
