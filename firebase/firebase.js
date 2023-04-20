import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYD5eiSa2ucfxezGxE2UMwW-zN88W3Wo4",
  authDomain: "todo-app-14636.firebaseapp.com",
  projectId: "todo-app-14636",
  storageBucket: "todo-app-14636.appspot.com",
  messagingSenderId: "210135890572",
  appId: "1:210135890572:web:e2b64ad74c277c332bd9a9"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);