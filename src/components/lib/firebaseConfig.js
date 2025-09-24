// lib/firebaseConfig.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAMWlECXYuPWivutdauKp-qjR7mNz41E60",
  authDomain: "water-3a274.firebaseapp.com",
  databaseURL: "https://water-3a274-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "water-3a274",
  storageBucket: "water-3a274.firebasestorage.app",
  messagingSenderId: "378242831857",
  appId: "1:378242831857:web:23accd214fc10638dc6050",
  measurementId: "G-Z7Z97XTWK6"
};

// Cek apakah sudah ada app yang diinisialisasi, kalau belum buat baru
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const database = getDatabase(app);

export { app, database };