// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
//for using the auth service
import { getAuth } from "firebase/auth";
//for using the database
import "firebase/compat/firestore";

import "firebase/compat/auth";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFn4AtVdaO5wBmidvBV7J85Dx7VALkSXU",
  authDomain: "clone-ec584.firebaseapp.com",
  projectId: "clone-ec584",
  storageBucket: "clone-ec584.appspot.com",
  messagingSenderId: "458930854589",
  appId: "1:458930854589:web:a6811b07aeec67a41675d4",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);//so Auth is An object
export const db = app.firestore();
