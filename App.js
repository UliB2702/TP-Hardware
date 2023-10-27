import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import { TextInput } from 'react-native-web';
import Menu from './src/Menu';
import Contacto from './src/Contactos';
import HoraClima from './src/HoraClima';
import QRScanner from './src/QRScanner';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {


  

  return (

      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Inicio" component={Menu} />
          <Stack.Screen name="TiempoClima" component={HoraClima} />
          <Stack.Screen name="Contacto" component={Contacto} />
          <Stack.Screen name="Acerca de" component={QRScanner} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}



