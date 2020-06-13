import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyApiVQTAL9Qr0xBWkYsjoESyVB--9LQwck",
  authDomain: "shousetu-d117d.firebaseapp.com",
  databaseURL: "https://shousetu-d117d.firebaseio.com",
  projectId: "shousetu-d117d",
  storageBucket: "shousetu-d117d.appspot.com",
  messagingSenderId: "365948322096",
  appId: "1:365948322096:web:eb04487a29ea100f5888f5",
  measurementId: "G-7GYCFZWL3B"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(); 

export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export default db;
