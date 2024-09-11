import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Login/Login";
import ForgetPass from "../Login/ForgetPass";
import SetPass from "../Login/SetPass";

const LoginRoute = ({ setLogin }) => {
  return (
    <>
      <div className="d-flex">
        {/* <Router> */}

        {/* pages */}
        <div className="w-100 main-containt-Login">
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Login setLogin={setLogin} />} />
            <Route
              path="/ForgetPass"
              element={<ForgetPass setLogin={setLogin} />}
            />
            <Route path="/SetPass" element={<SetPass setLogin={setLogin} />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default LoginRoute;
