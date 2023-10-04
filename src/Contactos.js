import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default function Contactos() {
    const [contactos, setContactos] = useState([]);
    useEffect(() => {
        //ejemplo sin api o bd
        const listaDeContactos = [
            { id: 1, nombre: 'Juan', apellido: 'Pérez', telefono: '123-456-7890', esPredeterminado: true },
            { id: 2, nombre: 'María', apellido: 'Gómez', telefono: '987-654-3210', esPredeterminado: false },
        ];      
    }, []);
    
    return (
        <View style={styles.container}>

            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 

    }
})