// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDavReSdJDJj8sb-QHNvM3Yhw0PCJ0f4_k",
  authDomain: "tralive-bk-auth.firebaseapp.com",
  projectId: "tralive-bk-auth",
  storageBucket: "tralive-bk-auth.appspot.com",
  messagingSenderId: "570303581700",
  appId: "1:570303581700:web:dbc68ab00188ab7bc36f51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;

/* 
 firebase deploy
*/