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


import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  EditTruckFunction,
} from "../../../redux/Partner/EditTruckP";
import './AddTruckP.css';




const EditTruckP = () => {

    // const [startDate, setStartDate] = useState();

    const dispatch = useDispatch();
    // const [cities, setCities] = useState([]); 
    const [groupsTruckOptions, setGroupsTruckOptions] = useState([]);
    const [groupsDriversOptions, setGroupsDriversOptions] = useState([]);
  
    const { id , id_p} = useParams();
    const [cookie] = useCookies(["eload_token"]);
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
    const [TruckType, setTruckType] = useState(0);
    const [driver, setDriver] = useState(0);

    const [driversList, setDriversList] = useState([]);
    const [truckList, setTruckList] = useState([]);

    useEffect(() => {
        console.log(id,"id-----");
        console.log(id_p,"idprov");
        const TruckFetch = async (id) => {
          try {
            const response = await axios.get(
      
              `https://dev.eload.smart.sa/api/v1/trucks/${id}`,
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
            console.log(data,"trucksfromAPiiiiiiiiiiii");
    

          setTruckModel(data.model);
          settruckPlateNumber(data.plate_number );
          setChassisNumber(data.chassis_number);
          setTruckLinceseNumber(data.license_number);
          setTruckLinceseCope(data.license_copy);
          setTruckType(data.truck_type_id);
          setDriver(data.driver_id);

          console.log(data,"testtttttttttttt");


            return data;
          } catch (e) {
            console.log(e);
          }
        };
        // country
        const Driverslist = async (id_p) => {
          try {
            const response = await axios.get(
              `https://dev.eload.smart.sa/api/v1/drivers?provider_id=${id_p}`,
    
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
            console.log(data, "datacountry");
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
        TruckFetch(id);
        Driverslist(id_p);
        Trucklist();
      }, []);

      const edit = () => {

        const formdata = new FormData();
        formdata.append("_method", 'put');
        // truck
        formdata.append("model", truckModel);
        formdata.append("plate_number", truckPlateNumber);
        formdata.append("chassis_number", chassisNumber);
        formdata.append("chassis_number", chassisNumber);
        formdata.append("license_number", TruckLinceseNumber);
        formdata.append("license_copy", TruckLinceseCope);
        formdata.append("truck_type_id", TruckType);
        formdata.append("driver_id", driver);

    
        dispatch(
          // EditDriverFunction
          EditTruckFunction({
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
      const GroupsDriverOptions = driversList.map((item, index) => ({
        label: item.user.name,
        value: item.id,
      }));
      // truckoptions
      const GroupsTruckOptions = truckList.map((item, index) => ({
        label: item.name,
        value: item.id,
      }));
  return (
<div className='container-fluid adddriver p-5'>
     <h3>TRUCK INFORMATION</h3>
     <form>
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
            //   value={TruckLinceseCope}
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
                    {/* driver */}
            <div className="col-md-4">
            <label className="my-2 d-block">Driver</label>
            {
                GroupsDriverOptions.length > 0 && driver &&
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
                options={GroupsDriverOptions}
                defaultValue={GroupsDriverOptions.find(({ value }) => value === driver)}
  
                onChange={(choice) => {
                  setDriver(choice.value);
                }}
              />
            }

          </div>
        </div>
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

export default EditTruckP
