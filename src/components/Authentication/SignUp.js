import React, { useState } from "react";
import {
  AuthImgSignUp,
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButtonText,
  BackgroundSq,
  AuthButtonB,
  GenderContainer,
  GenderImg,
  AuthText,
} from "./styles";
import userStore from "../../Stores/UserStore";
import { observer } from "mobx-react";
import { Text, TouchableOpacity } from "react-native";

const SignUp = ({ navigation }) => {
  // if (userStore.user) navigation.replace("Gender"); //Replace in home
  console.log("user from store:", userStore.user);
  const [user, setUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    gender: "",
  });
  console.log("gender", user.gender);
  const handleSubmit = async () => {
    await userStore.signup(user);
    if (userStore.user) navigation.replace("Profile");
    // console.log("user:", user);
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
      <GenderContainer>
        <AuthTitle>Choose Gender :</AuthTitle>
        <AuthText>{user.gender}</AuthText>
      </GenderContainer>
      <GenderContainer>
        <TouchableOpacity onPress={() => setUser({ ...user, gender: "male" })}>
          <GenderImg source={require("../../../assets/maleIcon.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setUser({ ...user, gender: "female" })}
        >
          <GenderImg source={require("../../../assets/femaleIcon.png")} />
        </TouchableOpacity>
      </GenderContainer>

      <AuthButtonB onPress={handleSubmit}>
        <AuthButtonText>Sign up</AuthButtonText>
      </AuthButtonB>
    </AuthContainer>
  );
};

export default observer(SignUp);
