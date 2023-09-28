import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Add from "../../images/Add.png";
import AddPhoto from "../../images/AddPhoto.svg";
import PhotoBG from "../../images/PhotoBG.png";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const ProfileScreen = () => {
    const navigation = useNavigation();
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageBackground style={styles.image} source={PhotoBG}>
            <View
              style={{
                height: "70%",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "#FFFFFF",
                fontSize: 16,
                fontWeight: 400,
              }}
            >
              
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Feather
                  name="log-out"
                  size={24}
               
                  color="rgba(33, 33, 33, 0.8)"
                  marginRight="20"
                />
              </TouchableOpacity>
              <View style={styles.avatarContainer}>
                <View>
                  <Image source={AddPhoto} />
                </View>
                <View>
                  <Image style={styles.icon} source={Add} />
                </View>
              </View>
              <View>
                <Text style={styles.title}> Логін </Text>
              </View>
              <View style={styles.contentBlock}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../images/GroupPhoto.png")}
                    style={{ width: 60, height: 60 }}
                  />
                </View>
                <View style={styles.details}>
                  <View>
                    <Text>name</Text>
                  </View>
                  <View style={styles.boxDetails}>
                    <View style={styles.boxDetails}>
                      <View style={styles.boxDetails}>
                        <Feather
                          name="message-circle"
                          size={24}
                          color="#FF6C00"
                        />
                        <Text>comments</Text>
                      </View>
                      <View style={styles.boxDetails}>
                        <Feather name="thumbs-up" size={24} color="#FF6C00" />
                        <Text>like</Text>
                      </View>
                    </View>

                    <View style={styles.boxDetails}>
                      <Feather name="map-pin" size={24} color="#8D8D8D" />
                      <Text>map</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};


   
               
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
  // titleBox: {
  //   marginBottom: 32,
  // },
  title: {
    fontSize: 30,
    fontWeight: 500,
    fontFamily: "Roboto-Medium",
    letterSpacing: 0.3,
    marginTop: 64,
  },

  avatarContainer: {
    position: "absolute",
    top: "-20%",
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  icon: {
    position: "relative",
    top: "-50%",
    left: "90%",
    height: 25,
    width: 25,
  },

  contentBlock: {
    paddingHorizontal: 8,
    marginTop: 32,
    marginBottom: 32,
    resizeMode: "cover",
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
  boxDetails: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    justifyContent: "space-between",
    textAlign: "left",
  },
  details: {
    display: "flex",
    gap: 4,
    textAlign: "left",
  },
});


