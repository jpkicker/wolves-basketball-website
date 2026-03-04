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

let db = null;

try {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (error) {
  console.error('Firebase initialization error:', error);
}

export { db };
