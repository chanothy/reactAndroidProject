// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyDOoUVUdI4nh-rqkJjom0zIub3O4XjExiQ",

  authDomain: "reactproject-79ac1.firebaseapp.com",

  projectId: "reactproject-79ac1",

  storageBucket: "reactproject-79ac1.appspot.com",

  messagingSenderId: "521502596564",

  appId: "1:521502596564:web:2e33053e4f9786b329ca41",

  measurementId: "G-N2ZMVS0QP2"

};


// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);