import React from "react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
// import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import { fetchCityListByCountry } from "../../redux/CityListSlice";
// import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'

import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
// import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { GoogleMap, useJsApiLoader,  MarkerF } from "@react-google-maps/api";


import "../AddAddress/addAddress.css";

const AddAddress = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [cities, setCities] = useState([]);
  const [countryList, setCountryList] = useState([]);

  const [cookie] = useCookies(["eload_token"]);
  const [user_type, setUserType] = useState(localStorage.getItem('user_type'));
  const [user_type_data, setUserTypeData] = useState(JSON.parse(localStorage.getItem('user_type_data')));

  const showNotification = () => {
    // e.preventDefault();

    let Msg = ({ closeToast, toastProps }) => (
      <div>
        <h4>Success</h4>
        {/* <NavLink to={`/Shipments/grouplist/${id}`}>
          <button className="btn btndetails">Back to Drivers</button>
        </NavLink> */}

        {/* <button className="btn btn-danger" onClick={closeToast}>Close</button> */}
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

  const intialList = {
    phoneNumber: "",
    nameoption: "",
  };
  const [group, setGroup] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nameoption, setNameoption] = useState("");
  const [Address, setAddress] = useState("");
  const [optionList, setOptionList] = useState([intialList]);

  // console.log(optionList, "listobject");
    // ==================================map==========================
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
  
    const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      // googleMapsApiKey: "AIzaSyC8EXmnX2KsWfgzftLwhx7jhDd0lfDloU4",
      googleMapsApiKey: "AIzaSyAWSZTkq_zSRoeMhO-f54XgB2VMkKSlOrQ",

    });
  
    const mapContainerStyle = {
      height: "500px",
      width: "100%",
    };

    const [selectLat, setSelectLat] = useState();
    const [selectLong, setSelectLong] = useState();
  
    
    const center = {
      lat: Number(selectLat) ,
      lng: Number(selectLong) ,
    };
  

    const handleClick=(event)=>{
      setLatitude(event.latLng.lat()); // set the latitude state variable
      setLongitude(event.latLng.lng()); // set the longitude state variable
      setSelectLat(event.latLng.lat());
      setSelectLong(event.latLng.lng());
    }

  // selct_list
  const [groupList, setGrouopList] = useState([]);
  // const [cityList, setCityList] = useState([]);
  const [addOptionList, setAddOptionList] = useState([]);
  const newElement = "newvalue";
  const newArray = [...addOptionList];

  // console.log(addOptionList, "addOptionList");


  // Api-post==========================
  const apiAddAddress = async (e) => {
    e.preventDefault();
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

    try {
      const reponse = await axios.post(
        "https://dev.eload.smart.sa/api/v1/addresses",
        urlencoded,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${cookie.eload_token}`,
            "api-key":
              "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
          },
        }
      );
      // console.log("DoneAdddddddddddd");
      showNotification();
      navigate(`/Shipments/grouplist/${id}`);
    } catch (e) {
      let errorMessages = "An error occurred";

      if (e.response && e.response.data && e.response.data.errors) {
        errorMessages = e.response.data.errors.map(error => error.message).join(", ");
      }
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        color: '#0e4579',
        title: errorMessages,
        showConfirmButton: false,
        showCancelButton:true,
        cancelButtonText: "ok",
        timer: 8000,
      })
      console.log(e);
    }
  };
  // Api-fetch-Groups================
  useEffect(() => {
    const Grouplist = async (id) => {
      try {
        const response = await axios.get(
          `https://dev.eload.smart.sa/api/v1/groups?shipper_id=${user_type == 'admin' ? id : user_type_data.id}`,

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
        // console.log(data, "datagroup");
        return data;
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
    Grouplist(id);
  }, []);
  // options_group
  const GroupsCountryOptions = groupList.map((item, index) => ({
    label: item.name,
    value: item.id,
  }));
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
        // console.log(data, "datacountry");
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

  // console.log(center,"center");
  /* type-select */
  const typeOptions = [
    { value: "pickup", label: "Pick up" },
    { value: "dropoff", label: "Drop off" },
  ];

  // ==========================testMap=====================
  // const [center, setCenter] = useState(null);
  // useEffect(() => {
  //   if (isLoaded) {
  //     const geocoder = new window.google.maps.Geocoder();
  //     geocoder.geocode({ address: "Cairo"}, (results, status) => {
  //       if (status === "OK") {
  //         setCenter(results[0].geometry.location);
  //       } else {
  //         console.error("Geocode was not successful for the following reason:", status);
  //       }
  //     });
  //   }
  // }, [isLoaded]);


  return (
    <div>
      <form onSubmit={apiAddAddress}>
        <div className="container-fluid p-5 addaddressstyel">
          <div className="head-address">
            <h2 className="text-head">Add new Address</h2>
            <div className="head-address-input">
              <div className="input-choose-group">
                <div className="row">
                  <div className="input-select col-6">
                    <div className="input-select-info">
                      <p className="head-text">Choose Group</p>
                      <NavLink to={`/Shipments/grouplist/${user_type == 'admin' ? id : user_type_data.id}`}>
                        <button>
                          <a href="/#">View All</a>
                        </button>
                      </NavLink>
                    </div>
                    {/* choose-group */}
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
                      options={GroupsCountryOptions}
                      onChange={(choice) => {
                        setGroup(choice.value);
                      }}
                    />
                  </div>
                  <div className="col-6  mt-auto  mb-auto text-center btn-side">
                    <NavLink to={`/Shipments/addnewgroup/${user_type == 'admin' ? id : user_type_data.id}`}>
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
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="address-input w-100 mb-5">
              <p className="head-text mb-2">Type</p>
              <Select
                classNamePrefix="select"
                className="basic-multi-select"
                isMulti
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                required
                isSearchable={isSearchable}
                name="color"
                options={typeOptions}
                // onChange={(choice) => {
                //   setType(choice.value);
                // }}
                onChange={(choice) => {
                  const selectedValues = choice
                    ? choice.map((option) => option.value)
                    : [];
                  setType(selectedValues);
                }}
              />
            </div>
            <div className="address-input w-100 mb-5">
              <p className="head-text mb-2">City</p>
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
                options={cities}
                onChange={(choice) => {
                  setCity(choice.value);
                  // console.log(choice.lat,"lat");
                  setSelectLat(choice.lat);
                  setSelectLong(choice.long);
                }}
              />
              {/* 
                const [selectLat, setSelectLat] = useState("");
  const [selectLong, setSelectLong] = useState("");
              */}
            </div>
            {
              center.lat && center.lng !=="" ?
              <div className="address-input w-100 mb-5">
                  {
                      isLoaded  ? 
                        <div>
                          <h2>Click on the map to add your address</h2>
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
                          {/* {latitude && <p>Latitude: {latitude} center: {center.lat}</p>}
                          {longitude && <p>Longitude: {longitude} center: {center.lng}</p>} */}
                        </div>
                       : 
                        <div>Loading...</div>
                      
                  }
                  <span>latitude : {latitude}</span><br/>
                  <span>longitude :{longitude}</span>

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
                    required
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      const newList = [...optionList]; // create a copy of the array
                      newList[0].phoneNumber = e.target.value; // update the nameoption property
                      setOptionList(newList);
                    }}
                  />
                </div>
                {/* 
                    const intialList = {
                      phoneNumber: "",
                      nameoption: "",
                  };
                  const [optionList, setOptionList] = useState([intialList]);
                      setNameoption(e.target.value);

                  */}

                <div className="input-2 col-4 ms-5">
                  <p className="head-text mb-2">Name (Optional)</p>
                  <input
                    type="text"
                    className="input"
                    placeholder="Name"
                    onChange={(e) => {
                      setNameoption(e.target.value);
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
                          placeholder="Phone number"
                          required
                          onChange={(e) => {
                            setPhoneNumber(e.target.value);
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
                          placeholder="Name"
                          onChange={(e) => {
                            setNameoption(e.target.value);
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
                required
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="footer-address text-center">
            <button className="btn btn-adress" type="submit">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAddress;
