// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyX3XvtGQ6tXX5UIAc5EpWkDmwRBC0nto",
  authDomain: "kvcportfolio.firebaseapp.com",
  projectId: "kvcportfolio",
  storageBucket: "kvcportfolio.appspot.com",
  messagingSenderId: "197383719495",
  appId: "1:197383719495:web:63151d44b366999d7e3f62",
  measurementId: "G-0MQ55CE10X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);