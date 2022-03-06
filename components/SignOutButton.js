import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useFonts, BebasNeue_400Regular, OpenSans_400Regular } from "@expo-google-fonts/dev";

import { handleSignout } from  "../services/Firebase";

const SignOutButton = () => {
    
    //Access Google Fonts
  useFonts({
    BebasNeue_400Regular,
    OpenSans_400Regular,
  });

    return (
   <View style={styles.buttonCtr}>
      <Pressable
        style={styles.button}
        onPress={() => {
          handleSignout();
          console.log("user signed out");
        }}
      >
        <Text style={styles.buttonTxt}>Sign Out</Text>
      </Pressable>
      </View>
    );
  };
  
  export default SignOutButton;

  const styles = StyleSheet.create({
    buttonCtr: {
      display: "flex",
      flexDirection: "row",      
      justifyContent: "flex-end",
      marginTop: 20,
      marginRight: -80,
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