// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg2_AxVZLZ_fCdBJUIT88Ir5T9kTZz7xc",
  authDomain: "redux-fdab0.firebaseapp.com",
  projectId: "redux-fdab0",
  storageBucket: "redux-fdab0.appspot.com",
  messagingSenderId: "417734250719",
  appId: "1:417734250719:web:67eeed428c1c09abe0d96a",
  measurementId: "G-DYBHQS1NSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app