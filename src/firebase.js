// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClUNlJk64rKacwXvqxgFl5XcQfBkGmUjE",
  authDomain: "color-palette-5c890.firebaseapp.com",
  projectId: "color-palette-5c890",
  storageBucket: "color-palette-5c890.appspot.com",
  messagingSenderId: "245953098473",
  appId: "1:245953098473:web:0b6a987402001397677678",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
