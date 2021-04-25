import React, { useState } from "react";
import SalonItem from "./SalonItem";
import SearchBar from "./SearchBar";
import { observer } from "mobx-react";
import {
  AuthImg,
  AuthContainer,
  AuthTitle,
  AuthButtonB,
  AuthButtonText,
  BackgroundSq,
} from "./styles";
import { View } from "react-native";

import salonStore from "../../Stores/SalonStore";
const SalonList = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const salonslist = salonStore.salons
    .filter((salon) =>
      salon.username.toLowerCase().includes(query.toLowerCase())
    )
    .map((salon) => <SalonItem salonitem={salon} key={salon.id} />);

  return (
    <AuthContainer>
      <BackgroundSq source={require("../../../assets/BlueRec.png")} />
      <SearchBar setQuery={setQuery} />
      <View>{salonslist}</View>
    </AuthContainer>
  );
};

export default observer(SalonList);
