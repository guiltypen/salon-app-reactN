import React from "react";

import {
  AuthImg,
  AuthContainer,
  AuthTitle,
  AuthButtonB,
  AuthButtonText,
  BackgroundSq,
} from "./styles";

import userStore from "../../Stores/UserStore";

const AuthHome = ({ navigation }) => {
  if (userStore.user) navigation.replace("Salons");
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

export default AuthHome;
