import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Card = ({title, date, start}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('EventDetails')}>
        <View style={styles.card}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.text}>{date}</Text>
          <Text style={styles.text}>{start}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  card: {
    height: 100,
    width: 350,
    backgroundColor: '#ededed',
    justifyContent: 'center',
    borderRadius: 7,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Card;
