import React, { useState , useEffect, useRef} from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Image,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather , EvilIcons} from "@expo/vector-icons";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";


export const CreatePostsScreen = () => {
  [isShownKeyboard, setIsShownKeyboard] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);
  const [name, setName] = useState("");
  const [map, setMap] = useState("");
  const [photo, setPhoto] = useState("");
  const [camera, setCamera] = useState(null);
  const [location, setLocation] = useState(null);

   const [type, setType] = useState(Camera.Constants.Type.back);
 
  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestCameraPermissionsAsync();
  //     await MediaLibrary.requestPermissionsAsync();
  //     setHasPermission(status === "granted");   
  //   })();
  // }, []);

  // if (hasPermission === null) {
  //   return <View />;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

  const takePhoto = async () => {
    if (camera) {
      const photoIm = await camera.takePictureAsync();
        setPhoto(photoIm.uri);  
    }
  }

  const navigation = useNavigation();

    const onPublic = async () => {
      console.log(`${name} + ${map}`);
       let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.log("Permission to access location was denied");
        }
       let location = await Location.getCurrentPositionAsync({});
       const coords = {
         latitude: location.coords.latitude,
         longitude: location.coords.longitude,
       };
       setLocation(coords);
      navigation.navigate("DefaultScreen", {name, map, photo, coords});
      onReset();
  };
  
  const onReset = () => {
     setPhoto("");
     setName("");
     setMap("");
     setCamera(null);
  }
  
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.contentBlock}>
              <Camera style={styles.imageContainer} type={type} ref={setCamera}>
                <Image style={styles.photo} source={photo.uri} />
                <TouchableOpacity style={styles.btnPhoto} onPress={takePhoto}>
                  <Image
                    style={styles.btnPhoto}
                    source={require("../../images/GroupPhoto.png")}
                  />
                </TouchableOpacity>
              </Camera>

              {!photo && (
                <View>
                  <Text style={styles.titleContentBlock}>Завантажте фото</Text>
                </View>
              )}
              {photo && (
                <View>
                  <Text style={styles.titleContentBlock}>Редагувати фото</Text>
                </View>
              )}
            </View>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Назва"
              style={styles.inputName}
              onFocus={() => setIsShownKeyboard(true)}
            />
            <View style={styles.mapBox}>
              <Feather name="map-pin" size={24} color="#8D8D8D" />
              <TextInput
                value={map}
                onChangeText={setMap}
                placeholder="Місцевість"
                style={styles.inputMap}
                onFocus={() => setIsShownKeyboard(true)}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onPublic}
             style = {styles.button}
            //  if ({photo}) {style = {{ ...styles.button, backgroundColor="#FFC600" }}} 
              
              
            >
              <View>
                <Text style={styles.titleButton}>Опублікувати</Text>
              </View>
            </TouchableOpacity>
              <Feather
                name="trash-2"
                size={24}
                color="#FFFFFF"              
                style={styles.buttonReset}
                onPress={onReset}
              />
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    position: "relative",
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  contentBlock: {
    marginTop: 32,
    marginBottom: 32,
    resizeMode: "cover",
  },
  titleContentBlock: {
    color: "#8D8D8D",
    fontSize: 16,
    fontWeight: 400,
  },

  button: {
    width: "100%",
    height: 51,
    padding: 10,
    marginTop: 32,
    marginBottom: 50,
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
    // border: "solid",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },

  titleButton: {
    color: "#8D8D8D",
    fontSize: 16,
    fontWeight: 400,
  },

  inputName: {
    width: 325,
    height: 50,
    paddingBottom: 16,
    paddingTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    color: "#212121",
    shadowColor: "#8D8D8D",
    fontSize: 16,
  },

  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    width: "100%",
    height: 240,
    marginBottom: 8,

    resizeMode: "cover",
  },
  inputMap: {
    width: 296,
    height: 50,
    marginLeft: 5,
    paddingBottom: 16,
    paddingTop: 16,
    color: "#212121",
    shadowColor: "#8D8D8D",
    fontSize: 16,
  },
  mapBox: {
    resizeMode: "cover",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },

  photo: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  btnPhoto: {
    // width: 60, height: 60,
    backgroundColor: "transparent",
  },
  buttonReset: {
    width: 100,
    height: 51,
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 0,
    // marginBottom: 80,
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
    // justifyContent: "center",
    // alignItems: "center",
    alignContent: "center",
    textAlign: "center",
  },
});
