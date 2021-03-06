import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import SignOutButton from "../components/SignOutButton";

const Detail = ({ navigation, route }) => {
  
  //Get Today's Date
  const today = new Date().toLocaleDateString();
    
  const { horoscope } = route.params;
    return (
      <View style={styles.screenCtr}>
        <View style={styles.border}>
          <Text style={styles.sign}>{horoscope.sign}</Text>
          <Text style={styles.date}>{today}</Text>
          <Text style={styles.daily}>{horoscope.daily}</Text>
          <Pressable style={styles.randoBtn} onPress={() => navigation.navigate('TarotCard', { name: 'TarotCard' })}>
             <Text style={styles.randoBtnText}>Random Tarot Card?</Text>
          </Pressable> 
        </View> 
        <View style={styles.btnCtr}>
        <SignOutButton />  
        </View>  
      </View>
    );
  };
  
  export default Detail;

  const styles = StyleSheet.create({
    screenCtr: {
      display: "flex",
      alignItems: "center",
      paddingTop: '10%',
      backgroundColor: "#F5F5F5",
      height: "100vh",
    },
    btnCtr: {
      marginRight: -180,
    },
    border: {
      alignItems: "center",
      width: "90%",
      borderRadius: 10,
      outlineColor: "black",
      outlineStyle: "solid",
      outlineWidth: 4,
      margin: 20,
      backgroundColor: "#fff",
    },
    sign: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "BebasNeue_400Regular",
      fontStyle: "italic",
      fontSize: 40,
      marginTop: 20,
      textDecorationLine: "underline",
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
      marginBottom: 25,
    },
    randoBtnText: {
      color: "#fff",
      fontFamily: "BebasNeue_400Regular",
      fontSize: 18,
      fontStyle: "italic",
    }
  });