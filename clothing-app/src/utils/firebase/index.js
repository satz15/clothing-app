// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy6Yj-_BaLYO7BLPzv-9EdV3U6NIEJA1M",
  authDomain: "clothing-app-c1e2e.firebaseapp.com",
  projectId: "clothing-app-c1e2e",
  storageBucket: "clothing-app-c1e2e.appspot.com",
  messagingSenderId: "214289502680",
  appId: "1:214289502680:web:02b2e8f1f2209937b1e2ad",
};

// Initialize Firebase
const CommerceApp = initializeApp(firebaseConfig);

// Authentication
const CommerceAuth = getAuth(CommerceApp);
// Sign in with google
const googleProvider = new GoogleAuthProvider();

const signInWithGooglePopup = async () => {
  try {
    const result = await signInWithPopup(CommerceAuth, googleProvider);
    // Handle successful sign-in
    console.log("Google sign-in successful:", result);
    return result;
  } catch (error) {
    // Handle errors
    console.error("Error signing in with Google:", error.message);
    throw error; // Rethrow the error to handle it elsewhere if needed
  }
};

const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(CommerceAuth, email, password);
};

const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(CommerceAuth, email, password);
};

// firestore database
const CommerceDb = getFirestore(CommerceApp);

const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(CommerceDb, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (err) {
      console.log("error creating the user", err.message);
    }
  }
  return userDocRef;
};

export {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
  getStorage,
};
