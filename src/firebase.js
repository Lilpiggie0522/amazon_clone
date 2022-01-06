// // import { initializeApp } from 'firebase/app';
// // v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBtXJ8iaUtU4DQEdGjaaU5T_sM7ozRxA84",
//   authDomain: "clone-59b9c.firebaseapp.com",
//   projectId: "clone-59b9c",
//   storageBucket: "clone-59b9c.appspot.com",
//   messagingSenderId: "434127528882",
//   appId: "1:434127528882:web:a18518184d8804dd1afaab",
//   measurementId: "G-0RMLKQQ1N9"
// };

//   const firebaseApp = firebase.initializeApp(firebaseConfig);

//   const db = firebaseApp.firestore();
//   const auth = firebase.auth();

//   export { db, auth };


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBevLsVUGBBy9E-2J7YE1YQ42HyZVuwfZU",
  authDomain: "clone-25fa5.firebaseapp.com",
  projectId: "clone-25fa5",
  storageBucket: "clone-25fa5.appspot.com",
  messagingSenderId: "275451750690",
  appId: "1:275451750690:web:3c84e17df67f89ee30dd7b",
  measurementId: "G-2CXHX077KX"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };