import React from 'react'
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import DatePicker from "react-datepicker";
import Select from "react-select";
import Swal from 'sweetalert2'

import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as Dateicon } from "../../icons/date-icon.svg";
import { ReactComponent as Vector } from "../../icons/Vector.svg";
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import CompanyForm from '../Common/CompanyForm';
import AccountForm from '../Common/AccountForm';
import './AddShippers.css';



const AddShippers = () => {

  const [cookie] = useCookies(["eload_token"]);
  const showNotification = () => {
    // e.preventDefault();

    let Msg = ({ closeToast, toastProps }) => (
      <div>
        <h4>Done</h4>
        <NavLink to="/allshippers">
        <button 
          className="btn btndetails">
          Back to Drivers
        </button>
        </NavLink>
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
    // const [ownerName, setOwnerName] = useState("");
    const [ownerPhone, setOwnerPhone] = useState("");
    const [ownerNID, setOwnerNID] = useState("");
    // follow
    const [followupName, setFollowupName] = useState("");
    const [followupnumber, setFollowupNumber] = useState("");
    const [contacted, setContacted] = useState("");
    const [company, setCompany] = useState({});
    const [account, setAccount] = useState({});

      // Api-post==========================
  const apiAddShipper = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("type", "freelancer");
    formdata.append("email", email);
    formdata.append("avatar", profileimg);
    formdata.append("password", password);
    // owner
    // formdata.append("name", ownerName);
    formdata.append("phone", ownerPhone);
    formdata.append("national_id", ownerNID);

    formdata.append("follow_up_name", followupName);
    formdata.append("follow_up_phone", followupnumber);

    formdata.append("create_contract", contacted);

    for (var key in company) {
      formdata.append(`company[${key}]`, company[key]);
    }

    for (var key in account) {
      formdata.append(`account[${key}]`, account[key]);
    }
    
    try {
      const reponse = await axios.post(
        "https://dev.eload.smart.sa/api/v1/shippers",
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

  return (
    <div className='container-fluid addshipper p-5'>
    <h3>SHIPPER INFORMATION</h3>
    <form onSubmit={apiAddShipper}>
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
        </div>
    {/* line-1 */}
    <hr className='my-5' />
    {/* section-owner-information */}
    <h3>OWNER INFORMATION</h3>
    {/* name+PHONE+id */}
    <div className='row my-4'>
      {/* <div className='col-md-4'>
        <label className='my-2 d-block'> name</label>
        <input className='input-box px-3' name='nameowner' type="text" placeholder="Owner name" />
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
    {/* follow */}
    <div className='row my-4'>
      <div className='col-md-4'>
        <label className='my-2 d-block'>Follow up name</label>
        <input className='input-box px-3' name='nameowner' type="text" placeholder="Follow up name" 
            onChange={(e) => {
              setFollowupName(e.target.value);
            }}/>
      </div>
      <div className='col-md-4'>
        <label className='my-2 d-block'>Follow up Phone </label>
        <input className='input-box px-3' name='phoneowner' type="tele" placeholder="Follow up Phone"
            onChange={(e) => {
              setFollowupNumber(e.target.value);
            }}
        />
      </div>
      <div className='col-md-4'>
        <label className='my-2 d-block'>Contacted ?</label>
        <div className='d-flex'>
        <label>
            <input 
            className='mx-1'
              type="radio" 
              name="isPublished" 
              value="true" 
              onChange={(e) => {
                setContacted(e.target.value);
              }}
              
              />
            Yes
          </label>
          <label className='mx-4'>
            <input 
            className='mx-1'
              type="radio" 
              name="isPublished" 
              value="false" 
              onChange={(e) => {
                setContacted(e.target.value);
              }}
              />
            No
          </label>

        </div>

      </div>
    </div>
    <hr className="my-5" />
    <CompanyForm company={company} setCompany={setCompany} />
    <hr className="my-5" />
    <AccountForm account={account} setAccount={setAccount} />
    {/* line-2 */}

    <button type='submit' className='btn-save my-3'>SAVE</button>

    </form>
  </div>
  )
}

export default AddShippers