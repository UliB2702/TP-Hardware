import React from 'react';
import Menu from './src/Menu';
import Contacto from './src/Contactos';
import HoraClima from './src/HoraClima';
import QRScanner from './src/QRScanner';
import QRCode from './src/QRCode';
import VideoFavorito from './src/VideoFavorito';
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
          <Stack.Screen name="VideoFavorito" component={VideoFavorito} />
          <Stack.Screen name="Acerca de" component={QRCode} />
          <Stack.Screen name="Escaner de QR" component={QRScanner} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}



