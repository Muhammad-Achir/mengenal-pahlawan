import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text, View } from 'react-native';
import Router from './router/Router';
import 'react-native-gesture-handler';

export default function App() {
  useEffect(() => {
    const prepare = async () => {
      // keep splash screen visible
      await SplashScreen.preventAutoHideAsync()

      // pre-load your stuff
      await new Promise(resolve => setTimeout(resolve, 3000))

      // hide splash screen
      await SplashScreen.hideAsync()
    }
    prepare()
  }, [])

  return (
    <NavigationContainer>
      {/* <StatusBar style="auto"/> */}
      <StatusBar hidden={true} />
      <Router />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
