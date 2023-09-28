import React, { useState, useEffect } from "react";
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
  onFocus,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

export const CommentsScreen = ({ route }) => {
  [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    if (route.params) {
      setPhoto((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);


  const onComments = () => {
    console.log(`${comments}`);

    setComments((prevState) => [prevState, ...comments]);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View
            style={{
              ...styles.form,
              marginBottom: isShownKeyboard ? 100 : 10,
            }}
          >
            <View style={styles.contentBlock}>
              <Image style={styles.photo} source={{ uri: route.params.uri }} />
            </View>
            <View style= {styles.commentText}>
              <Text>Comments</Text>
        
            </View>
            <View style={styles.inputCommentsBox}>
              <TextInput
                value={comment}
                onChangeText={setComment}
                placeholder="Коментувати..."
                style={{
                  ...styles.inputComments,
                  borderColor: onFocus ? "#FF6C00" : "#E8E8E8",
                }}
                onFocus={() => setIsShownKeyboard(true)}
              />
              <Feather
                name="arrow-up-circle"
                size={34}
                style={styles.link}
                onPress={onComments}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 0,
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
    backgroundColor: "8d8d8d",
    width: "100%",
    height: 240,
  },
  commentText: {
    marginBottom: 20,
  },

  inputCommentsBox: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 100,
    border: "solid",
    width: "100%",
    marginBottom: 10,
  },
  inputComments: {
    position: "absolute",
    width: "100%",
    height: 50,
    paddingLeft: 16,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
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
    width: 240,
    height: 240,
    marginBottom: 8,

    resizeMode: "cover",
  },
  photo: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  link: {
    position: "relative",
    justifyContent: "center",
    borderRadius: 100,
    color: "#FFFFFF",
    backgroundColor: "#FF6C00",
    marginRight: 16,
  },
});
