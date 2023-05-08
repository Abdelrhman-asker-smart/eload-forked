import React from "react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
// import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import { fetchCityListByCountry } from "../../redux/CityListSlice";
// import { useDispatch, useSelector } from "react-redux";

import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";

import "../AddAddress/addAddress.css";

const AddAddress = () => {
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
        <h4>Done</h4>
        <NavLink to="/Serviceproviders/driver">
          <button className="btn btndetails">Back to Drivers</button>
        </NavLink>

        {/* <button className="btn btn-danger" onClick={closeToast}>Close</button> */}
      </div>
    );

    toast(<Msg />);
    // readNotification(notification.id);
  };

  // select-options
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  // States================================
  const [group, setGroup] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nameoption, setNameoption] = useState("");
  const [Address, setAddress] = useState("");

  // selct_list
  const [groupList, setGrouopList] = useState([]);
  // const [cityList, setCityList] = useState([]);
  const [addOptionList, setAddOptionList] = useState([]);
  const newElement = "newvalue";

  // const intialList = {
  //   truckTypePlanned: "",
  //   shipmentTypePlanned: "",
  //   shipmentvaluePlanned: "",
  //   weightPlanned: "",
  //   numTrucksPlanned: "",
  //   descriptionPlanned: "",
  //   PickingListPlanned: [],
  //   documListPlanned: [],
  //   commidityPlanned: "",
  //   uomPlanned: "",
  //   quantityPlanned: "",
  // };

  // Api-post==========================
  const apiAddAddress = async (e) => {
    e.preventDefault();
    const urlencoded = new URLSearchParams();
    urlencoded.append("addressable_type", "group");
    urlencoded.append("addressable_id", group);
    urlencoded.append("city_id", city);
    urlencoded.append("name", name);
    urlencoded.append("type", type);
    urlencoded.append("address", Address);
    urlencoded.append("latitude", "26.160366");
    urlencoded.append("longitude", "50.137523");
    urlencoded.append("phones[0][phone]", phoneNumber);
    urlencoded.append("phones[0][name]", nameoption);

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
      console.log("DoneAdddddddddddd");
      showNotification();
    } catch (e) {
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
            label: sub_object.name,
          })),
        }));
        setCities(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const handelAddOptions = () => {
    const newElement = "new value";
    const newArray = [...addOptionList]; // create a copy of the existing array
    newArray.push(newElement);
    setAddOptionList(newArray);
  };

  /* type-select */
  const typeOptions = [
    { value: "Pick up", label: "Pick up" },
    { value: "Drop off", label: "Drop off" },
  ];
  {
    /* city-select */
  }
  const cityOptions = [
    { value: "Jeddah ", label: "Jeddah " },
    { value: "Mecca ", label: "Mecca " },
    { value: "Jeddah", label: "Jeddah" },
    { value: "Mecca ", label: "Mecca " },
  ];
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
                onChange={(choice) => setCity(choice.value)}
              />
            </div>
            <div className="address-input w-100 mb-5">
              {/*=========================== row addition =====================*/}
              <div className="row">
                <div className="input-1 col-4 me-5">
                  <p className="head-text mb-2">Phone number</p>
                  <input
                    type="tel"
                    className="input"
                    placeholder="Phone number"
                    required
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
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
                    }}
                  />
                </div>
                <div className="input-add col-3 text-center"
                  // onClick={
                  //   handelAddOptions()
                  // }
                >
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
              {addOptionList.map((item, indexdetails) => {
                return (
                  <>
                    <div className="row my-3">
                      <div className="input-1 col-4 me-5">
                        <p className="head-text mb-2">Phone number</p>
                        <input
                          type="tel"
                          className="input"
                          placeholder="Phone number"
                          required
                          onChange={(e) => {
                            setPhoneNumber(e.target.value);
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
                          }}
                        />
                      </div>
                      <div className="input-add col-1 text-center">
                        <i className="fa-solid fa-plus"></i>
                      </div>
                      <div className="input-add col-1 text-center" style={{backgroundColor:"#ccc"}}
                        onClick={
                          setAddOptionList(addOptionList.slice(0, -1))
                        }
                      >
                        <i className="fa-solid fa-close" style={{color:"red"}}></i>
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
