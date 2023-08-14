// import { initializeApp } from 'firebase/app';
// import 'firebase/messaging';
// import * as firebase from 'firebase/app';
// import firebase from 'firebase';

// Import the Firebase app module
import firebase from "firebase/app";

// Import the Firebase messaging module
import "firebase/messaging";

// import '@firebase/messaging';
// import {fcm} from '@google-cloud/firebase/fcm';

// import { initializeApp } from 'firebase/app';
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

var firebaseConfig = {
    // apiKey: "AIzaSyBSe6e2HvBNFK0Qx-xlc488LcpsSvfaxhI",
    apiKey: "AAAALoSLcS8:APA91bGnAdSSW7tjURZvPAqXa9hGghqW7m0sNBgq_nSEsvohDjFd_G_ISqAM6p2TIjo-7rpLJqkffwYeJtlv1FL78REA9t9yRHEQikGygWkTnlWT9ApmVZiBEKp5BBs1JtW2QgkB1dYn",
    authDomain: "e-load-driver.firebaseapp.com",
    projectId: "e-load-driver",
    storageBucket: "e-load-driver.appspot.com",
    messagingSenderId: "322380703973",
    appId: "1:322380703973:web:34cd3c435e4cc1b1120c0c",
    measurementId: "G-N52M7ZNJGY"
};
firebase.initializeApp(firebaseConfig);

export default firebase;