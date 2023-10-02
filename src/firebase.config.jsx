// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDIM6FOGMDR2NhHFZizqgNPxiXh47MvLo",
  authDomain: "sunglasses-fa7db.firebaseapp.com",
  projectId: "sunglasses-fa7db",
  storageBucket: "sunglasses-fa7db.appspot.com",
  messagingSenderId: "720966169418",
  appId: "1:720966169418:web:49f78eae5afde062dd87b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth
