// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/firebase-database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy_VI5l0IT_0ExQEN9tVcA_y2bhnFcoH8",
  authDomain: "miniblog2023.firebaseapp.com",
  projectId: "miniblog2023",
  storageBucket: "miniblog2023.appspot.com",
  messagingSenderId: "930239572427",
  appId: "1:930239572427:web:d9e13a1b5d6d00ca48ee4e",
  measurementId: "G-612NC1VKG7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase(app);

export default db;
