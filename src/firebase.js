import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: "shousetu-d117d",
  storageBucket: "shousetu-d117d.appspot.com",
  messagingSenderId: "365948322096",
  appId: process.env.APP_ID,
  measurementId: "G-7GYCFZWL3B"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(); 

export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export default db;
