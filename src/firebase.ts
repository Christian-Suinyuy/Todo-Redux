// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASWRR9FXrM_whnAMHqLQmirAYxGnnh2xk",
  authDomain: "reduxtodo-d0f34.firebaseapp.com",
  projectId: "reduxtodo-d0f34",
  storageBucket: "reduxtodo-d0f34.firebasestorage.app",
  messagingSenderId: "378210195269",
  appId: "1:378210195269:web:4509c3d4485fb4b964502c",
  measurementId: "G-9S9LRYNZ6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)