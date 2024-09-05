import React from 'react'
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as Dateicon } from "../../../icons/date-icon.svg";
import { ReactComponent as Vector } from "../../../icons/Vector.svg";
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";


import './AddTruckP.css';

const AddTruckP = () => {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState();
    const { id } = useParams();
    const [cookie] = useCookies(["eload_token"]);
    const [user_type, setUserType] = useState(localStorage.getItem('user_type'));
    const [user_type_data, setUserTypeData] = useState(JSON.parse(localStorage.getItem('user_type_data')));
    const showNotification = () => {
      // e.preventDefault();
  
      let Msg = ({ closeToast, toastProps }) => (
        <div>
          <h4>Success</h4>
        </div>
      )
  
      toast(<Msg /> ,{autoClose: 3000});

      // readNotification(notification.id);
    };
  
    // select-options
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);
        // states
    const [truckModel, setTruckModel] = useState("");
    const [truckPlateNumber, settruckPlateNumber] = useState("");
    const [chassisNumber, setChassisNumber] = useState("");
    const [TruckLinceseNumber, setTruckLinceseNumber] = useState("");
    const [TruckLinceseCope, setTruckLinceseCope] = useState("");
    const [TruckType, setTruckType] = useState("");
    const [driver, setDriver] = useState("");


  const [truckList, setTruckList] = useState([]);
  const [driversList, setDriversList] = useState([]);


    // Api-post==========================
    const apiAddDriver = async (e) => {
        e.preventDefault();
        const formdata = new FormData();

        // truck
        formdata.append("model", truckModel);
        formdata.append("plate_number", truckPlateNumber);
        formdata.append("chassis_number", chassisNumber);
        formdata.append("chassis_number", chassisNumber);
        formdata.append("license_number", TruckLinceseNumber);
        formdata.append("license_copy", TruckLinceseCope);
        formdata.append("truck_type_id", TruckType);
        formdata.append("driver_id", driver);

    
        try {
          const reponse = await axios.post(
            "https://dev.eload.smart.sa/api/v1/trucks",
            formdata,
            {
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${cookie.eload_token}`,
                "api-key":
                  "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
              },
            }
          );
    
          // setName("");
          // console.log("DoneAdddddddddddd");
          showNotification();
          navigate(`/Partners/part-trucklist/${user_type == 'admin' ? id : user_type_data.id}`);

        } catch (e) {
          console.log(e);
        }
      };

        // Api-fetch-truck
  useEffect(() => {
    const Trucklist = async () => {
      try {
        const response = await axios.get(
          "https://dev.eload.smart.sa/api/v1/truck_types",

          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${cookie.eload_token}`,

              "api-key":
                "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
            },
          }
        );

        const data = response.data.data;

        setTruckList(data);
        // console.log(data, "datacountry");
        return data;
      } catch (e) {
        console.log(e);
      }
    };
    Trucklist();
  }, []);
//   Api-drivers
useEffect(() => {
    const Driverslist = async () => {
      try {
        const response = await axios.get(
          `https://dev.eload.smart.sa/api/v1/drivers?provider_id=${user_type == 'admin' ? id : user_type_data.id}`,

          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${cookie.eload_token}`,

              "api-key":
                "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
            },
          }
        );

        const data = response.data.data;

        setDriversList(data);
        console.log(data, "datadrivers");
        return data;
      } catch (e) {
        console.log(e);
      }
    };
    Driverslist();
  }, []);

    // truckoptions
    const GroupsTruckOptions = truckList.map((item, index) => ({
        label: item.name,
        value: item.id,
      }));
    //   driver
    const GroupsDriversOptions = driversList.map((item, index) => ({
        label: item.user.name,
        value: item.id,
      }));

  return (
<div className="container-fluid adddriver p-5">
    <ToastContainer
      position="top-right"
      autoClose={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      theme="light"
    />
      <h3>TRUCK INFORMATION</h3>
      <form onSubmit={apiAddDriver}>
        {/* Truck  */}
        <div className="row my-4">
          <div className="col-md-4">
            <label className="my-2 d-block">Truck Model</label>
            <input
              className="input-box px-3"
              name="truckmodel"
              type="text"
              required
              placeholder="Truck Model"
              onChange={(e) => {
                setTruckModel(e.target.value);
              }}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">Truck Plate Number</label>
            <input
              className="input-box px-3"
              name="trucknumber"
              required
              type="tele"
              placeholder="Truck Plate Number"
              onChange={(e) => {
                settruckPlateNumber(e.target.value);
              }}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">Chassis Number</label>
            <input
              className="input-box px-3"
              name="chassisnumber"
              type="tele"
              placeholder="Chassis Number"
              required
              onChange={(e) => {
                setChassisNumber(e.target.value);
              }}
            />
          </div>
        </div>
        {/* row-2 */}
        <div className="row my-4">
          <div className="col-md-4">
            <label className="my-2 d-block">Truck License Number</label>
            <input
              className="input-box px-3"
              name="trucklicensenumber"
              type="tele"
              required
              placeholder="Chassis Number"
              onChange={(e) => {
                setTruckLinceseNumber(e.target.value);
              }}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">Truck License Copy</label>
            <input
              type="file"
              className="input-box"
              required
              name="trucklicensecope"
              aria-describedby="inputGroupFileAddon03"
              aria-label="Upload"
              onChange={(e) => {
                setTruckLinceseCope(e.target.files[0]);
              }}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">Truck Type</label>
            <Select
              classNamePrefix="select"
              className="basic-multi-select"
              // isMulti
              isDisabled={isDisabled}
              isLoading={isLoading}
              required
              isClearable={isClearable}
              isRtl={isRtl}
              isSearchable={isSearchable}
              name="color"
              options={GroupsTruckOptions}
              onChange={(choice) => {
                setTruckType(choice.value);
              }}
            />
          </div>
          {/* driver */}
          <div className="col-md-4">
            <label className="my-2 d-block">Driver</label>
            <Select
              classNamePrefix="select"
              className="basic-multi-select"
              // isMulti
              isDisabled={isDisabled}
              isLoading={isLoading}
              required
              isClearable={isClearable}
              isRtl={isRtl}
              isSearchable={isSearchable}
              name="color"
              options={GroupsDriversOptions}
              onChange={(choice) => {
                setDriver(choice.value);
              }}
            />
          </div>
        </div>
        {/* <NavLink to="/driver"> */}
        <button type="submit" className="btn-save my-3"
          // onClick={showNotification}
        >
          SAVE
        </button>
        {/* </NavLink> */}
      </form>
    </div>
  )
}

export default AddTruckP
