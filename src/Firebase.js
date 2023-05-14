// import { initializeApp } from 'firebase/app';
// import 'firebase/messaging';
// import * as firebase from 'firebase/app';
import firebase from 'firebase';
// import '@firebase/messaging';
// import {fcm} from '@google-cloud/firebase/fcm';

// import { initializeApp } from 'firebase/app';
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

var firebaseConfig = {
    apiKey: "AIzaSyBSe6e2HvBNFK0Qx-xlc488LcpsSvfaxhI",
    authDomain: "e-load-driver.firebaseapp.com",
    projectId: "e-load-driver",
    storageBucket: "e-load-driver.appspot.com",
    messagingSenderId: "322380703973",
    appId: "1:322380703973:web:34cd3c435e4cc1b1120c0c",
    measurementId: "G-N52M7ZNJGY"
};
firebase.initializeApp(firebaseConfig);

export default firebase;