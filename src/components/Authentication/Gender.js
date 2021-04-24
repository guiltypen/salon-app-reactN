import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import {
  AuthImg,
  GenderImg,
  AuthContainer,
  AuthTitle,
  BackgroundSq,
} from "./styles";

// import AuthStore from "../Stores/AuthStore";

const Gender = ({ navigation }) => {
  const [gender, setGender] = useState(null);

  return (
    <AuthContainer>
      <BackgroundSq source={require("../../../assets/PurpleRec.png")} />
      <AuthImg source={require("../../../assets/logosolidwhite.png")} />
      <View style={{ alignItems: "center" }}>
        <GenderImg
          onPress={() => navigation.navigate("SignUp")}
          source={require("../../../assets/maleIcon.png")}
        />
        <AuthTitle>Male</AuthTitle>
      </View>
      <GenderImg source={require("../../../assets/femaleIcon.png")} />
      <AuthTitle>Female</AuthTitle>
    </AuthContainer>
  );
};

export default Gender;
