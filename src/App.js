import "./App.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Layout from "./Components/Layout/Layout";
import LoginRoute from "./Components/LoginRoute/LoginRoute";

import firebase from "./Firebase.js";
// import * as firebase from 'firebase/app';
// import '@firebase/messaging';

function App() {
  const [login, setLogin] = useState(false);
  const [cookie] = useCookies([""]);

  // console.log(cookie);

  useEffect(() => {
    if (!cookie.eload_token) {
      setLogin(false);
    } else {
      setLogin(true);
      // navigate('/dashboard');
    }
  }, []);

  // useEffect(() => {
  //   const msg = firebase.messaging();
  //   msg.getToken().then((currentToken) => {
  //     if (currentToken) {
  //       console.log("token", currentToken);
  //     } else {
  //       firebase.messaging.Messaging.requestPermission().then(() => {
  //         return msg.getToken();
  //       }).then((newToken) => {
  //         console.log("token", newToken);
  //       }).catch((err) => {
  //         console.log("An error occurred while retrieving token.", err);
  //       });
  //     }
  //   }).catch((err) => {
  //     console.log("An error occurred while retrieving token.", err);
  //   });
  // }, []);

  useEffect(() => {
    const msg = firebase.messaging();
    msg
      .requestPermission()
      .then(() => {
        return msg.getToken();
      })
      .then((data) => {
        // console.log("token", data);
      });
  }, []);
  // useEffect(() => {
  //   const messaging = firebase.messaging();
  //   messaging
  //     .requestPermission()
  //     .then(() => messaging.getToken())
  //     .then((token) => {
  //       console.log("FCM token:", token);
  //       // Create message payload
  //       const payload = {
  //         notification: {
  //           title: "New message",
  //           body: "You have a new message from ChatGPT",
  //         },
  //         token: token,
  //       };
  //       // Send message to the user's device
  //       return firebase.messaging().send(payload);
  //     })
  //     .then(() => console.log("Notification sent successfully"))
  //     .catch((error) => console.error("Error sending notification:", error));
  // }, []);

  // console.log(login, "login");
  return (
    <>
      {login ? (
        <Layout login={login} setLogin={setLogin} />
      ) : (
        <LoginRoute setLogin={setLogin} />
      )}
    </>
  );
}

export default App;
