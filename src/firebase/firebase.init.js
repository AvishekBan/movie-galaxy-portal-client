// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: import.meta.env.VITE_API_KEY,
   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
   projectId: import.meta.env.VITE_PROJECT_ID,
   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
   appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
