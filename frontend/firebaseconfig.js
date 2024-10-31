// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC89Xa34C7nB7V7qnrjI5LLpRMOQv344_s",
  authDomain: "strapex-66ee9.firebaseapp.com",
  projectId: "strapex-66ee9",
  storageBucket: "strapex-66ee9.appspot.com",
  messagingSenderId: "446749755615",
  appId: "1:446749755615:web:55705465a736f0970c816a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getFirestore } from "firebase/firestore";

let analytics;// let firestore;
if (firebaseConfig?.projectId) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }

  // Access Firebase services using shorthand notation
  //firestore = getFirestore();
}


// Initialize Firestore
export const db = getFirestore(app);