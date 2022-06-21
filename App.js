import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home} from './app/Screens/HomeScreen';
import {Contactos} from './app/Screens/Screen'
import {Producto} from'./app/Screens/Produtos'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name='HomeNav' component={Home}/>
        <Stack.Screen name='ContactosNav' component={Contactos}/>
        <Stack.Screen name='ProductosNav' component={Producto}/>
      </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C2CDFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
