import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";


const LoginRoute = ({ setLogin }) => {
  return (
    <>

      <div className="d-flex">
        {/* <Router> */}
        

        {/* pages */}
        <div className="w-100 main-containt">
          <Routes>
            <Route path="/" element={<Login setLogin={setLogin} />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default LoginRoute;
