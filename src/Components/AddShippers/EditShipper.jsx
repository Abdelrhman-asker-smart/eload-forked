import React from "react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
// import { ReactComponent as Dateicon } from "../../../icons/date-icon.svg";
// import { ReactComponent as Vector } from "../../../icons/Vector.svg";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { EditshipperFunction } from "../../redux/Shipper/EditShipper";

import "./AddShippers.css";

const EditShipper = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [cookie] = useCookies(["eload_token"]);
  const showNotification = () => {
    // e.preventDefault();

    let Msg = ({ closeToast, toastProps }) => (
      <div>
        <h4>Done</h4>
        <NavLink to="/Serviceproviders/Partners">
          <button className="btn btndetails">Back to Drivers</button>
        </NavLink>

        {/* <button className="btn btn-danger" onClick={closeToast}>Close</button> */}
      </div>
    );

    toast(<Msg />);
    // readNotification(notification.id);
  };

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
//   const [contacted, setContacted] = useState("");

  useEffect(() => {
    console.log(id, "id-----");
    const shipperFetch = async (id) => {
      try {
        const response = await axios.get(
          `https://dev.eload.smart.sa/api/v1/shippers/${id}`,
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
        console.log(data, "shipperfromAPiiiiiiiiiiii");

        setName(data.name);
        setEmail(data?.user?.email);
        setProfileimg(data?.user.avatar);
        setOwnerPhone(data?.user.phone);
        setOwnerNID(data?.user.national_id);
        setFollowupName(data.follow_up_name);
        setFollowupNumber(data.follow_up_phone);
        // setContacted(data?.user.create_contract);

        return data;
      } catch (e) {
        console.log(e);
      }
    };
    shipperFetch(id);
  }, []);
  const edit = () => {
    const formdata = new FormData();
    formdata.append("_method", 'put');
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("avatar", profileimg);
    // check not string empty
    {
      password !== "" && formdata.append("password", password);
    }

    formdata.append("phone", ownerPhone);
    formdata.append("national_id", ownerNID);

    formdata.append("follow_up_name", followupName);
    formdata.append("follow_up_phone", followupnumber);

    // formdata.append("create_contract", contacted);

    console.log("editDone");
    dispatch(
      EditshipperFunction({
        token: cookie.eload_token,
        id,
        formdata,
      })
    )
      .then((res) => {
        console.log(res);
        alert("Successfully Saved!");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="container-fluid addshipper p-5">
      <h3>SHIPPER INFORMATION</h3>
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
              value={name}
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
              value={password}
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
        <hr className="my-5" />
        {/* section-owner-information */}
        <h3>OWNER INFORMATION</h3>
        {/* name+PHONE+id */}
        <div className="row my-4">
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
              value={ownerPhone}
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
        </div>
        {/* follow */}
        <div className="row my-4">
          <div className="col-md-4">
            <label className="my-2 d-block">Follow up name</label>
            <input
              className="input-box px-3"
              name="nameowner"
              type="text"
              placeholder="Follow up name"
              value={followupName}
              onChange={(e) => {
                setFollowupName(e.target.value);
              }}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">Follow up Phone </label>
            <input
              className="input-box px-3"
              name="phoneowner"
              type="tele"
              placeholder="Follow up Phone"
              value={followupnumber}
              onChange={(e) => {
                setFollowupNumber(e.target.value);
              }}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">Contacted ?</label>
            <div className="d-flex">
              {/* {contacted == "true" ? (
                <>
                  <label>
                    <input
                      className="mx-1"
                      type="radio"
                      name="isPublished"
                      value="yes"
                      checked="checked"
                      onChange={(e) => {
                        setContacted(e.target.value);
                      }}
                    />
                    Yes
                  </label>
                  <label className="mx-4">
                    <input
                      className="mx-1"
                      type="radio"
                      name="isPublished"
                      value="no"
                      onChange={(e) => {
                        setContacted(e.target.value);
                      }}
                    />
                    No
                  </label>
                </>
              ) : (
                <>
                  <label>
                    <input
                      className="mx-1"
                      type="radio"
                      name="isPublished"
                      value="yes"
                      //   checked="checked"
                      onChange={(e) => {
                        setContacted(e.target.value);
                      }}
                    />
                    Yes
                  </label>
                  <label className="mx-4">
                    <input
                      className="mx-1"
                      type="radio"
                      name="isPublished"
                      checked="checked"
                      value="no"
                      onChange={(e) => {
                        setContacted(e.target.value);
                      }}
                    />
                    No
                  </label>
                </>
              )} */}
              
            </div>
          </div>
        </div>
        {/* line-2 */}

        <button type="button" className="btn-save my-3" onClick={edit}>
          SAVE
        </button>
      </form>
    </div>
  );
};

export default EditShipper;
