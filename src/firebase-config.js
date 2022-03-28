import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyArDzDEPon8bJN5U-YH2QJv_dpkj8qW3YA",
  authDomain: "itinternshipjob.firebaseapp.com",
  projectId: "itinternshipjob",
  storageBucket: "itinternshipjob.appspot.com",
  messagingSenderId: "1052926059935",
  appId: "1:1052926059935:web:77229c6b3ca2f5dc7b89aa",
  measurementId: "G-EV8ZR4YHGX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()