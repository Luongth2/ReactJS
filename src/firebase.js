// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCL9RKBzIhGj2ppusEod29jXnzyWAjDqFE",
    authDomain: "sdsvn-378010.firebaseapp.com",
    projectId: "sdsvn-378010",
    storageBucket: "sdsvn-378010.appspot.com",
    messagingSenderId: "320694194430",
    appId: "1:320694194430:web:79cf08bd5331d0bbd1d5af",
    measurementId: "G-5P8QXWH56P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
