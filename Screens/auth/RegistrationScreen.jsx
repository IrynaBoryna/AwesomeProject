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
  Image,
  onFocus,
} from "react-native";
import Add from "../../images/Add.png";
import AddPhoto from "../../images/AddPhoto.svg";
import PhotoBG from "../../images/PhotoBG.png";
import { TouchableOpacity } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";

export const RegisterForm = () => {
  [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [codeWord, setCodeWord] = useState("Показати");
  const navigation = useNavigation();

  const shownPassword = () => {
    if (codeWord === "Показати") {
      setCodeWord("Скрити");
    } else {
      setCodeWord("Показати");
    }
  };

  const onRegister = () => {
    console.log(`${login} + ${password} + ${email}`);
    setLogin("");
    setEmail("");
    setPassword("");
    navigation.navigate("Home");
  };

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
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <View
                  style={{
                    ...styles.form,
                    marginBottom: isShownKeyboard ? 130 : 45,
                  }}
                >
                  <View style={styles.avatarContainer}>
                    <View>
                      <Image source={AddPhoto} />
                    </View>
                    <View>
                      <Image style={styles.icon} source={Add} />
                    </View>
                  </View>
                  <View style={styles.titleBox}>
                    <Text style={styles.title}> Реєстрація </Text>
                  </View>
                  <TextInput
                    value={login}
                    onChangeText={setLogin}
                    placeholder="Логін"
                    style={styles.input}
                    onFocus={() => setIsShownKeyboard(true)}
                  />
                  <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Адреса електронної пошти"
                    style={styles.input}
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
                      style={styles.inputLink}
                    >
                      <Text style={styles.link}>{codeWord}</Text>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.button}
                    onPress={onRegister}
                  >
                    <View>
                      <Text style={styles.titleButton}>Зареєструватися</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate("Login")}
                  >
                    <Text style={styles.link}>
                      Вже є акаунт?
                      <Text style={{ textDecorationLine: "underline" }}>
                        Увійти
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
    paddingBottom: 45,
    paddingTop: 92,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    minHeight: 523,
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
  },
  titleButton: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 400,
  },
  input: {
    width: 325,
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
  inputPasswordBox: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 8,
    border: "solid",
    width: 325,
    marginBottom: 43,
    paddingRight: 16,
  },
  inputPassword: {
    position: "absolute",
    minWidth: 325,
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
  },
});
