import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

import Inputs from "./inputs";
import DatePicker from "react-datepicker";
// import  $  from 'jquery';
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as Dateicon } from "../../icons/date-icon.svg";
import Select from "react-select";
// import moment from "moment";
import "./Shipments.css";
import { useContext } from "react";
import { ContextStore } from "../contaxt";
import required from "joi";
// import {yepResolver} from '@hookform/resolvers/yup';
// import {object , number, string} from "yup";
// import {useFormik} from "formik";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
// import { Check } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// const Btnadd = () => {
//   return (
//     <NavLink to="/addshippers">
//       <button
//         className="p-2"
//         style={{
//           border: "0",
//           borderRadius: "20px",
//           backgroundColor: "#0B2339",
//           color: "#fff",
//           marginLeft: "35%",
//         }}
//       >
//         Add New Shipper
//       </button>
//     </NavLink>
//   );
// };

// const initialValues = {};

const Shipments = () => {
  const navigate = useNavigate();
  const showNotification = () => {
    let Msg = ({ closeToast, toastProps }) => (
      <div>
        <h4>Success</h4>
      </div>
    );

    toast(<Msg />, { autoClose: 3000 });
  };
  const [user_type] = useState(localStorage.getItem("user_type"));
  const [user_type_data] = useState(
    JSON.parse(localStorage.getItem("user_type_data"))
  );

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

  const [order, setOrder] = useState({});

  const handleOrder = (order) => {
    setOrder(order);
  };

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
  const [isClearable] = useState(true);
  const [isSearchable] = useState(true);
  const [isDisabled] = useState(false);
  const [isLoading] = useState(false);
  const [isRtl] = useState(false);

  // const date = new Date();
  const [startDate, setStartDate] = useState(null);

  // datepacker_from tomorrow
  const today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  // ====================================shipments-states============================================

  const [shipperList, setShipperList] = useState([]);
  const [pickupList, setPickupList] = useState([]);
  const [dropofList, setDropofList] = useState([]);
  const [detailsList, setDetailsList] = useState([]);

  const [shipperuserChoice, setShipperUserChoice] = useState("");
  const [pickupuserChoice, setpickupUserChoice] = useState();
  const [dropoffserChoice, setdropoffUserChoice] = useState();

  // state-add
  const [shipperValue, setShipperValue] = useState("");
  const [shipperid, setShipperid] = useState("");

  // pickup-chooses
  const [pickupValue, setPickupValue] = useState("");
  const [pickup_DateValue, setPickup_DateValue] = useState("");
  const [pickup_TimeFromValue, setPickup_TimeFromValue] = useState("");
  const [pickup_TimeToValue, setPickup_TimeToValue] = useState("");
  // dropoff-chooses
  const [dropoffValue, setDropoffValue] = useState("");
  // console.log(dropoffValue, " dosadas");
  const [dropoff_TimeFromValue, setDrop_TimeFromValue] = useState("");
  const [dropoff_TimeToValue, setDrop_TimeToValue] = useState("");

  // details
  const intialState = {
    truckTypePlanned: "",
    shipmentTypePlanned: "",
    shipmentvaluePlanned: "",
    weightPlanned: "",
    numTrucksPlanned: "",
    descriptionPlanned: "",
    PickingListPlanned: [],
    documListPlanned: [],
    commidityPlanned: "",
    uomPlanned: "",
    quantityPlanned: "",
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

  // pickup-Api
  const pickupListApi = async (shipper_id) => {
    // console.log(shipper_id, "triggered");
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
      // console.log(data, "pickup");
      setPickupList(data);
      setShipperid(shipper_id);
      // console.log(pickupList, "pickup list hereeee");
      return data;
    } catch (e) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        color: "#0e4579",
        title: `${e.response.data.message}`,
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: "ok",
        timer: 8000,
      });
      console.log(e);
    }
  };
  //dropoff_Api
  const droppofflist = async (shipper_id, id_pickup) => {
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
      // console.log(data, "drop-off done");
      // console.log(data[0].id, "drop-off-id");

      setDropofList(data);
      return data;
    } catch (e) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        color: "#0e4579",
        title: `${e.response.data.message}`,
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: "ok",
        timer: 8000,
      });
      console.log(e);
    }
  };

  // details
  const detailsApi = async (shipper_id, id_pickup, id_dropoff) => {
    // console.log(shipper_id, "shiperiddddddddddddddddddd");
    // console.log(id_pickup, "pickupiddddddddddddddddddd");
    // console.log(id_dropoff, "dropoffiddddddddddddddddddd");

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
      // console.log(data, "details doneeeeeeeeeeeeeeee");

      setDetailsList(data);
      return data;
    } catch (e) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        color: "#0e4579",
        title: `${e.response.data.message}`,
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: "ok",
        timer: 8000,
      });
      console.log(e);
    }
  };

  // picklist-group
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
        // console.log(data);
        setShipperList(data);

        return data;
      } catch (e) {
        console.log(e);
      }
    };

    if (user_type == "admin") {
      allshipper();
    }

    if (user_type === "shipper") {
      pickupListApi(user_type_data.id);
      setShipperUserChoice(user_type_data.id);
      setShipperValue(user_type_data.name);
      shipperPlanned_handleInputChange(0, user_type_data.id);
    }

    // pickuplist();
    // droppofflist();
  }, []);

  useEffect(() => {
    if (order instanceof FormData) {
      sendOrder(order, plannedList.length == 1 ? "orders" : "scheduled_orders");
      setOrder({}); // to reset the order value and thus we can resend the request when clicking on submit btn
    }
  }, [order]);

  const sendOrder = async (formdata, endpoint) => {
    try {
      const response = await axios.post(
        `https://dev.eload.smart.sa/api/v1/${endpoint}`,

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
      console.log(response.data.data);
      let id = response.data.data.id;
      let redirect_to =
        endpoint == "orders"
          ? `allshipments?order_id=${id}`
          : `allshipments?scheduled_order_id=${id}`;
      navigate(`/${redirect_to}`, { replace: true });
    } catch (e) {
      // handleClick2();
      console.log(e);
    }
  };
  const [choise, setchoise] = useState("");
  // console.log(choise ,"ccccc");
  // shipperoptions
  const shipperOptions = shipperList.map((item, index) => {
    return {
      value: item.id,
      label: item.name,
    };
  });
  // comeback
  // Error List
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  // console.log(errors, " errors");
  // console.log(errors.shipper_Value, " shipperValueError");
  // Api-post==========================
  const Joi = require("joi");
  const [targetElement, setTargetElement] = useState("");

  const scrollToElement = (targetElement) => {
    const element = document.getElementById(targetElement);
    const focusing = element.querySelector("input");
    console.log(element, focusing, "element id in function");
    if (element) {
      focusing.scrollIntoView({ behavior: "smooth", block: "start" });
      focusing.focus();
    }
  };
  useEffect(() => {
    if (targetElement) {
      scrollToElement(targetElement);
    }
  }, [targetElement]);
  // console.log(shipperValue, " shipperValue ");
  // console.log(pickupValue, " pickupValue ");

  const handelSubmit = (e) => {
    e.preventDefault();
    const schema = Joi.object({
      shipper_Value: Joi.number().required().messages({
        "number.base": "Please Select a Value",
        "any.required": "Shipper value is required",
      }),
      pickup_Value: Joi.number().required().messages({
        "number.base": "Please Select a Value",
        "any.required": "Shipper value is required",
      }),
    });
    const formDataObject = {
      shipper_Value: shipperValue,
      pickup_Value: pickupValue,
    };
    const { error } = schema.validate(formDataObject, { abortEarly: false });

    if (error) {
      // console.log("errorrrr", error.details);
      // console.log(
      //   "errorrrrssss details ",
      //   errors.pickup_Value,
      //   " ",
      //   targetElement
      // );
      const newErrors = error.details.reduce((acc, detail) => {
        acc[detail.path[0]] = detail.message;
        return acc;
      }, {});
      setErrors(newErrors);

      setTargetElement(error.details[0].context.label);
      // console.log(error.details, " allErrors");
    } else {
      console.log("Validation succeeded");
      setLoading(true);
      setErrors({});

      try {
        // Your existing submission logic here
        // ...

        // If submission is successful
        showNotification();
        setList(true);
        navigate("/allshipments"); // Navigate after 3 seconds (matching the toast duration)
      } catch (error) {
        // Handle any errors
        console.error("Submission error:", error);
        // Optionally show an error toast
        toast.error("An error occurred during submission");
      }

      // handleClick({
      //   vertical: "bottom",
      //   horizontal: "center",
      //   Transition: "SlideTransition",
      // });
      // console.log("ddddddddddddddddddddddddone");
    }
  };
  // ======================================================planned-shipment==================
  const [numShipment, setNumShipment] = useState(0);
  // const [arranumShipment, setArraNumShipment] = useState([]);
  let arrListnumShipment = new Array(0);
  // push-in the Arra
  for (let i = 0; i < numShipment; i++) {
    arrListnumShipment.push(1);
  }
  // console.log(arrListnumShipment, "rrrrrrrrrrrrrrrrrrrrrrr");

  const getNumShipment = (e) => {
    setNumShipment(e.target.value);
  };

  const intialStateplanned = {
    truckTypePlanned: "",
    shipmentTypePlanned: "",
    shipmentvaluePlanned: "",
    weightPlanned: "",
    numTrucksPlanned: "",
    descriptionPlanned: "",
    PickingListPlanned: [],
    documListPlanned: [],
    commidityPlanned: "",
    uomPlanned: "",
    quantityPlanned: "",
  };

  // sates-planned
  const plannedAllShipments = {
    shipperPlanned: "",
    pickupAddressPlanned: "",
    pickupDatePlanned: "",
    pickupTimeFromPlanned: "",
    pickupTimeToPlanned: "",
    dropOffPlanned: "",
    dropTimeFromPlanned: "",
    dropTimeToPlanned: "",
    detailsTruck: [
      {
        truckTypePlanned: "",
        shipmentTypePlanned: "",
        shipmentvaluePlanned: "",
        weightPlanned: "",
        numTrucksPlanned: 1,
        descriptionPlanned: "",
        PickingListPlanned: [],
        documListPlanned: [],
        commidityPlanned: "",
        uomPlanned: "",
        quantityPlanned: "",
      },
    ],
  };
  const plannedAllShipmentswithshipper = {
    shipperPlanned: shipperuserChoice,
    pickupAddressPlanned: "",
    pickupDatePlanned: "",
    pickupTimeFromPlanned: "",
    pickupTimeToPlanned: "",
    dropOffPlanned: "",
    dropTimeFromPlanned: "",
    dropTimeToPlanned: "",
    detailsTruck: [
      {
        truckTypePlanned: "",
        shipmentTypePlanned: "",
        shipmentvaluePlanned: "",
        weightPlanned: "",
        numTrucksPlanned: 1,
        descriptionPlanned: "",
        PickingListPlanned: [],
        documListPlanned: [],
        commidityPlanned: "",
        uomPlanned: "",
        quantityPlanned: "",
      },
    ],
  };
  // array_of_planned_details
  const [plannedList, setPlannedList] = useState([plannedAllShipments]);
  // const [plannedListwithshipper, setPlannedListwithshipper] = useState([plannedAllShipmentswithshipper]);

  console.log(plannedList, "plannedList");
  // addnew_listof_object
  const addNewListOfShipment = () => {
    // setPlannedList([...plannedList, plannedAllShipments]);
    setPlannedList((prevList) => [
      ...prevList,
      { ...plannedAllShipmentswithshipper },
    ]);
  };
  // array_ofinnerDetails
  const [PlannedInnerDetails, setPlannedInerDetails] = useState([
    plannedAllShipments.detailsTruck,
  ]);

  // addinnerDetails
  const addPlannedinerDetails = (indexOfCurrentShipment) => {
    plannedList[indexOfCurrentShipment].detailsTruck.push(intialStateplanned);
    // =============================================????????????????????????????????
  };

  // deleteDetails
  const deletePlannedinerDetails = (indexOfCurrentShipment) => {
    plannedList[indexOfCurrentShipment].detailsTruck.pop();
  };
  // delete-increase
  const [indexOfTotalDetailsPlanned, setIndexOfTotalDetailsPlanned] =
    useState(0);

  const handleIncreaseIndexPlanned = () => {
    setIndexOfTotalDetailsPlanned((prev) => prev + 1);
  };
  const handleDecreaseIndexPlanned = () => {
    if (indexOfTotalDetailsPlanned === 0) {
      return;
    } else {
      setIndexOfTotalDetailsPlanned((prev) => prev - 1);
    }
  };

  // shipper-handle-change
  const shipperPlanned_handleInputChange = (index, event) => {
    const newInputs = [...plannedList];
    newInputs[index].shipperPlanned = event;
    setPlannedList(newInputs);
  };
  // pickup-handle-planned
  const pickupPlanned_handleInputChange = (index, event) => {
    const newInputs = [...plannedList];
    newInputs[index].pickupAddressPlanned = event;
    setPlannedList(newInputs);
  };
  // date_pickup-planned
  const pickupDatePlanned_handleInputChange = (index, event) => {
    const newInputs = [...plannedList];
    newInputs[index].pickupDatePlanned = event;
    setPlannedList(newInputs);
  };
  //timefrom-pickup-planned
  const pickupTimeFromPlanned_handleInputChange = (index, event) => {
    const newInputs = [...plannedList];
    newInputs[index].pickupTimeFromPlanned = event;
    setPlannedList(newInputs);
  };
  // timeTo-pickup-planned
  const pickupTimeToPlanned_handleInputChange = (index, event) => {
    const newInputs = [...plannedList];
    newInputs[index].pickupTimeToPlanned = event;
    setPlannedList(newInputs);
  };
  // dropoff-planned
  const dropoffPlanned_handleInputChange = (index, event) => {
    const newInputs = [...plannedList];
    newInputs[index].dropOffPlanned = event;
    setPlannedList(newInputs);
  };
  // timefrom-dropoff-planned
  const dropTimeFromPlanned_handleInputChange = (index, event) => {
    const newInputs = [...plannedList];
    newInputs[index].dropTimeFromPlanned = event;
    setPlannedList(newInputs);
  };
  // timeto-dropoff-planned
  const dropTimeToPlanned_handleInputChange = (index, event) => {
    const newInputs = [...plannedList];
    newInputs[index].dropTimeToPlanned = event;
    setPlannedList(newInputs);
  };

  // console.log(arrList,"arrrrrrrrrrrrrrrrr");
  // console.log(numShipment, "numstepppppppppp");
  // console.log(plannedList, "infoarrrrrrrrrrrrrr");
  const [counter, setCounter] = useState(0);
  const counterchange = (index) => {
    if (index < numShipment) {
      setCounter(counter + 1);
    }
  };
  // const [showtext, setshowtext] = useState(false);

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
                // data-bs-toggle="modal"
                // href="#exampleModalToggle"
                onChange={() => {
                  setIsChecked(false);
                  // setShipperUserChoice();
                  // setPlannedList([plannedAllShipments]);
                  setCounter(0);
                }}
              />
            ) : (
              <input
                className="form-check-input"
                type="checkbox"
                value={ischeck}
                data-bs-toggle="modal"
                href="#exampleModalToggle"
                id="flexSwitchCheckDefault"
                onChange={() => {
                  // setPlannedList([plannedAllShipments]);
                  setCounter(0);
                  setStartDate(null);
                  console.log(counter, "conteeeeeeer");
                }}
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
            </div>
          </div>
        </>
      ) : (
        <> </>
      )}

      {/* all_shipmentsList_Planned */}
      <div className="steps-shipments mt-4">
        <div className="steps">
          <div
            className={isACtive.pickup ? "step pickup active" : "step pickup"}
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
      {/* ifo */}
      {plannedList.map((list, indexshipment) => {
        return (
          <>
            {indexshipment === counter && (
              <>
                {indexshipment > 0 ? (
                  <form onSubmit={handelSubmit}>
                    {user_type === "admin" && (
                      <div className="input-shipper " style={{ width: "49%" }}>
                        <p>
                          Shipper<span>*</span>
                        </p>
                        {/* shipper-select */}
                        <Select
                          classNamePrefix="select"
                          className={
                            errors.shipper_Value
                              ? "hasError basic-multi-select"
                              : "basic-multi-select"
                          }
                          id="shipper_Value"
                          // isMulti
                          // defaultValue={shipperValue}
                          isDisabled={!isDisabled}
                          // required={required}
                          isLoading={isLoading}
                          isClearable={true}
                          isRtl={isRtl}
                          isSearchable={isSearchable}
                          name="shipper"
                          options={shipperOptions}
                          onChange={(choice) => {
                            pickupListApi(choice.value);
                            setShipperUserChoice(choice.value);
                            setShipperValue(choice.label);
                            setchoise(choice);
                            shipperPlanned_handleInputChange(
                              indexshipment,
                              choice.value
                            );
                          }}
                        />
                        {errors.shipper_Value && (
                          <h5 className="error">{errors.shipper_Value}</h5>
                        )}
                        <span>
                          {/* {shipperOptions[plannedList[0]].shipperPlanned.label} */}
                          {choise}
                        </span>
                      </div>
                    )}
                    <div className="pick-up box-inputs" onClick={tabPickup}>
                      <div className="box-inputs-head">Pick up</div>
                      <div className="inputs row">
                        <div className="input input-select col-md-6">
                          <label htmlFor="address">
                            Pickup Address<span>*</span>
                          </label>
                          <Select
                            classNamePrefix="select"
                            id="pickup_Value"
                            className={
                              errors.shipper_Value
                                ? "hasError basic-multi-select"
                                : "basic-multi-select"
                            }
                            // isMulti
                            isDisabled={isDisabled}
                            isLoading={isLoading}
                            isClearable={isClearable}
                            // required={required}
                            isRtl={isRtl}
                            isSearchable={isSearchable}
                            name="pickapaddres"
                            // value={pickupuserChoice}
                            options={GroupspickupOptions}
                            onChange={(choice) => {
                              setpickupUserChoice(choice.value);
                              droppofflist(shipperuserChoice, choice.value);
                              setPickupValue(choice.value);
                              pickupPlanned_handleInputChange(
                                indexshipment,
                                choice.value
                              );
                            }}
                          />
                          {errors.pickup_Value && (
                            <h5 className="error">{errors.pickup_Value}</h5>
                          )}
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
                              // setPickup_DateValue(date);
                              pickupDatePlanned_handleInputChange(
                                indexshipment,
                                date
                              );
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
                            style={{ top: "36%", left: "53%" }}
                          />
                        </div>
                        {/* time-from */}
                        <div className="input col-md-3">
                          <label htmlFor="address">
                            Pickup Time<span>*</span>
                          </label>
                          <label>From</label>
                          <input
                            type="time"
                            required
                            onChange={(v) => {
                              setPickup_TimeFromValue(v.target.value);
                              pickupTimeFromPlanned_handleInputChange(
                                indexshipment,
                                v.target.value
                              );
                            }}
                          />
                        </div>
                        {/* time-to */}
                        <div className="input col-md-3 mt-4">
                          <label>To</label>
                          <input
                            type="time"
                            required
                            onChange={(v) => {
                              setPickup_TimeToValue(v.target.value);
                              pickupTimeToPlanned_handleInputChange(
                                indexshipment,
                                v.target.value
                              );
                            }}
                          />
                        </div>
                        <div className="add-btn">
                          <NavLink to={`/Shipments/addAddress/${shipperid}`}>
                            <button>
                              <i className="fa-solid fa-plus"></i> Add New
                              Address
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
                              dropoffPlanned_handleInputChange(
                                indexshipment,
                                choice.value
                              );
                            }}
                          />
                        </div>
                        <div className="input mx-3">
                          <label htmlFor="address">
                            Drop off Time<span>*</span>
                          </label>
                          <label>From</label>
                          <input
                            type="time"
                            required
                            onChange={(v) => {
                              setDrop_TimeFromValue(v.target.value);
                              dropTimeFromPlanned_handleInputChange(
                                indexshipment,
                                v.target.value
                              );
                            }}
                          />
                        </div>
                        <div className="input mx-3 mt-4">
                          <label htmlFor="address">To</label>
                          <input
                            type="time"
                            required
                            onChange={(v) => {
                              setDrop_TimeToValue(v.target.value);
                              dropTimeToPlanned_handleInputChange(
                                indexshipment,
                                v.target.value
                              );
                            }}
                          />
                        </div>
                        <div className="add-btn">
                          <NavLink to={`/Shipments/addAddress/${shipperid}`}>
                            <button>
                              <i className="fa-solid fa-plus"></i> Add New
                              Address
                            </button>
                          </NavLink>
                        </div>
                      </div>
                      <hr />
                    </div>
                    <div
                      className="details box-inputs mb-4"
                      onClick={tabdetails}
                    >
                      <div className="box-inputs-head">Details</div>

                      {plannedList[indexshipment].detailsTruck.map(
                        (item, indexdetails) => {
                          return (
                            <>
                              <Inputs
                                handleOrder={handleOrder}
                                indexOfItem={indexdetails}
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
                                plannedList={plannedList}
                                setPlannedList={setPlannedList}
                                PlannedInnerDetails={PlannedInnerDetails}
                                arrListnumShipment={arrListnumShipment}
                                // countIndexShipmentplann={countindexshipmentplann}
                                // countIndexdetailsplann={countindexdetailstplann}
                                indexshipment={indexshipment}
                                indexdetails={indexdetails}
                                // shipperValue={shipperValue}
                              />
                              {indexdetails > 0 && (
                                <button
                                  className="btn-delete"
                                  id="delete"
                                  onClick={(ele) => {
                                    const newArr = totaldetails.filter(
                                      (i, j) => {
                                        return indexdetails !== j;
                                      }
                                    );
                                    setPlannedInerDetails(newArr);
                                    deletePlannedinerDetails(indexshipment);
                                    handleDecreaseIndexPlanned();
                                  }}
                                >
                                  Delete
                                </button>
                              )}
                            </>
                          );
                        }
                      )}
                      <div className="control-btn">
                        <div className="left-btn">
                          <button
                            className="btn-add "
                            id="add"
                            type="btn"
                            onClick={() => {
                              // setInputs([...input, ""]);
                              addPlannedinerDetails(indexshipment);
                              // setIndexOfTotalDetails(indexOfTotalDetails + 1);
                              handleIncreaseIndexPlanned();
                            }}
                          >
                            <i className="fa-solid fa-plus"></i> Add truck
                          </button>
                        </div>
                        {ischeck ? (
                          <div className="right-btn">
                            {/* <NavLink to="/allshipments"> */}
                            {console.log(counter, "counter inside JSX")}
                            {counter === numShipment - 1 ? (
                              <button
                                className="btn-save"
                                type="submit"
                                disabled={isLoading}
                                onClick={() => scrollToElement(targetElement)}
                              >
                                Save
                              </button>
                            ) : (
                              <>
                                {plannedList[counter].shipperPlanned === "" ||
                                plannedList[counter].pickupAddressPlanned ===
                                  "" ||
                                plannedList[counter].pickupDatePlanned === "" ||
                                plannedList[counter].pickupTimeFromPlanned ===
                                  "" ||
                                plannedList[counter].pickupTimeToPlanned ===
                                  "" ||
                                plannedList[counter].dropOffPlanned === "" ||
                                plannedList[counter].dropTimeFromPlanned ===
                                  "" ||
                                plannedList[counter].dropTimeToPlanned === "" ||
                                plannedList[counter].detailsTruck[0]
                                  .truckTypePlanned === "" ||
                                plannedList[counter].detailsTruck[0]
                                  .shipmentTypePlanned === "" ||
                                plannedList[counter].detailsTruck[0]
                                  .truckTypePlanned === "" ||
                                plannedList[counter].detailsTruck[0]
                                  .truckTypePlanned === "" ||
                                plannedList[counter].detailsTruck[0]
                                  .shipmentvaluePlanned === "" ||
                                plannedList[counter].detailsTruck[0]
                                  .weightPlanned === "" ||
                                plannedList[counter].detailsTruck[0]
                                  .numTrucksPlanned === "" ||
                                plannedList[counter].detailsTruck[0]
                                  .PickingListPlanned === "" ||
                                plannedList[counter].detailsTruck[0]
                                  .commidityPlanned === "" ||
                                plannedList[counter].detailsTruck[0]
                                  .uomPlanned === "" ||
                                plannedList[counter].detailsTruck[0]
                                  .quantityPlanned === "" ? (
                                  <>
                                    <span
                                      className="mx-2"
                                      style={{ color: "red" }}
                                    >
                                      please enter the requre data
                                    </span>

                                    <button
                                      className="btn-save"
                                      type="btn"
                                      // onClick={() => {
                                      //     addNewListOfShipment();
                                      //     counterchange(indexshipment);
                                      // }}
                                    >
                                      Next Shipment
                                    </button>
                                  </>
                                ) : (
                                  <button
                                    className="btn-save"
                                    type="btn"
                                    onClick={() => {
                                      // addNewListOfShipment();
                                      // setStartDate(null);
                                      // counterchange(indexshipment);
                                      if (counter < numShipment - 1) {
                                        if (
                                          counter ===
                                          plannedList.length - 1
                                        ) {
                                          // Add a new shipment only if we're at the end of the current list
                                          addNewListOfShipment();
                                        }
                                        setCounter(counter + 1);
                                        setStartDate(null);
                                      }
                                    }}
                                  >
                                    Next Shipment
                                  </button>
                                )}

                                {/* <button
                                  className="btn-save"
                                  type="submit"
                                  onClick={() => {
                                  addNewListOfShipment();
                                  setStartDate(null);
                                  counterchange(indexshipment);
                                  }}
                                  >
                                  Next Shipment
                                  </button> */}
                              </>
                            )}
                          </div>
                        ) : (
                          <div className="right-btn">
                            <button
                              className="btn-save"
                              type="submit"
                              disabled={isLoading}
                              onClick={() => scrollToElement(targetElement)}
                            >
                              Save
                            </button>
                          </div>
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
                            The shipment have been added successfully!
                          </Alert>
                        </Snackbar>
                      </div>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handelSubmit}>
                    {user_type === "admin" && (
                      <div className="input-shipper " style={{ width: "49%" }}>
                        <p>
                          Shipper<span>*</span>
                        </p>
                        {/* shipper-select */}
                        <Select
                          classNamePrefix="select"
                          className={
                            errors.shipper_Value
                              ? "hasError basic-multi-select"
                              : "basic-multi-select"
                          }
                          id="shipper_Value"
                          // isMulti
                          isDisabled={isDisabled}
                          // required={required}
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
                            setchoise(choice.label);
                            shipperPlanned_handleInputChange(
                              indexshipment,
                              choice.value
                            );
                          }}
                        />
                        {errors.shipper_Value && (
                          <h5 className="error">{errors.shipper_Value}</h5>
                        )}
                      </div>
                    )}
                    <div className="pick-up box-inputs" onClick={tabPickup}>
                      <div className="box-inputs-head">Pick up</div>
                      <div className="inputs row">
                        <div className="input input-select col-md-6">
                          <label htmlFor="address">
                            Pickup Address<span>*</span>
                          </label>
                          <Select
                            classNamePrefix="select"
                            className={
                              errors.shipper_Value
                                ? "hasError basic-multi-select"
                                : "basic-multi-select"
                            }
                            id="pickup_Value"
                            // isMulti
                            isDisabled={isDisabled}
                            isLoading={isLoading}
                            isClearable={isClearable}
                            // required={required}
                            isRtl={isRtl}
                            isSearchable={isSearchable}
                            name="color"
                            options={GroupspickupOptions}
                            onChange={(choice) => {
                              setpickupUserChoice(choice.value);
                              droppofflist(shipperuserChoice, choice.value);
                              setPickupValue(choice.value);
                              pickupPlanned_handleInputChange(
                                indexshipment,
                                choice.value
                              );
                            }}
                          />
                          {errors.pickup_Value && (
                            <h5 className="error">{errors.pickup_Value}</h5>
                          )}
                        </div>
                        <div className="input col-md-4">
                          <label htmlFor="address">
                            Pickup Date<span>*</span>
                          </label>

                          <DatePicker
                            className="date-input position-relative px-5"
                            selected={startDate}
                            // required={true}
                            onChange={(date) => {
                              setStartDate(date);
                              // setPickup_DateValue(date);
                              pickupDatePlanned_handleInputChange(
                                indexshipment,
                                date
                              );
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
                            style={{ top: "33%", left: "52%" }}
                          />
                        </div>
                        {/* time-from */}
                        <div className="input col-md-3">
                          <label htmlFor="address">
                            Pickup Time<span>*</span>
                          </label>

                          <span style={{ fontWeight: "400" }}>From</span>
                          <input
                            type="time"
                            // required
                            onChange={(v) => {
                              setPickup_TimeFromValue(v.target.value);
                              pickupTimeFromPlanned_handleInputChange(
                                indexshipment,
                                v.target.value
                              );
                            }}
                          />
                        </div>
                        {/* time-to */}
                        <div className="input col-md-3 mt-4">
                          <span style={{ fontWeight: "400" }}>To</span>
                          <input
                            type="time"
                            // required
                            onChange={(v) => {
                              setPickup_TimeToValue(v.target.value);
                              pickupTimeToPlanned_handleInputChange(
                                indexshipment,
                                v.target.value
                              );
                            }}
                          />
                        </div>
                        {shipperValue === "" ? (
                          <div className="add-btn">
                            <NavLink to={`/Shipments/addAddress/${shipperid}`}>
                              <button
                                type="button"
                                disabled
                                style={{ backgroundColor: "gray" }}
                              >
                                <i className="fa-solid fa-plus"></i> Add New
                                Address
                              </button>
                            </NavLink>
                          </div>
                        ) : (
                          <div className="add-btn">
                            <NavLink to={`/Shipments/addAddress/${shipperid}`}>
                              <button>
                                <i className="fa-solid fa-plus"></i> Add New
                                Address
                              </button>
                            </NavLink>
                          </div>
                        )}
                        {/* <div className="add-btn">
                          <NavLink to={`/Shipments/addAddress/${shipperid}`}>
                            <button>
                              <i className="fa-solid fa-plus"></i> Add New
                              Address
                            </button>
                          </NavLink>
                        </div> */}
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
                            // required
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
                              dropoffPlanned_handleInputChange(
                                indexshipment,
                                choice.value
                              );
                            }}
                          />
                        </div>
                        <div className="input mx-3">
                          <label htmlFor="address">
                            Drop off Time<span>*</span>
                          </label>
                          <div className="d-flex align-items-center">
                            <span style={{ fontWeight: "400" }}>From</span>
                            <input
                              type="time"
                              className="mx-1"
                              // required
                              onChange={(v) => {
                                setDrop_TimeFromValue(v.target.value);
                                dropTimeFromPlanned_handleInputChange(
                                  indexshipment,
                                  v.target.value
                                );
                              }}
                            />
                          </div>
                        </div>
                        <div className="input mx-3 mt-4">
                          <div className="d-flex align-items-center">
                            <span style={{ fontWeight: "400" }}>To</span>
                            <input
                              type="time"
                              className="mx-1"
                              // required
                              onChange={(v) => {
                                setDrop_TimeToValue(v.target.value);
                                dropTimeToPlanned_handleInputChange(
                                  indexshipment,
                                  v.target.value
                                );
                              }}
                            />
                          </div>
                        </div>
                        {shipperValue === "" ? (
                          <div className="add-btn">
                            <NavLink to={`/Shipments/addAddress/${shipperid}`}>
                              <button
                                disabled
                                style={{ backgroundColor: "gray" }}
                              >
                                <i className="fa-solid fa-plus"></i> Add New
                                Address
                              </button>
                            </NavLink>
                          </div>
                        ) : (
                          <div className="add-btn">
                            <NavLink to={`/Shipments/addAddress/${shipperid}`}>
                              <button>
                                <i className="fa-solid fa-plus"></i> Add New
                                Address
                              </button>
                            </NavLink>
                          </div>
                        )}
                      </div>
                      <hr />
                    </div>
                    <div
                      className="details box-inputs mb-4"
                      onClick={tabdetails}
                    >
                      <div className="box-inputs-head">Details</div>

                      {plannedList[indexshipment].detailsTruck.map(
                        (item, indexdetails) => {
                          return (
                            <>
                              <Inputs
                                handleOrder={handleOrder}
                                indexOfItem={indexdetails}
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
                                plannedList={plannedList}
                                setPlannedList={setPlannedList}
                                PlannedInnerDetails={PlannedInnerDetails}
                                arrListnumShipment={arrListnumShipment}
                                // countIndexShipmentplann={countindexshipmentplann}
                                // countIndexdetailsplann={countindexdetailstplann}
                                indexshipment={indexshipment}
                                indexdetails={indexdetails}
                                shipperValue={shipperValue}
                              />
                              {indexdetails > 0 && (
                                <button
                                  className="btn-delete"
                                  id="delete"
                                  onClick={(ele) => {
                                    const newArr = totaldetails.filter(
                                      (i, j) => {
                                        return indexdetails !== j;
                                      }
                                    );
                                    setPlannedInerDetails(newArr);
                                    deletePlannedinerDetails(indexshipment);
                                    handleDecreaseIndexPlanned();
                                  }}
                                >
                                  Delete
                                </button>
                              )}
                            </>
                          );
                        }
                      )}
                      <div className="control-btn">
                        <div className="left-btn">
                          <button
                            className="btn-add "
                            id="add"
                            type="btn"
                            onClick={() => {
                              // setInputs([...input, ""]);
                              addPlannedinerDetails(indexshipment);
                              // setIndexOfTotalDetails(indexOfTotalDetails + 1);
                              handleIncreaseIndexPlanned();
                            }}
                          >
                            <i className="fa-solid fa-plus"></i> Add truck
                          </button>
                        </div>
                        {ischeck ? (
                          <div className="right-btn">
                            {/* <NavLink to="/allshipments"> */}
                            {console.log(counter, "counter inside JSX")}
                            {counter === numShipment - 1 ? (
                              <button
                                className="btn-save"
                                type="submit"
                                disabled={isLoading}
                                onClick={() => scrollToElement(targetElement)}
                              >
                                Save
                              </button>
                            ) : (
                              <>
                                {plannedList[counter].shipperPlanned === "" ||
                                plannedList[counter].pickupAddressPlanned ===
                                  "" ||
                                plannedList[counter].pickupDatePlanned === "" ||
                                plannedList[counter].pickupTimeFromPlanned ===
                                  "" ||
                                plannedList[counter].pickupTimeToPlanned ===
                                  "" ||
                                plannedList[counter].dropOffPlanned === "" ||
                                plannedList[counter].dropTimeFromPlanned ===
                                  "" ||
                                plannedList[counter].dropTimeToPlanned === "" ||
                                plannedList[counter].detailsTruck[0]
                                  .truckTypePlanned === "" ||
                                plannedList[counter].detailsTruck[0]
                                  .shipmentTypePlanned === "" ||
                                plannedList[counter].detailsTruck[0]
                                  .truckTypePlanned === "" ||
                                plannedList[counter].detailsTruck[0]
                                  .truckTypePlanned === "" ||
                                plannedList[counter].detailsTruck[0]
                                  .shipmentvaluePlanned === "" ||
                                plannedList[counter].detailsTruck[0]
                                  .weightPlanned === "" ||
                                plannedList[counter].detailsTruck[0]
                                  .numTrucksPlanned === "" ||
                                plannedList[counter].detailsTruck[0]
                                  .PickingListPlanned === "" ||
                                plannedList[counter].detailsTruck[0]
                                  .commidityPlanned === "" ||
                                plannedList[counter].detailsTruck[0]
                                  .uomPlanned === "" ||
                                plannedList[counter].detailsTruck[0]
                                  .quantityPlanned === "" ? (
                                  <>
                                    <span
                                      className="mx-2"
                                      style={{ color: "red" }}
                                    >
                                      Please enter the required data
                                    </span>

                                    <button
                                      className="btn-save"
                                      type="btn"
                                      // onClick={() => {
                                      //     addNewListOfShipment();
                                      //     counterchange(indexshipment);
                                      // }}
                                    >
                                      Next Shipment
                                    </button>
                                  </>
                                ) : (
                                  <button
                                    className="btn-save"
                                    type="btn"
                                    onClick={() => {
                                      // addNewListOfShipment();
                                      // setStartDate(null);
                                      // counterchange(indexshipment);
                                      if (counter < numShipment - 1) {
                                        if (
                                          counter ===
                                          plannedList.length - 1
                                        ) {
                                          // Add a new shipment only if we're at the end of the current list
                                          addNewListOfShipment();
                                        }
                                        setCounter(counter + 1);
                                        setStartDate(null);
                                      }
                                    }}
                                  >
                                    Next Shipment
                                  </button>
                                )}

                                {/* <button
                                            className="btn-save"
                                            type="submit"
                                            onClick={() => {
                                              addNewListOfShipment();
                                              setStartDate(null);
                                              counterchange(indexshipment);
                                            }}
                                          >
                                            Next Shipment
                                          </button> */}
                              </>
                            )}
                          </div>
                        ) : (
                          <div className="right-btn">
                            <button
                              className="btn-save"
                              type="submit"
                              disabled={isLoading}
                              onClick={() => scrollToElement(targetElement)}
                            >
                              Save
                            </button>
                          </div>
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
                            The planned shipment have been added successfully!
                          </Alert>
                        </Snackbar>
                      </div>
                    </div>
                  </form>
                )}
              </>
            )}
          </>
        );
      })}
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
                type="sumbit"
                className="btnSave my-4"
                data-bs-dismiss="modal"
                aria-label="Close"
                disabled={isLoading}
                onClick={() => {
                  console.log("hiiiiii");
                  scrollToElement(targetElement);
                  setIsChecked(!ischeck);
                  // if (plannedList.length < numShipment) {
                  //   // Add new empty shipments to match the requested number
                  //   const newShipments = Array(numShipment - plannedList.length).fill(plannedAllShipments);
                  //   setPlannedList([...plannedList, ...newShipments]);
                  // } else if (plannedList.length > numShipment) {
                  //   // Remove excess shipments if the new number is smaller
                  //   setPlannedList(plannedList.slice(0, numShipment));
                  // }
                  setNumShipment(parseInt(numShipment)); // Ensure numShipment is a number

                  // setPlannedList([plannedAllShipments]);
                  setCounter(0);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipments;
