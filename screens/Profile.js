import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";

import horoscopeList from "../data";

import { handleSignout } from  "../services/Firebase";

import firebase from "firebase/compat/app";

const Profile = ({ navigation }) => {
  const[horoscopes, setHoroscopes] = useState(horoscopeList);
  
  return (
    <View style={styles.container}>
      <View style={styles.buttonCtr}>
      <Pressable
        style={styles.button}
        onPress={() => {
          handleSignout();
          console.log("user signed out");
        }}
      >
        <Text>Sign Out</Text>
      </Pressable>
      </View>
      {horoscopes.map((horoscope) => {
      const { id, img, sign, daily } = horoscope;
      return (
           <View key={id}>
             <Image style={styles.img} source={img}/>
           </View>        
    );
  })}

    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    margin: 20,
    borderRadius: 25,
    height: 150,
    width: 150,
  },
  buttonCtr: {
    display: "block",
  },
  button: {
    backgroundColor: "#11DDAA",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    height: 35,
    width: 85,
  },
});