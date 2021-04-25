//Dependancies

import styled from "styled-components/native";

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const AuthTitle = styled.Text`
  color: white;
  font-size: 11px;
  margin-bottom: 20px;
  padding: 10px;
`;
export const AuthTextInput = styled.TextInput`
  height: 45px;
  width: 235px;
  margin-bottom: 20px;
  color: black;
  background-color: white;
  padding: 10px;
  border-bottom-width: 1px;
  border-radius: 15px;
  font-size: 15px;
  font-weight: bold;
`;
export const AuthImg = styled.Image`
  height: 178px;
  width: 101px;
  margin: 50px;
`;

export const GenderImg = styled.Image`
  height: 150px;
  width: 100px;
  margin: 10px;
`;
export const AuthImgSignUp = styled.Image`
  height: 113px;
  width: 64px;
  margin: 10px;
`;

export const AuthButtonP = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.purple};
  margin-top: 30px;
  border-radius: 15px;
  width: 150px;
`;
export const AuthButtonB = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.blue};
  margin-top: 30px;
  border-radius: 15px;
  width: 150px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const BackgroundSq = styled.Image`
  position: absolute;
  top: -400px;
  left: -300px;
  height: 900px;
  width: 900px;
`;
