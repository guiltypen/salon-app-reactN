import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import {
  AuthImg,
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButtonB,
  AuthButtonText,
  BackgroundSq,
} from "../../styles";

// import AuthStore from "../Stores/AuthStore";

const Home = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    console.log("Signin", user);
    // authStore.signin(user);
    // if (authStore.user) navigation.replace("Home");
  };

  return (
    <AuthContainer>
      <BackgroundSq source={require("../../../assets/BlueRec.png")} />
      <AuthImg source={require("../../../assets/logosolidwhite.png")} />
      <AuthButtonB onPress={() => navigation.navigate("SignIn")}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButtonB>
      <AuthButtonB onPress={() => navigation.navigate("SignUp")}>
        <AuthButtonText>Sign Up</AuthButtonText>
      </AuthButtonB>
      <AuthTitle onPress={() => navigation.navigate("Gender")}>
        Create an account later
      </AuthTitle>
    </AuthContainer>
  );
};

export default Home;
