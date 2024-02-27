// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// require("dotenv").config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// let firebaseConfig = {
//   apiKey: "AIzaSyBWfq4v5jbLvdMLVq52hgSyp31TP7CM6zM",
//   authDomain: "orderpal-d0358.firebaseapp.com",
//   projectId: "orderpal-d0358",
//   storageBucket: "orderpal-d0358.appspot.com",
//   messagingSenderId: "794201066367",
//   appId: "1:794201066367:web:bd7db81ecc2b0fad3be84a",
//   measurementId: "G-024STJDVLC",
// };

let firebaseConfig = {
  apiKey: process.env.REACT_APP_firebase_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: "orderpal-d0358.appspot.com",
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

console.log(process.env.REACT_APP_firebase_apiKey);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app);
