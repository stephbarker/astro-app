import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View, FlatList } from "react-native";

import { getTarotCard } from "../services/tarot-api";


const TarotCard = (props) => {
  const[tarotCard, setTarotCard] = useState([]);
  console.log(tarotCard)

  /* Get API Data */
  async function getAppData() {
    const data = await getTarotCard();
    setTarotCard(data);
  }

  useEffect(() => {
    getAppData();
  }, []);

    return (
      <View>
        <FlatList
            data={tarotCard.cards}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.name}{'\n'}Description:{'\n'}{item.desc}{'\n'}What does it mean?{'\n'}{item.meaning_up}</Text>
            )}
          />
      </View>
    );
  };
  
  export default TarotCard;