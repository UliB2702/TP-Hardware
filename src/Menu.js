import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { ActionTypes, useContextState } from "./contextState";
import * as Location from 'expo-location';

export default function HoraClima() {
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
  