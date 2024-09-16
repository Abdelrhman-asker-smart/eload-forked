import React from "react";
import "./AddDriver.css";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import DatePicker from "react-datepicker";
import Select from "react-select";
import Swal from "sweetalert2";

import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as Dateicon } from "../../../icons/date-icon.svg";
import { ReactComponent as Vector } from "../../../icons/Vector.svg";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import AccountForm from "../../Common/AccountForm";
import Joi from "joi";

const AddDriver = () => {
  const navigate = useNavigate();

  // const [input, setInputs] = useState([])
  // const date  = new Date()
  const [startDate, setStartDate] = useState();

  const [cookie] = useCookies(["eload_token"]);
  const showNotification = () => {
    // e.preventDefault();

    let Msg = ({ closeToast, toastProps }) => (
      <div>
        <h4>Success</h4>
      </div>
    );

    toast(<Msg />, { autoClose: 3000 });

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
  const [confirmPassword, setConfirmPassword] = useState("");
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
  const [nationality, setNationality] = useState("");
  //===========
  const [sponsorName, setSponsorName] = useState("");
  const [sponsorNumber, setSponsorNumber] = useState("");
  // ============
  const [truckModel, setTruckModel] = useState("");
  const [truckPlateNumber, settruckPlateNumber] = useState("");
  const [chassisNumber, setChassisNumber] = useState("");
  const [TruckLinceseNumber, setTruckLinceseNumber] = useState("");
  const [TruckLinceseCope, setTruckLinceseCope] = useState("");
  const [TruckType, setTruckType] = useState("");
  const [account, setAccount] = useState({});

  // country_list
  const [countryList, setCountryList] = useState([]);
  const [truckList, setTruckList] = useState([]);
  // Error List
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  console.log(errors, " errors");
  // console.log(TruckType);
  // Api-post==========================
  const Joi = require("joi");
  const [targetElement, setTargetElement] = useState("");
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      element.focus();
    }
  };
  useEffect(() => {
    if (targetElement) {
      scrollToElement(targetElement);
    }
  }, [targetElement]);
  const apiAddDriver = async (e) => {
    e.preventDefault();
    const schema = Joi.object({
      name: Joi.string().required(),
      // password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: false } })
        .required(),
      password: Joi.string().required(),
      confirm_password: Joi.string()
        .min(6)
        .required()
        .valid(Joi.ref("password"))
        .messages({
          "any.only": "Passwords do not match",
          "any.required": "Confirm password is required",
        }),
      phone: Joi.number().required(),
      national_id: Joi.number().required().messages({
        "any.required": "National id is required",
        "number.base": "National id must be a Valid Number",
      }),

      driving_license_copy: Joi.required().messages({
        "any.required": "Driving License is required",
      }),
      truck_type_id: Joi.number().required(),
    });
    const formDataObject = {
      name: name,
      email: email,
      password: password,
      confirm_password: confirmPassword,
      phone: ownerPhone,
      national_id: ownerNID,
      driving_license_copy: drivingLincese_Cope,
      truck_type_id: TruckType,
    };
    const { error } = schema.validate(formDataObject, { abortEarly: false });

    if (error) {
      console.log("errorrrr", error.details);
      const newErrors = error.details.reduce((acc, detail) => {
        acc[detail.path[0]] = detail.message;
        return acc;
      }, {});
      setErrors(newErrors);
      setTargetElement(error.details[0].context.label);
    } else {
      console.log("Validation succeeded");
      setLoading(true);
      setErrors({});

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
      // id info
      formdata.append("driver[id_copy]", idCope);
      formdata.append("driver[driving_license_number]", drivingLincese);
      formdata.append("driver[driving_license_copy]", drivingLincese_Cope);
      formdata.append("driver[license_id]", drivingLincese_Cope);
      formdata.append("driver[driving_license_copy]", LinceseId);
      formdata.append("driver[expiry_date]", expirydate);
      formdata.append("driver[nationality_id]", nationality);
      formdata.append("driver[sponsor_establishment_name]", sponsorName);
      formdata.append("driver[sponsor_establishment_number]", sponsorNumber);
      // truck
      formdata.append("truck[model]", truckModel);
      formdata.append("truck[plate_number]", truckPlateNumber);
      formdata.append("truck[chassis_number]", chassisNumber);
      formdata.append("truck[chassis_number]", chassisNumber);
      formdata.append("truck[license_number]", TruckLinceseNumber);
      formdata.append("truck[license_copy]", TruckLinceseCope);
      formdata.append("truck[truck_type_id]", TruckType);

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
        showNotification();
        setLoading(false);
        navigate(`/driver`);
      } catch (e) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          color: "#0e4579",
          title: `${e.response.data.errors[0].message}`,
          showConfirmButton: false,
          showCancelButton: true,
          cancelButtonText: "ok",
          timer: 8000,
        });
        setLoading(false);
        console.log(e.response.data.errors);
      }
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
    // (
    //   <div>
    //     <Vector className="mx-3" />
    //     {item.name}
    //   </div>
    // ),
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
      <form onSubmit={apiAddDriver} className={loading ? "disabled" : ""}>
        {/* name+email */}
        <div className="row my-4">
          <div className="col-md-6">
            <label className="my-2 d-block">Name</label>
            <input
              // className="input-box px-3 hasError"
              className={
                errors.name ? "hasError input-box px-3" : "input-box px-3"
              }
              name="namedriver"
              type="text"
              placeholder="Name"
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            {errors.name && <h5 className="error">{errors.name}</h5>}
          </div>
          <div className="col-md-6 text-center">
            <label className="my-2 d-block text-start mx-5">E-mail</label>
            <input
              className={
                errors.email ? "hasError input-box px-3" : "input-box px-3"
              }
              name="emaildriver"
              type="email"
              id="email"
              placeholder="E-mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {errors.email && <h5 className="error">{errors.email}</h5>}
          </div>
        </div>
        {/* brows+password */}
        <div className="row my-4">
          <div className="col-md-4">
            <label className="my-2 d-block">Profile picture</label>
            <input
              type="file"
              multiple="multiple"
              accept="audio/*,video/*,image/*,.pdf,.doc"
              name="imgdriver"
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
              className={
                errors.password ? "hasError input-box px-3" : "input-box px-3"
              }
              id="password"
              type="password"
              name="passdriver"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {errors.password && <h5 className="error">{errors.password}</h5>}
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">Confirm password</label>
            <input
              className={
                errors.confirm_password
                  ? "hasError input-box px-3"
                  : "input-box px-3"
              }
              type="password"
              id="confirm_password"
              name="Confirm_password"
              placeholder="Confirm password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            {errors.confirm_password && (
              <h5 className="error">{errors.confirm_password}</h5>
            )}
          </div>
          <div className="col-md-4 my-4">
            <label className="my-2 d-block">Phone </label>
            <input
              className={
                errors.phone ? "hasError input-box px-3" : "input-box px-3"
              }
              name="phoneowner"
              type="tele"
              placeholder="Owner Phone "
              onChange={(e) => {
                setOwnerPhone(e.target.value);
              }}
              id="phone"
            />
            {errors.phone && <h5 className="error">{errors.phone}</h5>}
          </div>
          <div className="col-md-4 my-4">
            <label className="my-2 d-block">National ID</label>
            <input
              className={
                errors.national_id
                  ? "hasError input-box px-3"
                  : "input-box px-3"
              }
              name="idowner"
              type="number"
              placeholder="Owner National ID"
              onChange={(e) => {
                setOwnerNID(e.target.value);
              }}
              id="national_id"
            />
            {errors.national_id && (
              <h5 className="error">{errors.national_id}</h5>
            )}
          </div>
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
              multiple="multiple"
              accept="audio/*,video/*,image/*,.pdf,.doc"
              className="input-box"
              name="idcope"
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
              multiple="multiple"
              accept="audio/*,video/*,image/*,.pdf,.doc"
              className={
                errors.driving_license_copy
                  ? "hasError input-box "
                  : "input-box "
              }
              name="driverlicensecope"
              aria-describedby="inputGroupFileAddon03"
              aria-label="Upload"
              onChange={(e) => {
                setDrivingLincese_Cope(e.target.files[0]);
              }}
              id="driving_license_copy"
            />
            {errors.driving_license_copy && (
              <h5 className="error">{errors.driving_license_copy}</h5>
            )}
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
          <div className="col-md-4">
            <label className="my-2 d-block">Nationality</label>
            {/* Country-select */}
            <Select
              classNamePrefix="select"
              className="basic-multi-select"
              // isMulti
              isDisabled={isDisabled}
              isLoading={isLoading}
              isClearable={isClearable}
              options={GroupsCountryOptions}
              isRtl={isRtl}
              isSearchable={isSearchable}
              name="color"
              onChange={(choice) => {
                setNationality(choice.value);
              }}
            />
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
              placeholder="Sponsor Establishment Number"
              onChange={(e) => {
                setSponsorNumber(e.target.value);
              }}
            />
          </div>
        </div>
        {/* line-4 */}
        <hr className="my-5" />
        <h3>Truck information</h3>
        {/* Truck  */}
        <div className="row my-4">
          <div className="col-md-4">
            <label className="my-2 d-block">Truck Model</label>
            <input
              className="input-box px-3"
              name="truckmodel"
              type="text"
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
              multiple="multiple"
              accept="audio/*,video/*,image/*,.pdf,.doc"
              className="input-box"
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
              id="truck_type_id"
              className={
                errors.driving_license_copy
                  ? "hasError basic-multi-select "
                  : "basic-multi-select "
              }
              classNamePrefix="select"
              // isMulti
              isDisabled={isDisabled}
              isLoading={isLoading}
              // required
              isClearable={isClearable}
              isRtl={isRtl}
              isSearchable={isSearchable}
              name="color"
              options={GroupsTruckOptions}
              onChange={(choice) => {
                setTruckType(choice.value);
              }}
            />
            {errors.truck_type_id && (
              <h5 className="error">Please Check you truck</h5>
            )}
          </div>
        </div>
        <hr className="my-5" />
        <AccountForm account={account} setAccount={setAccount} />
        {/* <NavLink to="/driver"> */}
        <button
          type="submit"
          className="btn-save my-3"
          style={{ width: "10rem" }}
          disabled={isLoading}
          onClick={() => scrollToElement(targetElement)}
          // onClick={showNotification}
        >
          {loading ? "Loading" : "SAVE"}
        </button>
        {/* </NavLink> */}
      </form>
    </div>
  );
};

export default AddDriver;
