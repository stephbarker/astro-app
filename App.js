import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import Profile from "./screens/Profile";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState();
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const User = firebase.auth().currentUser;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {User ?
        <Stack.Screen name="Profile" component={Profile} />
        :
        <Stack.Screen name="SignIn" component={SignIn} />
        }
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
