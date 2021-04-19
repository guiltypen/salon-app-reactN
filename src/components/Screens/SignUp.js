import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Create a new Account</Text>
      <TextInput placeholder="Username" style={styles.TextInput}></TextInput>
      <View style={styles.padding}></View>
      <TextInput placeholder="First Name" style={styles.TextInput}></TextInput>
      <View style={styles.padding}></View>
      <TextInput placeholder="Last Name" style={styles.TextInput}></TextInput>
      <View style={styles.padding} style={styles.padding}></View>
      <TextInput
        placeholder="Phone Number"
        style={styles.TextInput}
      ></TextInput>
      <View style={styles.padding} style={styles.padding}></View>
      <TextInput placeholder="Email" style={styles.TextInput}></TextInput>
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

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 156596,
  },
  Text: {
    color: "white",
    fontSize: 20,
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
