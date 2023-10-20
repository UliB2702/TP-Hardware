import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { ActionTypes, useContextState } from "./contextState";
import * as Location from 'expo-location';

export default function HoraClima() {

  const {contextState, setContextState} = useContextState()
  const [hora, setHora] = useState([]);
  const [location, setLocation] = useState([]);

  const options = {method: 'GET'};


  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&APPID=d8cbe07a8e59f915e3d4f78ccdd4d385&units=metric', options)
    .then(response => response.json())
    .then(response => {
      setHora(response)
      console.log(response)
    })
    .catch(err => console.error(err));
  
    }, []);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied') 
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location)
      setLocation(location);
    })();
  }, []);


 



  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#61dafb"
      />
      <Text
              style={styles.nombreApellido}
            >{`${location.coords}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e272e", // Color de fondo
  },
  nombreApellido: {
    fontSize: 18,
    color: "#ecf0f1",
    fontWeight: "bold",
  },
  telefono: {
    fontSize: 16,
    color: "#ecf0f1",
  },
  centrar: {
    alignItems: "center",
    justifyContent: "center",
  },
});
