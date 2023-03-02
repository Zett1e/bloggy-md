// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAByybHPG2Zhikr93aKLQYZq2vxe4ygQL4",
  authDomain: "bloggy-md.firebaseapp.com",
  projectId: "bloggy-md",
  storageBucket: "bloggy-md.appspot.com",
  messagingSenderId: "1056592483060",
  appId: "1:1056592483060:web:23f18b12bd996ab391c4a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}