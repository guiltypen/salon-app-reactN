import React, { useState } from "react";
import userStore from "../../Stores/UserStore";
import SalonItem from "./SalonItem";
import SearchBar from "./SearchBar";
import { observer } from "mobx-react";
import {
  AuthContainer,
  BackgroundSq,
  AuthBackgroundImg,
  SalonContainer,
} from "./styles";
import { View } from "react-native";
import salonStore from "../../Stores/SalonStore";
import MenuComp from "../Salons/MenuComp";

const SalonList = ({ navigation }) => {
  const [query, setQuery] = useState("");
  console.log("Salons form store in SalonList", salonStore.salons);
  console.log("logged in user", userStore.user);
  const salonslist = salonStore.salons
    .filter((salon) => salon.gender === userStore.user.gender)
    .filter((salon) =>
      salon.username.toLowerCase().includes(query.toLowerCase())
    )
    .map((salon) => <SalonItem salon={salon} key={salon.id} />);

  console.log("Salonslist in SalonList", salonslist);
  return (
    <AuthContainer>
      <BackgroundSq source={require("../../../assets/BlueRec.png")} />
      {/* <AuthBackgroundImg source={require("../../../assets/BlueRec.png")}> */}
      <SalonContainer>
        <SearchBar setQuery={setQuery} />
        <MenuComp />
      </SalonContainer>

      <View>{salonslist}</View>
      {/* </AuthBackgroundImg> */}
    </AuthContainer>
  );
};

export default observer(SalonList);
