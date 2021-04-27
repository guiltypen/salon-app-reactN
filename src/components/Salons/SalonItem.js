import { View, Text } from "react-native";
import React from "react";
import {
  SalonContainer,
  SalonImg,
  SalonTitle,
  SalonText,
  SalonDetail,
} from "./styles";
import { observer } from "mobx-react";
function SalonItem({ salon }) {
  return (
    <SalonContainer>
      <SalonImg source={require("../../../assets/logosolidwhite.png")} />
      <SalonText>
        <SalonTitle>{salon.username}</SalonTitle>
        <SalonDetail>Location: {salon.address}</SalonDetail>
      </SalonText>
    </SalonContainer>
  );
}
export default observer(SalonItem);
