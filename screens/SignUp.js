import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { handleSignUp } from "../services/Firebase";


const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visible, setVisibility] = useState({ name: "eye-off" });

  //Toggles the eye icon to show the password
  const ToggleVisibilty = () => {
    if (visible.name === "eye") {
      setVisibility({ name: "eye-off" });
    } else {
      setVisibility({ name: "eye" });
    }
  };

  //Handles password visibility when the eye icon is pressed
  const secureTextEntry = () => {
    if (visible.name === "eye") {
      return false;
    } else if (visible.name === "eye-off") {
      return true;
    }
  };

  //Handles email input
  const handleEmailChange = (text) => {
    setEmail(text);
  };

  //Handles password input
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  //Handles confirm password input
  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  //Handles sign up
  const handleSubmit = async () => {
    if (email === "" && password !== confirmPassword && password === "" && confirmPassword === "") {
      console.error("Invalid Credentials");
    } else {
      try {
        await handleSignUp(email, password);
        navigation.navigate('Profile', { name: 'Profile' });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>
            Welcome! We're so excited you're here. Go ahead and make an account.
        </Text>
      <Pressable
          onPress={() =>
            navigation.navigate('SignIn', { name: 'SignIn' })
          }
          style={styles.registerContainer}
        >
          <Text>Already have one? Sign in <Text style={{ textDecorationLine: "underline"}}>here.</Text></Text>
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
          keyboardType="email-address"
          returnKeyType="next"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.password}
            defaultValue={password}
            onChangeText={handlePasswordChange}
            placeholder="Password"
            placeholderTextColor="grey"
            returnKeyType="next"
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
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.password}
            defaultValue={confirmPassword}
            onChangeText={handleConfirmPasswordChange}
            placeholder="Confirm Password"
            placeholderTextColor="grey"
            returnKeyType="go"
            secureTextEntry={secureTextEntry()}
            textContentType="password"
            keyboardType="default"
            autoCorrect={false}
          />
        </View>
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={{ fontSize: 20, fontFamily: "BebasNeue_400Regular", color:"#fff", fontStyle: "italic" }}>SIGN UP</Text>
        </Pressable>
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
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    backgroundColor: "#F5F5F5",
  },
  headerContainer: {
    width: "80%",
    marginBottom: 80,
    top: 40,
    fontSize: 12,
    color: "black",
    fontFamily: "OpenSans_400Regular",
  },
  registerContainer: {
    marginBottom: 60,
    top: 20,
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
    marginBottom: 40,
  },
});