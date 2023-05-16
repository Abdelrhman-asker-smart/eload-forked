import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import { fetchCityListByCountry } from "../../redux/CityListSlice";

import { GoogleMap, useJsApiLoader,  MarkerF } from "@react-google-maps/api";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    EditAddressFunction,
} from "../../redux/EditAddress.js";

import "./addAddress.css";


const EditAddress = () => {
    const dispatch = useDispatch();
    
  const [cities, setCities] = useState([]); 

  const { id, idshipper } = useParams();
  const [cookie] = useCookies(["eload_token"]);
  const [user_type, setUserType] = useState(localStorage.getItem('user_type'));
  const [user_type_data, setUserTypeData] = useState(JSON.parse(localStorage.getItem('user_type_data')));
  // select-options
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);


  // States================================
  const intialList = {
    phoneNumber: "",
    nameoption: "",
  };
  const [group, setGroup] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [Address, setAddress] = useState("");

  const [countryList, setCountryList] = useState([]);


// phones
  const [optionList, setOptionList] = useState([intialList]);
  // const [listPhone,setListPhone] =useState([]);

  // ====
  const [addOptionList, setAddOptionList] = useState([]);
  const newElement = "newvalue";
  const newArray = [...addOptionList];
  const boxarray=[]



 

  // ========map==============

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
  
    const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: "AIzaSyC8EXmnX2KsWfgzftLwhx7jhDd0lfDloU4",
    });
  
    const mapContainerStyle = {
      height: "500px",
      width: "100%",
    };
  

    const handleClick=(event)=>{
      setLatitude(event.latLng.lat()); // set the latitude state variable
      setLongitude(event.latLng.lng()); // set the longitude state variable
    }

    const handleSelectedOptionsTypes = () => {
      let selected_options = [];

      console.log('type', type);

      for (let i = 0; i < typeOptions.length; i++) {
        if (type.indexOf(typeOptions[i].value) > -1) {
          selected_options.push(typeOptions[i]);
        }
      }

      console.log('selected_options', selected_options);

      return selected_options;
    };

  // selct_list
  const [groupList, setGrouopList] = useState([]);

  console.log(addOptionList, "addOptionList");
// ======================fetch-Address===================================
  useEffect(() => {
    console.log(id,"id-----");
    const addressFetch = async (id) => {
      try {
        const response = await axios.get(
  
          `https://dev.eload.smart.sa/api/v1/addresses/${id}`,
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
        console.log(data,"addressfromAPiiiiiiiiiiii");

      setGroup(data.group.id);
      setName(data.name);
      setCities(data.city.id);
      setAddress(data.address);
      setLatitude(data.latitude);
      setLongitude(data.longitude);
      setType(data.type);
      // setListPhone(data.phones);
      for(var i=0 ; i < data.phones.length-1 ; i++){
        boxarray.push(data.phones[i]);
      }
      setAddOptionList(boxarray);
      console.log(boxarray ,"arrray");
      console.log(data.phones.length ,"data.phones.length");




        return data;
      } catch (e) {
        console.log(e);
      }
    };

    addressFetch(id);

  }, []);
  console.log(addOptionList ,"listttttttttttt");


  // Api-fetch-Country================
  useEffect(() => {
    const Countrylist = async () => {
      try {
        const response = await axios.get(
          "https://dev.eload.smart.sa/api/v1/countries/194?cities=1",

          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${cookie.eload_token}`,

              "api-key":
                "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
            },
          }
        );

        const data = response.data.data.data.states;

        setCountryList(data);
        console.log(data, "datacountry");
        return data;
      } catch (e) {
        console.log(e);
      }
    };
    Countrylist();

    dispatch(fetchCityListByCountry({ token: cookie.eload_token }))
      .then((cities_res) => {
        let data = cities_res.payload.data.data.states.map((object) => ({
          label: object.name,
          options: object.cities.map((sub_object) => ({
            value: sub_object.id,
            lat: sub_object.latitude,
            long: sub_object.longitude,
            label: sub_object.name,
          })),
        }));
        setCities(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
// -==========map-center
  const [selectLat, setSelectLat] = useState("");
  const [selectLong, setSelectLong] = useState("");
  
  const center = {
    lat: Number(selectLat) ,
    lng: Number(selectLong) ,
  };
  console.log(center,"center");
  /* ==============================type-select===================== */
  const typeOptions = [
    { value: "pickup", label: "Pick up" },
    { value: "dropoff", label: "Drop off" },
  ];
// ============================================edit-Address============================
  const edit = () => {
    const urlencoded = new URLSearchParams();
    urlencoded.append("addressable_type", "group");
    urlencoded.append("addressable_id", group);
    urlencoded.append("city_id", city);
    urlencoded.append("name", name);
    urlencoded.append("type", type.toString());
    urlencoded.append("address", Address);
    urlencoded.append("latitude", latitude);
    urlencoded.append("longitude", longitude);
    // urlencoded.append("phones[0][phone]", phoneNumber);
    // urlencoded.append("phones[0][name]", nameoption);

    optionList.map((itemdetails, indexdetails) => {
      urlencoded.append(`phones[${indexdetails}][phone]`, optionList[indexdetails].phoneNumber);
      urlencoded.append(`phones[${indexdetails}][name]`, optionList[indexdetails].nameoption);
    });

    dispatch(
      // EditDriverFunction
      EditAddressFunction({
        token: cookie.eload_token,
        id,
        urlencoded,
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

  // =========================Api-fetch-Groups================
  useEffect(() => {
    const Grouplist = async (id) => {
      try {
        const response = await axios.get(
          `https://dev.eload.smart.sa/api/v1/groups?shipper_id=${user_type == 'admin' ? idshipper : user_type_data.id}`,

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

        setGrouopList(data);
        console.log(data, "datagroup");
        return data;
      } catch (e) {
        console.log(e);
      }
    };
    Grouplist(id);
  }, []);
  // options_group
  const GroupsCountryOptions = groupList.map((item, index) => ({
    label: item.name,
    value: item.id,
  }));

  return (
    <div>
      <form >
        <div className="container-fluid p-5 addaddressstyel">
          <div className="head-address">
            <h2 className="text-head">Add new Address</h2>
            <div className="head-address-input">
              <div className="input-choose-group">
                <div className="row">
                  <div className="input-select col-6">
                    <div className="input-select-info">
                      <p className="head-text">Choose Group</p>
                      <NavLink to={`/Shipments/grouplist/${user_type == 'admin' ? idshipper : user_type_data.id}`}>
                        <button>
                          <a href="/#">View All</a>
                        </button>
                      </NavLink>
                    </div>
                    {/* choose-group */}
                    {
                     GroupsCountryOptions.length > 0 && group &&
                    <Select
                      classNamePrefix="select"
                      className="basic-multi-select"
                      // isMulti
                      isDisabled={isDisabled}
                      isLoading={isLoading}
                      isClearable={isClearable}
                      isRtl={isRtl}
                      required
                      defaultValue={GroupsCountryOptions.find(({ value }) => value == group)}
                      isSearchable={isSearchable}
                      name="color"
                      options={GroupsCountryOptions}
                      onChange={(choice) => {
                        setGroup(choice.value);
                      }}
                    />
                    }   
                  </div>
                  <div className="col-6  mt-auto  mb-auto text-center btn-side">
                    <NavLink to={`/Shipments/addnewgroup/${user_type == 'admin' ? idshipper : user_type_data.id}`}>
                      <button className="btn btn-adress">
                        + Add new group
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className="form-address">
            <div className="address-input w-100 mb-5">
              <p className="head-text mb-2">Name</p>
              <input
                type="text"
                className="input"
                placeholder="Name"
                value={name}
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="address-input w-100 mb-5">
              <p className="head-text mb-2">Type</p>
              {
              typeOptions.length > 0 && type &&
              <Select
                classNamePrefix="select"
                className="basic-multi-select"
                isMulti
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                defaultValue={handleSelectedOptionsTypes()}
                isRtl={isRtl}
                required
                isSearchable={isSearchable}
                name="color"
                options={typeOptions}
                onChange={(choice) => {
                  const selectedValues = choice
                    ? choice.map((option) => option.value)
                    : [];
                  setType(selectedValues);
                }}
              />
              }
            </div>
            <div className="address-input w-100 mb-5">
              <p className="head-text mb-2">City</p>
              {
                cities.length > 0 &&
              <Select
                classNamePrefix="select"
                className="basic-multi-select"
                // isMulti
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                required
                isRtl={isRtl}
                defaultValue={cities.find(({ value }) => value === city)}
                isSearchable={isSearchable}
                name="color"
                options={cities}
                onChange={(choice) => {
                  setCity(choice.value);
                  console.log(choice.lat,"lat");
                  setSelectLat(choice.lat);
                  setSelectLong(choice.long);
                }}
              />
            }

            </div>
            {
              center.lat && center.lng !=="" ?
              <div className="address-input w-100 mb-5">
                  {
                      isLoaded  ? 
                        <div>
                          <h2>Click on the map to get the latitude and longitude</h2>
                          <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            center={center}
                            zoom={10}
                            onClick={handleClick}
                          >
                            {latitude && longitude && (
                              <MarkerF position={{ lat: latitude, lng: longitude }} />
                            )}
                          </GoogleMap>
                          {latitude && <p>Latitude: {latitude} center: {center.lat}</p>}
                          {longitude && <p>Longitude: {longitude} center: {center.lng}</p>}
                        </div>
                       : 
                        <div>Loading...</div>
                      
                  }
              </div>
              :
              <></>
            }
            <div className="address-input w-100 mb-5">
              {/*=========================== row addition =====================*/}
              <div className="row optionbox">
                <div className="input-1 col-4 me-5">
                  <p className="head-text mb-2">Phone number</p>
                  <input
                    type="tel"
                    className="input"
                    placeholder="Phone number"
                    value={addOptionList[0]?.phone }
                    required
                    onChange={(e) => {
                      // setPhoneNumber(e.target.value);
                      const newList = [...optionList]; // create a copy of the array
                      newList[0].phoneNumber = e.target.value; // update the nameoption property
                      setOptionList(newList);
                    }}
                  />
                </div>

                <div className="input-2 col-4 ms-5">
                  <p className="head-text mb-2">Name (Optional)</p>
                  <input
                    type="text"
                    className="input"
                    placeholder="Name"
                    value={addOptionList[0]?.name }
                    onChange={(e) => {
                      // setNameoption(e.target.value);
                      const newList = [...optionList]; // create a copy of the array
                      newList[0].nameoption = e.target.value; // update the nameoption property
                      setOptionList(newList);
                    }}
                  />
                </div>
                <div
                  className="input-add col-3 text-center"
                  onClick={() => {
                    const newArray = [...addOptionList];
                    newArray.push(newElement);
                    setAddOptionList(newArray);
                    setOptionList([...optionList, intialList]);
                  }}
                >
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
              {addOptionList.map((item, indexdetails) => {
                return (
                  <>
                    <div className="row my-3 optionbox">
                      <div className="input-1 col-4 me-5">
                        <p className="head-text mb-2">Phone number</p>
                        <input
                          type="tel"
                          className="input"
                          value={addOptionList[indexdetails+1]?.phone}
                          placeholder="Phone number"
                          required
                          onChange={(e) => {
                            // setPhoneNumber(e.target.value);
                            const newList = [...optionList]; // create a copy of the array
                            newList[indexdetails + 1].phoneNumber =
                              e.target.value; // update the nameoption property
                            setOptionList(newList);
                          }}
                        />
           
                      </div>
                      <div className="input-2 col-4 ms-5">
                        <p className="head-text mb-2">Name (Optional)</p>
                        <input
                          type="text"
                          className="input"
                          value={addOptionList[indexdetails+1]?.name}
                          placeholder="Name"
                          onChange={(e) => {
                            // setNameoption(e.target.value);
                            const newList = [...optionList]; // create a copy of the array
                            newList[indexdetails + 1].nameoption =
                              e.target.value; // update the nameoption property
                            setOptionList(newList);
                          }}
                        />
                      </div>
                      <div
                        className="input-add col-1 text-center"
                        onClick={() => {
                          const newArray = [...addOptionList];
                          newArray.push(newElement);
                          setAddOptionList(newArray);
                        }}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </div>
                      <div
                        className="input-add col-1 text-center"
                        style={{ backgroundColor: "#ccc" }}
                        onClick={() => {
                          setAddOptionList(addOptionList.slice(0, -1));
                          setOptionList(optionList.slice(0, -1));
                        }}
                      >
                        <i
                          className="fa-solid fa-close"
                          style={{ color: "red" }}
                        ></i>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="address-input w-100 mb-5">
              <p className="head-text mb-2">Address</p>
              <input
                type="text"
                className="input input-text-area"
                placeholder="Address"
                value={Address}
                required
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="footer-address text-center">
            <button className="btn btn-adress" type="button">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditAddress
