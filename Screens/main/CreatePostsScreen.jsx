import React, { useState } from "react";
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

export const CreatePostsScreen = () => {
  const [name, setName] = useState("");
  const [map, setMap] = useState("");

  [isShownKeyboard, setIsShownKeyboard] = useState(false);

  const navigation = useNavigation();
  const onPublic = () => {
    console.log(`${name} + ${map}`);
    navigation.navigate("Home");
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            position: "relative",
            bottom: 0,
            paddingHorizontal: 16,
            // alignItems: "flex-end",
            justifyContent: "flex-end",
            backgroundColor: "#FFF",
          }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.contentBlock}>
              <View style={styles.imageContainer}>
                <Image
                  source={require("../../images/GroupPhoto.png")}
                  style={{ width: 60, height: 60 }}
                />
              </View>
              <View>
                <Text style={styles.titleContentBlock}>Завантажте фото</Text>
              </View>
            </View>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Назва"
              style={styles.inputName}
              onFocus={() => setIsShownKeyboard(true)}
            />
            <View style={styles.mapBox}>
              <TouchableOpacity
                // onPress={() => navigation.navigate("MapScreen")}
              >
                <Image
                  source={require("../../images/map-pin.png")}
                  style={{ width: 24, height: 24 }}
                />
              </TouchableOpacity>
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
              style={{
                ...styles.button,
                marginBottom: isShownKeyboard ? 154 : 80,
              }}
            >
              <View>
                <Text style={styles.titleButton}>Опублікувати</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.trash}>
              <Image
                source={require("../../images/trash.png")}
                style={{ width: 70, height: 40 }}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   position: "relative",
  //   height: "100%",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "#FFF",
  // },
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
    width: 325,
    height: 51,
    padding: 10,
    marginTop: 32,
    marginBottom: 80,
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
    border: "solid",
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
    width: 340,
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
    // borderBottomWidth: 1,
    // borderBottomColor: "#E8E8E8",
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
  trash: {
    height: 40,
    // justifyContent: "end",
    alignItems: "center",
    marginBottom: 0,
  },
});
