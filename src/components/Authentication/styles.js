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
  height: 120px;
  width: 80px;
  margin: 10px;
`;
export const AuthImgSignUp = styled.Image`
  height: 100px;
  width: 55px;
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
  padding: 15px;
  background-color: ${(props) => props.theme.blue};
  margin-top: 10px;
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

export const ProfileContainer = styled.View`
  flex: 1;
  align-self: stretch;
  padding-right: 60px;
  padding-left: 10px;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const ProfileImg = styled.Image`
  height: 108px;
  width: 61px;
  margin: 20px;
`;

export const GenderContainer = styled.View`
  flex-direction: row;
  padding: 5px;
  margin: 5px;
  width: 400px;
  align-items: center;
  justify-content: center;
`;

export const AuthText = styled.Text`
  color: white;
  font-size: 11px;
`;
export const ProfileText = styled.Text`
  color: white;
  font-size: 11px;
  margin-top: -10px;
  margin-bottom: 10px;
`;
