import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDE406pS8ELr0Mj7TrGVdEf-Lbb1-r3W6A",
  authDomain: "disney-clone-2ced9.firebaseapp.com",
  projectId: "disney-clone-2ced9",
  storageBucket: "disney-clone-2ced9.appspot.com",
  messagingSenderId: "484235938172",
  appId: "1:484235938172:web:4b82dfb348480bc7163cf9",
  measurementId: "G-LG5NX9M5KC",
};

export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
