import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { ActionTypes, useContextState } from "./contextState";
import * as Location from 'expo-location';

export default function HoraClima() {

  const {contextState, setContextState} = useContextState()
  const [temperatura, setTemperatura] = useState([]);
  const [hora, setHora] = useState([]);
  const options = {method: 'GET'};


  function buscarHora(location){
    fetch(`https://api.weatherapi.com/v1/current.json?key=b816434d79ed4c8b942113947232510&q=${location.coords.latitude},${location.coords.longitude}`, options)
    .then(response => response.json())
    .then(response => {
      setTemperatura(response)
      console.log(response)
      setHora(temperatura?.location?.localtime)
    })
    .catch(err => console.error(err));
  
    }

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied') 
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location)
      buscarHora(location)
    })();
    
  }, []);


 



  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#61dafb"
      />
      <Text style={styles.nombreApellido}>
            {`${temperatura?.current?.temp_c} C °`}
     </Text>
     <Text style={styles.nombreApellido}>
            {`${temperatura?.location?.localtime.split(' ')[1]}`}
     </Text>
      {console.log(temperatura?.current?.temp_c, temperatura?.location?.localtime.split(' ')[1])}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e272e", // Color de fondo
    alignItems: "center",
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
