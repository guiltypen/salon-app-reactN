import React from "react";
import styled from "styled-components/native";

const ButtonContainer = styled.TouchableOpacity`
  align-self: center;
  width: 120px;
  height: 45px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor};
`;
const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;
const StyledButton = ({ onPress, title, bgColor }) => (
  <ButtonContainer onPress={onPress} bgColor={bgColor}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);
export default StyledButton;
