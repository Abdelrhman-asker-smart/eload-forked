import React from "react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as Dateicon } from "../../icons/date-icon.svg";
import { ReactComponent as Vector } from "../../icons/Vector.svg";
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";

import "./Iteminfo.css";

const Iteminfo = () => {
  const [cookie] = useCookies(["eload_token"]);

  const showNotification = () => {
    // e.preventDefault();

    let Msg = ({ closeToast, toastProps }) => (
      <div>
        <h4>Done</h4>
        <NavLink to="/Serviceproviders/driver">
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
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [truckType, setTruckType] = useState("");
    const [shipmentType, setShipmentType] = useState("");
    const [price, setPrice] = useState("");

      // country_list
  const [countryList, setCountryList] = useState([]);
  const [truckList, setTruckList] = useState([]);

    // Api-post==========================
    const apiAddItems = async (e) => {
      e.preventDefault();
      const formdata = new FormData();
      formdata.append("contract_id", "");
      formdata.append("from_city_id", source);
      formdata.append("to_city_id", destination);
      formdata.append("truck_type_id", truckType);
      formdata.append("shipment_type_id", shipmentType);
      formdata.append("price", price);


      try {
        const reponse = await axios.post(
          "https://dev.eload.smart.sa/api/v1/contract_items",
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
     
       const SourceSelect= [
        { value: 'Jeddah ', label: 'Jeddah ' },
        { value: 'Mecca', label: 'Mecca' },
        { value: 'Mecca ', label: 'Mecca ' },
        { value: 'Jeddah ', label: 'Jeddah ' },
      ];
      const DestnationSelect= [
        { value: 'Jeddah ', label: 'Jeddah ' },
        { value: 'Mecca', label: 'Mecca' },
        { value: 'Mecca ', label: 'Mecca ' },
        { value: 'Jeddah ', label: 'Jeddah ' },
      ];
      const TruckSelect= [
        { value: 'Truck1', label:<div><Vector className='mx-3'/> Truck1</div> },
        { value: 'Truck2', label:<div><Vector className='mx-3'/> Truck2</div> },
        { value: 'Truck3', label:<div><Vector className='mx-3'/> Truck3</div> },
      ];
      const shipmentOptions= [
        { value: 'Freezed', label: "Freezed" },
        { value: 'Normal', label: 'Normal' },
      ]; 
  return (
    <div className="container-fluid iteminfo p-5">
      <h3>ITEM INFORMATION</h3>
      <form onSubmit={apiAddItems}>
      {/* name+email */}
      <div className="row my-4 iteminfo">
        <div className="col-md-2">
         
          <label className="my-2 d-block">Source </label>
          <Select
          classNamePrefix="select"
          className="basic-multi-select"
          // isMulti
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable={isClearable}
          required
          isRtl={isRtl}
          isSearchable={isSearchable}
          name="color"
          options={GroupsCountryOptions}
          onChange={(e) => {
            setSource(e.target.value);
          }}
        />
        </div>
        <div className="col-md-2">
          <label className="my-2 d-block ">Destination</label>
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
          options={GroupsCountryOptions}
          onChange={(e) => {
            setDestination(e.target.value);
          }}
        />
        </div>
        <div className="col-md-2">
          <label className="my-2 d-block ">Truck Type</label>
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
          onChange={(e) => {
            setTruckType(e.target.value);
          }}
        />
        </div>
        {/* <div className="col-md-3 d-flex align-items-center"> */}
          <div className=" col-md-2 truck">
            <label className="my-2 d-block ">Shipment type</label>
            <Select
          classNamePrefix="select"
          className="basic-multi-select"
          // isMulti
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable={isClearable}
          isRtl={isRtl}
          required
          isSearchable={isSearchable}
          name="color"
          options={shipmentOptions}
          onChange={(e) => {
            setShipmentType(e.target.value);
          }}
        />
          </div>
          {/* price */}
          <div className=" col-md-2 truck">
            <label className="my-2 d-block ">Price</label>
            <input
              className="input-box small-input px-2"
              type="number"
              placeholder="price"
              required
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
        {/* </div> */}
        
      </div>
      <button className="btn-save my-5">SAVE</button>
      </form>
    </div>
  );
};

export default Iteminfo;
