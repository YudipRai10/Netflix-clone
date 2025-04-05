import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhEiptL8ZZfQJHGV1_IK5SfB_tIwruHLg",
  authDomain: "react-netflix-clone-6d818.firebaseapp.com",
  projectId: "react-netflix-clone-6d818",
  storageBucket: "react-netflix-clone-6d818.firebasestorage.app",
  messagingSenderId: "415788117347",
  appId: "1:415788117347:web:34270a35c0962041b4b756",
  measurementId: "G-L05HR4TZYF",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
