import React, { useState } from "react";
import userStore from "../../Stores/UserStore";
import SalonItem from "./SalonItem";
import SearchBar from "./SearchBar";
import { observer } from "mobx-react";
import { AuthContainer, BackgroundSq, AuthBackgroundImg } from "./styles";
import { View } from "react-native";

import salonStore from "../../Stores/SalonStore";
const SalonList = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const salonslist = salonStore.salons
    .filter((salon) => salon.gender === userStore.user.gender.toLowerCase())
    .filter((salon) =>
      salon.username.toLowerCase().includes(query.toLowerCase())
    )
    .map((salon) => <SalonItem salon={salon} key={salon.id} />);
  return (
    <AuthContainer>
      <BackgroundSq source={require("../../../assets/BlueRec.png")} />
      {/* <AuthBackgroundImg source={require("../../../assets/BlueRec.png")}> */}
      <SearchBar setQuery={setQuery} />
      <View>{salonslist}</View>
      {/* </AuthBackgroundImg> */}
    </AuthContainer>
  );
};

export default observer(SalonList);
