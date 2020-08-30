import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBItiXhPs-yl2PoV5bwXj4HW5UFcZBbcaM',
  authDomain: 'twitter-clone-c2266.firebaseapp.com',
  databaseURL: 'https://twitter-clone-c2266.firebaseio.com',
  projectId: 'twitter-clone-c2266',
  storageBucket: 'twitter-clone-c2266.appspot.com',
  messagingSenderId: '564550012070',
  appId: '1:564550012070:web:dd8dfd35e9b6d6b7397867',
  measurementId: 'G-84P8320TNC',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
