import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAMZKVH4AoEG9Y7rV61HOOfibAHanTYcD8",
  authDomain: "docsclone-728c3.firebaseapp.com",
  projectId: "docsclone-728c3",
  storageBucket: "docsclone-728c3.appspot.com",
  messagingSenderId: "480079393498",
  appId: "1:480079393498:web:6e9cb46816b95bb39eebe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Prepare Database
const db = getFirestore();

export {app, db};
