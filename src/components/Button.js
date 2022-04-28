import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = ({onPress, text}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 25,
  },
  button: {
    backgroundColor: 'blue',
    width: 200,
    height: 40,
    justifyContent: 'center',
    borderRadius: 8,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
});

export default Button;
