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
  Alert,
  Button,
  ImageBackground,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export const  ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ProfileScreen</Text>
    </View>
  );
}

        // const [name, setName] = useState("");
        // const [map, setMap] = useState("");
  

// //   const navigation = useNavigation();
//  const onPublic = () => {
//    console.log("Credentials", `${name} + ${map}`);
// //    navigation.navigate("Home");
//  };
