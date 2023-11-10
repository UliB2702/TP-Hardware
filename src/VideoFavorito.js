import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button, SafeAreaView, TextInput } from "react-native";
import { ResizeMode, Video } from 'expo-av';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function VideoFavorito() {
  const [videoActual, setVideoActual] = useState("")
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [video1, setVideo1] = useState()

  useEffect(() => {
    AsyncStorage.getItem('videoActual').then(response => {
      setVideo1(response)
    }
    )
  }, [AsyncStorage.getItem('videoActual')]);

  async function AgregarNuevoVideo() {
    console.log(videoActual)
    try {
      var video3 = await AsyncStorage.setItem('videoActual', videoActual);
      setVideo1(video3)
    }
    catch (error) {
      console.error(error)
    }
  }

  return (
    <View style={styles.container}>
      {video1 !== null && video1 !== undefined && (
        <View style={styles.viewVideo}>
        <Video
          ref={video}
          videoStyle={{position: 'none'}}
          source={{
            uri: video1
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={status => setStatus(status)}
          volume='1.0'
        />

        <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? 'Pause' : 'Play'}
            onPress={() =>
              status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
          />
        </View>
      </View>
      )}

      

      <SafeAreaView style={styles.buttons}>
        <TextInput
          style={styles.input}
          placeholder="Agregar Video"
          onChangeText={(text) => setVideoActual(text)}
          value={videoActual}
        />
        <Button
          title='Subir video'
          onPress={AgregarNuevoVideo}
        />
      </SafeAreaView>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e272e",
    alignItems: "center",
    justifyContent: "center",
  },
  viewVideo: {
    width: "40%",
  },
  videoStyle: {
    width: 650,
    height: 300,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    height: 40,
    marginVertical: 12,
    marginHorizontal: 20,
    borderWidth: 1,
    padding: 10,
    color: "white",
    borderColor: "white"
  },
});
