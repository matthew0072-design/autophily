
// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth, EmailAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";





const firebaseConfig = {
  apiKey: "AIzaSyBlsja8_S5q2WOi-9nX-EL7z43GAltWE2M",
  authDomain: "autophily-ecommerce-cafae.firebaseapp.com",
  projectId: "autophily-ecommerce-cafae",
  storageBucket: "autophily-ecommerce-cafae.appspot.com",
  messagingSenderId: "593853690855",
  appId: "1:593853690855:web:f85fb5aec7a9160b588342"
};

// Initialize Firebase


let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const provider = new EmailAuthProvider()

const auth = getAuth(app)
const db = getFirestore(app)


 
export { auth, db, provider }