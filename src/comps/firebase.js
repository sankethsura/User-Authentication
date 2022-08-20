// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHgEnsHIv1qvEcQ0qxYR1MnRNpWKjFqw8",
  authDomain: "auth-development-34622.firebaseapp.com",
  projectId: "auth-development-34622",
  storageBucket: "auth-development-34622.appspot.com",
  messagingSenderId: "536451979097",
  appId: "1:536451979097:web:5c4d91f1d364df6f275e48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
