// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuOq09memRqxCqjBRUVl1eer_WtHEqveM",
  authDomain: "react-vargasrobles.firebaseapp.com",
  projectId: "react-vargasrobles",
  storageBucket: "react-vargasrobles.appspot.com",
  messagingSenderId: "225370119735",
  appId: "1:225370119735:web:fe5ebb1d67dbd3e2f969b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);