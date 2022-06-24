// // Conveniently import this file anywhere to use db

// import firebase from 'firebase/app'
import 'firebase/firestore'

// export const db = firebase
//     .initializeApp({ projectId: 'tugasakhir-pwl' })
//     .firestore()


// // Export types that exists in Firestore - Uncomment if you need them in your app
// // const { Timestamp, GeoPoint } = firebase.firestore
// // export { Timestamp, GeoPoint }
// Import the functions you need from the SDKs you need
import {firestore, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFBJkD5nKOfeYoCXmPkkL54Z9oDnk6bGQ",
  authDomain: "tugasakhir-pwl.firebaseapp.com",
  projectId: "tugasakhir-pwl",
  storageBucket: "tugasakhir-pwl.appspot.com",
  messagingSenderId: "136991843597",
  appId: "1:136991843597:web:ecef8ad3ce2057d46f3c44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=firestore(app);