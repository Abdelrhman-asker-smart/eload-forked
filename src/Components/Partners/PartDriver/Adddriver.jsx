import React from "react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import DatePicker from "react-datepicker";
// import Select from "react-select";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'

import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as Dateicon } from "../../../icons/date-icon.svg";
// import { ReactComponent as Vector } from "../../../icons/Vector.svg";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./PartDriverList";

const Adddriver = () => {
    const [startDate, setStartDate] = useState();
    const { id } = useParams();
    const [cookie] = useCookies(["eload_token"]);
    const [user_type, setUserType] = useState(localStorage.getItem('user_type'));
    const [user_type_data, setUserTypeData] = useState(JSON.parse(localStorage.getItem('user_type_data')));

    const showNotification = () => {
      // e.preventDefault();
  
      let Msg = ({ closeToast, toastProps }) => (
        <div>
          <h5>Done</h5>
          <NavLink to={`/Serviceproviders/Partners/part-driverlist/${user_type == 'admin' ? id : user_type_data.id}`}>
            {/* /Serviceproviders/Partners/part-driverlist/ */}
            {/* {`/Serviceproviders/Partners/viewpartner/${user_type == 'admin' ? id : user_type_data.id}`} */}
          <button 
            className="btn btndetails">
            Back to Drivers
          </button>
          </NavLink>
  
          {/* <button className="btn btn-danger" onClick={closeToast}>Close</button> */}
        </div>
      )
  
      toast(<Msg />)
      // readNotification(notification.id);
    };
  
    // select-options
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);
  
  
    // States================================
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [profileimg, setProfileimg] = useState("");
    const [password, setPassword] = useState("");
    // ==============
    const [ownerName, setOwnerName] = useState("");
    const [ownerPhone, setOwnerPhone] = useState("");
    const [ownerNID, setOwnerNID] = useState("");
    // =============
    const [idCope, setIdCope] = useState("");
    const [drivingLincese, setDrivingLincese] = useState("");
    const [drivingLincese_Cope, setDrivingLincese_Cope] = useState();
    const [LinceseId, setLinceseId] = useState("");
    const [expirydate, setExpirydate] = useState("");
      //===========
  const [sponsorName, setSponsorName] = useState("");
  const [sponsorNumber, setSponsorNumber] = useState("");

      // country_list
  const [countryList, setCountryList] = useState([]);
  const [truckList, setTruckList] = useState([]);

  // Api-post==========================
  const apiAddDriverpartners = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("provider_id",id)
    formdata.append("name", name);
    formdata.append("type", "freelancer");
    formdata.append("email", email);
    formdata.append("avatar", profileimg);
    formdata.append("password", password);
    // owner
    formdata.append("name", ownerName);
    formdata.append("phone", ownerPhone);
    formdata.append("national_id", ownerNID);
    // id info
    formdata.append("driver[id_copy]", idCope);
    formdata.append("driver[driving_license_number]", drivingLincese);
    formdata.append("driver[driving_license_copy]", drivingLincese_Cope);
    formdata.append("driver[license_id]", drivingLincese_Cope);
    formdata.append("driver[driving_license_copy]", LinceseId);
    formdata.append("driver[expiry_date]", expirydate);
    formdata.append("driver[sponsor_establishment_name]", sponsorName);
    formdata.append("driver[sponsor_establishment_number]", sponsorNumber);


    try {
      const reponse = await axios.post(
        "https://dev.eload.smart.sa/api/v1/drivers",
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
      console.log("DoneAdddddddddddd");
      showNotification();
    } catch (e) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        color: '#0e4579',
        title: `${e.response.data.message}`,
        showConfirmButton: false,
        showCancelButton:true,
        cancelButtonText: "ok",
        timer: 8000,
      })
      console.log(e);
    }
  };

  // Api-fetch-Country================
  useEffect(() => {
    const Countrylist = async () => {
      try {
        const response = await axios.get(
          "https://dev.eload.smart.sa/api/v1/countries",

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

        setCountryList(data);
        // console.log(data, "datacountry");
        return data;
      } catch (e) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          color: '#0e4579',
          title: `${e.response.data.message}`,
          showConfirmButton: false,
          showCancelButton:true,
          cancelButtonText: "ok",
          timer: 8000,
        })
        console.log(e);
      }
    };
    Countrylist();
  }, []);
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

  // options_Country
  const GroupsCountryOptions = countryList.map((item, index) => ({
    label: item.name,
    value: item.id,
  }));
  // truckoptions
  const GroupsTruckOptions = truckList.map((item, index) => ({
    label: item.name,
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
      <h3>DRIVER INFORMATION</h3>
      <form onSubmit={apiAddDriverpartners}>
        {/* name+email */}
        <div className="row my-4">
          <div className="col-md-6">
            <label className="my-2 d-block">Name</label>
            <input
              className="input-box px-3"
              name="namedriver"
              required
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="col-md-6 text-center">
            <label className="my-2 d-block text-start mx-5">E-mail</label>
            <input
              className="input-box px-3"
              name="emaildriver"
              required
              type="email"
              placeholder="E-mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
        {/* brows+password */}
        <div className="row my-4">
          <div className="col-md-4">
            <label className="my-2 d-block">Profile picture</label>
            <input
              type="file"
              name="imgdriver"
              required
              className="input-box"
              aria-describedby="inputGroupFileAddon03"
              aria-label="Upload"
              onChange={(e) => {
                setProfileimg(e.target.files[0]);
              }}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">Password</label>
            <input
              className="input-box px-3"
              type="password"
              required
              name="passdriver"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">Confirm password</label>
            <input
              className="input-box px-3"
              type="password"
              name="passdriver"
              placeholder="Confirm password"
            />
          </div>
          <div className="col-md-4 my-2">
            <label className="my-2 d-block">Phone </label>
            <input
              className="input-box px-3"
              name="phoneowner"
              type="tele"
              required
              placeholder="Phone "
              onChange={(e) => {
                setOwnerPhone(e.target.value);
              }}
            />
          </div>
          <div className="col-md-4 my-2">
            <label className="my-2 d-block">National ID</label>
            <input
              className="input-box px-3"
              name="idowner"
              type="tele"
              placeholder="National ID"
              onChange={(e) => {
                setOwnerNID(e.target.value);
              }}
            />
          </div>
        </div>
        {/* line-1 */}
        {/* <hr className="my-5" /> */}
        {/* section-owner-information */}
        {/* <h3>OWNER INFORMATION</h3> */}

        {/* <div className="row my-4">
          <div className="col-md-4">
            <label className="my-2 d-block">Owner name</label>
            <input
              className="input-box px-3"
              name="nameowner"
              type="text"
              required
              placeholder="Owner name"
              onChange={(e) => {
                setOwnerName(e.target.value);
              }}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">Owner Phone </label>
            <input
              className="input-box px-3"
              name="phoneowner"
              type="tele"
              required
              placeholder="Owner Phone "
              onChange={(e) => {
                setOwnerPhone(e.target.value);
              }}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">Owner National ID</label>
            <input
              className="input-box px-3"
              name="idowner"
              type="tele"
              placeholder="Owner National ID"
              onChange={(e) => {
                setOwnerNID(e.target.value);
              }}
            />
          </div>
        </div> */}
        {/* line-2 */}
        <hr className="my-5" />
        {/* section-ID-information */}
        <h3>ID INFORMATION</h3>
        {/* ID+drivingnumber */}
        <div className="row my-4">
          <div className="col-md-4">
            <label className="my-2 d-block">ID Copy</label>

            <input
              type="file"
              className="input-box"
              name="idcope"
              required
              aria-describedby="inputGroupFileAddon03"
              aria-label="Upload"
              onChange={(e) => {
                setIdCope(e.target.files[0]);
              }}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">Driving License</label>
            <input
              className="input-box px-3"
              name="driverlicensephone"
              required
              type="tele"
              placeholder="Driving License Number"
              onChange={(e) => {
                setDrivingLincese(e.target.value);
              }}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">Driving License Copy</label>
            <input
              type="file"
              className="input-box"
              name="driverlicensecope"
              required
              aria-describedby="inputGroupFileAddon03"
              aria-label="Upload"
              onChange={(e) => {
                setDrivingLincese_Cope(e.target.files[0]);
              }}
            />
          </div>
        </div>
        {/*row-2 ID+date */}
        <div className="row my-4">
          <div className="col-md-4">
            <label className="my-2 d-block">License Id</label>
            <input
              type="file"
              className="input-box"
              required
              name="licensecopeid"
              aria-describedby="inputGroupFileAddon03"
              aria-label="Upload"
              onChange={(e) => {
                setLinceseId(e.target.files[0]);
              }}
            />
          </div>
          <div className="col-md-4 position-relative">
            <label className="my-2 d-block">Expiry Date</label>
            <DatePicker
              className="date-input  px-5 input-box"
              selected={startDate}
              required
              placeholderText={"dd/mm/yyyy"}
              onChange={(date) => {
                setStartDate(date);
                setExpirydate(date);
              }}
            />
            <Dateicon
              className="position-absolute"
              style={{ left: "30px", top: "58px" }}
            />
            {/* <input className='input-box px-3' name='expirydate' type="tele" placeholder="Driving License Number" /> */}
          </div>
        </div>
        {/* line-3 */}
        <hr className="my-5" />
        <h3>Sponser information</h3>
        {/* Sponsor */}
        <div className="row my-4">
          <div className="col-md-6">
            <label className="my-2 d-block">Sponsor Establishment Name</label>
            <input
              className="input-box px-3"
              name="sponsername"
              type="text"
              required
              placeholder="Sponsor Establishment name"
              onChange={(e) => {
                setSponsorName(e.target.value);
              }}
            />
          </div>
          <div className="col-md-6">
            <label className="my-2 d-block">Sponsor Establishment Number</label>
            <input
              className="input-box px-3"
              name="sponsernumber"
              type="text"
              required
              placeholder="Sponsor Establishment Number"
              onChange={(e) => {
                setSponsorNumber(e.target.value);
              }}
            />
          </div>
        </div>
        {/* <NavLink to="/Serviceproviders/driver"> */}
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

export default Adddriver