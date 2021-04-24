import { View, Text } from "react-native";
import React from "react";
import salonTitle from "./styles";
function SalonItem(props) {
  const salo = props.salonitem;
  return (
    <View>
      <salonTitle> - {salo.name}</salonTitle>
      <salonTitle> - The price: {salo.price}.00KD</salonTitle>
    </View>
  );
}
export default SalonItem;
