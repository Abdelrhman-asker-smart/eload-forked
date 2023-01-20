import React from "react";
import { Routes, Route, Router, NavLink } from "react-router-dom";
// import Home from "../Home/Home";
import Login from "../Login/Login";
import { useCookies } from "react-cookie";
import Navbar from "../Navbar/Navbar";
// import { useState, useEffect } from "react";
// import { useCookies } from "react-cookie";
import Dashbord from "../Dashboard/Dashbord";
import User from "../User/User"
import Sidebar from "../Sidebar/Sidebar";
import Logo from './Eloadlogo.png'
import Shipments from '../Shipments/Shipments.jsx'
import Reports from '../Reports/Reports.jsx'
import Shipmentsettings from "../Shipmentsettings/Shipmentsettings";
import Transactions from "../Transactions/Transactions";
import Personinformation from "../Personinformation/Personinformation.jsx";
import ItemInfo from "../Iteminfo/Iteminfo.jsx";
import Driver from "../Drivers/Drivers.jsx";

import './Layout.css';
import AllShipments from "../AllShipments/AllShipments";
import Partners from "../Partners/Partners";
import Allorders from "../Allorders/Allorders";
import Allitems from "../Allitems/Allitems";

const Layout = ({ setLogin }) => {
const [cookie, setCookie, removeToken] = useCookies([""]);
// const routes =[{
//   name:'/dashboard',component:<Dashbord />,
//   name:'/Shipments',component:<Shipments />,
//   name:'/user',component:<User />,
//   name:'/reports',component:<Reports />,
//   name:'/shipmentsettings',component:<Shipmentsettings />,
//   name:'/transactions',component:<Transactions />,
//   name:'/allshipments',component:<AllShipments />,
//   name:'/allorders',component:<Allorders />,
//   name:'/personinfo',component:<Personinformation />,
//   name:'/Serviceproviders/driver',component:<Driver />,
//   name:'/Serviceproviders/Partners',component:<Partners />,
//   name:'/iteminfo',component:<ItemInfo />,

// }]

  return (
    <>

      <div className="d-flex">
        {/* <Router> */}
        <Sidebar />
        

        {/* pages */}
        <div className="w-100 main-containt">
          <Navbar setLogin={setLogin} />
          <Routes>
            {/* {!cookie.eload_token && 
            
            <Route path="/login" element={<Login />} />
            } */}
            <Route path="/" element={<Dashbord />} />
            <Route path="/dashboard" element={<Dashbord />} />
            <Route path="/Shipments" element={<Shipments />} />
            <Route path="/user" element={<User />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/shipmentsettings" element={<Shipmentsettings />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/allshipments" element={<AllShipments />} />
            <Route path="/allorders" element={<Allorders />} />
            <Route path="/personinfo" element={<Personinformation />} />
            <Route path="/Serviceproviders/driver" element={<Driver />} />
            <Route path="/Serviceproviders/Partners" element={<Partners/>}/>
            <Route path="/iteminfo" element={<ItemInfo />} />
            <Route path="/allitems" element={<Allitems />} />


         
          {/* {
            routes.map((item,index)=>{
              <Route path={`${item.name}`} element={item.component} />
            })
          } */}

            {/* <Route
              path="*"
              {/* <Route
              element={
                <div className="d-flex justify-content-center py-5 ">
                  <p className="fs-1 fw-bold"> 404 </p>
                </div>
              }
            /> */}
          </Routes>
        </div>
        {/* </Router> */}
      </div>
    </>
  );
};

export default Layout;
