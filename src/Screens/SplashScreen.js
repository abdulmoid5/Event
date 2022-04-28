import React from 'react';
import {View, Image, ImageBackground, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//Welcome Screen

const SplashScreen = ({}) => {
  const navigation = useNavigation();

  //Timeout Function navigation
  setTimeout(() => {
    navigation.navigate('EventList');
  }, 3000);

  //Background image:
  const image = {uri: 'https://popupclass.com.au/img/event1.jpeg'};

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.backgroundImage}>
      <Text
        style={{color: 'white', fontSize: 40, fontWeight: 'bold', bottom: 20}}>
        Event Time
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },

  //logo image
});

export default SplashScreen;
