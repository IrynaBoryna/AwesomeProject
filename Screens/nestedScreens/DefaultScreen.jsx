import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Add from "../../images/Add.png";
import AddPhoto from "../../images/AddPhoto.svg";
import { Feather } from "@expo/vector-icons";


export const DefaultScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  // const [login, setLogin] = useState("");
  // const [email, setEmail] = useState("");
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
    //       if(route.params.login){
    //   setLogin(prevState => [...prevState, route.params.login])
    // }
  }, [route.params]);

  console.log("route.params", route.params)

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.boxUser}>
            <View style={styles.avatarContainer}>
              <Image source={AddPhoto} />
            </View>
            <View>
              <Text>login</Text>
              <Text>email</Text>
            </View>
          </View>
          <SafeAreaView style={styles.contentBlock}>
            <FlatList
              data={posts}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View>
                  <View>
                    <Image
                      source={{ uri: item.photo }}
                      style={styles.imageContainer}
                    />
                  </View>
                  <View>
                    <Text>{item.name}</Text>
                  </View>
                  <View style={styles.boxDetails}>
                    <View style={styles.boxDetails}>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("Comments", { uri: item.photo })
                        }
                      >
                        <Feather
                          name="message-circle"
                          size={24}
                          color="#8D8D8D"
                        />
                      </TouchableOpacity>
                      <View>
                        <Text>{item.comments}</Text>
                      </View>
                    </View>
                    <View style={styles.boxDetails}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("Map", item.coords)}
                      >
                        <Feather name="map-pin" size={24} color="#8D8D8D" />
                      </TouchableOpacity>
                      <View>
                        <Text>{item.map}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            />
          </SafeAreaView>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   // alignItems: "flex-start",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "#FFFFFF",
    marginLeft: 16,
    //   borderTopColor: '#212121',
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
  boxUser: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    textAlign: "left",
  },
  boxDetails: {
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
    textAlign: "left",
  },
  link: {
    color: "#1B4371",
    fontSize: 16,
  },
  avatarContainer: {
    // position: "absolute",
    // top: "-20%",
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  contentBlock: {
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
});
