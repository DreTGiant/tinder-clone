import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXA4FW_Y7TWdlzG-6soRKHvTxyEZJ_eHY",
  authDomain: "tinder-clone-ef637.firebaseapp.com",
  databaseURL: "https://tinder-clone-ef637.firebaseio.com",
  projectId: "tinder-clone-ef637",
  storageBucket: "tinder-clone-ef637.appspot.com",
  messagingSenderId: "1004866605581",
  appId: "1:1004866605581:web:302cd4aeec94cf70723b44",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
