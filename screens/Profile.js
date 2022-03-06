import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/dev";

import SignOutButton from "../components/SignOutButton";

import horoscopeList from "../data";

const Profile = ({ navigation }) => {
  const[horoscopes] = useState(horoscopeList);

  //Access Google Fonts
  useFonts({
    BebasNeue_400Regular,
  });

  return (
    <View style={styles.container}>
     <View>
       <Text style={styles.title}>DAILY HOROSCOPES</Text>
     </View>
      {horoscopes.map((horoscope) => {
      const { id, img, sign, daily } = horoscope;
      return (
           <Pressable key={id} onPress={() => navigation.navigate('Detail', { horoscope: horoscope })}>
             <Image style={styles.img} source={img}/>
           </Pressable>        
    );
  })}
        <SignOutButton />
    </View>
    );
  };

export default Profile;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "BebasNeue_400Regular",
    fontStyle: "italic",
    fontSize: 40,
    marginTop: 20,
    textDecorationLine: "underline",
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
    backgroundColor: "#FF512F",
    backgroundImage: "linear-gradient(to right, #FF512F, #DD2476)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    height: 35,
    width: 85,
  },
  buttonTxt: {
    color: "#fff",
    fontFamily: "BebasNeue_400Regular",
    fontSize: 18,
    fontStyle: "italic",
  }
});