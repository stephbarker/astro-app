import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";

import { handleSignout } from  "../services/Firebase";

import horoscopeList from "../data";

const Profile = ({ navigation }) => {
  const[horoscopes] = useState(horoscopeList);

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
           <Pressable key={id} onPress={() => navigation.navigate('Detail', { horoscope: horoscope })}>
             <Image style={styles.img} source={img}/>
           </Pressable>        
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