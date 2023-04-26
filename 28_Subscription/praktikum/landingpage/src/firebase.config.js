// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk3cW0nC3XG7ryk91vUjfJWKp_x77oC8Y",
  authDomain: "test-f80a6.firebaseapp.com",
  projectId: "test-f80a6",
  storageBucket: "test-f80a6.appspot.com",
  messagingSenderId: "691212131724",
  appId: "1:691212131724:web:e27a9defa5c05b1378caa9",
  measurementId: "G-KLWKWVL2X9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
