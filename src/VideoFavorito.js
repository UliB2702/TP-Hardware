import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Audio, Video } from 'expo-av';

export default function VideoFavorito() {

  const playVideo = () => {
    if (videoUrl) {
      return (
        <Video
          source={{ uri: videoUrl }}
          style={{ flex: 1, height: 300 }}
          controls
          resizeMode="contain"
          paused={false}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#61dafb" />
      <Video
        ref={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
        />
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
});
