import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDik34eUIvmQxwGQmyqkOQ9ZGPVZncBVPk",
    authDomain: "astro-app-8f4a1.firebaseapp.com",
    projectId: "astro-app-8f4a1",
    storageBucket: "astro-app-8f4a1.appspot.com",
    messagingSenderId: "901308597901",
    appId: "1:901308597901:web:5227d41a380ffb17a944c4",
    measurementId: "G-NZ063XY3S2"
  };

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  };

// SignUp Function
export const handleSignUp = async (email, password) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log(firebase.auth().currentUser);
        const user = firebase.auth().currentUser;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // SignIn Function
export const handleSignIn = async (email, password) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log(firebase.auth().currentUser);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //SignOut Function
export const handleSignout = async () => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Signed Out");
      })
      .catch((error) => {
        console.error(error);
      });
  };