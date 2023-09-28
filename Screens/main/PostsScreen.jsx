import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultScreen } from '../nestedScreens/DefaultScreen'; 
import { MapScreen } from "../nestedScreens/MapScreen"; 
import { CommentsScreen } from "../nestedScreens/CommentsScreen"; 
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NestedScreen = createStackNavigator();

export const PostsScreen = () => {
   const navigation = useNavigation();
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        options={{
          tabBar: false,
          headerTitle: "Публікації",
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
           headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Feather
                name="log-out"
                size={24}
                color="rgba(33, 33, 33, 0.8)"
                marginRight={20}
              />
            </TouchableOpacity>
          )
        }}
        name="DefaultScreen"
        component={DefaultScreen}
       
      />
      <NestedScreen.Screen
        options={{
               headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("DefaultScreen")}
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
        name="Map"
        component={MapScreen}
      />

      <NestedScreen.Screen
        name="Comments"
        options={{
          tabBar: false,
          headerTitle: "Коментарі",
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
              onPress={() => navigation.navigate("DefaultScreen")}
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
        component={CommentsScreen}
      />
    </NestedScreen.Navigator>
  );
}