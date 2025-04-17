// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7Ag-67LIl8y_OI_9WdNnEOjoEno_R-6E",
  authDomain: "devday-web.firebaseapp.com",
  projectId: "devday-web",
  storageBucket: "devday-web.firebasestorage.app",
  messagingSenderId: "402342278208",
  appId: "1:402342278208:web:5c4d19ebe08757a49fdba5",
  measurementId: "G-SNYCKHF2SX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only in browser environment
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics }; 