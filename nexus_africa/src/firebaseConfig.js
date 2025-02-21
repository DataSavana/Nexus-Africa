import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLMeOn2vOooGT6-cDtI-Aakw4jQxqXcAo",
  authDomain: "nexusafrica-a2644.firebaseapp.com",
  projectId: "nexusafrica-a2644",
  storageBucket: "nexusafrica-a2644.firebasestorage.app",
  messagingSenderId: "579418082140",
  appId: "1:579418082140:web:8fa001235cf3c5a91a4f99",
  measurementId: "G-PX8JL2NT4G",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User:", result.user);
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
};

export { auth, signInWithGoogle, signInWithPopup, provider, signOut };
