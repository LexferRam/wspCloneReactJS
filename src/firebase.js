import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAm13sY41i7R9BS5aFkoFbECie87NSx4qE",
  authDomain: "whatsapp-clone-lexfer.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-lexfer.firebaseio.com",
  projectId: "whatsapp-clone-lexfer",
  storageBucket: "whatsapp-clone-lexfer.appspot.com",
  messagingSenderId: "1003192209820",
  appId: "1:1003192209820:web:717e1c06d002051026b859",
  measurementId: "G-N8XL4HGB7E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
