// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBShcJqqrUZ3VFUDTVGLzOdOrgLi9M48Ok",
  authDomain: "netflixgpt-9a538.firebaseapp.com",
  projectId: "netflixgpt-9a538",
  storageBucket: "netflixgpt-9a538.appspot.com",
  messagingSenderId: "330480977995",
  appId: "1:330480977995:web:1b5dd45d18f8f0fdefa5ce",
  measurementId: "G-QQE9HPQ9JY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();