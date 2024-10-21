// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0PA1Mc5TeMq7IzBdc6gaXzGCiPbmITNY",
  authDomain: "netflixgpt-8345e.firebaseapp.com",
  projectId: "netflixgpt-8345e",
  storageBucket: "netflixgpt-8345e.appspot.com",
  messagingSenderId: "900851819397",
  appId: "1:900851819397:web:0818d6afceb3a805141aec",
  measurementId: "G-JJ1SY8DZKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();