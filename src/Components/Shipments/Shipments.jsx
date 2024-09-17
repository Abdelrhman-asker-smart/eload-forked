import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import moment from "moment";

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
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  // const date = new Date();
  const [startDate, setStartDate] = useState("");
  // console.log("startDate type", typeof startDate);
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

  const [dropoff_TimeFromValue, setDrop_TimeFromValue] = useState("");
  const [dropoff_TimeToValue, setDrop_TimeToValue] = useState("");

  // ===============truck_input_details============
  const [shipmentOptionListList, setShipmentOptionListList] = useState();
  const [truckuserChoice, setTruckuserChoice] = useState();
  const [shipmentType, setShipmentType] = useState();
  const [shipmentValue, setShipmentValue] = useState();
  const [weigth, setWeight] = useState();
  const [commodity, setCommodity] = useState();
  const [unitMeasure, setUnitMeasure] = useState();
  const [quantityValue, setQuantityValue] = useState();

  // ==================

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

  // const addNewTotalDetails = () => {
  //   setTotalDetails([...totaldetails, intialState]);
  // };
  // const handleIncreaseIndex = () => {
  //   setIndexOfTotalDetails((prev) => prev + 1);
  // };
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

        // console.log(e);
      });
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
  // ================================
  //====================details_options================
  // commidities_options
  const commidtiesOptions = detailsList.commodities?.map((item, index) => {
    return {
      value: item.id,
      label: item.name,
    };
  });
  // uom_options
  const UOMsOptions = detailsList.uom?.map((item, index) => {
    return {
      value: item.id,
      label: item.name,
    };
  });
  // truck_types
  const truckOptions = detailsList.truck_types?.map((item, index) => {
    return {
      value: item.id,
      label: item.name,
    };
  });
  // truck
  const TruckPlannedChange = (indexshipment, indexdetails, event) => {
    const newInputs = [...plannedList];
    newInputs[indexshipment].detailsTruck[indexdetails].truckTypePlanned =
      event;
  };

  // shipmentType
  const shipmenttypePlannedChange = (indexshipment, indexdetails, event) => {
    const newInputs = [...plannedList];
    newInputs[indexshipment].detailsTruck[indexdetails].shipmentTypePlanned =
      event;
  };
  // shipmentValue
  const shipmentValuePlannedChange = (indexshipment, indexdetails, event) => {
    const newInputs = [...plannedList];
    newInputs[indexshipment].detailsTruck[indexdetails].shipmentvaluePlanned =
      event.target.value;
  };
  // weight
  const shipmentwieghtPlannedChange = (indexshipment, indexdetails, event) => {
    const newInputs = [...plannedList];
    newInputs[indexshipment].detailsTruck[indexdetails].weightPlanned =
      event.target.value;
  };
  // numtruck
  const numTruckPlannedChange = (indexshipment, indexdetails, event) => {
    const newInputs = [...plannedList];
    newInputs[indexshipment].detailsTruck[indexdetails].numTrucksPlanned =
      event.target.value;
  };
  // description
  const descriptionPlannedChange = (indexshipment, indexdetails, event) => {
    const newInputs = [...plannedList];
    newInputs[indexshipment].detailsTruck[indexdetails].descriptionPlanned =
      event.target.value;
  };
  // pickinglist PickingListPlanned
  const pickingListPlannedChange = (indexshipment, indexdetails, event) => {
    console.log(indexshipment, "indexshipment");
    console.log(indexdetails, "indexdetails");
    const newInputs = [...plannedList];
    for (let k in event) {
      if (event.hasOwnProperty(k)) {
        // totaldetails.picking_ListValue[k] = event[k];
        newInputs[indexshipment].detailsTruck[
          indexdetails
        ].PickingListPlanned.push(event[k]);
      }
    }
  };
  // docOther
  const docListPlannedChange = (indexshipment, indexdetails, event) => {
    const newInputs = [...plannedList];

    for (let ke in event) {
      if (event.hasOwnProperty(ke)) {
        // totaldetails.picking_ListValue[ke] = event[ke];
        newInputs[indexshipment].detailsTruck[
          indexdetails
        ].documListPlanned.push(event[ke]);
      }
    }
  };
  // commidityPlanned
  const commidityPlannedChange = (indexshipment, indexdetails, event) => {
    const newInputs = [...plannedList];
    newInputs[indexshipment].detailsTruck[indexdetails].commidityPlanned =
      event;
  };
  // uomPlanned
  const uomPlannedChange = (indexshipment, indexdetails, event) => {
    const newInputs = [...plannedList];
    newInputs[indexshipment].detailsTruck[indexdetails].uomPlanned = event;
  };
  // quantityPlanned
  const quantityPlannedChange = (indexshipment, indexdetails, event) => {
    const newInputs = [...plannedList];
    newInputs[indexshipment].detailsTruck[indexdetails].quantityPlanned =
      event.target.value;
  };
  // ===================================

  const shipmentOptionList = (truckuserChoice) => {
    detailsList.truck_types?.map((item, index) => {
      console.log(item.shipment_types, " item.shipment_types");

      if (item.id === truckuserChoice) {
        // console.log("itemshipmmmment22");
        const options = item.shipment_types?.map((itemship, index) => {
          return {
            value: itemship.id,
            label: itemship.name,
          };
        });
        setShipmentOptionListList(options);
      }
    });
  };

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

    if (user_type == "shipper") {
      pickupListApi(user_type_data.id);
      setShipperUserChoice(user_type_data.id);
      setShipperValue(user_type_data.name);
      shipperPlanned_handleInputChange(0, user_type_data.id);
    }

    // pickuplist();
    // droppofflist();
  }, []);

  // useEffect(() => {
  //   if (order instanceof FormData) {
  //     sendOrder(order, plannedList.length == 1 ? "orders" : "scheduled_orders");

  //     setOrder({});
  //   }
  // }, [order]);

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
      // console.log(e);
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

  // Error List
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  console.log(errors, " errorsssssssss");
  const [okay, setOkay] = useState(true);
  const Joi = require("joi");

  const [targetElement, setTargetElement] = useState("");

  const scrollToElement = (targetElement) => {
    const element = document.getElementById(targetElement);
    const focusing = element.querySelector("input");
    // console.log(element, focusing, "element id in function");
    if (focusing) {
      focusing.focus();
    } else if (element) {
      element.focus();
    }
  };
  useEffect(() => {
    if (targetElement) {
      scrollToElement(targetElement);
    }
  }, [targetElement]);

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
        numTrucksPlanned: "",
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
    setPickupValue();
    setStartDate();
    setDropoffValue();
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

  // =====================================Apis_calls
  const handelSubmit = async (e) => {
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
      // ComeBAck
      pickup_Date: Joi.date().required().messages({
        "date.base": "Please Pickup a Valid Date",
      }),
      dropOf_Address: Joi.number().required().messages({
        "number.base": "Please Pickup a Valid Address",
        "any.required": "Address value is required",
      }),
      pickup_TimeFromValue: Joi.string().required().messages({
        "string.empty": "Please Pickup a Valid Date",
      }),
      pickup_TimeToValue: Joi.string().required().messages({
        "string.empty": "Please Pickup a Valid Date",
      }),
      dropoff_TimeFromValue: Joi.string().required().messages({
        "string.empty": "Please Pickup a Valid Date",
      }),
      dropoff_TimeToValue: Joi.string().required().messages({
        "string.empty": "Please Pickup a Valid Date",
      }),

      // ============//Details Inputs =========
      trackUser_Choice: Joi.number().required().messages({
        "number.base": "Please Select a Truck type",
        "any.required": "Truck type is required",
      }),
      shipment_type: Joi.number().required().messages({
        "number.base": "Please Select a Value",
        "any.required": "Shipment type is required",
      }),
      // // ComeBAck
      shipment_Value: Joi.number().required().messages({
        "number.base": "Please Select a Value",
        "any.required": "Shipment Value is required",
      }),
      shipment_Weight: Joi.number().required().messages({
        "number.base": "Please Select a Value",
        "any.required": "Shipment Weight is required",
      }),
      commodity_Value: Joi.number().required().messages({
        "number.base": "Please Pickup a Valid Address",
        "any.required": "Commodity type is required",
      }),
      unit_Measurement: Joi.number().required().messages({
        "number.base": "Please Pickup a Valid Address",
        "any.required": "unit of measurement is required",
      }),
      quantity_Value: Joi.number().required().messages({
        "number.base": "Please Select a Value",
        "any.required": "Quantity is required",
      }),
    });
    const formDataObject = {
      shipper_Value: shipperValue,
      pickup_Value: pickupValue,
      pickup_Date: startDate,
      dropOf_Address: dropoffValue,
      trackUser_Choice: truckuserChoice,
      shipment_type: shipmentType,
      shipment_Value: shipmentValue,
      shipment_Weight: weigth,
      commodity_Value: commodity,
      unit_Measurement: unitMeasure,
      quantity_Value: quantityValue,
      pickup_TimeFromValue: pickup_TimeFromValue,
      pickup_TimeToValue: pickup_TimeToValue,
      dropoff_TimeFromValue: dropoff_TimeFromValue,
      dropoff_TimeToValue: dropoff_TimeToValue,
    };
    const { error } = schema.validate(formDataObject, { abortEarly: false });
    if (error) {
      const newErrors = error.details.reduce((acc, detail) => {
        acc[detail.path[0]] = detail.message;
        return acc;
      }, {});
      setErrors(newErrors);
      setTargetElement(error.details[0].context.label);
      setOkay(false);
    } else {
      console.log("Validation succeeded");
      setErrors([]);
      setOkay(true);
      // =======Apis_de_planned_list============
      if (plannedList.length === 1) {
        const formdata = new FormData();
        const item = plannedList[0];
        console.log("Preparing formdata for item:", item);
        setIsLoading(true);
        setErrors([]);

        formdata.append(`shipper_id`, item.shipperPlanned);

        formdata.append("from_address_id", item.pickupAddressPlanned);
        formdata.append("to_address_id", item.dropOffPlanned);
        formdata.append(
          "pickup_date",
          moment(item.pickupDatePlanned).format("YYYY-MM-DD")
        );

        formdata.append("pickup_from_time", item.pickupTimeFromPlanned);
        formdata.append("pickup_to_time", item.pickupTimeToPlanned);
        formdata.append("dropoff_from_time", item.dropTimeFromPlanned);
        formdata.append("dropoff_to_time", item.dropTimeToPlanned);
        formdata.append("dropoff_to_time", item.dropTimeToPlanned);

        // Append all detailsTruck items
        item.detailsTruck.forEach((itemdetails, indexdetails) => {
          formdata.append(
            `shipments[${indexdetails}][truck_type_id]`,
            itemdetails.truckTypePlanned
          );
          formdata.append(
            `shipments[${indexdetails}][shipment_type_id]`,
            itemdetails.shipmentTypePlanned
          );
          formdata.append(
            `shipments[${indexdetails}][value]`,
            itemdetails.shipmentvaluePlanned
          );
          formdata.append(
            `shipments[${indexdetails}][weight]`,
            itemdetails.weightPlanned
          );
          formdata.append(`shipments[${indexdetails}][truck_type_qty]`, 1);
          formdata.append(
            `shipments[${indexdetails}][description]`,
            itemdetails.descriptionPlanned
          );

          itemdetails.PickingListPlanned.forEach((fileitem, fileindexpick) => {
            formdata.append(
              `shipments[${indexdetails}][attachments][packing_list][${fileindexpick}]`,
              fileitem
            );
          });

          itemdetails.documListPlanned.forEach((fileitemdoc, fileindexdoc) => {
            formdata.append(
              `shipments[${indexdetails}][attachments][other_documentations][${fileindexdoc}]`,
              fileitemdoc
            );
          });

          formdata.append(
            `shipments[${indexdetails}][commodity_id]`,
            itemdetails.commidityPlanned
          );
          formdata.append(
            `shipments[${indexdetails}][uom_id]`,
            itemdetails.uomPlanned
          );
          formdata.append(
            `shipments[${indexdetails}][quantity]`,
            itemdetails.quantityPlanned
          );
        });

        console.log("Formdata prepared:", Object.fromEntries(formdata));
        // ===================test
        console.log("Addone----------Done");

        try {
          const reponse = await axios.post(
            "https://dev.eload.smart.sa/api/v1/orders",

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

          // handleOrder(formdata);
          showNotification();
          navigate("/allshipments");
        } catch (e) {
          console.log(e);
        }

        // Planned=============================
      } else if (plannedList.length > 1) {
        const formdata = new FormData();
        plannedList.map((item, index) => {
          formdata.append(`orders[${index}][shipper_id]`, item.shipperPlanned);
          // formdata.append(`shipper_id`,item.shipperPlanned);

          formdata.append(
            `orders[${index}][from_address_id]`,
            item.pickupAddressPlanned
          );
          formdata.append(
            `orders[${index}][to_address_id]`,
            item.dropOffPlanned
          );

          formdata.append(
            `orders[${index}][pickup_date]`,
            moment(item.pickupDatePlanned).format("YYYY-MM-DD")
          );
          // pickup_DateValue
          formdata.append(
            `orders[${index}][pickup_from_time]`,
            item.pickupTimeFromPlanned
          );
          formdata.append(
            `orders[${index}][pickup_to_time]`,
            item.pickupTimeToPlanned
          );
          formdata.append(
            `orders[${index}][dropoff_from_time]`,
            item.dropTimeFromPlanned
          );
          formdata.append(
            `orders[${index}][dropoff_to_time]`,
            item.dropTimeToPlanned
          );

          item.detailsTruck.map((itemdetails, indexdetails) => {
            // truck
            formdata.append(
              `orders[${index}][shipments][${indexdetails}][truck_type_id]`,
              // `shipments[${index}][truck_type_id]`,
              itemdetails.truckTypePlanned
            );
            // shipment
            formdata.append(
              `orders[${index}][shipments][${indexdetails}][shipment_type_id]`,
              itemdetails.shipmentTypePlanned
            );
            // shipment_value
            formdata.append(
              `orders[${index}][shipments][${indexdetails}][value]`,
              itemdetails.shipmentvaluePlanned
            );
            // weightPlanned
            formdata.append(
              `orders[${index}][shipments][${indexdetails}][weight]`,
              itemdetails.weightPlanned
            );
            // numTrucksPlanned
            formdata.append(
              `orders[${index}][shipments][${indexdetails}][truck_type_qty]`,
              1
            );
            // descriptionPlanned
            formdata.append(
              `orders[${index}][shipments][${indexdetails}][description]`,
              itemdetails.descriptionPlanned
            );
            // PickingListPlanned
            itemdetails.PickingListPlanned.map((fileitem, fileindexpick) => {
              formdata.append(
                `orders[${index}][shipments][${indexdetails}][attachments][packing_list][${fileindexpick}]`,
                fileitem
              );
            });
            // documListPlanned
            itemdetails.documListPlanned.map((fileitemdoc, fileindexdoc) => {
              formdata.append(
                `orders[${index}][shipments][${indexdetails}][attachments][other_documentations][${fileindexdoc}]`,
                fileitemdoc
              );
            });
            // commidityPlanned
            formdata.append(
              `orders[${index}][shipments][${indexdetails}][commodity_id]`,
              itemdetails.commidityPlanned
            );
            // uomPlanned
            formdata.append(
              `orders[${index}][shipments][${indexdetails}][uom_id]`,
              itemdetails.uomPlanned
            );
            // quantityPlanned
            formdata.append(
              `orders[${index}][shipments][${indexdetails}][quantity]`,
              itemdetails.quantityPlanned
            );
          });
        });
        console.log("Addplanned----------Done");

        handleOrder(formdata);

        try {
          const reponse = await axios.post(
            "https://dev.eload.smart.sa/api/v1/scheduled_orders",
            // }

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

          // handleOrder(formdata);
          showNotification();
          navigate("/allshipments");
        } catch (e) {
          console.log(e);
        }
      }
    }
  };

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
              Switch to planned shipments
              <span style={{ color: "red", fontWeight: "500" }}>?</span>
            </label>
            <p className="position-absolute notegray">
              * you can choose many shipments
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
                  <form
                    onSubmit={handelSubmit}
                    className={loading ? "disabled" : ""}
                  >
                    {user_type == "admin" && (
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
                          defaultValue={shipperValue}
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
                          <label htmlFor="address" className="sadas">
                            Pickup Address<span>*</span>
                          </label>
                          <Select
                            classNamePrefix="select"
                            className={
                              errors.pickup_Value
                                ? "hasError basic-multi-select"
                                : "basic-multi-select"
                            }
                            id="pickup_Value"
                            // isMulti
                            isDisabled={isDisabled}
                            isLoading={isLoading}
                            isClearable={isClearable}
                            required={required}
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
                          />{" "}
                          {errors.pickup_Value && (
                            <h5 className="error">{errors.pickup_Value}</h5>
                          )}
                        </div>
                        <div className="input col-md-4">
                          <label htmlFor="address" className="asdawd">
                            Pickup Date<span>*</span>
                          </label>

                          <DatePicker
                            className={
                              errors.pickup_Date
                                ? "hasError date-input position-relative px-5"
                                : "date-input position-relative px-5"
                            }
                            id="pickup_Date"
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
                            style={
                              errors.pickup_Date
                                ? { top: "31%", left: "53%" }
                                : { top: "33%", left: "53%" }
                            }
                          />
                          {errors.pickup_Date && (
                            <h5 className="error">{errors.pickup_Date}</h5>
                          )}
                        </div>
                        {/* time-from */}
                        <div className="input col-md-3">
                          <label htmlFor="address">
                            Pickup Time <span>*</span>
                          </label>
                          <span style={{ fontWeight: "bold" }}>From</span>

                          <input
                            type="time"
                            className={
                              errors.pickup_TimeFromValue ? "hasError" : ""
                            }
                            id="pickup_TimeFromValue"
                            // required
                            onChange={(v) => {
                              setPickup_TimeFromValue(v.target.value);
                              pickupTimeFromPlanned_handleInputChange(
                                indexshipment,
                                v.target.value
                              );
                            }}
                          />
                          {errors.pickup_TimeFromValue && (
                            <h5 className="error">
                              {errors.pickup_TimeFromValue}
                            </h5>
                          )}
                        </div>
                        {/* time-to */}
                        <div className="input col-md-3 mt-4">
                          <span style={{ fontWeight: "bold" }}>To</span>

                          <input
                            type="time"
                            // required
                            className={
                              errors.pickup_TimeToValue ? "hasError" : ""
                            }
                            id="pickup_TimeToValue"
                            onChange={(v) => {
                              setPickup_TimeToValue(v.target.value);
                              pickupTimeToPlanned_handleInputChange(
                                indexshipment,
                                v.target.value
                              );
                            }}
                          />
                          {errors.pickup_TimeToValue && (
                            <h5 className="error">
                              {errors.pickup_TimeToValue}
                            </h5>
                          )}
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
                            // isMulti
                            id="dropOf_Address"
                            className={
                              errors.dropOf_Address
                                ? "hasError basic-multi-select"
                                : "basic-multi-select"
                            }
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
                          {errors.dropOf_Address && (
                            <h5 className="error">{errors.dropOf_Address}</h5>
                          )}
                        </div>
                        <div className="input mx-3">
                          <label htmlFor="address">
                            Drop off Time<span>*</span>
                          </label>
                          <div className="d-flex">
                            <span style={{ fontWeight: "bold" }}>From</span>

                            <input
                              type="time"
                              // required
                              className={
                                errors.dropoff_TimeFromValue ? "hasError" : ""
                              }
                              id="dropoff_TimeFromValue"
                              onChange={(v) => {
                                setDrop_TimeFromValue(v.target.value);
                                dropTimeFromPlanned_handleInputChange(
                                  indexshipment,
                                  v.target.value
                                );
                              }}
                            />
                          </div>
                          {errors.dropoff_TimeFromValue && (
                            <h5 className="error">
                              {errors.dropoff_TimeFromValue}
                            </h5>
                          )}
                        </div>
                        <div className="input mx-3 mt-4">
                          <div className="d-flex align-items-center">
                            <span
                              className="mx-1"
                              style={{ fontWeight: "bold" }}
                            >
                              To
                            </span>

                            <input
                              type="time"
                              // required
                              className={
                                errors.dropoff_TimeToValue ? "hasError" : ""
                              }
                              id="dropoff_TimeToValue"
                              onChange={(v) => {
                                setDrop_TimeToValue(v.target.value);
                                dropTimeToPlanned_handleInputChange(
                                  indexshipment,
                                  v.target.value
                                );
                              }}
                            />
                          </div>
                          {errors.dropoff_TimeToValue && (
                            <h5 className="error">
                              {errors.dropoff_TimeToValue}
                            </h5>
                          )}
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
                              <div className="inputs row">
                                <div className="input col-2">
                                  <label htmlFor="address">
                                    Truck Type<span>*</span>
                                  </label>
                                  {/* trucktype */}
                                  <Select
                                    classNamePrefix="select"
                                    // isMulti
                                    className={
                                      errors.trackUser_Choice
                                        ? "hasError basic-multi-select"
                                        : "basic-multi-select"
                                    }
                                    id="trackUser_Choice"
                                    isDisabled={isDisabled}
                                    // required
                                    isLoading={isLoading}
                                    isClearable={isClearable}
                                    isRtl={isRtl}
                                    isSearchable={isSearchable}
                                    name="color"
                                    // value={setTruckTypeValue}
                                    options={truckOptions}
                                    onChange={(choice) => {
                                      setTruckuserChoice(choice.value);
                                      shipmentOptionList(choice.value);
                                      // truckTypehandleInputChange(indexOfItem, choice.value);
                                      TruckPlannedChange(
                                        indexshipment,
                                        indexdetails,
                                        choice.value
                                      );
                                    }}
                                  />
                                  {errors.trackUser_Choice && (
                                    <h5 className="error">
                                      {errors.trackUser_Choice}
                                    </h5>
                                  )}
                                </div>
                                <div className="input col-2">
                                  <label htmlFor="address">
                                    Shipment type<span>*</span>
                                  </label>
                                  {/* shipment-type */}
                                  <Select
                                    classNamePrefix="select"
                                    className={
                                      errors.shipment_type
                                        ? "hasError basic-multi-select"
                                        : "basic-multi-select"
                                    }
                                    id="shipment_type"
                                    // isMulti
                                    isDisabled={isDisabled}
                                    isLoading={isLoading}
                                    isClearable={isClearable}
                                    // required
                                    isRtl={isRtl}
                                    isSearchable={isSearchable}
                                    name="color"
                                    options={shipmentOptionListList}
                                    onChange={(choice) => {
                                      shipmenttypePlannedChange(
                                        indexshipment,
                                        indexdetails,
                                        choice.value
                                      );
                                      // shipmentTypehandleInputChange(indexOfItem, choice.value);
                                      // shipmenttypePlannedChange(
                                      //   indexshipment,
                                      //   indexdetails,
                                      //   choice.value
                                      // );
                                      setShipmentType(choice.value);
                                    }}
                                  />
                                  {errors.shipment_type && (
                                    <h5 className="error">
                                      {errors.shipment_type}
                                    </h5>
                                  )}
                                  {/* <p className="fs-6 text-danger mb-3">{getError("shipmentType")}</p> */}
                                </div>
                                <div className="input col-2">
                                  <label htmlFor="address">
                                    Shipment value<span>*</span>
                                  </label>
                                  <input
                                    type="number"
                                    // required
                                    placeholder="i,e, 10"
                                    className={
                                      errors.shipment_Value
                                        ? "hasError basic-multi-select"
                                        : "basic-multi-select"
                                    }
                                    id="shipment_Value"
                                    // name={totaldetails[totaldetails.lenght-1].shipmentTypeValue}
                                    // totaldetails
                                    onChange={(e) => {
                                      // valueOfhandleInputChange(indexOfItem, e)
                                      shipmentValuePlannedChange(
                                        indexshipment,
                                        indexdetails,
                                        e
                                      );
                                      setShipmentValue(e.target.value);
                                    }}
                                  />
                                  {errors.shipment_Value && (
                                    <h5 className="error">
                                      {errors.shipment_Value}
                                    </h5>
                                  )}
                                  {/* <p className="fs-6 text-danger mb-3">{getError("shipment value")}</p> */}
                                </div>
                                <div className="input col-2">
                                  <label htmlFor="address">
                                    Weight<span>*</span>
                                  </label>
                                  <input
                                    type="number"
                                    placeholder="i,e,2000  Kgs"
                                    min="1"
                                    className={
                                      errors.shipment_Weight
                                        ? "hasError basic-multi-select"
                                        : "basic-multi-select"
                                    }
                                    id="shipment_Weight"
                                    // required

                                    onChange={(e) => {
                                      // setWeightValue(e.target.value);
                                      // weighthandleInputChange(indexOfItem, e);
                                      shipmentwieghtPlannedChange(
                                        indexshipment,
                                        indexdetails,
                                        e
                                      );
                                      setWeight(e.target.value);
                                    }}
                                  />
                                  {errors.shipment_Weight && (
                                    <h5 className="error">
                                      {errors.shipment_Weight}
                                    </h5>
                                  )}
                                  {/* {errList ? <span className="err_message mx-3"> required</span> : ""} */}
                                  {/* <p className="fs-6 text-danger mb-3">{getError("weight")}</p> */}
                                </div>
                                <div className="input col-2">
                                  <label htmlFor="address">
                                    Number of trucks<span>*</span>
                                  </label>
                                  <input
                                    type="number"
                                    placeholder="i,e,2000"
                                    value={1}
                                    min={1}
                                    disabled
                                    // required

                                    onChange={(e) => {
                                      // setNumber_TrucksValue(e.target.value);
                                      // numberOfTruckshahndleInputChange(indexOfItem, e);
                                      numTruckPlannedChange(
                                        indexshipment,
                                        indexdetails,
                                        e
                                      );
                                    }}
                                  />
                                </div>
                                <div className="input col-2">
                                  <label htmlFor="address">Description</label>
                                  <input
                                    type="text"
                                    placeholder="text here"
                                    min="1"
                                    onChange={(e) => {
                                      // descriptionhahndleInputChange(indexOfItem,e);
                                      descriptionPlannedChange(
                                        indexshipment,
                                        indexdetails,
                                        e
                                      );
                                    }}
                                  />
                                </div>
                              </div>

                              <div className="inputs row">
                                <div className="input col-3">
                                  <label htmlFor="address">
                                    Packing List Attachments
                                  </label>

                                  <div className="input-group ">
                                    <input
                                      type="file"
                                      multiple="multiple"
                                      accept="audio/*,video/*,image/*,.pdf,.doc"
                                      className="input-file form-control"
                                      id="inputGroupFile03"
                                      aria-describedby="inputGroupFileAddon03"
                                      aria-label="Upload"
                                      onChange={(e) => {
                                        // pickinghandleInputChange(indexOfItem, e.target.files);
                                        pickingListPlannedChange(
                                          indexshipment,
                                          indexdetails,
                                          e.target.files
                                        );
                                        // console.log(picking_ListValue, "files");
                                        // setPicking_ListValue(e.target.files[0]);
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="input col-3">
                                  <label htmlFor="address">
                                    Other Documentation
                                  </label>
                                  <div className="input-group ">
                                    <input
                                      type="file"
                                      multiple="multiple"
                                      accept="audio/*,video/*,image/*,.pdf,.doc"
                                      // required
                                      className="input-file form-control"
                                      id="inputGroupFile03"
                                      aria-describedby="inputGroupFileAddon03"
                                      aria-label="Upload"
                                      onChange={(e) => {
                                        // docListhahndleInputChange(indexOfItem, e.target.files);
                                        docListPlannedChange(
                                          indexshipment,
                                          indexdetails,
                                          e.target.files
                                        );
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="input col-2">
                                  <label htmlFor="address">
                                    Commodity type<span>*</span>
                                  </label>
                                  <Select
                                    classNamePrefix="select"
                                    className={
                                      errors.commodity_Value
                                        ? "hasError basic-multi-select"
                                        : "basic-multi-select"
                                    }
                                    id="commodity_Value"
                                    // isMulti
                                    isDisabled={isDisabled}
                                    isLoading={isLoading}
                                    // required
                                    isClearable={isClearable}
                                    isRtl={isRtl}
                                    isSearchable={isSearchable}
                                    name="color"
                                    options={commidtiesOptions}
                                    // setCommodityTypeValue
                                    onChange={(choice) => {
                                      // setCommodityTypeValue(choice.value);
                                      // commiditieshandleInputChange(indexOfItem, choice.value);
                                      commidityPlannedChange(
                                        indexshipment,
                                        indexdetails,
                                        choice.value
                                      );
                                      setCommodity(choice.value);
                                    }}
                                  />
                                  {errors.commodity_Value && (
                                    <h5 className="error">
                                      {errors.commodity_Value}
                                    </h5>
                                  )}
                                </div>
                                <div className="input col-2">
                                  <label htmlFor="address">
                                    Unit of measurement<span>*</span>
                                  </label>
                                  <Select
                                    classNamePrefix="select"
                                    className={
                                      errors.unit_Measurement
                                        ? "hasError basic-multi-select"
                                        : "basic-multi-select"
                                    }
                                    id="unit_Measurement"
                                    // isMulti
                                    isDisabled={isDisabled}
                                    isLoading={isLoading}
                                    isClearable={isClearable}
                                    isRtl={isRtl}
                                    // required
                                    isSearchable={isSearchable}
                                    name="color"
                                    options={UOMsOptions}
                                    onChange={(choice) => {
                                      // setUomValue(choice.value);
                                      // uom_handleInputChange(indexOfItem, choice.value);
                                      uomPlannedChange(
                                        indexshipment,
                                        indexdetails,
                                        choice.value
                                      );
                                      setUnitMeasure(choice.value);
                                    }}
                                  />{" "}
                                  {errors.unit_Measurement && (
                                    <h5 className="error">
                                      {errors.unit_Measurement}
                                    </h5>
                                  )}
                                </div>
                                <div className="input col-2">
                                  <label htmlFor="address">
                                    Quantity<span>*</span>
                                  </label>
                                  <input
                                    type="number"
                                    className={
                                      errors.quantity_Value
                                        ? "hasError basic-multi-select"
                                        : "basic-multi-select"
                                    }
                                    id="quantity_Value"
                                    // required

                                    min="1"
                                    placeholder="i,e,02"
                                    onChange={(e) => {
                                      setQuantityValue(e.target.value);
                                      // quantityValue_handleInputChange(indexOfItem, e);
                                      quantityPlannedChange(
                                        indexshipment,
                                        indexdetails,
                                        e
                                      );
                                    }}
                                  />
                                  {errors.quantity_Value && (
                                    <h5 className="error">
                                      {errors.quantity_Value}
                                    </h5>
                                  )}
                                </div>
                              </div>
                              {/* <Inputs
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
                                setTotalDetails={setTotalDetails}
                                totaldetails={totaldetails}
                                indexOfTotalDetails={indexOfTotalDetails}
                                plannedList={plannedList}
                                setPlannedList={setPlannedList}
                                PlannedInnerDetails={PlannedInnerDetails}
                                arrListnumShipment={arrListnumShipment}
                                indexshipment={indexshipment}
                                indexdetails={indexdetails}
                                okay={okay}
                                showNotification={showNotification}
                              /> */}
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
                            type="button"
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
                                      type="button"
                                      onClick={() =>
                                        scrollToElement(targetElement)
                                      }

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
                                    type="button"
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
                  <form
                    onSubmit={handelSubmit}
                    className={loading ? "disabled" : ""}
                  >
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
                          id="shipper_Value" // isMulti
                          isDisabled={isDisabled}
                          defaultValue={shipperValue}
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
                        />{" "}
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
                              errors.pickup_Value
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
                            className={
                              errors.pickup_Date
                                ? "hasError  position-relative px-5"
                                : " position-relative px-5"
                            }
                            id="pickup_Date"
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
                          ></DatePicker>
                          <Dateicon
                            className="position-absolute"
                            style={
                              errors.pickup_Date
                                ? { top: "31%", left: "53%" }
                                : { top: "33%", left: "53%" }
                            }
                          />
                          {errors.pickup_Date && (
                            <h5 className="error">{errors.pickup_Date}</h5>
                          )}
                        </div>
                        {/* time-from */}
                        <div className="input col-md-3">
                          <label htmlFor="address">
                            Pickup Time <span>*</span>
                          </label>
                          <span style={{ fontWeight: "bold" }}>From</span>
                          <input
                            type="time"
                            className={
                              errors.pickup_TimeFromValue ? "hasError" : ""
                            }
                            id="pickup_TimeFromValue"
                            // required
                            onChange={(v) => {
                              setPickup_TimeFromValue(v.target.value);
                              pickupTimeFromPlanned_handleInputChange(
                                indexshipment,
                                v.target.value
                              );
                            }}
                          />
                          {errors.pickup_TimeFromValue && (
                            <h5 className="error">
                              {errors.pickup_TimeFromValue}
                            </h5>
                          )}
                        </div>
                        {/* time-to */}
                        <div className="input col-md-3 mt-4">
                          <span style={{ fontWeight: "bold" }}>To</span>

                          <input
                            type="time"
                            // required
                            className={
                              errors.pickup_TimeToValue ? "hasError" : ""
                            }
                            id="pickup_TimeToValue"
                            onChange={(v) => {
                              setPickup_TimeToValue(v.target.value);
                              pickupTimeToPlanned_handleInputChange(
                                indexshipment,
                                v.target.value
                              );
                            }}
                          />
                          {errors.pickup_TimeToValue && (
                            <h5 className="error">
                              {errors.pickup_TimeToValue}
                            </h5>
                          )}
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
                            // isMulti
                            id="dropOf_Address"
                            className={
                              errors.dropOf_Address
                                ? "hasError basic-multi-select"
                                : "basic-multi-select"
                            }
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
                          {errors.dropOf_Address && (
                            <h5 className="error">{errors.dropOf_Address}</h5>
                          )}
                        </div>
                        <div className="input mx-3">
                          <label htmlFor="address">
                            Drop off Time<span>*</span>
                          </label>
                          <div className="d-flex align-items-center">
                            <span
                              className="mx-1"
                              style={{ fontWeight: "bold" }}
                            >
                              From
                            </span>

                            <input
                              type="time"
                              className={
                                errors.dropoff_TimeFromValue ? "hasError" : ""
                              }
                              id="dropoff_TimeFromValue"
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
                          {errors.dropoff_TimeFromValue && (
                            <h5 className="error">
                              {errors.dropoff_TimeFromValue}
                            </h5>
                          )}
                        </div>
                        <div className="input mx-3 mt-4 =">
                          <div className="d-flex align-items-center">
                            <span
                              className="mx-1"
                              style={{ fontWeight: "bold" }}
                            >
                              To
                            </span>

                            <input
                              type="time"
                              // required
                              className={
                                errors.dropoff_TimeToValue ? "hasError" : ""
                              }
                              id="dropoff_TimeToValue"
                              onChange={(v) => {
                                setDrop_TimeToValue(v.target.value);
                                dropTimeToPlanned_handleInputChange(
                                  indexshipment,
                                  v.target.value
                                );
                              }}
                            />
                          </div>
                          {errors.dropoff_TimeToValue && (
                            <h5 className="error">
                              {errors.dropoff_TimeToValue}
                            </h5>
                          )}
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
                              <div className="inputs row">
                                <div className="input col-2">
                                  <label htmlFor="address">
                                    Truck Type<span>*</span>
                                  </label>
                                  {/* trucktype */}
                                  <Select
                                    classNamePrefix="select"
                                    // isMulti
                                    className={
                                      errors.trackUser_Choice
                                        ? "hasError basic-multi-select"
                                        : "basic-multi-select"
                                    }
                                    id="trackUser_Choice"
                                    isDisabled={isDisabled}
                                    // required
                                    isLoading={isLoading}
                                    isClearable={isClearable}
                                    isRtl={isRtl}
                                    isSearchable={isSearchable}
                                    name="color"
                                    // value={setTruckTypeValue}
                                    options={truckOptions}
                                    onChange={(choice) => {
                                      setTruckuserChoice(choice.value);
                                      shipmentOptionList(choice.value);
                                      // truckTypehandleInputChange(indexOfItem, choice.value);
                                      TruckPlannedChange(
                                        indexshipment,
                                        indexdetails,
                                        choice.value
                                      );
                                    }}
                                  />
                                  {errors.trackUser_Choice && (
                                    <h5 className="error">
                                      {errors.trackUser_Choice}
                                    </h5>
                                  )}
                                </div>
                                <div className="input col-2">
                                  <label htmlFor="address">
                                    Shipment type<span>*</span>
                                  </label>
                                  {/* shipment-type */}
                                  <Select
                                    classNamePrefix="select"
                                    className={
                                      errors.shipment_type
                                        ? "hasError basic-multi-select"
                                        : "basic-multi-select"
                                    }
                                    id="shipment_type"
                                    // isMulti
                                    isDisabled={isDisabled}
                                    isLoading={isLoading}
                                    isClearable={isClearable}
                                    // required
                                    isRtl={isRtl}
                                    isSearchable={isSearchable}
                                    name="color"
                                    options={shipmentOptionListList}
                                    onChange={(choice) => {
                                      shipmenttypePlannedChange(
                                        indexshipment,
                                        indexdetails,
                                        choice.value
                                      );
                                      // shipmentTypehandleInputChange(indexOfItem, choice.value);
                                      // shipmenttypePlannedChange(
                                      //   indexshipment,
                                      //   indexdetails,
                                      //   choice.value
                                      // );
                                      setShipmentType(choice.value);
                                    }}
                                  />
                                  {errors.shipment_type && (
                                    <h5 className="error">
                                      {errors.shipment_type}
                                    </h5>
                                  )}
                                  {/* <p className="fs-6 text-danger mb-3">{getError("shipmentType")}</p> */}
                                </div>
                                <div className="input col-2">
                                  <label htmlFor="address">
                                    Shipment value<span>*</span>
                                  </label>
                                  <input
                                    type="number"
                                    // required
                                    placeholder="i,e, 10"
                                    className={
                                      errors.shipment_Value
                                        ? "hasError basic-multi-select"
                                        : "basic-multi-select"
                                    }
                                    id="shipment_Value"
                                    // name={totaldetails[totaldetails.lenght-1].shipmentTypeValue}
                                    // totaldetails
                                    onChange={(e) => {
                                      // valueOfhandleInputChange(indexOfItem, e)
                                      shipmentValuePlannedChange(
                                        indexshipment,
                                        indexdetails,
                                        e
                                      );
                                      setShipmentValue(e.target.value);
                                    }}
                                  />
                                  {errors.shipment_Value && (
                                    <h5 className="error">
                                      {errors.shipment_Value}
                                    </h5>
                                  )}
                                  {/* <p className="fs-6 text-danger mb-3">{getError("shipment value")}</p> */}
                                </div>
                                <div className="input col-2">
                                  <label htmlFor="address">
                                    Weight<span>*</span>
                                  </label>
                                  <input
                                    type="number"
                                    placeholder="i,e,2000  Kgs"
                                    min="1"
                                    className={
                                      errors.shipment_Weight
                                        ? "hasError basic-multi-select"
                                        : "basic-multi-select"
                                    }
                                    id="shipment_Weight"
                                    // required

                                    onChange={(e) => {
                                      // setWeightValue(e.target.value);
                                      // weighthandleInputChange(indexOfItem, e);
                                      shipmentwieghtPlannedChange(
                                        indexshipment,
                                        indexdetails,
                                        e
                                      );
                                      setWeight(e.target.value);
                                    }}
                                  />
                                  {errors.shipment_Weight && (
                                    <h5 className="error">
                                      {errors.shipment_Weight}
                                    </h5>
                                  )}
                                  {/* {errList ? <span className="err_message mx-3"> required</span> : ""} */}
                                  {/* <p className="fs-6 text-danger mb-3">{getError("weight")}</p> */}
                                </div>
                                <div className="input col-2">
                                  <label htmlFor="address">
                                    Number of trucks<span>*</span>
                                  </label>
                                  <input
                                    type="number"
                                    placeholder="i,e,2000"
                                    value={1}
                                    min={1}
                                    disabled
                                    // required

                                    onChange={(e) => {
                                      // setNumber_TrucksValue(e.target.value);
                                      // numberOfTruckshahndleInputChange(indexOfItem, e);
                                      numTruckPlannedChange(
                                        indexshipment,
                                        indexdetails,
                                        e
                                      );
                                    }}
                                  />
                                </div>
                                <div className="input col-2">
                                  <label htmlFor="address">Description</label>
                                  <input
                                    type="text"
                                    placeholder="text here"
                                    min="1"
                                    onChange={(e) => {
                                      // descriptionhahndleInputChange(indexOfItem,e);
                                      descriptionPlannedChange(
                                        indexshipment,
                                        indexdetails,
                                        e
                                      );
                                    }}
                                  />
                                </div>
                              </div>

                              <div className="inputs row">
                                <div className="input col-3">
                                  <label htmlFor="address">
                                    Packing List Attachments
                                  </label>

                                  <div className="input-group ">
                                    <input
                                      type="file"
                                      multiple="multiple"
                                      accept="audio/*,video/*,image/*,.pdf,.doc"
                                      className="input-file form-control"
                                      id="inputGroupFile03"
                                      aria-describedby="inputGroupFileAddon03"
                                      aria-label="Upload"
                                      onChange={(e) => {
                                        // pickinghandleInputChange(indexOfItem, e.target.files);
                                        pickingListPlannedChange(
                                          indexshipment,
                                          indexdetails,
                                          e.target.files
                                        );
                                        // console.log(picking_ListValue, "files");
                                        // setPicking_ListValue(e.target.files[0]);
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="input col-3">
                                  <label htmlFor="address">
                                    Other Documentation
                                  </label>
                                  <div className="input-group ">
                                    <input
                                      type="file"
                                      multiple="multiple"
                                      accept="audio/*,video/*,image/*,.pdf,.doc"
                                      // required
                                      className="input-file form-control"
                                      id="inputGroupFile03"
                                      aria-describedby="inputGroupFileAddon03"
                                      aria-label="Upload"
                                      onChange={(e) => {
                                        // docListhahndleInputChange(indexOfItem, e.target.files);
                                        docListPlannedChange(
                                          indexshipment,
                                          indexdetails,
                                          e.target.files
                                        );
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="input col-2">
                                  <label htmlFor="address">
                                    Commodity type<span>*</span>
                                  </label>
                                  <Select
                                    classNamePrefix="select"
                                    className={
                                      errors.commodity_Value
                                        ? "hasError basic-multi-select"
                                        : "basic-multi-select"
                                    }
                                    id="commodity_Value"
                                    // isMulti
                                    isDisabled={isDisabled}
                                    isLoading={isLoading}
                                    // required
                                    isClearable={isClearable}
                                    isRtl={isRtl}
                                    isSearchable={isSearchable}
                                    name="color"
                                    options={commidtiesOptions}
                                    // setCommodityTypeValue
                                    onChange={(choice) => {
                                      // setCommodityTypeValue(choice.value);
                                      // commiditieshandleInputChange(indexOfItem, choice.value);
                                      commidityPlannedChange(
                                        indexshipment,
                                        indexdetails,
                                        choice.value
                                      );
                                      setCommodity(choice.value);
                                    }}
                                  />
                                  {errors.commodity_Value && (
                                    <h5 className="error">
                                      {errors.commodity_Value}
                                    </h5>
                                  )}
                                </div>
                                <div className="input col-2">
                                  <label htmlFor="address">
                                    Unit of measurement<span>*</span>
                                  </label>
                                  <Select
                                    classNamePrefix="select"
                                    className={
                                      errors.unit_Measurement
                                        ? "hasError basic-multi-select"
                                        : "basic-multi-select"
                                    }
                                    id="unit_Measurement"
                                    // isMulti
                                    isDisabled={isDisabled}
                                    isLoading={isLoading}
                                    isClearable={isClearable}
                                    isRtl={isRtl}
                                    // required
                                    isSearchable={isSearchable}
                                    name="color"
                                    options={UOMsOptions}
                                    onChange={(choice) => {
                                      // setUomValue(choice.value);
                                      // uom_handleInputChange(indexOfItem, choice.value);
                                      uomPlannedChange(
                                        indexshipment,
                                        indexdetails,
                                        choice.value
                                      );
                                      setUnitMeasure(choice.value);
                                    }}
                                  />{" "}
                                  {errors.unit_Measurement && (
                                    <h5 className="error">
                                      {errors.unit_Measurement}
                                    </h5>
                                  )}
                                </div>
                                <div className="input col-2">
                                  <label htmlFor="address">
                                    Quantity<span>*</span>
                                  </label>
                                  <input
                                    type="number"
                                    className={
                                      errors.quantity_Value
                                        ? "hasError basic-multi-select"
                                        : "basic-multi-select"
                                    }
                                    id="quantity_Value"
                                    // required

                                    min="1"
                                    placeholder="i,e,02"
                                    onChange={(e) => {
                                      setQuantityValue(e.target.value);
                                      // quantityValue_handleInputChange(indexOfItem, e);
                                      quantityPlannedChange(
                                        indexshipment,
                                        indexdetails,
                                        e
                                      );
                                    }}
                                  />
                                  {errors.quantity_Value && (
                                    <h5 className="error">
                                      {errors.quantity_Value}
                                    </h5>
                                  )}
                                </div>
                              </div>

                              {/* <Inputs
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
                                setTotalDetails={setTotalDetails}
                                totaldetails={totaldetails}
                                indexOfTotalDetails={indexOfTotalDetails}
                                plannedList={plannedList}
                                setPlannedList={setPlannedList}
                                PlannedInnerDetails={PlannedInnerDetails}
                                arrListnumShipment={arrListnumShipment}
                                indexshipment={indexshipment}
                                indexdetails={indexdetails}
                                okay={okay}
                                setLoading={setLoading}
                                showNotification={showNotification}
                              /> */}
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
                            type="button"
                            onClick={() => {
                              addPlannedinerDetails(indexshipment);
                              handleIncreaseIndexPlanned();
                            }}
                          >
                            <i className="fa-solid fa-plus"></i> Add truck
                          </button>
                        </div>
                        {ischeck ? (
                          <div className="right-btn">
                            {counter === numShipment - 1 ? (
                              <button
                                className="btn-save"
                                type="submit"
                                onClick={() => scrollToElement(targetElement)}
                              >
                                Save
                              </button>
                            ) : (
                              <>
                                {errors && (
                                  <>
                                    <span
                                      className="mx-2"
                                      style={{ color: "red" }}
                                    >
                                      Please enter the required data
                                    </span>

                                    <button
                                      className="btn-save"
                                      type="button"
                                      onClick={() => {
                                        if (
                                          plannedList[counter]
                                            .shipperPlanned === "" ||
                                          plannedList[counter]
                                            .pickupAddressPlanned === "" ||
                                          plannedList[counter]
                                            .dropOffPlanned === "" ||
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
                                            .commidityPlanned === "" ||
                                          plannedList[counter].detailsTruck[0]
                                            .uomPlanned === "" ||
                                          plannedList[counter].detailsTruck[0]
                                            .quantityPlanned === ""
                                        ) {
                                          scrollToElement(targetElement);
                                        } else if (counter < numShipment - 1) {
                                          if (
                                            counter ===
                                            plannedList.length - 1
                                          ) {
                                            addNewListOfShipment();
                                            // console.log("here");
                                          }
                                          setCounter(counter + 1);
                                          setStartDate(null);
                                          console.log("there");
                                        }
                                      }}
                                    >
                                      Next Shipment
                                    </button>
                                  </>
                                )}
                              </>
                            )}
                          </div>
                        ) : (
                          <div className="right-btn">
                            <button
                              className="btn-save"
                              type="submit"
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
                type="submit"
                className="btnSave my-4 adwadawdasd"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setIsChecked(!ischeck);
                  scrollToElement(targetElement);
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
