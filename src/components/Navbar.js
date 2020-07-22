import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Navbar = (props) => {
  const { title } = props;

  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#3949ab',
    padding: 10,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
