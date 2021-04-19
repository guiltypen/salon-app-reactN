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
  if (authStore.user) navigation.replace("Home");

  const [user, setUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    gender: "",
  });

  const handleSubmit = async () => {
    await authStore.signup(user);
  };

  return (
    <AuthContainer>
      <BackgroundSq source={require("../../../assets/BlueRec.png")} />
      <AuthImgSignUp source={require("../../../assets/logosolidwhite.png")} />
      <AuthTitle>Create a new Account</AuthTitle>
      <AuthTextInput
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <AuthTextInput
        placeholder="First Name"
        required
        placeholderTextColor="#A6AEC1"
        onChangeText={(firstName) => setUser({ ...user, firstName })}
      />
      <AuthTextInput
        placeholder="Last Name"
        required
        placeholderTextColor="#A6AEC1"
        onChangeText={(lastName) => setUser({ ...user, lastName })}
      />
      <AuthTextInput
        placeholder="Phone Number"
        required
        placeholderTextColor="#A6AEC1"
        onChangeText={(phone) => setUser({ ...user, phone })}
      />
      <AuthTextInput
        placeholder="Email"
        required
        placeholderTextColor="#A6AEC1"
        onChangeText={(email) => setUser({ ...user, email })}
      />
      <AuthTextInput
        placeholder="Password"
        required
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <AuthTextInput
        placeholder="Gender"
        required
        placeholderTextColor="#A6AEC1"
        onChangeText={(gender) => setUser({ ...user, gender })}
      />
      <AuthButtonB onPress={handleSubmit}>
        <AuthButtonText>Sign up</AuthButtonText>
      </AuthButtonB>
    </AuthContainer>
  );
};

export default observer(SignUp);
