// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, db, analytics };
