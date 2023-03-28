import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import Inputs from "./inputs";
import DatePicker from "react-datepicker";
// import  $  from 'jquery';
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as Dateicon } from "../../icons/date-icon.svg";
import Select from "react-select";
import moment from "moment";
import "./Shipments.css";
import { useContext } from "react";
import { ContextStore } from "../contaxt";
import Joi, { array, required } from "joi";
// import {yepResolver} from '@hookform/resolvers/yup';
// import {object , number, string} from "yup";
// import {useFormik} from "formik";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Check } from "@mui/icons-material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Btnadd = () => {
  return (
    <NavLink to="/addshippers">
      <button
        className="p-2"
        style={{
          border: "0",
          borderRadius: "20px",
          backgroundColor: "#0B2339",
          color: "#fff",
          marginLeft: "35%",
        }}
      >
        Add New Shipper
      </button>
    </NavLink>
  );
};

const initialValues = {};

const Shipments = () => {
  // Alart-Snackbar
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState, Transition) => {
    setState({ open: true, ...newState, Transition });
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState({ ...state, open: false });
  };

  const { setList } = useContext(ContextStore);
  const [cookie] = useCookies(["eload_token"]);

  // checked-btn-steps
  const [ischeck, setIsChecked] = useState(false);
  // tabs
  const [isACtive, setIsActive] = useState({
    pickup: false,
    dropoff: false,
    details: false,
  });

  const tabPickup = () => {
    setIsActive({ pickup: true, dropoff: false, details: false });
  };
  const tabdropoff = () => {
    setIsActive({ pickup: false, dropoff: true, details: false });
  };
  const tabdetails = () => {
    setIsActive({ pickup: false, dropoff: false, details: true });
  };

  // select-field
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  // const date = new Date();
  const [startDate, setStartDate] = useState(null);

    // datepacker_from tomorrow
    const today=new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate()+1);

  // ====================================shipments-states============================================

  const [shipperList, setShipperList] = useState([]);
  const [pickupList, setPickupList] = useState([]);
  const [dropofList, setDropofList] = useState([]);
  const [detailsList, setDetailsList] = useState([]);

  const [shipperuserChoice, setShipperUserChoice] = useState();
  const [pickupuserChoice, setpickupUserChoice] = useState();
  const [dropoffserChoice, setdropoffUserChoice] = useState();

  // state-add
  const [shipperValue, setShipperValue] = useState("");
  // pickup-chooses
  const [pickupValue, setPickupValue] = useState("");
  const [pickup_DateValue, setPickup_DateValue] = useState("");
  const [pickup_TimeFromValue, setPickup_TimeFromValue] = useState("");
  const [pickup_TimeToValue, setPickup_TimeToValue] = useState("");
  // dropoff-chooses
  const [dropoffValue, setDropoffValue] = useState("");

  const [dropoff_TimeFromValue, setDrop_TimeFromValue] = useState("");
  const [dropoff_TimeToValue, setDrop_TimeToValue] = useState("");

  // details
  const intialState = {
    truckTypeValue: "",
    shipmentType: "",
    shipmentTypeValue: "",
    weightValue: "",
    number_TrucksValue: "",
    description: "",
    picking_ListValue: [],
    Documents_ListValue: [],
    commodityTypeValue: "",
    uomValue: "",
    quantityValue: "",
  };
  const [totaldetails, setTotalDetails] = useState([intialState]);
  const [indexOfTotalDetails, setIndexOfTotalDetails] = useState(0);

  const addNewTotalDetails = () => {
    setTotalDetails([...totaldetails, intialState]);
  };
  const handleIncreaseIndex = () => {
    setIndexOfTotalDetails((prev) => prev + 1);
  };
  const handleDecreaseIndex = () => {
    if (indexOfTotalDetails === 0) {
      return;
    } else {
      setIndexOfTotalDetails((prev) => prev - 1);
    }
  };
  console.log(totaldetails, "total");
  console.log(indexOfTotalDetails, "indexOfTotalDetails");

  // pickup-Api
  const pickupListApi = async (shipper_id) => {
    console.log(shipper_id, "triggered");
    try {
      const response = await axios.get(
        `https://dev.eload.smart.sa/api/v1/orders/request/prepare?shipper_id=${shipper_id}`,
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
      console.log(data, "pickup");
      setPickupList(data);
      // console.log(pickupList, "pickup list hereeee");
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  //dropoff_Api
  const droppofflist = async (shipper_id, id_pickup) => {
    console.log(shipper_id, "shiperiddddddddddddddddddd");
    console.log(id_pickup, "pickupiddddddddddddddddddd");

    try {
      const response = await axios.get(
        `https://dev.eload.smart.sa/api/v1/orders/request/prepare?shipper_id=${shipper_id}&from_address_id=${id_pickup}`,

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
      console.log(data, "drop-off done");
      // console.log(data[0].id, "drop-off-id");

      setDropofList(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  // details
  const detailsApi = async (shipper_id, id_pickup, id_dropoff) => {
    console.log(shipper_id, "shiperiddddddddddddddddddd");
    console.log(id_pickup, "pickupiddddddddddddddddddd");
    console.log(id_dropoff, "dropoffiddddddddddddddddddd");

    try {
      const response = await axios.get(
        `https://dev.eload.smart.sa/api/v1/orders/request/prepare?shipper_id=${shipper_id}&from_address_id=${id_pickup}&to_address_id=${id_dropoff}`,

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
      console.log(data, "details doneeeeeeeeeeeeeeee");

      setDetailsList(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  // pickup-group
  const GroupspickupOptions = pickupList.map((item, index) => ({
    label: item.name,
    options: item.addresses.map((sub_item, index) => ({
      value: sub_item.id,
      label: sub_item.name,
    })),
  }));
  // dropoff-group
  const GroupsdropoffOptions = dropofList.map((item, index) => ({
    label: item.name,
    options: item.addresses.map((sub_item, index) => ({
      value: sub_item.id,
      label: sub_item.name,
    })),
  }));

  // select-pickup
  useEffect(() => {
    if (pickupList.length > 0) {
      // const optionsPickup = [
      //   pickupList.map((item, index) => {
      //     item.addresses.map((item_ad, index) => {
      //       console.log(item_ad, "items");
      //         return {
      //           value: item_ad.id,
      //           label: item_ad.name,
      //         };

      //     });
      //   }),
      // ];
      // const newArray = [];
      // const optionsPickup = [
      //   pickupList.map((item, index) => {
      //     item.addresses.map((item_ad, i) => {
      //       console.log(item_ad, "items");
      //       // const smallItem = {
      //       //   value: item_ad.id,
      //       //   label: item_ad.name,
      //       // };
      //       newArray.push(item_ad);
      //       // return {
      //       //   value: item_ad.id,
      //       //   label: item_ad.name,
      //       // };
      //       return newArray;
      //     });
      //   }),
      // ];
      // console.log(newArray, "newArray");
      // let address = [];
      const GroupspickupOptions2 = pickupList.map((item, index) => ({
        label: item.name,
        options: item.addresses.map((sub_item, index) => ({
          value: sub_item.id,
          label: sub_item.name,
        })),
      }));
    }
  }, [pickupList]);

  // Shipper-Api
  useEffect(() => {
    // all-shipper
    const allshipper = async () => {
      try {
        const response = await axios.get(
          "https://dev.eload.smart.sa/api/v1/shippers",
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
        console.log(data);
        setShipperList(data);

        return data;
      } catch (e) {
        console.log(e);
      }
    };

    allshipper();
    // pickuplist();
    // droppofflist();
  }, []);

  // shipperoptions
  const shipperOptions = shipperList.map((item, index) => {
    return {
      value: item.id,
      label: item.name,
    };
  });

  // new Array(5).fill(1).map((item , index)=>{
  //   console.log(index, "index");
  // })

  const handelSubmit = (e) => {
    e.preventDefault();

    setList(true);
    handleClick({
      vertical: "bottom",
      horizontal: "center",
      Transition: "SlideTransition",
    });
    // console.log("ddddddddddddddddddddddddone");
  };
  // ======================================================planned-shipment==================
  const [numShipment, setNumShipment] = useState(0);
  // const [arranumShipment, setArraNumShipment] = useState([]);
  let arrListnumShipment = new Array(0);
  // push-in the Arra
  for (let i = 0; i < numShipment; i++) {
    arrListnumShipment.push(1);
  }
  console.log(arrListnumShipment, "rrrrrrrrrrrrrrrrrrrrrrr");

  const getNumShipment = (e) => {
    setNumShipment(e.target.value);
  };

  // sates-planned
  const plannedAllShipments = {
    shipperPlanned: [],
    pickupAddressPlanned: [],
    pickupDatePlanned: "",
    pickupTimeFromPlanned: "",
    pickupTimeToPlanned: "",
    dropOffPlanned: [],
    dropTimeFromPlanned: "",
    dropTimeToPlanned: "",
    detailsTruck: {
      truckTypePlanned: [],
      shipmentTypePlanned: [],
      shipmentvaluePlanned: "",
      weightPlanned: "",
      numTrucksPlanned: "",
      PickingListPlanned: [],
      documListPlanned: [],
      commidityPlanned: [],
      uomPlanned: [],
      quantityPlanned: [],
    },
  };
  // array_of_planned_details
  const [plannedList, setPlannedList] = useState([plannedAllShipments]);
  // addnew_listof_object
  const addNewListOfShipment = () => {
    setPlannedList([...plannedList, plannedAllShipments]);
  };
  // console.log(arrList,"arrrrrrrrrrrrrrrrr");
  console.log(numShipment, "numstepppppppppp");
  console.log(plannedList, "infoarrrrrrrrrrrrrr");




  return (
    <div className="container-fluid px-5 shipments">
      {/* checked-btn */}
      <div className="head-shipments">
        <div className="shipments-btns d-block">
          <div className="form-check form-switch d-flex justify-content-center my-4">
            {ischeck ? (
              <input
                className="form-check-input"
                type="checkbox"
                value={ischeck}
                id="flexSwitchCheckDefault"
                onChange={() => setIsChecked(false)}
              />
            ) : (
              <input
                className="form-check-input"
                type="checkbox"
                value={ischeck}
                data-bs-toggle="modal"
                href="#exampleModalToggle"
                id="flexSwitchCheckDefault"
                // onChange={() => setIsChecked(!ischeck)}
              />
            )}

            <label
              className="form-check-label my-1 position-relative"
              htmlFor="flexSwitchCheckDefault"
              style={{ fontWeight: "500" }}
            >
              Switch to planned shipments{" "}
              <span style={{ color: "red", fontWeight: "500" }}>?</span>
            </label>
            <p className="position-absolute notegray">
              * you can choose many shipments{" "}
            </p>
          </div>
        </div>
      </div>

      {ischeck ? (
        <>
          {/* title */}
          <div className="steps">
            {/* <stepsShipments/> */}
            <div className="row">
              <hr
                className="position-relative"
                style={{
                  width: "100%",
                  // marginLeft: "18%",
                  backgroundColor: "#0B2339",
                  border: "none",
                  opacity: "1",
                  height: "4px",
                }}
              />
              <div className="d-flex justify-content-around align-items-center">
                {arrListnumShipment.map((item, index) => {
                  return (
                    <>
                      {plannedList.length >= index + 1 ? (
                        <div>
                          {/* <div
                            className="line-active position-absolute "
                            style={{
                              width: "20%",
                              top: "185.1px",
                              right: `60% - ${index * 20}`,
                              height: "6px",
                              backgroundColor: "#CBFF39",
                            }}
                          ></div> */}

                          <div
                            className="step1 d-block position-absolute shipmentnormal"
                            style={{
                              top: "166px",
                              right: `60% +${index * 2}`,
                              color: "#fff",
                              background: "#CBFF39",
                              fontWeight: "500",
                              padding: "9px 16px",
                              borderRadius: "50px",
                            }}
                            // onClick={()=>{
                            //   back
                            // }}
                          >
                            <label>{index + 1}</label>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div
                            className="step1 d-block position-absolute shipmentnormal"
                            style={{
                              top: "166px",
                              right: `60% +${index * 2}`,
                              color: "#fff",
                              background: "#0b2339",
                              fontWeight: "500",
                              padding: "5px 13px",
                              borderRadius: "50px",
                            }}
                          >
                            <label>{index + 1}</label>
                          </div>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
              {/* <div className="col-md-4">
                <div
                  className="line-active position-absolute "
                  style={{
                    width: "196px",
                    top: "185.1px",
                    right: "45rem",
                    height: "6px",
                    backgroundColor: "#CBFF39",
                  }}
                ></div>
                <div
                  className="step1 d-block position-absolute  step-active"
                  style={{
                    top: "166px",
                    right: "50rem",
                    color: "#0B2339",
                    backgroundColor: "#CBFF39",
                    fontWeight: "500",
                    padding: "5px 13px",
                    borderRadius: "50px",
                  }}
                >
                  <label>1</label>
                </div>

                <p
                  className="my-2"
                  style={{ marginLeft: "14.5rem", fontWeight: "400" }}
                >
                  shipment 1
                </p>
              </div>
              <div className="col-md-4">
                <div
                  className="step1 d-block position-absolute shipmentnormal"
                  style={{
                    top: "166px",
                    right: "37rem",
                    color: "#fff",
                    background: "#0B2339",
                    fontWeight: "500",
                    padding: "5px 13px",
                    borderRadius: "50px",
                  }}
                >
                  <label>2</label>
                </div>
                <p
                  className="my-2"
                  style={{ marginLeft: "5.5rem", fontWeight: "400" }}
                >
                  shipment 2
                </p>
              </div>
              <div className="col-md-4">
                <div
                  className="step1 d-block position-absolute shipmentnormal"
                  style={{
                    top: "166px",
                    right: "22rem",
                    color: "#fff",
                    background: "#0B2339",
                    fontWeight: "500",
                    padding: "5px 13px",
                    borderRadius: "50px",
                  }}
                >
                  <label>3</label>
                </div>
                <p
                  className="my-2"
                  style={{ marginLeft: "-1.5rem", fontWeight: "400" }}
                >
                  shipment 3
                </p>
              </div> */}
            </div>
          </div>

          {/* all_shipmentsList_Planned */}
          <div className="steps-shipments mt-4">
            <div className="steps">
              <div
                className={
                  isACtive.pickup ? "step pickup active" : "step pickup"
                }
              >
                <span>1</span>
                <p style={{ fontWeight: "400" }}>Pick up</p>
              </div>
              <div
                className={
                  isACtive.dropoff ? "step dropoff active" : "step dropoff"
                }
              >
                <span>2</span>
                <p style={{ fontWeight: "400" }}>Drop off</p>
              </div>
              <div
                className={
                  isACtive.details ? "step details active" : "step details"
                }
              >
                <span>3</span>
                <p style={{ fontWeight: "400" }}>Details</p>
              </div>
              <div className="step notes ">
                <span>4</span>
                <p style={{ fontWeight: "400" }}>Notes</p>
              </div>
            </div>
            <hr />
          </div>

          {/* ----------------------formInfo----------- */}

          {plannedList.length === numShipment && (
           
            <form onSubmit={handelSubmit}>
              <div className="input-shipper " style={{ width: "49%" }}>
                <p>
                  Shipper<span>*</span>
                </p>
                {/* shipper-select */}
                <Select
                  classNamePrefix="select"
                  className="basic-multi-select"
                  // isMulti
                  isDisabled={isDisabled}
                  required={required}
                  isLoading={isLoading}
                  isClearable={isClearable}
                  isRtl={isRtl}
                  isSearchable={isSearchable}
                  name="shipper"
                  options={shipperOptions}
                  onChange={(choice) => {
                    pickupListApi(choice.value);
                    setShipperUserChoice(choice.value);
                    setShipperValue(choice.value);
                  }}
                />
              </div>
              <div className="pick-up box-inputs" onClick={tabPickup}>
                <div className="box-inputs-head">Pick up</div>
                <div className="inputs row">
                  <div className="input input-select col-md-6">
                    <label htmlFor="address">
                      Pickup Address<span>*</span>
                    </label>
                    <Select
                      classNamePrefix="select"
                      className="basic-multi-select"
                      // isMulti
                      isDisabled={isDisabled}
                      isLoading={isLoading}
                      isClearable={isClearable}
                      required={required}
                      isRtl={isRtl}
                      isSearchable={isSearchable}
                      name="color"
                      options={GroupspickupOptions}
                      onChange={(choice) => {
                        setpickupUserChoice(choice.value);
                        droppofflist(shipperuserChoice, choice.value);
                        setPickupValue(choice.value);
                      }}
                    />
                  </div>
                  <div className="input col-md-4">
                    <label htmlFor="address">
                      Pickup Date<span>*</span>
                    </label>

                    <DatePicker
                      className="date-input position-relative px-5"
                      selected={startDate}
                      required={true}
                      onChange={(date) => {
                        setStartDate(date);
                        setPickup_DateValue(date);
                      }}
                      placeholderText={"dd/mm/yyyy"}
                      // filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                      minDate={moment().toDate()}
                      showYearDropdown // year show and scrolldown alos
                      scrollableYearDropdown
                    />

                    <Dateicon
                      className="position-absolute"
                      style={{ top: "6.5rem", left: "34.5rem" }}
                    />
                  </div>
                  {/* time-from */}
                  <div className="input col-md-3">
                    <label htmlFor="address">
                      Pickup Time<span>*</span>
                    </label>
                    <input
                      type="time"
                      required
                      onChange={(v) => setPickup_TimeFromValue(v.target.value)}
                    />
                  </div>
                  {/* time-to */}
                  <div className="input col-md-3 mt-4">
                    <input
                      type="time"
                      required
                      onChange={(v) => setPickup_TimeToValue(v.target.value)}
                    />
                  </div>
                  <div className="add-btn">
                    <NavLink to="/Shipments/addAddress">
                      <button>
                        <i className="fa-solid fa-plus"></i> Add New Address
                      </button>
                    </NavLink>
                  </div>
                </div>
                <hr />
              </div>
              <div className="drop-off box-inputs" onClick={tabdropoff}>
                <div className="box-inputs-head">Drop off</div>
                <div className="inputs">
                  <div className="input input-select">
                    <label htmlFor="address">
                      Drop off Address<span>*</span>
                    </label>
                    {/* dropoff-select */}
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
                      options={GroupsdropoffOptions}
                      onChange={(choice) => {
                        setdropoffUserChoice(choice.value);
                        detailsApi(
                          shipperuserChoice,
                          pickupuserChoice,
                          choice.value
                        );
                        setDropoffValue(choice.value);
                      }}
                    />
                  </div>
                  <div className="input mx-3">
                    <label htmlFor="address">
                      Drop off Time<span>*</span>
                    </label>
                    <input
                      type="time"
                      required
                      onChange={(v) => setDrop_TimeFromValue(v.target.value)}
                    />
                  </div>
                  <div className="input mx-3 mt-4">
                    <input
                      type="time"
                      required
                      onChange={(v) => setDrop_TimeToValue(v.target.value)}
                    />
                  </div>
                  <div className="add-btn">
                    <NavLink to="/Shipments/addAddress">
                      <button>
                        <i className="fa-solid fa-plus"></i> Add New Address
                      </button>
                    </NavLink>
                  </div>
                </div>
                <hr />
              </div>
              <div className="details box-inputs mb-4" onClick={tabdetails}>
                <div className="box-inputs-head">Details</div>

                {totaldetails.map((item, index) => {
                  return (
                    <>
                      <Inputs
                        indexOfItem={index}
                        shipperuserChoice={shipperuserChoice}
                        pickupuserChoice={pickupuserChoice}
                        detailsApi={detailsApi}
                        detailsList={detailsList}
                        dropoffserChoice={dropoffserChoice}
                        pickup_DateValue={pickup_DateValue}
                        pickup_TimeFromValue={pickup_TimeFromValue}
                        pickup_TimeToValue={pickup_TimeToValue}
                        dropoff_TimeFromValue={dropoff_TimeFromValue}
                        dropoff_TimeToValue={dropoff_TimeToValue}
                        // input={input}
                        setTotalDetails={setTotalDetails}
                        totaldetails={totaldetails}
                        indexOfTotalDetails={indexOfTotalDetails}
                        // validation={validation}
                      />
                      {index > 0 && (
                        <button
                          className="btn-delete"
                          id="delete"
                          onClick={(ele) => {
                            const newArr = totaldetails.filter((i, j) => {
                              return index !== j;
                            });
                            setTotalDetails(newArr);
                            handleDecreaseIndex();
                          }}
                        >
                          Delete
                        </button>
                      )}
                    </>
                  );
                })}
                <div className="control-btn">
                  <div className="left-btn">
                    <button
                      className="btn-add "
                      id="add"
                      type="btn"
                      onClick={() => {
                        // setInputs([...input, ""]);
                        addNewTotalDetails();
                        // setIndexOfTotalDetails(indexOfTotalDetails + 1);
                        handleIncreaseIndex();
                      }}
                    >
                      <i className="fa-solid fa-plus"></i> Add truck
                    </button>
                  </div>
                  <div className="right-btn">
                    {/* <NavLink to="/allshipments"> */}

                    <button
                      className="btn-save"
                      type="submit"
                      // onClick={handleClick}
                      // onClick={() => {
                      //   setList(Math.random() * 234567);
                      // }}
                    >
                      Save
                    </button>

                    <Snackbar
                      open={open}
                      autoHideDuration={5000}
                      onClose={handleClose}
                      anchorOrigin={{ vertical, horizontal }}
                    >
                      <Alert
                        onClose={handleClose}
                        severity="success"
                        sx={{ width: "100%" }}
                      >
                        This is a success Add Shipment!
                      </Alert>
                    </Snackbar>
                  </div>
                </div>
              </div>
            </form>
          )}
          <form>
            <div className="input-shipper " style={{ width: "49%" }}>
              <p>
                Shipper<span>*</span>
              </p>
              {/* shipper-select */}
              <Select
                classNamePrefix="select"
                className="basic-multi-select"
                // isMulti
                isDisabled={isDisabled}
                required={required}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                name="shipper"
                options={shipperOptions}
                onChange={(choice) => {
                  pickupListApi(choice.value);
                  setShipperUserChoice(choice.value);
                  setShipperValue(choice.value);
                }}
              />
            </div>
            <div className="pick-up box-inputs" onClick={tabPickup}>
              <div className="box-inputs-head">Pick up</div>
              <div className="inputs row">
                <div className="input input-select col-md-6">
                  <label htmlFor="address">
                    Pickup Address<span>*</span>
                  </label>
                  <Select
                    classNamePrefix="select"
                    className="basic-multi-select"
                    // isMulti
                    isDisabled={isDisabled}
                    isLoading={isLoading}
                    isClearable={isClearable}
                    required={required}
                    isRtl={isRtl}
                    isSearchable={isSearchable}
                    name="color"
                    options={GroupspickupOptions}
                    onChange={(choice) => {
                      setpickupUserChoice(choice.value);
                      droppofflist(shipperuserChoice, choice.value);
                      setPickupValue(choice.value);
                    }}
                  />
                </div>
                <div className="input col-md-4">
                  <label htmlFor="address">
                    Pickup Date<span>*</span>
                  </label>

                  <DatePicker
                    className="date-input position-relative px-5"
                    selected={startDate}
                    required={true}
                    onChange={(date) => {
                      setStartDate(date);
                      setPickup_DateValue(date);
                    }}
                    placeholderText={"dd/mm/yyyy"}
                    // filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                    minDate={moment().toDate()}
                    showYearDropdown // year show and scrolldown alos
                    scrollableYearDropdown
                  />

                  <Dateicon
                    className="position-absolute"
                    style={{ top: "6.5rem", left: "34.5rem" }}
                  />
                </div>
                {/* time-from */}
                <div className="input col-md-3">
                  <label htmlFor="address">
                    Pickup Time<span>*</span>
                  </label>
                  <input
                    type="time"
                    required
                    onChange={(v) => setPickup_TimeFromValue(v.target.value)}
                  />
                </div>
                {/* time-to */}
                <div className="input col-md-3 mt-4">
                  <input
                    type="time"
                    required
                    onChange={(v) => setPickup_TimeToValue(v.target.value)}
                  />
                </div>
                <div className="add-btn">
                  <NavLink to="/Shipments/addAddress">
                    <button>
                      <i className="fa-solid fa-plus"></i> Add New Address
                    </button>
                  </NavLink>
                </div>
              </div>
              <hr />
            </div>
            <div className="drop-off box-inputs" onClick={tabdropoff}>
              <div className="box-inputs-head">Drop off</div>
              <div className="inputs">
                <div className="input input-select">
                  <label htmlFor="address">
                    Drop off Address<span>*</span>
                  </label>
                  {/* dropoff-select */}
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
                    options={GroupsdropoffOptions}
                    onChange={(choice) => {
                      setdropoffUserChoice(choice.value);
                      detailsApi(
                        shipperuserChoice,
                        pickupuserChoice,
                        choice.value
                      );
                      setDropoffValue(choice.value);
                    }}
                  />
                </div>
                <div className="input mx-3">
                  <label htmlFor="address">
                    Drop off Time<span>*</span>
                  </label>
                  <input
                    type="time"
                    required
                    onChange={(v) => setDrop_TimeFromValue(v.target.value)}
                  />
                </div>
                <div className="input mx-3 mt-4">
                  <input
                    type="time"
                    required
                    onChange={(v) => setDrop_TimeToValue(v.target.value)}
                  />
                </div>
                <div className="add-btn">
                  <NavLink to="/Shipments/addAddress">
                    <button>
                      <i className="fa-solid fa-plus"></i> Add New Address
                    </button>
                  </NavLink>
                </div>
              </div>
              <hr />
            </div>
            <div className="details box-inputs mb-4" onClick={tabdetails}>
              <div className="box-inputs-head">Details</div>

              {totaldetails.map((item, index) => {
                return (
                  <>
                    <Inputs
                      indexOfItem={index}
                      shipperuserChoice={shipperuserChoice}
                      pickupuserChoice={pickupuserChoice}
                      detailsApi={detailsApi}
                      detailsList={detailsList}
                      dropoffserChoice={dropoffserChoice}
                      pickup_DateValue={pickup_DateValue}
                      pickup_TimeFromValue={pickup_TimeFromValue}
                      pickup_TimeToValue={pickup_TimeToValue}
                      dropoff_TimeFromValue={dropoff_TimeFromValue}
                      dropoff_TimeToValue={dropoff_TimeToValue}
                      // input={input}
                      setTotalDetails={setTotalDetails}
                      totaldetails={totaldetails}
                      indexOfTotalDetails={indexOfTotalDetails}
                      // validation={validation}
                    />
                    {index > 0 && (
                      <button
                        className="btn-delete"
                        id="delete"
                        onClick={(ele) => {
                          const newArr = totaldetails.filter((i, j) => {
                            return index !== j;
                          });
                          setTotalDetails(newArr);
                          handleDecreaseIndex();
                        }}
                      >
                        Delete
                      </button>
                    )}
                  </>
                );
              })}
              <div className="control-btn">
                <div className="left-btn">
                  <button
                    className="btn-add "
                    id="add"
                    type="btn"
                    onClick={() => {
                      // setInputs([...input, ""]);
                      addNewTotalDetails();
                      // setIndexOfTotalDetails(indexOfTotalDetails + 1);
                      handleIncreaseIndex();
                    }}
                  >
                    <i className="fa-solid fa-plus"></i> Add truck
                  </button>
                </div>
                <div className="right-btn">
                  {/* <NavLink to="/allshipments"> */}

                  {plannedList.length < numShipment ? (
                    <button
                      className="btn-save"
                      onClick={() => {
                        addNewListOfShipment();
                      }}
                    >
                      Next Shipment
                    </button>
                  ) : (
                    <button
                      className="btn-save"

                      // onClick={() => {
                      //   addNewListOfShipment();
                      // }}
                    >
                      Save
                    </button>
                  )}

                  <Snackbar
                    open={open}
                    autoHideDuration={5000}
                    onClose={handleClose}
                    anchorOrigin={{ vertical, horizontal }}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      sx={{ width: "100%" }}
                    >
                      This is a success Add Shipment!
                    </Alert>
                  </Snackbar>
                </div>
              </div>
            </div>
          </form>
        </>
      ) : (
        <>
          {/* ===================================shipment without Planned =================================*/}
          <div className="steps-shipments">
            <div className="steps">
              <div
                className={
                  isACtive.pickup ? "step pickup active" : "step pickup"
                }
              >
                <span>1</span>
                <p style={{ fontWeight: "400" }}>Pick up</p>
              </div>
              <div
                className={
                  isACtive.dropoff ? "step dropoff active" : "step dropoff"
                }
              >
                <span>2</span>
                <p style={{ fontWeight: "400" }}>Drop off</p>
              </div>
              <div
                className={
                  isACtive.details ? "step details active" : "step details"
                }
              >
                <span>3</span>
                <p style={{ fontWeight: "400" }}>Details</p>
              </div>
              <div className="step notes ">
                <span>4</span>
                <p style={{ fontWeight: "400" }}>Notes</p>
              </div>
            </div>
            <hr />
          </div>
          <form onSubmit={handelSubmit}>
          {/* <form > */}

            <div className="input-shipper " style={{ width: "49%" }}>
              <p>
                Shipper<span>*</span>
              </p>
              {/* shipper-select */}
              <Select
                classNamePrefix="select"
                className="basic-multi-select"
                // isMulti
                isDisabled={isDisabled}
                required={required}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                name="shipper"
                options={shipperOptions}
                onChange={(choice) => {
                  pickupListApi(choice.value);
                  setShipperUserChoice(choice.value);
                  setShipperValue(choice.value);
                }}
              />
            </div>
            <div className="pick-up box-inputs" onClick={tabPickup}>
              <div className="box-inputs-head">Pick up</div>
              <div className="inputs row">
                <div className="input input-select col-md-6">
                  <label htmlFor="address">
                    Pickup Address<span>*</span>
                  </label>
                  <Select
                    classNamePrefix="select"
                    className="basic-multi-select"
                    // isMulti
                    isDisabled={isDisabled}
                    isLoading={isLoading}
                    isClearable={isClearable}
                    required={required}
                    isRtl={isRtl}
                    isSearchable={isSearchable}
                    name="color"
                    options={GroupspickupOptions}
                    onChange={(choice) => {
                      setpickupUserChoice(choice.value);
                      droppofflist(shipperuserChoice, choice.value);
                      setPickupValue(choice.value);
                    }}
                  />
                </div>
                <div className="input col-md-4">
                  <label htmlFor="address">
                    Pickup Date<span>*</span>
                  </label>

                  <DatePicker
                    className="date-input position-relative px-5"
                    selected={startDate}
                    required={true}
                    onChange={(date) => {
                      setStartDate(date);
                      setPickup_DateValue(date);
                    }}
                    placeholderText={"dd/mm/yyyy"}
                    // filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                    // minDate={moment().toDate()}
                    minDate={tomorrow}

                    showYearDropdown // year show and scrolldown alos
                    scrollableYearDropdown
                  />

                  <Dateicon
                    className="position-absolute"
                    style={{ top: "6.5rem", left: "34.5rem" }}
                  />
                </div>
                {/* time-from */}
                <div className="input col-md-3">
                  <label htmlFor="address">
                    Pickup Time<span>*</span>
                  </label>
                  <input
                    type="time"
                    required
                    onChange={(v) => setPickup_TimeFromValue(v.target.value)}
                  />
                </div>
                {/* time-to */}
                <div className="input col-md-3 mt-4">
                  <input
                    type="time"
                    required
                    onChange={(v) => setPickup_TimeToValue(v.target.value)}
                  />
                </div>
                <div className="add-btn">
                  <NavLink to="/Shipments/addAddress">
                    <button>
                      <i className="fa-solid fa-plus"></i> Add New Address
                    </button>
                  </NavLink>
                </div>
              </div>
              <hr />
            </div>
            <div className="drop-off box-inputs" onClick={tabdropoff}>
              <div className="box-inputs-head">Drop off</div>
              <div className="inputs">
                <div className="input input-select">
                  <label htmlFor="address">
                    Drop off Address<span>*</span>
                  </label>
                  {/* dropoff-select */}
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
                    options={GroupsdropoffOptions}
                    onChange={(choice) => {
                      setdropoffUserChoice(choice.value);
                      detailsApi(
                        shipperuserChoice,
                        pickupuserChoice,
                        choice.value
                      );
                      setDropoffValue(choice.value);
                    }}
                  />
                </div>
                <div className="input mx-3">
                  <label htmlFor="address">
                    Drop off Time<span>*</span>
                  </label>
                  <input
                    type="time"
                    required
                    onChange={(v) => setDrop_TimeFromValue(v.target.value)}
                  />
                </div>
                <div className="input mx-3 mt-4">
                  <input
                    type="time"
                    required
                    onChange={(v) => setDrop_TimeToValue(v.target.value)}
                  />
                </div>
                <div className="add-btn">
                  <NavLink to="/Shipments/addAddress">
                    <button>
                      <i className="fa-solid fa-plus"></i> Add New Address
                    </button>
                  </NavLink>
                </div>
              </div>
              <hr />
            </div>
            <div className="details box-inputs mb-4" onClick={tabdetails}>
              <div className="box-inputs-head">Details</div>

              {totaldetails.map((item, index) => {
                return (
                  <>
                    <Inputs
                      indexOfItem={index}
                      shipperuserChoice={shipperuserChoice}
                      pickupuserChoice={pickupuserChoice}
                      detailsApi={detailsApi}
                      detailsList={detailsList}
                      dropoffserChoice={dropoffserChoice}
                      pickup_DateValue={pickup_DateValue}
                      pickup_TimeFromValue={pickup_TimeFromValue}
                      pickup_TimeToValue={pickup_TimeToValue}
                      dropoff_TimeFromValue={dropoff_TimeFromValue}
                      dropoff_TimeToValue={dropoff_TimeToValue}
                      // input={input}
                      setTotalDetails={setTotalDetails}
                      totaldetails={totaldetails}
                      indexOfTotalDetails={indexOfTotalDetails}
                      // validation={validation}
                    />
                    {index > 0 && (
                      <button
                        className="btn-delete"
                        id="delete"
                        onClick={(ele) => {
                          const newArr = totaldetails.filter((i, j) => {
                            return index !== j;
                          });
                          setTotalDetails(newArr);
                          handleDecreaseIndex();
                        }}
                      >
                        Delete
                      </button>
                    )}
                  </>
                );
              })}
              <div className="control-btn">
                <div className="left-btn">
                  <button
                    className="btn-add "
                    id="add"
                    type="button"
                    onClick={() => {
                      // setInputs([...input, ""]);
                      addNewTotalDetails();
                      // setIndexOfTotalDetails(indexOfTotalDetails + 1);
                      handleIncreaseIndex();
                    }}
                  >
                    <i className="fa-solid fa-plus"></i> Add truck
                  </button>
                </div>
                <div className="right-btn">
                  {/* <NavLink to="/allshipments"> */}

                  <button
                    className="btn-save"
                    type="submit"
                    // onClick={handleClick}
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   setList(Math.random() * 234567);
                    // }}
                  >
                    Save
                  </button>

                  <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    anchorOrigin={{ vertical, horizontal }}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      sx={{ width: "100%" }}
                    >
                      This is a success Add Shipment!
                    </Alert>
                  </Snackbar>
                </div>
              </div>
            </div>

            {/* modal */}
            <div
              className="modal fade"
              id="exampleModalToggle"
              aria-hidden="true"
              aria-labelledby="exampleModalToggleLabel"
              tabIndex="-1"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div
                  className="modal-content"
                  style={{ borderRadius: "25px", width: "80%" }}
                >
                  <div className="modal-header border-0 justify-content-end">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body text-center ">
                    <p
                      className="mb-3"
                      style={{
                        fontSize: "18px",
                        fontWeight: "400",
                        color: "#0b2339",
                      }}
                    >
                      Enter The number of shipments to Add
                    </p>
                    <div className="d-bolck">
                      <input
                        type="number"
                        className="input_shipment px-3"
                        style={{
                          border: "1px solid #ccc",
                          borderRadius: "20px",
                          height: "2rem",
                          color: "#0b2339",
                        }}
                        onChange={getNumShipment}
                      />
                    </div>
                    <button
                      className="btnSave my-4"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={() => {
                        setIsChecked(!ischeck);
                        // pushinarray()
                      }}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Shipments;
