import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import  {ReactComponent as Dateicon} from '../../../icons/date-icon.svg';
import  {ReactComponent as Vector} from '../../../icons/Vector.svg';
import AccountForm from '../../Common/AccountForm';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  EditDriverFunction,
} from "../../../redux/Drivers/Editdriver";

import './AddDriver.css';


const EditDriver = () => {
  // const { list, status } = useSelector((state) => state.DriverList);
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState();

  const dispatch = useDispatch();
  const [cities, setCities] = useState([]); 
  const [groupsTruckOptions, setGroupsTruckOptions] = useState([]);
  const [groupsShipmentOptions, setGroupsShipmentOptions] = useState([]);

  const { id } = useParams();
  const [cookie] = useCookies(["eload_token"]);
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

  const showNotification = () => {
    // e.preventDefault();

    let Msg = ({ closeToast, toastProps }) => (
      <div>
        <h4>Success</h4>
      </div>
    );

    toast(<Msg /> ,{autoClose: 3000});
  };

  useEffect(() => {
    console.log(id,"id-----");
    const driverFetch = async (id) => {
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
        console.log(data,"driverfromAPiiiiiiiiiiii");

      setName(data.name);
      setEmail(data.user.email);
      setProfileimg(data.user.avatar);
    //   {
    //     password!="" &&(
    //         formdata.append("password", password)
    //     )
    // }
      // setPassword(item.password);
      // setOwnerName(data.driver.ownerName);=======================
      setOwnerPhone(data.user.phone);
      setOwnerNID(data.user.national_id);
      setIdCope(data.driver.id_copy);
      setDrivingLincese(data.driver.driving_license_number);
      setDrivingLincese_Cope(data.driver.driving_license_copy);
      setLinceseId(data.driver.license_id);
      setExpirydate(data.driver.expiry_date);
      setNationality(data.driver.nationality_id);
      setSponsorName(data.driver.sponsor_establishment_name);
      setSponsorNumber(data.driver.sponsor_establishment_number );
      setTruckModel(data.driver.truck.model);
      settruckPlateNumber(data.driver.truck.plate_number );
      setChassisNumber(data.driver.truck.chassis_number);
      setTruckLinceseNumber(data.driver.truck.license_number);
      setTruckLinceseCope(data.driver.truck.license_copy);
      setTruckType(data.driver.truck.truck_type_id);
      setAccount(data.user.account);
        return data;
      } catch (e) {
        console.log(e);
      }
    };
    // country
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
    // truck
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

        let groupsTruckOptionsData = data.map((item) => ({
          label: item.name,
          value: item.id,
        }));

        setGroupsTruckOptions(groupsTruckOptionsData);
      } catch (e) {
        console.log(e);
      }
    };
    driverFetch(id);
    Countrylist();
    Trucklist();
  }, []);

  // useEffect(() => {
  //   const finddriver = () => {
  //     let item = list.find((item, _) => item.id == id);
  //     console.log(item);

  //     setName(item.name);
  //     setEmail(item.email);
  //     setProfileimg(item.profileimg);
  //     setPassword(item.password);
  //     setOwnerName(item.ownerName);
  //     setOwnerPhone(item.ownerPhone);
  //     setOwnerNID(item.ownerNID);
  //     setIdCope(item.idCope);
  //     setDrivingLincese(item.drivingLincese);
  //     setDrivingLincese_Cope(item.drivingLincese_Cope);
  //     setLinceseId(item.LinceseId);
  //     setExpirydate(item.expirydate);
  //     setNationality(item.nationality);
  //     setSponsorName(item.sponsorName);
  //     setSponsorNumber(item.setChassisNumber);
  //     setTruckModel(item.truckModel);
  //     settruckPlateNumber(item.truckPlateNumber);
  //     setChassisNumber(item.chassisNumber);
  //     setTruckLinceseNumber(item.TruckLinceseNumber);
  //     setTruckLinceseCope(item.TruckLinceseCope);
  //     setTruckType(item.TruckType);

  //   };
  //   finddriver();
  // }, []);
  
  const edit = () => {

    const formdata = new FormData();
    formdata.append("_method", 'put');

    formdata.append("name", name);
    formdata.append("type", "freelancer");
    formdata.append("email", email);
    formdata.append("avatar", profileimg);
    {
      password!="" &&(
          formdata.append("password", password)
      )
    }
    // formdata.append("password", password);
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

    dispatch(
      // EditDriverFunction
      EditDriverFunction({
        token: cookie.eload_token,
        id,
        formdata,
      })
    )
      .then((res) => {
        // console.log(res);
        showNotification();
      navigate(`/Serviceproviders/driver`);

        // alert('Successfully Saved!');
      })
      .catch((e) => {
        console.log(e);
      });
  };

    // select-fetch
      // Api-fetch-Country================
  // useEffect(() => {
  //   const Countrylist = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://dev.eload.smart.sa/api/v1/countries",

  //         {
  //           headers: {
  //             Accept: "application/json",
  //             Authorization: `Bearer ${cookie.eload_token}`,

  //             "api-key":
  //               "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
  //           },
  //         }
  //       );

  //       const data = response.data.data;

  //       setCountryList(data);
  //       // console.log(data, "datacountry");
  //       return data;
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   Countrylist();
  // }, []);
  // Api-fetch-truck
  // useEffect(() => {
  //   const Trucklist = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://dev.eload.smart.sa/api/v1/truck_types",

  //         {
  //           headers: {
  //             Accept: "application/json",
  //             Authorization: `Bearer ${cookie.eload_token}`,

  //             "api-key":
  //               "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
  //           },
  //         }
  //       );

  //       const data = response.data.data;

  //       setTruckList(data);
  //       // console.log(data, "datacountry");
  //       return data;
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   Trucklist();
  // }, []);
  
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
    <div className='container-fluid adddriver p-5'>
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
              accept="image/png, image/jpeg"
              placeholder={profileimg}
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
              required
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
        </div>
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
              // value={idCope}
              accept="image/png, image/jpeg"
              placeholder={idCope}
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
              className="input-box"
              name="driverlicensecope"
              required
              // value={drivingLincese_Cope}
              accept="image/png, image/jpeg"
              placeholder={drivingLincese_Cope}
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
              // value={LinceseId}
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
          <div className="col-md-4">
            <label className="my-2 d-block">Nationality</label>
            {/* Country-select */}
            {
            GroupsCountryOptions.length > 0 &&
            // conver id "1" to 1 in the data
            <Select
              classNamePrefix="select"
              className="basic-multi-select"
              // isMulti
              isDisabled={isDisabled}
              // value={nationality}
              required
              isLoading={isLoading}
              isClearable={isClearable}
              options={GroupsCountryOptions}
              isRtl={isRtl}
              isSearchable={isSearchable}
              defaultValue={GroupsCountryOptions.find(({ value }) => value == nationality)}
              // onChange={(choice) => setTruckType(choice.value)}
              name="color"
              onChange={(choice) => {
                setNationality(choice.value);
              }}
            />
            }
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
              value={sponsorName}
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
              value={sponsorNumber}
              required
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
              required
              value={truckModel}
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
              value={truckPlateNumber}
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
              value={chassisNumber}
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
              value={TruckLinceseNumber}
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
              // value={TruckLinceseCope}
              accept="image/png, image/jpeg"
              placeholder={TruckLinceseCope}
              aria-describedby="inputGroupFileAddon03"
              aria-label="Upload"
              onChange={(e) => {
                setTruckLinceseCope(e.target.files[0]);
              }}
            />
          </div>
          <div className="col-md-4">
            <label className="my-2 d-block">Truck Type</label>
            {
            groupsTruckOptions.length > 0 && TruckType &&
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
              defaultValue={GroupsTruckOptions.find(({ value }) => value === TruckType)}
              onChange={(choice) => setTruckType(choice.value)}
            />
            }
          </div>
        </div>
        <hr className="my-5" />
        {
          Object.keys(account).length > 0 &&
          <AccountForm account={account} setAccount={setAccount} />
        }
        {/* <NavLink to="/Serviceproviders/driver"> */}
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

export default EditDriver
