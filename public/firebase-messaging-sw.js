importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');


const firebaseConfig = {
 apiKey: "AIzaSyBSe6e2HvBNFK0Qx-xlc488LcpsSvfaxhI",
 authDomain: "e-load-driver.firebaseapp.com",
 projectId: "e-load-driver",
 storageBucket: "e-load-driver.appspot.com",
 messagingSenderId: "322380703973",
 appId: "1:322380703973:web:34cd3c435e4cc1b1120c0c",
 measurementId: "G-N52M7ZNJGY"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});