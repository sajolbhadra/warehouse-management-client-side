// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtv6sLkNNdeZlTz6I0ua4L9ERjfdGLWr8",
  authDomain: "ent-warehouse.firebaseapp.com",
  projectId: "ent-warehouse",
  storageBucket: "ent-warehouse.appspot.com",
  messagingSenderId: "465964934064",
  appId: "1:465964934064:web:49cc6a3ab89650b7606c75",
  measurementId: "G-Q5GPN77F81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;