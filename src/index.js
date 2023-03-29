import React from "react";
import ReactDOM from "react-dom/client";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery/dist/jquery.min.js";
import "mdbreact/dist/css/mdb.css";
// import { CDBDataTable } from 'cdbreact';
import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from "react-router-dom";
import { persistStore } from "redux-persist";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./store";
import ContextStoreProvider from "./Components/contaxt";
const root = ReactDOM.createRoot(document.getElementById("root"));
let persistor = persistStore(store);
root.render(
  <CookiesProvider>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <React.StrictMode>
            
          <ContextStoreProvider>
            <App/>
          </ContextStoreProvider>
          
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
