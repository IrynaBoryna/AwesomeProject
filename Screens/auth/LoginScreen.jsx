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
  ImageBackground,
  onFocus,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import PhotoBG from "../../images/PhotoBG.png";

import { useNavigation } from "@react-navigation/native";

const initialState = {
  email: "",
  password: "",
};

export const LoginForm = ({login}) => {
  [isShownKeyboard, setIsShownKeyboard] = useState(false);
  [inputFocus, setInputFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigation = useNavigation();
  const [codeWord, setCodeWord] = useState("Показати");


  const shownPassword = () => {
    if (codeWord === "Показати") {
      setCodeWord("Скрити");
    } else {
      setCodeWord("Показати");
    }
  };

  const onFocusInput = () => {
    setIsShownKeyboard(true);
    setInputFocus(true);
  };

  const onLogin = () => {
    console.log(`${password} + ${email}`);
     navigation.navigate("Home", {email, login });
    setEmail("");
    setPassword("");
  
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageBackground style={styles.image} source={PhotoBG}>
            <View
              style={{
                height: "65%",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "#FFFFFF",
                fontSize: 16,
                fontWeight: 400,
              }}
            >
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <View
                  style={{
                    ...styles.form,
                    marginBottom: isShownKeyboard ? 130 : 45,
                  }}
                >
                  <View style={styles.titleBox}>
                    <Text style={styles.title}> Увійти </Text>
                  </View>
                  <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Адреса електронної пошти"
                    style={{
                      ...styles.input,
                      borderColor: onFocus ? "#FF6C00" : "#E8E8E8",
                    }}
                    onFocus={() => setIsShownKeyboard(true)}
                  />
                  <View style={styles.inputPasswordBox}>
                    <TextInput
                      secureTextEntry={codeWord === "Показати" ? true : false}
                      value={password}
                      onChangeText={setPassword}
                      placeholder="Пароль"
                      style={{
                        ...styles.inputPassword,
                        borderColor: onFocus ? "#FF6C00" : "#E8E8E8",
                      }}
                      onFocus={() => setIsShownKeyboard(true)}
                    />
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={shownPassword}
                    >
                      <View>
                        <Text style={styles.link}> {codeWord} </Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.button}
                    onPress={onLogin}
                  >
                    <View>
                      <Text style={styles.titleButton}> Увійти </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => navigation.navigate("Registration", {login, email})}
                  >
                    <Text style={styles.link}>
                      Немає акаунту?
                      <Text style={{ textDecorationLine: "underline" }}>
                        Зареєструватися
                      </Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              </KeyboardAvoidingView>
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
  form: {
    paddingHorizontal: 16,
    paddingBottom: 144,
    paddingTop: 32,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    minHeight: 489,
    justifyContent: "flex-end",
  },
  titleBox: {
    marginBottom: 32,
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
    fontFamily: "Roboto-Medium",
    letterSpacing: 0.3,
  },
  button: {
    width: 325,
    height: 51,
    padding: 10,
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    border: "solid",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  titleButton: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 400,
  },
  input: {
    width: "100%",
    height: 50,
    paddingLeft: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    shadowColor: "#8D8D8D",
    fontSize: 16,
  },

  link: {
    color: "#1B4371",
    fontSize: 16,
  },
  inputPasswordBox: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 8,
    border: "solid",
    width: "100%",
    marginBottom: 43,
    marginTop: 16,
  },
  inputPassword: {
    position: "absolute",
    width: "100%",
    height: 50,
    paddingLeft: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    shadowColor: "#8D8D8D",
    fontSize: 16,
  },
  inputLink: {
    position: "relative",
    height: 50,
    justifyContent: "center",
    paddingRight: 16,
  },
});
