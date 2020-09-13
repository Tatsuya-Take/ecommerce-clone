import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9BSy3XOM2FyeyNaowxeuCT0QFwMEoCn8",
  authDomain: "ecommerce-clone-86587.firebaseapp.com",
  databaseURL: "https://ecommerce-clone-86587.firebaseio.com",
  projectId: "ecommerce-clone-86587",
  storageBucket: "ecommerce-clone-86587.appspot.com",
  messagingSenderId: "582121864520",
  appId: "1:582121864520:web:09034e9f4807df597f477d",
  measurementId: "G-0TVF2PV4P6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };