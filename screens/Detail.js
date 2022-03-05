import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useFonts, BebasNeue_400Regular, OpenSans_400Regular } from "@expo-google-fonts/dev";

const Detail = ({ navigation, route }) => {
  
  //Access Google Fonts
  useFonts({
    BebasNeue_400Regular,
    OpenSans_400Regular,
  });

  //Get Today's Date
  const today = new Date().toLocaleDateString();
    
  const { horoscope } = route.params;
    return (
      <View style={styles.hscopeCtr}>
        <Text style={styles.sign}>{horoscope.sign}</Text>
        <Text style={styles.date}>{today}</Text>
        <Text style={styles.daily}>{horoscope.daily}</Text>
        <Pressable style={styles.randoBtn} onPress={() => navigation.navigate('TarotCard', { name: 'TarotCard' })}>
             <Text style={styles.randoBtnText}>Random Tarot Card?</Text>
           </Pressable>   
      </View>
    );
  };
  
  export default Detail;

  const styles = StyleSheet.create({
    hscopeCtr: {
      display: "flex",
      alignItems: "center",
      paddingTop: '10%',
      backgroundColor: "#fff",
      height: "100vh",
    },
    sign: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "BebasNeue_400Regular",
      fontStyle: "italic",
      fontSize: 40,
    },
    date: {
      fontFamily: "BebasNeue_400Regular",
      fontSize: 25,
    },
    daily: {
      margin: 20,
      fontFamily: "OpenSans_400Regular",
    },
    randoBtn: {
      backgroundColor: "#FF512F",
      backgroundImage: "linear-gradient(to right, #FF512F, #DD2476)",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 15,
      height: 35,
      width: 160,
      marginTop: 25,
    },
    randoBtnText: {
      color: "#fff",
      fontFamily: "BebasNeue_400Regular",
      fontSize: 18,
      fontStyle: "italic",
    }
  });