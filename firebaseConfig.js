import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqcMByR8RbG9X5pM3HNXizS6LPOoQI2mM",
  authDomain: "insta-stay-app.firebaseapp.com",
  projectId: "insta-stay-app",
  storageBucket: "insta-stay-app.appspot.com",
  messagingSenderId: "110282044493",
  appId: "1:110282044493:web:a0dbafd38f023e38dfd804"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app;