import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyCtzg_UkSS_k-abZIK5TJRq8DO95Ew1Yxs",
  authDomain: "gdgpos-24892.firebaseapp.com",
  databaseURL: "https://gdgpos-24892.firebaseio.com",
  projectId: "gdgpos-24892",
  storageBucket: "gdgpos-24892.appspot.com",
  messagingSenderId: "110647537021",
  appId: "1:110647537021:web:f0dc8ba2a6a1172f",
  measurementId: "G-847PWW6V2N"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore: firebase.firestore(),
  auth:firebase.auth(),
  storage:firebase.storage(),
};