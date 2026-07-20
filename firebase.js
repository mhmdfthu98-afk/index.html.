import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where, orderBy, onSnapshot, serverTimestamp, increment } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyC0jzecEwKgHpxHpTi8Y-_bwwfzVdtgf3E",
    authDomain: "khasmshop.firebaseapp.com",
    projectId: "khasmshop",
    storageBucket: "khasmshop.firebasestorage.app",
    messagingSenderId: "238182001615",
    appId: "1:238182001615:web:d77391030a40a481b440ba"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { db, auth, storage, provider, collection, doc, addDoc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where, orderBy, onSnapshot, serverTimestamp, increment, ref, uploadBytes, getDownloadURL, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, signInWithPopup, onAuthStateChanged };