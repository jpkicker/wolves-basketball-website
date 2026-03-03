// Firebase configuration for Wellington Wolves website
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDc3Cou936E8E-5azcRUp8l3fwf4ZushjE",
  authDomain: "wolves-website.firebaseapp.com",
  projectId: "wolves-website",
  storageBucket: "wolves-website.firebasestorage.app",
  messagingSenderId: "43967201205",
  appId: "1:43967201205:web:ab823da3e07035e44723fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };