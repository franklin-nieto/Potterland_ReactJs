import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJmHijwgx7lKDE59B1NA8mDmq8SKArq68",
  authDomain: "backendpotter-68e5c.firebaseapp.com",
  projectId: "backendpotter-68e5c",
  storageBucket: "backendpotter-68e5c.appspot.com",
  messagingSenderId: "876617456669",
  appId: "1:876617456669:web:19411e777fa5050a657af4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)