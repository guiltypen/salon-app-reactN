import React, { useState } from "react";

import {
  AuthImg,
  AuthContainer,
  AuthTitle,
  AuthButtonB,
  AuthButtonText,
  BackgroundSq,
} from "./styles";

// import AuthStore from "../Stores/AuthStore";

const SalonList = ({ navigation }) => {
  return (
    <AuthContainer>
      <BackgroundSq source={require("../../../assets/BlueRec.png")} />
      <AuthImg source={require("../../../assets/logosolidwhite.png")} />
    </AuthContainer>
  );
};

export default SalonList;
