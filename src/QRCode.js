import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert, Button, Image, SafeAreaView, Platform } from "react-native";
import QRGenerado from "./qrcode-generado.png"

export default function QRCode({ navigation }) {
  
  const DEFAULT_IMAGE = Image.resolveAssetSource(QRGenerado).uri;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#61dafb" />
      {Platform.OS === "web" &&
      <Image style={styles.imagen} source={QRGenerado}/>
      }
       {Platform.OS === "android" &&
      <Image style={styles.imagen} source={{ uri: DEFAULT_IMAGE}}/>
      }
      <SafeAreaView style={styles.buttons}>
        <Button
          title='Escanear QR'
          onPress={() => navigation.navigate("Escaner de QR")}
        />
      </SafeAreaView>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e272e",
    alignItems: "center",
  },
  nombreApellido: {
    fontSize: 18,
    color: "#ecf0f1",
    fontWeight: "bold",
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: "#777",
  },
  imagen:{
    marginTop: 10,
    width: "100%",
    height: "50%",
  },
  buttons: {
    alignItems: 'center',
    marginVertical: 10,
  },
});
