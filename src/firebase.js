import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJ3LWTxnV1aAMxHESsfSY7kuURuQgudQA",
  authDomain: "local-auth-c509e.firebaseapp.com",
  databaseURL: "https://local-auth-c509e.firebaseio.com",
  projectId: "local-auth-c509e",
  storageBucket: "local-auth-c509e.appspot.com",
  messagingSenderId: "529294471024",
  appId: "1:529294471024:web:da5a615c81c8cb325fe9b5",
  measurementId: "G-RHGS3P5VEF",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
export default firebase;
