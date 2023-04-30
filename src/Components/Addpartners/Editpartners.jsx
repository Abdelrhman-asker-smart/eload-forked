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
import { EditpartnerFunction } from "../../redux/Partner/EditPartner";
import "./Addpartners.css";

const Editpartners = () => {
    const { partner, setPartner } = useState({});
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
  const [ownerName, setOwnerName] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");
  const [ownerNID, setOwnerNID] = useState("");

  useEffect(() => {
    console.log(id,"id-----");
    const partnerFetch = async (id) => {
      try {
        const response = await axios.get(
  
          `https://dev.eload.smart.sa/api/v1/providers/${id}`,
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
        console.log(data,"partnerfromAPiiiiiiiiiiii");

        setName(data.name);
        setEmail(data.user.email);
        setProfileimg(data.user.avatar);
        // setPassword(data.password);
        // setOwnerName(data.name);
        setOwnerPhone(data.user.phone);
        setOwnerNID(data.user.national_id);
        return data;
      } catch (e) {
        console.log(e);
      }
    };
    partnerFetch(id);

  }, []);
  const edit = () => {

    const formdata = new FormData();

    formdata.append("_method", 'put');
    formdata.append("name", name);
    formdata.append("type", "partner");
    formdata.append("email", email);
        // check not string empty
    {
        password!="" &&(
            formdata.append("password", password)
        )
    }
    formdata.append("avatar", profileimg);
    // owner
    // formdata.append("name", ownerName);
    formdata.append("phone", ownerPhone);
    formdata.append("national_id", ownerNID);

    console.log("editDone");
    dispatch(
        EditpartnerFunction({
        token: cookie.eload_token,
        id,
        formdata,
      })
    )
      .then((res) => {
        console.log(res);
        alert('Successfully Saved!');
      })
      .catch((e) => {
        console.log(e);
      });
  };


  // Api-post==========================


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
      <form >
        {/* name+email */}
        <div className="row my-4">
          <div className="col-md-6">
            <label className="my-2 d-block">Name</label>
            <input
              className="input-box px-3"
              name="namepartner"
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
              name="emailpartner"
              type="text"
              placeholder="E-mail"
              value={email}
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
              value={password}
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
              value={ownerName}
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
              placeholder="Owner Phone"
              value={ownerPhone}
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
              value={ownerNID}
              onChange={(e) => {
                setOwnerNID(e.target.value);
              }}
            />
          </div>
        </div>
        {/* line-2 */}
        <button type="button" className="btn-save my-3"
           onClick={edit}
        >
          SAVE
        </button>
      </form>
    </div>
  );
};

export default Editpartners;
