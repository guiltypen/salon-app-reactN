import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const SignIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Please Enter your Username and Password</Text>
      <TextInput placeholder="Username" style={styles.TextInput}></TextInput>
      <View style={styles.padding}></View>
      <View style={styles.padding} style={styles.padding}></View>
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        style={styles.TextInput}
      ></TextInput>
      <View style={styles.padding} style={styles.padding}></View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 156596,
  },
  Text: {
    color: "white",
    fontSize: 10,
    alignSelf: "center",
    padding: 50,
    textAlign: "center",
  },
  TextInput: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 40,
    width: 270,
    alignSelf: "center",
    textAlign: "center",
    fontSize: 15,
  },
  padding: { padding: 10 },
});
