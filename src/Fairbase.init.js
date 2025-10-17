// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOl62qz93yn-nDXEU90AiI1Vm06i82WR0",
  authDomain: "consop-section.firebaseapp.com",
  projectId: "consop-section",
  storageBucket: "consop-section.firebasestorage.app",
  messagingSenderId: "53838593521",
  appId: "1:53838593521:web:d0ba399f98eaccd7f89850",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
