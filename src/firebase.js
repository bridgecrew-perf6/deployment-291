//import firebase from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDpCf_6CAWka7tTxTDRvAlORZ_EuYQH8J8",
  authDomain: "clone-22997.firebaseapp.com",
  projectId: "clone-22997",
  storageBucket: "clone-22997.appspot.com",
  messagingSenderId: "455141456161",
  appId: "1:455141456161:web:7be0119193c2f73fb9a660",
  measurementId: "G-F18SMZ03WP"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };
  