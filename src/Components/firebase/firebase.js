// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWfq4v5jbLvdMLVq52hgSyp31TP7CM6zM",
  authDomain: "orderpal-d0358.firebaseapp.com",
  projectId: "orderpal-d0358",
  storageBucket: "orderpal-d0358.appspot.com",
  messagingSenderId: "794201066367",
  appId: "1:794201066367:web:bd7db81ecc2b0fad3be84a",
  measurementId: "G-024STJDVLC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app);
