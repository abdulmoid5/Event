import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('EventList')}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://www.seekpng.com/png/detail/155-1554127_arrow-back-android-back-button-png.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingTop: 40,
    top: 20,
    marginLeft: 20,
  },

  image: {
    width: 20,
    height: 20,
  },
});

export default BackButton;
