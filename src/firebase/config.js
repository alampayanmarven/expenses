// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4M6UX5UxlSRMB4T5m4nS9N0gUDbkbGbM",
  authDomain: "firebaiz.firebaseapp.com",
  projectId: "firebaiz",
  storageBucket: "firebaiz.appspot.com",
  messagingSenderId: "76550074494",
  appId: "1:76550074494:web:d4a26bfbe5122928c8682f",
  measurementId: "G-FWYC48MT5P"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
export default db