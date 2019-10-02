import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headerStyle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'MarkerFelt-Wide',
    marginTop: 30
  },
  viewStyle: {
    backgroundColor: 'white',
    height: 160,
    justifyContent: 'center'
  }
});
