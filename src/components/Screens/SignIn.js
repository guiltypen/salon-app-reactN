import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import {
  AuthImg,
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButtonP,
  AuthButtonText,
  BackgroundSq,
} from "../../styles";
import authStore from "../Stores/AuthStore";
import { observer } from "mobx-react";

const SignIn = ({ navigation }) => {
<<<<<<< Updated upstream:src/components/Screens/SignIn.js
  if (authStore.user) navigation.replace("Home");
=======
  if (authStore.user) navigation.replace("Profile");
>>>>>>> Stashed changes:src/components/Authentication/SignIn.js

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  console.log(user);

  const handleSubmit = async () => {
    await authStore.signin(user);
  };

  return (
    <AuthContainer>
      <BackgroundSq source={require("../../../assets/PurpleRec.png")} />
      <AuthImg source={require("../../../assets/logosolidwhite.png")} />
      <AuthTitle>Please enter your username and password</AuthTitle>
      <AuthTextInput
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <AuthTextInput
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <AuthButtonP onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButtonP>
    </AuthContainer>
  );
};

export default observer(SignIn);
