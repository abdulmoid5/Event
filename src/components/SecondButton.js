import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SecondButton = ({onPress, text}) => {
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
    backgroundColor: 'white',
    width: 200,
    height: 40,
    justifyContent: 'center',
    borderRadius: 8,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    color: '#333',
  },
});

export default SecondButton;
