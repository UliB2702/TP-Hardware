import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

export default function Contactos() {
  const [contactos, setContactos] = useState([]);
  useEffect(() => {
    //ejemplo sin api o bd
    const listaDeContactos = [
      {
        id: 1,
        nombre: "Martin",
        apellido: "Pérez Disalvo",
        telefono: "123-456-7890",
        esPredeterminado: true,
      },
      {
        id: 2,
        nombre: "María",
        apellido: "Gómez",
        telefono: "987-654-3210",
        esPredeterminado: false,
      },
    ]
    setContactos(listaDeContactos);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#61dafb"
      />
      <FlatList
        data={contactos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.contactoContainer}>
            <Text
              style={styles.nombreApellido}
            >{`${item.nombre} ${item.apellido}`}</Text>
            <Text style={styles.telefono}>{item.telefono}</Text>
            {item.esPredeterminado == true && <Image style={styles.imagen} source={{ uri: 'https://images.vexels.com/media/users/3/208199/isolated/lists/6eb5ef1c35080a1a35508c20b1ddee32-icono-de-llamada-de-telefono-de-emergencia.png' }}/>}
            {/* Agrega el icono para el contacto predeterminado */}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e272e", // Color de fondo
  },
  contactoContainer: {
    padding: 16,
    backgroundColor: "#34495e", // Color de fondo del contacto
    margin: 8,
    borderRadius: 8,
    elevation: 2,
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
  imagen:{
    width: "100%"
  }
});
