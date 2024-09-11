import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "../Home/Home";
// import Login from "../Login/Login";
// import { useCookies } from "react-cookie";
import Navbar from "../Navbar/Navbar";
// import { useState, useEffect } from "react";
// import { useCookies } from "react-cookie";
// =====admins
import AllAdmins from "../Admins/allAdmin/allAdmins.jsx";
import AddAdmins from "../Admins/addUser/addadmin.jsx";

//==============
import Dashbord from "../Dashboard/Dashbord";
import User from "../User/User";
import Sidebar from "../Sidebar/Sidebar";
// import Logo from './Eloadlogo.png'
import Shipments from "../Shipments/Shipments.jsx";
import AddAddress from "../AddAddress/AddAddress.jsx";
import GroupList from "../GroupList/GroupList.jsx";
import AddNewGroup from "../AddnewGroup/AddnewGroup.jsx";
// import Reports from '../Reports/Reports.jsx'

import Personinformation from "../Personinformation/Personinformation.jsx";
import ItemInfo from "../Iteminfo/Iteminfo.jsx";
import Driver from "../Drivers/Drivers.jsx";
import AddDriver from "../Drivers/AddDriver/AddDriver.jsx";

// AddDriver

import "./Layout.css";
import AllShipments from "../AllShipments/AllShipments";
import Partners from "../Partners/Partners";
import Allorders from "../Allorders/Allorders";
import Allitems from "../Allitems/Allitems";
// import OverallReport from "../OverallReport/OverallReport.jsx"
// import Financialrequests from '../FinancialList/FinancialList.jsx';
import Rewards from "../Rewards/Rewards.jsx";
import MyRewards from "../Rewards/my-rewards.jsx";
import ViewDriver from "../Drivers/ViewDriver/ViewDriver";
import CategoryList from "../Setting/Category list/Category-List";
import CategortAdd from "../Setting/Category list/Categort-Add";
import TruckList from "../Setting/Truck/TruckList.jsx";
import AddTruck from "../Setting/Truck/AddTruck";
import ShipmentTypes from "../Setting/Shipment types/ShipmentTypes";
import AddShipment from "../Setting/Shipment types/AddShipment";
import Measurements from "../Setting/Unit-Measurements/Measurements";
import AddMeasurements from "../Setting/Unit-Measurements/AddMeasurements";
import Commodities from "../Setting/Commodities/Commodities";
import Addcommodities from "../Setting/Commodities/Addcommodities";
import CountriesList from "../Setting/Countries/CountriesList.jsx";
import StatesList from "../Setting/States/StatesList.jsx";
import CitiesList from "../Setting/Cities/CitiesList.jsx";
import Addpartners from "../Addpartners/Addpartners";
import EditCategory from "../Setting/Category list/EditCategory";
import EditTruck from "../Setting/Truck/EditTruck";
import EditMeasurements from "../Setting/Unit-Measurements/EditMeasurement";
import Editcommodities from "../Setting/Commodities/EditCommodities";
import Editshipment from "../Setting/Shipment types/Editshipment";
import AddShippers from "../AddShippers/AddShippers";
import AllShippers from "../AllShippers/AllShippers";
import ShipmentOrder from "../ShipmentOrder/ShipmentOrder";
import Profile from "../ProfilePage/Profile";
import EditProfile from "../ProfilePage/EditProfile";
import ViewShipper from "../ViewShipper/ViewShipper";
import Employes from "../Employees/Employees";
import AddEmployees from "../Employees/AddEmployees";
import EditDriver from "../Drivers/AddDriver/EditDriver";
import Drivers from "./../Drivers/Drivers";
import EditItem from "../Iteminfo/editItem";
import Wallet from "../Wallet/Wallet";
import Invoice from "../Invoice/Invoice";
import ViewPartner from "../Partners/ViewPartner";
import PartDriverList from "../Partners/PartDriver/PartDriverList";
import AddDriverPart from "../Partners/PartDriver/Adddriver";
import EditPrtDriver from "../Partners/PartDriver/EditPrtDriver";
import EditPartners from "../Addpartners/Editpartners";
import ViewDriverP from "../Partners/PartDriver/ViewDriverP";

// part-truck
import TruclListPartner from "../Partners/PertTrucks/TruckListPartner.jsx";
import AddTruckP from "../Partners/PertTrucks/AddTruckP";
import EditTruckP from "../Partners/PertTrucks/EditTruckP";

import Details from "../order/Details";
import EditShipper from "../AddShippers/EditShipper";
import EditGroup from "../AddnewGroup/EditGroup";
import AddressList from "./../AddressList/addressList";
import EditAddress from "../AddAddress/EditAddress";

import { useEffect, useState } from "react";
import LoginRoute from "../LoginRoute/LoginRoute.jsx";
import Login from "../Login/Login.jsx";
import ForgetPass from "../Login/ForgetPass.jsx";
import SetPass from "../Login/SetPass.jsx";

// import firebase from "../../Firebase";

const Layout = ({ setLogin }) => {
  // useEffect(() => {
  //   const messaging = firebase.messaging()
  //   messaging.requestPermission().then(()=>{
  //     return messaging.getToken()
  //   }).then(token=>{
  //     console.log('Token :' , token)
  //   }).catch(()=>{
  //     console.log('error');
  //   })

  // }, []);

  // const [cookie, setCookie, removeToken] = useCookies([""]);
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
  //   name:'/driver',component:<Driver />,
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
            {/* user-All Admins */}
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/SetPass" element={<SetPass />} />
            <Route path="/ForgetPass" element={<ForgetPass />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/all-admins" element={<AllAdmins />} />
            {/* AddAdmins */}
            <Route path="/add-admins" element={<AddAdmins />} />

            {/* profile-route */}
            <Route path="/profilepage" element={<Profile />} />
            <Route path="/editprofile" element={<EditProfile />} />

            {/* dashboard */}
            <Route path="/" element={<Dashbord />} />
            <Route path="/dashboard" element={<Dashbord />} />
            <Route path="/Shipments" element={<Shipments />} />

            {/* service--partner */}
            <Route path="/Partners" element={<Partners />} />
            <Route path="/Partners/addpartners" element={<Addpartners />} />
            <Route
              path="/Partners/editpartner/:id"
              element={<EditPartners />}
            />
            <Route path="/Partners/viewpartner/:id" element={<ViewPartner />} />
            {/* drivers */}
            <Route
              path="/Partners/part-driverlist/:id"
              element={<PartDriverList />}
            />
            <Route
              path="/Partners/part-adddriver/:id"
              element={<AddDriverPart />}
            />
            <Route
              path="/Partners/part-editdriver/:id"
              element={<EditPrtDriver />}
            />
            <Route
              path="/Partners/viewdriver-partner/:id"
              element={<ViewDriverP />}
            />
            {/* truck-partner */}
            <Route
              path="/Partners/part-trucklist/:id"
              element={<TruclListPartner />}
            />
            <Route path="/Partners/part-AddTruck/:id" element={<AddTruckP />} />
            <Route
              path="/Partners/part-EditTruck/:id/provider/:id_p"
              element={<EditTruckP />}
            />

            {/* Address------------------------- */}
            <Route path="/Shipments/addAddress/:id" element={<AddAddress />} />
            <Route
              path="/Shipments/editAddress/:id/shipper/:idshipper"
              element={<EditAddress />}
            />

            <Route path="/Shipments/grouplist/:id" element={<GroupList />} />
            <Route
              path="/Shipments/addnewgroup/:id"
              element={<AddNewGroup />}
            />
            <Route
              path="/Shipments/editgroup/:id/shipper/:idshipper"
              element={<EditGroup />}
            />
            <Route
              path="/Shipments/addresslist/:id/shipper/:idshipper"
              element={<AddressList />}
            />

            <Route
              path="/allshipments/shipmentorder/:id"
              element={<ShipmentOrder />}
            />

            {/* shippers */}
            <Route path="/allshippers" element={<AllShippers />} />
            <Route path="/addshippers" element={<AddShippers />} />
            <Route
              path="/allshippers/editshipper/:id"
              element={<EditShipper />}
            />

            <Route
              path="/allshippers/viewshipper/:id"
              element={<ViewShipper />}
            />
            <Route path="/allshippers/employes" element={<Employes />} />
            <Route path="/allshippers/addemployes" element={<AddEmployees />} />

            <Route path="/user" element={<User />} />
            {/* <Route path="/reports" element={<Reports />} /> */}

            <Route path="/allshipments" element={<AllShipments />} />
            <Route path="/allorders" element={<Allorders />} />
            <Route
              path="/Serviceproviders/personinfo"
              element={<Personinformation />}
            />

            <Route path="/driver" element={<Driver />} />
            <Route path="/driver/adddriver" element={<AddDriver />} />
            <Route path="/driver/editdriver/:id" element={<EditDriver />} />
            <Route path="/driver/viewdriver/:id" element={<ViewDriver />} />

            {/* items */}
            <Route path="/allitems/:id" element={<Allitems />} />
            {/* add-item */}
            <Route path="/iteminfo/:id" element={<ItemInfo />} />
            <Route path="/edititem/:id" element={<EditItem />} />

            {/* OverallReport */}
            {/* <Route path="/overallreport" element={<OverallReport />} />
            <Route path="/financialrequests" element={<Financialrequests />} /> */}
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/my-rewards" element={<MyRewards />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/invoices/:id" element={<Invoice />} />

            {/* setting */}
            <Route path="/categorylist" element={<CategoryList />} />
            <Route path="/catogry-add" element={<CategortAdd />} />
            <Route path="/catogry-edit/:id" element={<EditCategory />} />

            <Route path="/trucklist" element={<TruckList />} />
            <Route path="/addtruck" element={<AddTruck />} />
            <Route path="/edittruck/:id" element={<EditTruck />} />

            <Route path="/shipmentlist" element={<ShipmentTypes />} />
            <Route path="/addshipment" element={<AddShipment />} />
            <Route path="/editshipment/:id" element={<Editshipment />} />
            <Route path="/orders/:id" element={<Details />} />

            <Route path="/measurements" element={<Measurements />} />
            <Route path="/addmeasurements" element={<AddMeasurements />} />
            <Route
              path="/editmeasurements/:id"
              element={<EditMeasurements />}
            />

            <Route path="/commodities" element={<Commodities />} />
            <Route path="/addcommodities" element={<Addcommodities />} />
            <Route path="/editcommodities/:id" element={<Editcommodities />} />

            <Route path="/countrieslist" element={<CountriesList />} />
            <Route path="/stateslist" element={<StatesList />} />
            <Route path="/citieslist" element={<CitiesList />} />
          </Routes>
        </div>
        {/* </Router> */}
      </div>
    </>
  );
};

export default Layout;
