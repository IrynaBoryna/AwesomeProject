import "react-native-gesture-handler";
import React, { useState } from "react";

import { useFonts } from "expo-font";
import { StyleSheet, Text, View, Button, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { RegisterForm } from "./Screens/auth/RegistrationScreen";
import { LoginForm } from "./Screens/auth/LoginScreen";
import { PostsScreen } from "./Screens/PostsScreen";

import { MapScreen } from "./Screens/main/MapScreen";
import { CreatePostsScreen } from "./Screens/main/CreatePostsScreen";
import { ProfileScreen } from "./Screens/main/ProfileScreen";


import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  // const navigation = useNavigation();
  const MainStack = createStackNavigator();
  const MainTab = createBottomTabNavigator();

   return (
    <NavigationContainer>
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
        <MainStack.Screen name="Home" component={PostsScreen} />

      </MainStack.Navigator>
    </NavigationContainer>
  );
}
//   return (
//     <NavigationContainer>
//       <MainTab.Navigator>
//         <MainTab.Screen
//           name="Home"
//           options={{
//             title: "Публікації",
//             headerTitleAlign: "center",
//             headerTransparent: true,
//             headerTintColor: "#212121",
//             headerStatusBarHeight: 44,

//             headerTitleStyle: {
//               fontWeight: 500,
//               fontSize: 17,
//               fontStyle: "normal",
//               lineHeight: 22,
//             },
//             headerRight: () => (
//               <TouchableOpacity onPress={() => console.log("перехід")}>
//                 <Image
//                   source={require("./images/log-out.png")}
//                   style={{ width: 24, height: 24, marginRight: 20 }}
//                 />
//               </TouchableOpacity>
//             ),
//           }}
//           component={PostsScreen}
//         />
//         <MainTab.Screen
//           name="CreatePostsScreen"
//           options={{
//             title: "Створити публікацію",
//             headerTitleAlign: "center",
//             headerTransparent: true,
//             headerTintColor: "#212121",
//             headerStatusBarHeight: 44,
//             headerTitleStyle: {
//               fontWeight: 500,
//               fontSize: 17,
//               fontStyle: "normal",
//               lineHeight: 22,
//             },
//             headerLeft: () => (
//               <TouchableOpacity
//                 onPress={() => console.log("перехід")}
//                 // navigation.navigate("Home")}
//               >
//                 <Image
//                   source={require("./images/arrowLeft.png")}
//                   style={{ width: 24, height: 24, marginLeft: 20 }}
//                 />
//               </TouchableOpacity>
//             ),
//           }}
//           component={CreatePostsScreen}
//         />

//         <MainTab.Screen
//           // options={{ headerShown: false }}
//           name="ProfileScreen"
//           component={ProfileScreen}
//         />
//       </MainTab.Navigator>
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Roboto-Regular",
  },

});

//  <View   style={styles.container} >
//         <RegisterForm/>
//        <LoginForm/>
//         <PostScreen />
//       </View>

//  return (
//     <NavigationContainer>
//       <MainStack.Navigator initialRouteName="Registration">
//         <MainStack.Screen
//           options={{ headerShown: false }}
//           name="Login"
//           component={LoginForm}
//         />
//         <MainStack.Screen
//           options={{ headerShown: false }}
//           name="Registration"
//           component={RegisterForm}
//         />
//         <MainStack.Screen name="Home" component={PostsScreen} />

//       </MainStack.Navigator>
//     </NavigationContainer>
//   );
// }

        // <MainStack.Screen
        //   name="CreatePostsScreen"
        //   options={{
        //     title: "Створити публікацію",
        //     headerTitleAlign: "center",
        //     headerTransparent: true,
        //     headerTintColor: "#212121",
        //     headerTitleStyle: {
        //       fontWeight: 500,
        //       fontSize: 17,
        //       fontStyle: "normal",
        //       lineHeight: 22,
        //     },
        //     headerLeft: () => (
        //       <TouchableOpacity
        //         onPress={() => console.log("перехід")}
        //         // navigation.navigate("Home")}
        //       >
        //         <Image
        //           source={require("./images/arrowLeft.png")}
        //           style={{ width: 24, height: 24, marginLeft: 20 }}
        //         />
        //       </TouchableOpacity>
        //     ),
        //   }}
        //   component={CreatePostsScreen}
        // />
        // <MainStack.Screen name="MapScreen" component={MapScreen} />