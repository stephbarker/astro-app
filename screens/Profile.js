import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { handleSignout } from  "../services/Firebase";
import firebase from "firebase/compat/app";

const Profile = ( {navigation }) => {
  return (
    <View style={styles.container}>
      <Text>{firebase.auth().currentUser.email}</Text>

      <Pressable
        style={styles.button}
        onPress={() => {
          handleSignout();
          navigation.navigate('SignIn', { name: 'SignIn' })
          console.log("user signed out");
        }}
      >
        <Text>sign out</Text>
      </Pressable>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    position: "absolute",
    top: 25,
    backgroundColor: "#11DDAA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    height: 55,
    width: 55,
  },
});