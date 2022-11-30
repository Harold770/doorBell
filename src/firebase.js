// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5-KJi3ABqVXdrwQo3IT6r7CVK5FBLG2E",
  authDomain: "doorbell-school.firebaseapp.com",
  databaseURL: "https://doorbell-school-default-rtdb.firebaseio.com",
  projectId: "doorbell-school",
  storageBucket: "doorbell-school.appspot.com",
  messagingSenderId: "239514347888",
  appId: "1:239514347888:web:133b2d68a112f06bb207b5",
  measurementId: "G-JF8M9GNG3L"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
