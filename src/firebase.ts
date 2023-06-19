import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJ6Yzzj_xTiO9SM1KG22i9GrhsYCZqRnU",
  authDomain: "discord-clone-udemy-723ba.firebaseapp.com",
  projectId: "discord-clone-udemy-723ba",
  storageBucket: "discord-clone-udemy-723ba.appspot.com",
  messagingSenderId: "591779283753",
  appId: "1:591779283753:web:94f309245b6932721f2d38",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
