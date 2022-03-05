import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";

const Detail = ({ navigation, route }) => {
    const { horoscope } = route.params;
    return (
      <View>
        <Text>{horoscope.sign}</Text>
        <Text>{horoscope.daily}</Text>
        <Pressable onPress={() => navigation.navigate('TarotCard', { name: 'TarotCard' })}>
             <Text>Random Tarot Card?</Text>
           </Pressable>   
      </View>
    );
  };
  
  export default Detail;