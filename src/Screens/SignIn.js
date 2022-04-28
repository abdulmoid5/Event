import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
  ImageBackground,
  TextInput,
} from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import SecondButton from '../components/SecondButton';

import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    // validate user
    console.log('hey');
  };

  // const onForgotPasswordPressed = () => {
  //   navigation.navigate('ForgotPassword');
  // };

  // const onSignUpPress = () => {
  //   navigation.navigate('SignUp');
  // };

  return (
    <View style={styles.container}>
      <Header title="Sign In" />
      <View style={{marginTop: 20, marginBottom: 20}}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={number}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="password"
          secureTextEntry={true}
        />
      </View>
      <Button text="Login" onPress={() => navigation.navigate('EventList')} />
      <SecondButton
        text="Sign Up"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    top: Dimensions.get('window').height / 6,
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});

export default SignUp;
