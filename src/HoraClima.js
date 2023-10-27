import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Animated,
  RCTAnimation,
  TouchableOpacity,
} from "react-native";
import * as Location from "expo-location";

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

  const handleMouseEnter = () => {
    setShowText(!showText);
  };

  return (
    <View style={styles.container}>
      {showText && (
        <TouchableOpacity onPress={handleMouseEnter}>
          <Text style={styles.temperature}>pepingo</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.temperature}>
        {`${temperatura?.current?.temp_c} °C`}
      </Text>
      <Text style={styles.time}>
        {`${temperatura?.location?.localtime.split(" ")[1]}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e272e",
    alignItems: "center",
    justifyContent: "center",
  },
  temperature: {
    fontSize: 24,
    color: "#ecf0f1",
    fontWeight: "bold",
    marginBottom: 10,
  },
  time: {
    fontSize: 18,
    color: "#b2bec3",
  },
});
