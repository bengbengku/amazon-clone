import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD79T6b9h0-mq8VvoxwkY67ahDEKc8DgXE",
    authDomain: "e-challenge-a9648.firebaseapp.com",
    databaseURL: "https://e-challenge-a9648.firebaseio.com",
    projectId: "e-challenge-a9648",
    storageBucket: "e-challenge-a9648.appspot.com",
    messagingSenderId: "782472227591",
    appId: "1:782472227591:web:2ae613f083d333a2a8f3a2",
    measurementId: "G-VSWMCFQ6TH"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };