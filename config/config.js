import firebase from 'firebase';

//Api details

const config = {
  apiKey: 'AIzaSyD2hiojT9H165T0fHqoJ-pIj-v3FswXQog',
  authDomain: 'aircnc-8c832.firebaseapp.com',
  databaseURL: 'https://aircnc-8c832.firebaseio.com',
  projectId: 'aircnc-8c832',
  storageBucket: 'aircnc-8c832.appspot.com',
  messagingSenderId: '398334300297',
  appId: '1:398334300297:web:60b7470b1a72669eab7658',
  measurementId: 'G-V4ZPG4JDPX',
};

firebase.initialseApp(config);

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
