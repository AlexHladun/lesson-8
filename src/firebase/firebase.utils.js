import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDPdEvaFEN7g3JzYfnrun1KsDhR4ITFTRs",
  authDomain: "crwn-db-3ef84.firebaseapp.com",
  projectId: "crwn-db-3ef84",
  storageBucket: "crwn-db-3ef84.appspot.com",
  messagingSenderId: "113818550182",
  appId: "1:113818550182:web:8e92091c0017f79be65967",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
