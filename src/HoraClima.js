import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Animated,
} from "react-native";
import * as Location from "expo-location";
import { Card } from 'react-native-elements';

export default function HoraClima() {
  const [temperatura, setTemperatura] = useState([]);
  const [hora, setHora] = useState([]);
  const options = { method: "GET" };
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(1);
  const [showText, setShowText] = useState(false);

  function buscarHora(location) {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=b816434d79ed4c8b942113947232510&q=${location.coords.latitude},${location.coords.longitude}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setTemperatura(response);
        console.log(response);
        setHora(temperatura?.location?.localtime);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permiso de ubicación denegado",
          "Por favor, activa los servicios de ubicación en la configuración de tu dispositivo."
        );
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      if (!location) {
        Alert.alert(
          "Ubicación no disponible",
          "No se puede obtener la ubicación actual. Por favor, inténtalo de nuevo."
        );
        return;
      }

      console.log(location);
      if (location.coords.latitude && location.coords.longitude) {
        buscarHora(location);
      } else {
        Alert.alert(
          "Ubicación no definida",
          "Por favor, activa los servicios de ubicación en la configuración de tu dispositivo."
        );
      }

      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();

      Animated.spring(scaleAnim, {
        toValue: 1.2,
        friction: 2,
        useNativeDriver: true,
      }).start();

      setShowText(true);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.cardContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Temperatura actual:</Text>
          <Text style={styles.temperature}>
            {`${temperatura?.current?.temp_c} °C`}
          </Text>
        </View>
        <View style={styles.labelContainer}>
        <Text style={styles.label}>Hora actual:</Text>
          {new Date().getMinutes() < 10 && (
            <Text style={[styles.time, styles.alignRight]}>
              {`${new Date().getHours().toString() + ':' + '0' + new Date().getMinutes().toString()}`}
            </Text>
          )}
          {new Date().getMinutes() >= 10 && (
            <Text style={[styles.time, styles.alignRight]}>
              {`${new Date().getHours().toString() + ':' + new Date().getMinutes().toString()}`}
            </Text>
          )}
        </View>
        <View style={styles.labelContainer}>
        <Text style={styles.label}>Fecha actual:</Text>
          <Text style={[styles.time, styles.alignRight]}>
          {`${new Date().getDate().toString() + '/' + new Date().getMonth().toString()+ '/' + new Date().getFullYear().toString()}`}
          </Text>
        </View>
        <View style={styles.labelContainer}>
        <Text style={styles.label}>Ubicación:</Text>
        <Text style={[styles.time, styles.alignRight]}>
        {`${temperatura?.location?.region}, ${temperatura?.location?.country}`}
        </Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e272e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    backgroundColor: '#3498db',
    borderRadius: 15,
    padding: 20,
    width: '80%',
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    color: '#b2bec3',
  },
  time: {
    fontSize: 24,
    color: '#ecf0f1',
    fontWeight: 'bold',
  },
  alignRight: {
    alignSelf: 'flex-end',
  },
  temperature: {
    fontSize: 24,
    color: '#ecf0f1',
    fontWeight: 'bold',
  },
});
