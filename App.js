import "react-native-gesture-handler";
import React, { useState } from "react";

import { useFonts } from "expo-font";
import { StyleSheet, Text, View, Button, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { RegisterForm } from "./Screens/auth/RegistrationScreen";
import { LoginForm } from "./Screens/auth/LoginScreen";
import { Home } from './Screens/Home';


export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const MainStack = createStackNavigator();

  return (
    <NavigationContainer style={styles.container}>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginForm}
        />
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegisterForm}
        />

        <MainStack.Screen
          options={{ headerShown: false}}
          name="Home"
          component={Home}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Roboto-Regular",
  },
});

