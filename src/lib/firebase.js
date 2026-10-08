import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA2lnBX2LPKymwyWyhGMuvvix2LBYRCvmk",
  authDomain: "usedmobile-84505.firebaseapp.com",
  projectId: "usedmobile-84505",
  storageBucket: "usedmobile-84505.firebasestorage.app",
  messagingSenderId: "84498885107",
  appId: "1:84498885107:web:61b686c1dd063dcd88ca86",
  measurementId: "G-WSH4KJG7MF"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
