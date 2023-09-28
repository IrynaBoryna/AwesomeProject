import React from "react";
import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { PostsScreen } from "./main/PostsScreen";
import { CreatePostsScreen } from "../Screens/main/CreatePostsScreen";
import { ProfileScreen } from "../Screens/main/ProfileScreen";

import { Feather } from "@expo/vector-icons";
  const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();
export const Home = () => {
  const navigation = useNavigation();

  return (
    <MainTab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "PostsScreen") {
            iconName = "grid";
          } else if (route.name === "CreatePostsScreen") {
           focused?  iconName = "trash-2":iconName = "plus";
          } else if (route.name === "ProfileScreen") {
            iconName = "user";
          }
          return <Feather name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarInactiveBackgroundColor: "transparent",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      })}
    >
      <MainTab.Screen
        name="PostsScreen"
        options={{
          headerShown: false,
        }}
        component={PostsScreen}
      />

      <MainTab.Screen
        name="CreatePostsScreen"
        options={{
          tabBarShow: false,

          title: "Створити публікацію",
          headerTitleAlign: "center",
          headerTransparent: true,
          headerTintColor: "#212121",
          headerStatusBarHeight: 44,
          headerTitleStyle: {
            fontWeight: 500,
            fontSize: 17,
            fontStyle: "normal",
            lineHeight: 22,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("PostsScreen")}
            >
              <Feather
                name="arrow-left"
                size={24}
                color="black"
                marginLeft={20}
              />
            </TouchableOpacity>
          ),
        }}
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        name="ProfileScreen"
        options={{
          headerShown: false,
        }}
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
