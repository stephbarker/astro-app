import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { handleSignIn } from "../services/Firebase";

const SignIn = ( {navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisibility] = useState({ name: "eye-off" });

  const ToggleVisibilty = () => {
    if (visible.name === "eye") {
      setVisibility({ name: "eye-off" });
    } else {
      setVisibility({ name: "eye" });
    }
  };

  const secureTextEntry = () => {
    if (visible.name === "eye") {
      return false;
    } else if (visible.name === "eye-off") {
      return true;
    }
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSignInClick = async () => {
    if (email === "" || password === "") {
      console.error("Invalid Credentials");
    } else {
      try {
        await handleSignIn(email, password);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <Pressable
        onPress={() => {
          navigation.navigate('SignUp', { name: 'SignUp' })
        }}
          style={{
            alignItems: "center",
            justifyContent: "center",
            top: "50%",
            height: 30,
          }}
        >
          <Text
            style={{
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
              color: "black",
              fontFamily: "OpenSans_400Regular"
            }}
          >
            Don't have an account? Sign up <Text style={{textDecorationLine:"underline"}}>here.</Text>
          </Text>
        </Pressable>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.email}
          defaultValue={email}
          onChangeText={handleEmailChange}
          textContentType="emailAddress"
          placeholder="E-mail Address"
          placeholderTextColor="grey"
          returnKeyType="next"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.password}
            defaultValue={password}
            onChangeText={handlePasswordChange}
            placeholder="Password"
            placeholderTextColor="grey"
            returnKeyType="go"
            secureTextEntry={secureTextEntry()}
            textContentType="password"
            keyboardType="default"
            autoCorrect={false}
          />
          <Ionicons
            name={visible.name}
            size={24}
            color="grey"
            style={styles.eyeContainer}
            onPress={ToggleVisibilty}
          />
        </View>
        <Pressable style={styles.button} onPress={handleSignInClick}>
          <Text style={{ fontSize: 20, fontFamily: "BebasNeue_400Regular", color:"#fff", fontStyle: "italic" }}>LOG IN</Text>
        </Pressable>
      </View>
      <View>
      <Text
            style={{
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
              color: "black",
              fontFamily: "OpenSans_400Regular",
              marginTop: 20,
            }}
          >
            Need help? Contact info@help.com for assistance.
          </Text>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#F5F5F5",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent:"center",
    width: "80%",
    height: 50,
    marginBottom: 40,
    top: -20,
  },
  form: {
    width: "80%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    top: -40,
  },
  email: {
    width: "100%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 35,
    padding: 10,
    fontSize: 12,
    fontFamily: "OpenSans_400Regular",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  password: {
    width: "100%",
    height: 40,
    borderRadius: 5,
    marginBottom: 35,
    padding: 10,
    fontSize: 12,
    fontFamily: "OpenSans_400Regular",
  },

  passwordContainer: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 35,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  eyeContainer: {
    position: "absolute",
    right: 10,
    top: 10,
  },

  button: {
    width: "50%",
    height: 50,
    backgroundColor: "#FF512F",
    backgroundImage: "linear-gradient(to right, #FF512F, #DD2476)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    height: 35,
    width: 100,
    top: 30,
    padding: 10,
  },
});