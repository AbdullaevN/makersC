import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBT6ZlO_hVIkNsc2fuadyP1mCm1vfwvJIQ",
  authDomain: "silken-realm-165621.firebaseapp.com",
  projectId: "silken-realm-165621",
  storageBucket: "silken-realm-165621.appspot.com",
  messagingSenderId: "1045893664010",
  appId: "1:1045893664010:web:ce7e96391aed511f3c7ef3",
  measurementId: "G-42GL4EKRZN",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
