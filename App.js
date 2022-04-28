import React from 'react';
import {View, StyleSheet} from 'react-native';

import Navigation from './src/Navigation/Navigation';

import Amplify, {Auth} from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react-native';
import config from './src/aws-exports';

Amplify.configure(config);

const App = () => {
  // Auth.signOut();
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withAuthenticator(App);
