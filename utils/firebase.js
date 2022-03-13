import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhVXUZK3IlwtSIKezH-QSFAkapwrPbWgE",
  authDomain: "tedx2-4e978.firebaseapp.com",
  projectId: "tedx2-4e978",
  storageBucket: "tedx2-4e978.appspot.com",
  messagingSenderId: "490621607208",
  appId: "1:490621607208:web:92cbd375bfd019ae5a041d",
  measurementId: "G-JR36HQCFM2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
