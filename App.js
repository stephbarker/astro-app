import React, { useState, useEffect } from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import Profile from "./screens/Profile";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Detail from "./screens/Detail";
import TarotCard from "./screens/TarotCard";

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
        {User ? (
        <Stack.Group>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false}} />
        <Stack.Screen name="Detail" component={Detail} options={{ title: 'Your Daily Horoscope' }} />
        <Stack.Screen name="TarotCard" component={TarotCard} options={{ title: 'Your Tarot Card' }}/>
        </Stack.Group>
        ) : (
        <Stack.Group>
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        </Stack.Group>
        )}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
