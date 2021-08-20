import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDbkk3C92lDueI3rDfVPtRMjBXDipoe9bs",

  authDomain: "netflix-clone-4f9ea.firebaseapp.com",

  projectId: "netflix-clone-4f9ea",

  storageBucket: "netflix-clone-4f9ea.appspot.com",

  messagingSenderId: "208674900592",

  appId: "1:208674900592:web:3f0ee80a15aff77dc442b5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
