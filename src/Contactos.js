import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import * as Contacts from 'expo-contacts';

export default function Contactos() {
  const [contactos, setContactos] = useState([]);
  const [contactosTelefono, setContactosTelefonos] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.ID, Contacts.Fields.PhoneNumbers]
        });

        if (data.length > 0) {
          setContactosTelefonos(data)
        }
      }
    })();
  }, []);

  let getPhoneNumbers = (contact) => {
    if(contact.phoneNumbers){
      return contact.phoneNumbers.map((phoneNumber, index) => {
        return(
          <View key={index}>
          <Text style={styles.telefono}>{phoneNumber.label}: {phoneNumber.number}</Text>
          </View>
        )
      })
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#61dafb"
      />
      {contactosTelefono !== undefined &&
      <FlatList
        data={contactosTelefono}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.contactoContainer}>
            <Text
              style={styles.nombreApellido}
            >{`${item?.firstName} `}</Text>
            {item.lastName !== undefined &&
            <Text
            style={styles.nombreApellido}
              >{`${item?.lastName}`}</Text>
            }
            {getPhoneNumbers(item)}
          </View>
        )}
      />
      
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e272e", // Color de fondo
    alignItems: "center",
  },
  contactoContainer: {
    padding: 16,
    backgroundColor: "#577D7E", // Color de fondo del contacto
    margin: 8,
    borderRadius: 8,
    elevation: 2,
    minWidth: '350px'
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
    width: "30px",
    height: "30px"
  }
});
