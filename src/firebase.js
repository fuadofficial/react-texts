// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCLmIr67M4aAoxJ-0BE3v50ObQg0UdegFo",
    authDomain: "fir-54785.firebaseapp.com",
    projectId: "fir-54785",
    storageBucket: "fir-54785.appspot.com",
    messagingSenderId: "38141617015",
    appId: "1:38141617015:web:8caf903c02370a360ff772",
    measurementId: "G-CBXKQTK771"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
