/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * #3C5EAB
 * #2D2D2D
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Welcome  from './Screens/Auth/Welcome';
import Login from './Screens/Auth/Login';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
                translucent={true}
                barStyle={'dark-content'}
                backgroundColor={'transparent'}
            />
      <Welcome/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
})

export default App;