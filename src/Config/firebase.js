import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: replace with your own config
const firebaseConfig = {
  apiKey: "AIzaSyDNLNKLK9BalJ6sRn0jD5Zchnc7wJlF6Cc",
  authDomain: "dts-auth-4f41f.firebaseapp.com",
  projectId: "dts-auth-4f41f",
  storageBucket: "dts-auth-4f41f.appspot.com",
  messagingSenderId: "128557030534",
  appId: "1:128557030534:web:a81f245c58cb0df77f4507",
  measurementId: "G-VXVG2EC54P",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
