import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native';
import Router from './router/Router';
import 'react-native-gesture-handler';

export default function App() {
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
