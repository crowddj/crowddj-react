import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAtnwNgh3qzpYFwurHb0Myg7k8ZLnRyTTA',
  authDomain: 'crowddj-be2bb.firebaseapp.com',
  databaseURL: 'https://crowddj-be2bb.firebaseio.com',
  storageBucket: 'crowddj-be2bb.appspot.com',
  messagingSenderId: '310782812217',
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
