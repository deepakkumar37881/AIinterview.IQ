
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/Auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aiinterview-4dc3b.firebaseapp.com",
  projectId: "aiinterview-4dc3b",
  storageBucket: "aiinterview-4dc3b.firebasestorage.app",
  messagingSenderId: "678959370193",
  appId: "1:678959370193:web:8f5aed889bbd6975e19af0"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}
