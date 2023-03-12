import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "mdbreact/dist/css/mdb.css";
// import { CDBDataTable } from 'cdbreact';
import { persistStore } from "redux-persist";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import { Provider } from "react-redux";
import { store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
let persistor = persistStore(store);
root.render(
  <CookiesProvider>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </CookiesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
