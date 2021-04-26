import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../components/Authentication/SignUp";
import SignIn from "../components/Authentication/SignIn";
import Home from "../components/Authentication/Home";
import Gender from "./Authentication/Gender";
import SalonsList from "../components/Salons/SalonList";
import Profile from "../components/Authentication/Profile";

const { Navigator, Screen } = createStackNavigator();

export default function Navigation({ theme }) {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.backgroundColor,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        initialRouteName="Home"
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Screen name="SignUp" component={SignUp} title="Sign up" />
        <Screen
          name="SignIn"
          component={SignIn}
          options={{
            title: "Sign in",
            headerStyle: {
              backgroundColor: theme.darkPurple,
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
              backgroundColor: theme.darkPurple,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Screen
          name="Salons"
          component={SalonsList}
          title="Salons"
          options={{
            title: "Sign in",
            headerStyle: {
              backgroundColor: theme.darkPurple,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Screen
          name="Profile"
          component={Profile}
          title="Profile"
          options={{
            title: "Profile",
            headerStyle: {
              backgroundColor: theme.backgroundColor,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
