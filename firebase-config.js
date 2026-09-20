// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
window.BIERWANDERUNG_FIREBASE_CONFIG = {
  apiKey: "AIzaSyDavFy9GIG9XUB01vEIcKq0r9d0Lm2IkxI",
  authDomain: "bierwanderung-live.firebaseapp.com",
  databaseURL: "https://bierwanderung-live-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bierwanderung-live",
  storageBucket: "bierwanderung-live.firebasestorage.app",
  messagingSenderId: "216012446890",
  appId: "1:216012446890:web:5a07c3c2c42b461d8004d3",
  measurementId: "G-RVQ3ZEVCBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);