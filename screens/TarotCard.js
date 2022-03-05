import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View, FlatList } from "react-native";
import { useFonts, BebasNeue_400Regular, OpenSans_400Regular } from "@expo-google-fonts/dev";

import { getTarotCard } from "../services/tarot-api";
import SignOutButton from "../components/SignOutButton";


const TarotCard = (props) => {
  const[tarotCard, setTarotCard] = useState([]);
  console.log(tarotCard)

  //Access Google Fonts
  useFonts({
    BebasNeue_400Regular,
    OpenSans_400Regular,
  });

  /* Get API Data */
  async function getAppData() {
    const data = await getTarotCard();
    setTarotCard(data);
  }

  useEffect(() => {
    getAppData();
  }, []);

    return (
      <View style={styles.screenCtr}>
        <FlatList
            data={tarotCard.cards}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (<View style={styles.cardCtr}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.subTitle}>Description:</Text>
              <Text style={styles.content}>{item.desc}</Text>
              <Text style={styles.subTitle}>What does it mean?</Text>
              <Text style={styles.content}>{item.meaning_up}</Text>
              </View>
            )}
          />
          <View style={styles.btnCtr}>
          <SignOutButton />
          </View>
      </View>
    );
  };
  
  export default TarotCard;

  const styles = StyleSheet.create({
    screenCtr: {
      paddingTop: '10%',
      backgroundColor: "#fff",
      height: "100vh",
    },
    cardCtr: {
      
    },
    cardTitle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "BebasNeue_400Regular",
      fontStyle: "italic",
      fontSize: 40,
    },
    subTitle: {
      marginLeft: 25,
      marginTop: 25,
      marginBottom: -10,
      fontFamily: "BebasNeue_400Regular",
      fontStyle: "italic",
      fontSize: 20,
    },
    content: {
      margin: 20,
      fontFamily: "OpenSans_400Regular",
    },
    btnCtr: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }
  });