import React from 'react';
import { Text, View } from 'react-native';
import Header from './Header';
import EmailForm from './EmailForm';

export default function SetupView({ onSetEmail }) {
  return (
    <View>
      <Header title='WELCOME' />
      <Text>Get started by entering your email</Text>
      <EmailForm onSetEmail={onSetEmail} />
    </View>
  );
}
