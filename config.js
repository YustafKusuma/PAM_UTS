import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBewORgqJKBoUrW3oXCLEoRcW3QFFv6VbE",
  authDomain: "notaking-c3ecd.firebaseapp.com",
  projectId: "notaking-c3ecd",
  storageBucket: "notaking-c3ecd.appspot.com",
  messagingSenderId: "1027799772261",
  appId: "1:1027799772261:web:a2a8a208fa29bfa2ef2a8c",
  measurementId: "G-FWF35MRBNH"
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};