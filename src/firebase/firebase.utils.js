import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyA37pu23MGobthj3UKT0wonOmqvki2YaQU",
    authDomain: "crwn-db-49787.firebaseapp.com",
    databaseURL: "https://crwn-db-49787.firebaseio.com",
    projectId: "crwn-db-49787",
    storageBucket: "crwn-db-49787.appspot.com",
    messagingSenderId: "1028741915044",
    appId: "1:1028741915044:web:56f5a6603c005436c62131",
    measurementId: "G-TYQJR5ZFW9"
  }
  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore =firebase.firestore();


  const provider =new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle =()=> auth.signInWithPopup(provider);
  
  export default firebase;