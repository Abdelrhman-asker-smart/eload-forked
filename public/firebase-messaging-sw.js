importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');


const firebaseConfig = {
 apiKey: "AAIzaSyA4AZnOZg3uW4wEV51O3XXCvQgUxRJyIDg",
 authDomain: "e-load-ebb26.firebaseapp.com",
 projectId: "e-load-ebb26",
 storageBucket: "e-load-ebb26.appspot.com",
 messagingSenderId: "199792226607",
 appId: "1:199792226607:web:6cfb087cbe257cf091f1da",
 measurementId: "G-H6ZXWJH1NF"
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