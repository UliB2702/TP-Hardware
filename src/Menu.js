import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import * as Location from 'expo-location';
import { Button } from "react-native-web";
import { min } from "react-native-reanimated";

export default function Menu({ navigation }) {

  return(
  <View style={styles.container}>
    <StatusBar
        backgroundColor="#61dafb"
      />
      <TouchableOpacity
        style={[styles.button]}
        onPress={() => navigation.navigate("TiempoClima")}
      >
        <Text style={styles.nombreApellido}>Hora y Clima</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button]}
        onPress={() => navigation.navigate("Contacto")}
      >
        <Text style={styles.nombreApellido}>Contactos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button]}
        onPress={() => navigation.navigate("VideoFavorito")}
      >
        <Text style={styles.nombreApellido}>Video Favorito</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button]}
        onPress={() => navigation.navigate("Acerca de")}
      >
        <Text style={styles.nombreApellido}>Acerca de</Text>
      </TouchableOpacity>
  </View>
  )
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
    centrar: {
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 5,
      marginTop: 12,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:"#d6bbb8",
      minWidth: "300px"
    }, 
  });
  