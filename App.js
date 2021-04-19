import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./src/components/Screens/SignUp";
import SignIn from "./src/components/Screens/SignIn";
import Home from "./src/components/Screens/Home";
import { ThemeProvider } from "styled-components";
import Gender from "./src/components/Screens/Gender";

const { Navigator, Screen } = createStackNavigator();

//Global theme
const theme = {
  default: {
    backgroundColor: "#132239",
    purple: "#876AEA",
    darkPurple: "#463973",
    blue: "#156596",
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme.default}>
      <View style={styles.container}>
        <NavigationContainer>
          <Navigator initialRouteName="Home">
            <Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />

            <Screen
              name="SignUp"
              component={SignUp}
              options={{
                title: "Sign Up",
                headerStyle: {
                  backgroundColor: theme.default.backgroundColor,
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Screen
              name="SignIn"
              component={SignIn}
              options={{
                title: "Sign in",
                headerStyle: {
                  backgroundColor: theme.default.darkPurple,
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Screen
              name="Gender"
              component={Gender}
              options={{
                title: "Choose Gender",
                headerStyle: {
                  backgroundColor: theme.default.darkPurple,
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
          </Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
