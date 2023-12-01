// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy6Yj-_BaLYO7BLPzv-9EdV3U6NIEJA1M",
  authDomain: "clothing-app-c1e2e.firebaseapp.com",
  projectId: "clothing-app-c1e2e",
  storageBucket: "clothing-app-c1e2e.appspot.com",
  messagingSenderId: "214289502680",
  appId: "1:214289502680:web:02b2e8f1f2209937b1e2ad"
};

// Initialize Firebase
const CommerceApp = initializeApp(firebaseConfig);

// Authentication 
const CommerceAuth = getAuth(CommerceApp);
// Sign in with google 
const googleProvider = new GoogleAuthProvider();

const signInWithGooglePopup = () =>
signInWithPopup(CommerceAuth, googleProvider);



// firestore database
const CommerceDb = getFirestore(CommerceApp);

const createUserDocumentFromAuth = async(userAuth) => {
  if (!userAuth) return;
  console.log(userAuth);
  const userDocRef = doc(CommerceDb, 'users', userAuth.uid)
  console.log(userDocRef);
  const userSnapShot = await getDoc(userAuth);
  console.log(userSnapShot);
}


export {signInWithGooglePopup, createUserDocumentFromAuth};
