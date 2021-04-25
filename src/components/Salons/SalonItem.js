import { View, Text } from "react-native";
import React from "react";
import { SalonTitle } from "./styles";
import { observer } from "mobx-react";
function SalonItem(props) {
  const salo = props.salonitem;
  return (
    <View>
      <SalonTitle> - {salo.username}</SalonTitle>
      <SalonTitle> - area: {salo.address}</SalonTitle>
    </View>
  );
}
export default observer(SalonItem);
