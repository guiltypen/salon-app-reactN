import React, { useState } from "react";
import {
  AuthImgSignUp,
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButtonText,
  BackgroundSq,
  AuthButtonB,
} from "../../styles";
import authStore from "../Stores/AuthStore";
import { observer } from "mobx-react";
const SignUp = ({ navigation }) => {
  const [newUser, setnewUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    gender: "male",
  });

  const handleSubmit = () => {
    console.log("SignUp", newUser);
    authStore.signup(newUser);
    if (authStore.user) navigation.replace("Gender");
  };
  return (
    <AuthContainer>
      <BackgroundSq source={require("../../../assets/BlueRec.png")} />
      <AuthImgSignUp source={require("../../../assets/logosolidwhite.png")} />
      <AuthTitle>Create a new Account</AuthTitle>
      <AuthTextInput
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
        onChangeText={(username) => setnewUser({ ...newUser, username })}
      />
      <AuthTextInput
        placeholder="First Name"
        placeholderTextColor="#A6AEC1"
        onChangeText={(firstName) => setnewUser({ ...newUser, firstName })}
      />
      <AuthTextInput
        placeholder="Last Name"
        placeholderTextColor="#A6AEC1"
        onChangeText={(lastName) => setnewUser({ ...newUser, lastName })}
      />
      <AuthTextInput
        placeholder="Phone Number"
        placeholderTextColor="#A6AEC1"
        onChangeText={(phone) => setnewUser({ ...newUser, phone })}
      />
      <AuthTextInput
        placeholder="Email"
        placeholderTextColor="#A6AEC1"
        onChangeText={(email) => setnewUser({ ...newUser, email })}
      />
      <AuthTextInput
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
        onChangeText={(password) => setnewUser({ ...newUser, password })}
      />
      <AuthButtonB onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButtonB>
    </AuthContainer>
  );
};

export default observer(SignUp);
