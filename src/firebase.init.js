// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtxY6URDbWojlGByi4vWOO0hV7lIQtL18",
  authDomain: "ema-john-react-auth-15f0e.firebaseapp.com",
  projectId: "ema-john-react-auth-15f0e",
  storageBucket: "ema-john-react-auth-15f0e.appspot.com",
  messagingSenderId: "847259267912",
  appId: "1:847259267912:web:487843cf4da7992d15797d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;