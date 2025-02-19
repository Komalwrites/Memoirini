import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getEvn } from "./getEnv";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = { 
  apiKey: getEvn("VITE_FIREBASE_API"),
  authDomain: "memoirini-blogapp.firebaseapp.com",
  projectId: "memoirini-blogapp",
  storageBucket: "memoirini-blogapp.firebasestorage.app",
  messagingSenderId: "894694047880",
  appId: "1:894694047880:web:f3de6405a8a9f10b795f3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }