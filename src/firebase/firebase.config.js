// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUKJdc3e4MvNEdxnPOHY53REugwBxprB8",
  authDomain: "client-assignment10.firebaseapp.com",
  projectId: "client-assignment10",
  storageBucket: "client-assignment10.appspot.com",
  messagingSenderId: "880217192546",
  appId: "1:880217192546:web:38c606edcd55bb7347f93b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app