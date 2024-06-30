import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCLmIr67M4aAoxJ-0BE3v50ObQg0UdegFo",
    authDomain: "fir-54785.firebaseapp.com",
    projectId: "fir-54785",
    storageBucket: "fir-54785.appspot.com",
    messagingSenderId: "38141617015",
    appId: "1:38141617015:web:8caf903c02370a360ff772",
    measurementId: "G-CBXKQTK771"
};

const Firebase = firebase.initializeApp(firebaseConfig);

export const auth = Firebase.auth(); // Export auth if you need it separately
export const firestore = Firebase.firestore(); // Export firestore if you need it separately

export default Firebase;