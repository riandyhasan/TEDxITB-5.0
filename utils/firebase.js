import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcwRardb8MdnBAbgKL5fY1tFX5uIvq9Hk",
  authDomain: "tedxitb-32001.firebaseapp.com",
  databaseURL: "https://tedxitb-32001-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tedxitb-32001",
  storageBucket: "tedxitb-32001.appspot.com",
  messagingSenderId: "587310095515",
  appId: "1:587310095515:web:a07d04d5d60478be4fba3e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
