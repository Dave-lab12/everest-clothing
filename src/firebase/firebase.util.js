import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyBj19RY_YzN0tSewY03GsdlG9vTYyMby6M",
  authDomain: "everest-db-3e3d0.firebaseapp.com",
  databaseURL: "https://everest-db-3e3d0.firebaseio.com",
  projectId: "everest-db-3e3d0",
  storageBucket: "everest-db-3e3d0.appspot.com",
  messagingSenderId: "567721154331",
  appId: "1:567721154331:web:7ca1e20394bb3381be25be",
  measurementId: "G-NKDM3SQD7J",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
