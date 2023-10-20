import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import { TextInput } from 'react-native-web';
import Contacto from './src/Contactos';
import HoraClima from './src/HoraClima';
import { ActionTypes, useContextState } from "./src/contextState";
import { useEffect } from "react";
import { ContextProvider } from './src/contextState';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {

  const {contextState, setContextState} = useContextState()

  

  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator >
        <Stack.Screen name="tiempoClima" component={HoraClima} />
          <Stack.Screen name="contacto" component={Contacto} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}



