// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNSeeZdlTfBRdcGGOT4BRG4OWF-Mj6NNE",
  authDomain: "e-rentals-fa060.firebaseapp.com",
  projectId: "e-rentals-fa060",
  storageBucket: "e-rentals-fa060.appspot.com",
  messagingSenderId: "195418432897",
  appId: "1:195418432897:web:481174e5e9263c7b4ff480",
  measurementId: "G-35EMFGPTFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);