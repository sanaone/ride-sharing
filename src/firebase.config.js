// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBagF_hMeevrC71TVMa1GSoofnw4gXb8MM",
  authDomain: "ride-sharing-otp.firebaseapp.com",
  projectId: "ride-sharing-otp",
  storageBucket: "ride-sharing-otp.appspot.com",
  messagingSenderId: "848099978064",
  appId: "1:848099978064:web:d8085217ec3629757c9a55",
  measurementId: "G-BKZXVJK8R7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
