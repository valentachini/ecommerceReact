// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_I8Wqew-9xVrHfr5kk1tRXeqcEePwMGw",
  authDomain: "ecommerce-coderhouse-ca456.firebaseapp.com",
  projectId: "ecommerce-coderhouse-ca456",
  storageBucket: "ecommerce-coderhouse-ca456.appspot.com",
  messagingSenderId: "612501275616",
  appId: "1:612501275616:web:5f77d6f62d1668b5482185"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp=() =>{
    return app}
