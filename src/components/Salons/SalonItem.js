import { View, Text } from "react-native";
import React from "react";
import { SalonTitle } from "./styles";
import { observer } from "mobx-react";
function SalonItem({ salon }) {
  return (
    <View>
      <SalonTitle> - {salon.username}</SalonTitle>
      <SalonTitle> - area: {salon.address}</SalonTitle>
    </View>
  );
}
export default observer(SalonItem);
