// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvghWmEKLvML0aGufsmFmWTELxgs03aSA",
    authDomain: "hhcodingtest.firebaseapp.com",
    projectId: "hhcodingtest",
    storageBucket: "hhcodingtest.appspot.com",
    messagingSenderId: "770679417670",
    appId: "1:770679417670:web:39c531cb45a7495d7e1347",
    measurementId: "G-3BBYB7S06L"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

/*
import firebase from "firebase";

require('dotenv').config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase config
const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID, 
}


console.log(firebaseConfig);

// init firebase
let instance;

export default function getFirebase() {
    if (typeof window !== "undefined") {
        if (instance) return instance;
        instance = firebase.initializeApp(firebaseConfig);
        return instance;
    }

    return null;
}
*/