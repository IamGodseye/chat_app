import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAGkJ2nXdA4sRoGJ5BNN_n_FYR6o2KoGvI",
    authDomain: "react-chat-app-84b5b.firebaseapp.com",
    projectId: "react-chat-app-84b5b",
    storageBucket: "react-chat-app-84b5b.appspot.com",
    messagingSenderId: "729340943701",
    appId: "1:729340943701:web:b75604e233cb03d9bb63dc",
  })
  .auth();
