// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyD7DAU8Gx4T7tj4Py-sYprbQrE0K1_gbIY",
   authDomain: "movie-galaxy-18aea.firebaseapp.com",
   projectId: "movie-galaxy-18aea",
   storageBucket: "movie-galaxy-18aea.firebasestorage.app",
   messagingSenderId: "451559504916",
   appId: "1:451559504916:web:a9902ddf6a73e39133bb01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
