import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'MarkerFelt-Wide',
    marginTop: 30
  },
  view: {
    backgroundColor: 'white',
    height: 160,
    justifyContent: 'center'
  }
});
