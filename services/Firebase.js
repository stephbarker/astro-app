import firebase from "firebase";

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
