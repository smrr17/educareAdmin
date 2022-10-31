import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBkNyKk4iR4Ga67L8_tc7XIx-Qs8Lnelfs",
  authDomain: "e-voting-system-f7b9d.firebaseapp.com",
  projectId: "e-voting-system-f7b9d",
  storageBucket: "e-voting-system-f7b9d.appspot.com",
  messagingSenderId: "1037993377293",
  appId: "1:1037993377293:web:2c9a1ccf7279ca5a279f44",
  measurementId: "G-VP3S42ENMQ",
};

export const firebaseExported = firebase.initializeApp(firebaseConfig);
export const db = firebaseExported.storage();
