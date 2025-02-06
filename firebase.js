import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
import { getAuth,
    createUserWithEmailAndPassword,
 } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
 import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDZcmrNANX_jokUu0CUFLJr3zLKMFF8SrQ",
  authDomain: "first-project-76be1.firebaseapp.com",
  projectId: "first-project-76be1",
  storageBucket: "first-project-76be1.firebasestorage.app",
  messagingSenderId: "336585617785",
  appId: "1:336585617785:web:3fa0cddd7f70a1c56ebfa8",
  measurementId: "G-PMFQG8BZS3"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    auth,
    createUserWithEmailAndPassword,
    collection,
    addDoc,
    db,
}