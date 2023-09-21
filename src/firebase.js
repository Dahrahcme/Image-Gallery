// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwWc__lc3oG2Vz1iSGu4lrIgBfgwEkAuk",
  authDomain: "image-gallery-aef7a.firebaseapp.com",
  projectId: "image-gallery-aef7a",
  storageBucket: "image-gallery-aef7a.appspot.com",
  messagingSenderId: "170999398552",
  appId: "1:170999398552:web:3dcacd2ecc8fe58f93d0ed"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 // Initialize Firebase Authentication
const auth = getAuth(app); // Initialize auth using getAuth

export { auth }; // Export the auth object for use in other parts of your app
