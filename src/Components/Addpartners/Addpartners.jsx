import React from "react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
// import { ReactComponent as Dateicon } from "../../../icons/date-icon.svg";
// import { ReactComponent as Vector } from "../../../icons/Vector.svg";
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2'

import { ToastContainer, toast } from "react-toastify";
import CompanyForm from '../Common/CompanyForm';
import AccountForm from '../Common/AccountForm';
import "./Addpartners.css";

const Addpartners = () => {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState();

  const [cookie] = useCookies(["eload_token"]);
  const showNotification = () => {
    // e.preventDefault();

    let Msg = ({ closeToast, toastProps }) => (
      <div>
        <h4>Success</h4>
      </div>
    );

    toast(<Msg /> ,{autoClose: 3000});

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
  const [company, setCompany] = useState({});
  const [account, setAccount] = useState({});


  // Api-post==========================
  const apiAddpartner = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("type", "partner");
    formdata.append("email", email);
    formdata.append("avatar", profileimg);
    formdata.append("password", password);
    // owner
    // formdata.append("name", ownerName);
    formdata.append("phone", ownerPhone);
    formdata.append("national_id", ownerNID);

    for (var key in company) {
      formdata.append(`company[${key}]`, company[key]);
    }

    for (var key in account) {
      formdata.append(`account[${key}]`, account[key]);
    }

    try {
      const reponse = await axios.post(
        "https://dev.eload.smart.sa/api/v1/providers",
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
      navigate(`/Serviceproviders/Partners`);

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

  return (
    <div className="container-fluid addpartners p-5">
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
      <h3>PARTNER INFORMATION</h3>
      <form onSubmit={apiAddpartner}>
        {/* name+email */}
        <div className="row my-4">
          <div className="col-md-6">
            <label className="my-2 d-block">Name</label>
            <input
              className="input-box px-3"
              name="namepartner"
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
              name="emailpartner"
              type="text"
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
              accept="audio/*,video/*,image/*,.pdf,.doc"
              name="imgpartner"
              className="input-box"
              // id="inputGroupFile03"
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
              name="passpartner"
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
              name="passpartner"
              placeholder="Confirm password"
            />
          </div>
        </div>
        {/* line-1 */}
        <hr className="my-5" />
        {/* section-owner-information */}
        <h3>OWNER INFORMATION</h3>
        {/* name+PHONE+id */}
        <div className="row my-4">
          {/* <div className="col-md-4">
            <label className="my-2 d-block">Owner name</label>
            <input
              className="input-box px-3"
              name="nameowner"
              type="text"
              placeholder="Owner name"
              onChange={(e) => {
                setOwnerName(e.target.value);
              }}
            />
          </div> */}
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
        </div>
        <hr className="my-5" />
        <CompanyForm company={company} setCompany={setCompany} />
        <hr className="my-5" />
        <AccountForm account={account} setAccount={setAccount} />

        {/* line-2 */}
        <button type="submit" className="btn-save my-3"
          // onClick={showNotification}
        >
          SAVE
        </button>
      </form>
    </div>
  );
};

export default Addpartners;
