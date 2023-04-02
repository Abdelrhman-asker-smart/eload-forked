import React from "react";
import { Routes, Route} from "react-router-dom";
// import Home from "../Home/Home";
// import Login from "../Login/Login";
// import { useCookies } from "react-cookie";
import Navbar from "../Navbar/Navbar";
// import { useState, useEffect } from "react";
// import { useCookies } from "react-cookie";
import Dashbord from "../Dashboard/Dashbord";
import User from "../User/User"
import Sidebar from "../Sidebar/Sidebar";
// import Logo from './Eloadlogo.png'
import Shipments from '../Shipments/Shipments.jsx'
import AddAddress from '../AddAddress/AddAddress.jsx';
import GroupList from '../GroupList/GroupList.jsx';
import AddNewGroup from '../AddnewGroup/AddnewGroup.jsx'
import Reports from '../Reports/Reports.jsx'

import Personinformation from "../Personinformation/Personinformation.jsx";
import ItemInfo from "../Iteminfo/Iteminfo.jsx";
import Driver from "../Drivers/Drivers.jsx";
import AddDriver from "../AddDriver/AddDriver.jsx";

// AddDriver

import './Layout.css';
import AllShipments from "../AllShipments/AllShipments";
import Partners from "../Partners/Partners";
import Allorders from "../Allorders/Allorders";
import Allitems from "../Allitems/Allitems";
// import OverallReport from "../OverallReport/OverallReport.jsx"
// import Financialrequests from '../FinancialList/FinancialList.jsx';
import Rewards from '../Rewards/Rewards.jsx';
import ViewDriver from "../ViewDriver/ViewDriver";
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






const Layout = ({ setLogin }) => {
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
            {/* profile-route */}
            <Route path="/profilepage" element={<Profile />} />
            <Route path="/editprofile" element={<EditProfile />} />
            


            {/* dashboard */}
            <Route path="/" element={<Dashbord />} />
            <Route path="/dashboard" element={<Dashbord />} />
            <Route path="/Shipments" element={<Shipments />} />

            {/* service */}
            <Route path="/Serviceproviders/Partners" element={<Partners/>}/>
            <Route path="/addpartners" element={<Addpartners />} />
            
            {/* Abd------------------------- */}
            <Route path="/Shipments/addAddress" element={<AddAddress />} />
            <Route path="/Shipments/grouplist" element={<GroupList />} />
            <Route path="/Shipments/addnewgroup" element={<AddNewGroup />} />
            <Route path="/allshipments/shipmentorder/:id" element={<ShipmentOrder />} />

             {/* Abd------------------------- */}

             {/* shippers */}
            <Route path="/allshippers" element={<AllShippers />} />
            <Route path="/addshippers" element={<AddShippers />} />
            <Route path="/allshippers/viewshipper" element={<ViewShipper />} />
            <Route path="/allshippers/employes" element={<Employes />} />
            <Route path="/allshippers/addemployes" element={<AddEmployees />} />





            <Route path="/user" element={<User />} />
            <Route path="/reports" element={<Reports />} />

            <Route path="/allshipments" element={<AllShipments />} />
            <Route path="/allorders" element={<Allorders />} />
            <Route path="/Serviceproviders/personinfo" element={<Personinformation />} />
            <Route path="/Serviceproviders/adddriver" element={<AddDriver />} />

            <Route path="/Serviceproviders/driver" element={<Driver />} />
            <Route path="/Serviceproviders/viewdriver" element={<ViewDriver />} />

            
            <Route path="/iteminfo" element={<ItemInfo />} />
            <Route path="/allitems" element={<Allitems />} />
            
            {/* OverallReport */}
            {/* <Route path="/overallreport" element={<OverallReport />} />
            <Route path="/financialrequests" element={<Financialrequests />} /> */}
            <Route path="/rewards" element={<Rewards />} />

            {/* setting */}
            <Route path="/categorylist" element={<CategoryList />} />
            <Route path="/catogry-add" element={<CategortAdd />} />
            <Route path="/catogry-edit/:id" element={<EditCategory />} />

            <Route path="/trucklist" element={<TruckList />} />
            <Route path="/addtruck" element={<AddTruck/>} />
            <Route path="/edittruck/:id" element={<EditTruck/>} />

            <Route path="/shipmentlist" element={<ShipmentTypes/>} />
            <Route path="/addshipment" element={<AddShipment/>} />
            <Route path="/editshipment/:id" element={<Editshipment/>} />

            
            <Route path="/measurements" element={<Measurements/>} />
            <Route path="/addmeasurements" element={<AddMeasurements/>} />
            <Route path="/editmeasurements/:id" element={<EditMeasurements/>} />

            <Route path="/commodities" element={<Commodities/>} />
            <Route path="/addcommodities" element={<Addcommodities/>} />
            <Route path="/editcommodities/:id" element={<Editcommodities/>} />

            <Route path="/countrieslist" element={<CountriesList/>} />
            <Route path="/stateslist" element={<StatesList/>} />
            <Route path="/citieslist" element={<CitiesList/>} />


          </Routes>
        </div>
        {/* </Router> */}
      </div>
    </>
  );
};

export default Layout;
