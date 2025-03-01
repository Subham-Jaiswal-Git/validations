import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcRTVG5S6JsMVaJHvp-O1HybOx4XKl1cs",
  authDomain: "spk-infotech.firebaseapp.com",
  projectId: "spk-infotech",
  storageBucket: "spk-infotech.firebasestorage.app",
  messagingSenderId: "974093023273",
  appId: "1:974093023273:web:af37ed2fb156c3b6e94438",
  measurementId: "G-9W5JG3Z38Q"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };