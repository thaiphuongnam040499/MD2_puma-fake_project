// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDsWD4YFrAXfP1J6qpvIBwc35o0TZhtcA",
  authDomain: "md2-project.firebaseapp.com",
  projectId: "md2-project",
  storageBucket: "md2-project.appspot.com",
  messagingSenderId: "50684332449",
  appId: "1:50684332449:web:6bbb9ea992c1d34ddce3e0",
  measurementId: "G-QFQGVTTYTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);