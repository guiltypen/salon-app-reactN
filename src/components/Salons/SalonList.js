import React, { useState } from "react";
import SalonItem from "./SalonItem";
import SearchBar from "./SearchBar";
import salons from "./salo";

import {
  AuthImg,
  AuthContainer,
  AuthTitle,
  AuthButtonB,
  AuthButtonText,
  BackgroundSq,
} from "./styles";
import { View } from "react-native";

// import AuthStore from "../Stores/AuthStore";

const SalonList = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const salonslist = salons
    .filter((salon) => salon.name.toLowerCase().includes(query.toLowerCase()))
    .map((cv) => <SalonItem salonitem={cv} key={cv.id} />);

  return (
    <AuthContainer>
      <BackgroundSq source={require("../../../assets/BlueRec.png")} />
      <SearchBar setQuery={setQuery} />
      <View>{salonslist}</View>
    </AuthContainer>
  );
};

export default SalonList;
