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
const SignUp = ({ navigation }) => {
  const [newUser, setnewUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const handleSubmit = () => {
    console.log("SignUp", user);
    // authStore.signin(user);
    // if (authStore.user) navigation.replace("Home");
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
        placeholderTextColor="#A6AEC1"
        onChangeText={(firstName) => setUser({ ...user, firstName })}
      />
      <AuthTextInput
        placeholder="Last Name"
        placeholderTextColor="#A6AEC1"
        onChangeText={(lastName) => setUser({ ...user, lastName })}
      />
      <AuthTextInput
        placeholder="Phone Number"
        placeholderTextColor="#A6AEC1"
        onChangeText={(phoneNumber) => setUser({ ...user, phoneNumber })}
      />
      <AuthTextInput
        placeholder="Email"
        placeholderTextColor="#A6AEC1"
        onChangeText={(email) => setUser({ ...user, email })}
      />
      <AuthTextInput
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <AuthButtonB onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButtonB>
    </AuthContainer>
  );
};

export default SignUp;
