import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },

  text: {
    fontSize: 35,
    top: 30,
    margin: 20,
    fontWeight: 'bold',
  },
});

export default Header;
