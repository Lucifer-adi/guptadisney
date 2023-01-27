import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCGJdMNlg5tIVR4AQtv6RXN6_ZiBvnKayc",
  authDomain: "disneyplus-clone-b3613.firebaseapp.com",
  projectId: "disneyplus-clone-b3613",
  storageBucket: "disneyplus-clone-b3613.appspot.com",
  messagingSenderId: "169795845538",
  appId: "1:169795845538:web:3599f6987b9d9c1394c6fb",
  measurementId: "G-J51SJJP40G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
