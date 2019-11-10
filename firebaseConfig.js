import * as firebase from 'firebase';

export const  firebaseConfig = {
    apiKey: "AIzaSyDA8w5u6YoThqNS4fxPCOK7d5c4BMt-1F8",
    authDomain: "event-managemen.firebaseapp.com",
    databaseURL: "https://event-managemen.firebaseio.com",
    projectId: "event-managemen",
    storageBucket: "event-managemen.appspot.com",
    messagingSenderId: "962739547094",
    appId: "1:962739547094:web:02dbbd9d7597a2f95b1277",
    measurementId: "G-ZTJYPDGPLS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();