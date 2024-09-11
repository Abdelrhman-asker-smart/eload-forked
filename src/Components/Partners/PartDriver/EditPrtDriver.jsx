import React from "react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import DatePicker from "react-datepicker";
// import Select from "react-select";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'

import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as Dateicon } from "../../../icons/date-icon.svg";
// import { ReactComponent as Vector } from "../../../icons/Vector.svg";
import { EditDriverFunction } from "../../../redux/Partner/EditDriverPart";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./PartDriverList";
// import Partners from './../Partners';
// import EditPrtDriver from './EditPrtDriver';

const EditPrtDriver = () => {
  const navigate = useNavigate();

    const [startDate, setStartDate] = useState();
    const { id } = useParams();
  const dispatch = useDispatch();

    const [cookie] = useCookies(["eload_token"]);

    const showNotificationUser = () => {
      let Msg = ({ closeToast, toastProps }) => (
        <div>
          <h4>Success updating User Data</h4>
        </div>
      )
      toast(<Msg /> ,{autoClose: 3000});
    };
    const showNotification = () => {
      let Msg = ({ closeToast, toastProps }) => (
        <div>
          <h4>Success</h4>
        </div>
      )
      toast(<Msg /> ,{autoClose: 3000});
    };
  
    // select-options
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);
  
  
    // States================================
    const [Provider_ID, setProvider_ID] = useState();
    const [user_ID, setUser_ID] = useState();


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [profileimg, setProfileimg] = useState("");
    const [password, setPassword] = useState("");
    // ==============
    // const [ownerName, setOwnerName] = useState("");
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



  useEffect(() => {
    console.log(id,"id-----");
    const DriverFetch = async (id) => {
      try {
        const response = await axios.get(
  
          `https://dev.eload.smart.sa/api/v1/drivers/${id}`,
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
        console.log(data,"driverfromAPiiiiiiiiiiii");
        // setItem(data);
        setProvider_ID(data.provider.id);
        setUser_ID(data.user.id);

        setName(data.user.name);
        setEmail(data.user.email);
        // setOwnerName(data.user.name);
        setOwnerPhone(data.user.phone);
        setOwnerNID(data.user.national_id);
        setIdCope(data.id_copy);
        setDrivingLincese(data.driving_license_number);
        setDrivingLincese_Cope(data.driving_license_copy);
        setLinceseId(data.license_id);
        setExpirydate(data.expiry_date);
        setSponsorName(data.sponsor_establishment_name);
        setSponsorNumber(data.sponsor_establishment_number);


        return data;
      } catch (e) {
        console.log(e);
      }
    };

    DriverFetch(id);

  }, []);
  // console.log(name ,"nametst");
  // console.log(user_ID,"user_ID");

  // pass editing user data
    
  const edit = async() => {
    const formdata = new FormData();
  
    formdata.append("name", name);
    formdata.append("type", "partner");
    formdata.append("email", email);
    formdata.append("avatar", profileimg);
    formdata.append("password", password);
    formdata.append("password_confirmation", password);
    formdata.append("national_id", ownerNID);
    formdata.append("phone", ownerPhone);
    formdata.append("id_copy", idCope);
    formdata.append("driving_license_number", drivingLincese);
    formdata.append("driving_license_copy", drivingLincese_Cope);
    formdata.append("license_id", drivingLincese_Cope);
    formdata.append("driving_license_copy", LinceseId);
    formdata.append("expiry_date", expirydate);
    formdata.append("sponsor_establishment_name", sponsorName);
    formdata.append("sponsor_establishment_number", sponsorNumber);
    try {
      const response = await axios.post(
        `https://dev.eload.smart.sa/api/v1/updateDriver/${user_ID}`,
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
      const data = await response.data;
      console.log(response, "response");
      showNotification();
      navigate(`/Partners`);
      return data;
    } catch (e) {
      console.log("eee");
      console.error("Full error object:", e);
      console.error("Error response:", e.response);
  
      let errorMessage = "An error occurred";
  
      if (e.response && e.response.data) {
        console.log("Error data:", e.response.data);
  
        if (e.response.data.message) {
          errorMessage = e.response.data.message;
        }
  
        if (e.response.data.errors && Array.isArray(e.response.data.errors)) {
          errorMessage += "<br><br>";
          errorMessage += "<ul>";
          e.response.data.errors.forEach(error => {
            errorMessage += `<span>${error.field}: ${error.message}</span>`;
          });
          errorMessage += "</ul>";
        }
      }
  
      Swal.fire({
        icon: 'error',
        title: 'Error',
        html: errorMessage,
        confirmButtonText: 'OK',
        confirmButtonColor: '#0e4579',
      });
  
      console.log(e, "e");
    }
  

  };
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
      <form>
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
              value={name}
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
              value={email}
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
              value={password}
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
          <div className="col-md-4">
            <label className="my-2 d-block">Owner Phone </label>
            <input
              className="input-box px-3"
              name="phoneowner"
              type="tele"
              value={ownerPhone}
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
              value={ownerNID}
              placeholder="Owner National ID"
              onChange={(e) => {
                setOwnerNID(e.target.value);
              }}
            />

          </div>
          {/* <button type="button" className="btn-save my-3"
          onClick={UserDtaedit}
        >
          SAVE User Data
        </button> */}

        </div>
        {/* line-1 */}
        {/* <hr className="my-5" /> */}
        {/* section-owner-information */}
        {/* <h3>OWNER INFORMATION</h3> */}
        {/* name+PHONE+id */}
        {/* <div className="row my-4">
          <div className="col-md-4">
            <label className="my-2 d-block">Owner name</label>
            <input
              className="input-box px-3"
              name="nameowner"
              type="text"
              required
              placeholder="Owner name"
              value={ownerName}
              onChange={(e) => {
                setOwnerName(e.target.value);
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
              multiple="multiple"
              accept="audio/*,video/*,image/*,.pdf,.doc"
              className="input-box"
              name="idcope"
              required
              aria-describedby="inputGroupFileAddon03"
              aria-label="Upload"
              // value={idCope}
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
              value={drivingLincese}
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
              multiple="multiple"
              accept="audio/*,video/*,image/*,.pdf,.doc"
              className="input-box"
              name="driverlicensecope"
              required
              // value={drivingLincese_Cope}
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
              multiple="multiple"
              accept="audio/*,video/*,image/*,.pdf,.doc"
              className="input-box"
              required
              // value={LinceseId}
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
              value={expirydate}
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
              value={sponsorName}
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
              value={sponsorNumber}
              placeholder="Sponsor Establishment Number"
              onChange={(e) => {
                setSponsorNumber(e.target.value);
              }}
            />
          </div>
        </div>
        {/* <NavLink to="/driver"> */}
        <button type="button" className="btn-save my-3"
          onClick={edit}
        >
          SAVE
        </button>
        {/* </NavLink> */}
      </form>
    </div>
  )
}

export default EditPrtDriver