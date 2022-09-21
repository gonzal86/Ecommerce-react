// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4j-E5VeXvoYgErh4hwjH4bOiIrkVPI3o",
  authDomain: "ecommerce-64771.firebaseapp.com",
  projectId: "ecommerce-64771",
  storageBucket: "ecommerce-64771.appspot.com",
  messagingSenderId: "645152016784",
  appId: "1:645152016784:web:d723fc147bed8c62a8cb15",
  measurementId: "G-MZX19QGTV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db