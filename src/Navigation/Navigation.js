import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import EventList from '../Screens/EventList';
import EventDetails from '../Screens/EventDetails';

import SplashScreen from '../Screens/SplashScreen';
// import Signup from '../Screens/Signup';
// import SignIn from '../Screens/SignIn';
// import ConfirmCode from '../Screens/ConfirmCode';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="EventList"
          component={EventList}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ConfirmCode"
          component={ConfirmCode}
          options={{headerShown: false}}
        /> */}

        <Stack.Screen
          name="EventDetails"
          component={EventDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
