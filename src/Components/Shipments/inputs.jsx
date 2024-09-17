import React from "react";
import Select from "react-select";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { NavLink, useNavigate } from "react-router-dom";
import Joi from "joi";
import "./Shipments.css";
import { ToastContainer, toast } from "react-toastify";

// trucks
import { ReactComponent as Truck1 } from "../../icons/Vector.svg";
import { ContextStore } from "../contaxt";
import { useContext } from "react";
import moment from "moment";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from "@mui/material/Alert";
// import * as yup from "yup";

// const truckChoose=() =>{
//   return(
//     <div className="d-flex">
//      <Truck1/>
//      <span>truckchoose</span>
//     </div>
//   )
// }

const Inputs = ({
  handleOrder,
  shipperuserChoice,
  pickupuserChoice,
  detailsApi,
  detailsList,
  dropoffserChoice,
  pickup_DateValue,
  pickup_TimeFromValue,
  pickup_TimeToValue,
  dropoff_TimeFromValue,
  dropoff_TimeToValue,
  setTotalDetails,
  totaldetails,
  indexOfTotalDetails,
  indexOfItem,
  errList,
  plannedList,
  setPlannedList,
  PlannedInnerDetails,
  arrListnumShipment,
  indexshipment,
  indexdetails,

  okay,
}) => {
  const { list, setList } = useContext(ContextStore);
  const navigate = useNavigate();
  const showNotification = () => {
    let Msg = ({ closeToast, toastProps }) => (
      <div>
        <h4>Success</h4>
      </div>
    );
    toast(<Msg />, { autoClose: 3000 });
  };


  useEffect(() => {
    if (list) {
      AddShipments_Api(plannedList);
    }
  }, [list]);

  const [cookie] = useCookies(["eload_token"]);
  // const [sendFlag, setsendFlag] = useState(false);

  // select-options
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  // shipmentOptionList Used for Joi
  const [shipmentOptionListList, setShipmentOptionListList] = useState();
  const [truckuserChoice, setTruckuserChoice] = useState();
  const [shipmentType, setShipmentType] = useState();
  const [shipmentValue, setShipmentValue] = useState();
  const [weigth, setWeight] = useState();
  const [commodity, setCommodity] = useState();
  const [unitMeasure, setUnitMeasure] = useState();
  const [quantityValue, setQuantityValue] = useState();



  // shipment_type
  const shipmentOptionList = (truckuserChoice) => {
    // console.log(truckuserChoice, "testttttttttttttttt");

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

  // errors
  // const [openerror, setOpenerror] = React.useState(false);
  // const handleClickerror = () => {
  //   setOpenerror(true);
  // };
  // const handleCloseerror = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpenerror(false);
  // };
  // Error List
  const [errors, setErrors] = useState([]);
  console.log(errors, " errorsssssssss");
  const Joi = require("joi");
  const [targetElement, setTargetElement] = useState(null);

  const scrollToElement = (targetElement) => {
    const element = document.getElementById(targetElement);
    const focusing = element.querySelector("input");
    if (focusing) {
      focusing.scrollIntoView({ behavior: "smooth", block: "start" });
      focusing.focus();
      console.log(focusing, "focusing id in function");
    } else if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      element.focus();
      console.log(element, "element id in function");
    }
  };
  useEffect(() => {
    if (targetElement && errors && okay) {
      scrollToElement(targetElement);
    }
  }, [targetElement, errors, okay]);
  // Api-shipment
  console.log(plannedList.length, "checklenghttttt");
  console.log(plannedList[0].detailsTruck?.length, "checklenghttttt");

  const AddShipments_Api = async (plannedList) => {
    console.log(plannedList, "plannedList--------");
    // e.preventDefault();
    const schema = Joi.object({

    });
    const formDataObject = {

    };
    const { error } = schema.validate(formDataObject, { abortEarly: false });
    if (error) {

      const newErrors = error.details.reduce((acc, detail) => {
        acc[detail.path[0]] = detail.message;
        return acc;
      }, {});
      setErrors(newErrors);

      setTargetElement(error.details[0].context.label);
      // console.log(error.details, " allErrors");
    }
    // Without-Planned=============================
    else if (plannedList.length === 1) {
      const formdata = new FormData();
      const item = plannedList[0];
      console.log("Preparing formdata for item:", item);

      // plannedList.map((item, index) => {
      setIsLoading(true);
      setErrors([]);
      // formdata.append(`orders[${index}][shipper_id]`,item.shipperPlanned);
      formdata.append(`shipper_id`, item.shipperPlanned);

      formdata.append("from_address_id", item.pickupAddressPlanned);
      formdata.append("to_address_id", item.dropOffPlanned);
      formdata.append(
        "pickup_date",
        moment(item.pickupDatePlanned).format("YYYY-MM-DD")
      );
      // pickup_DateValue
      formdata.append("pickup_from_time", item.pickupTimeFromPlanned);
      formdata.append("pickup_to_time", item.pickupTimeToPlanned);
      formdata.append("dropoff_from_time", item.dropTimeFromPlanned);
      formdata.append("dropoff_to_time", item.dropTimeToPlanned);
      formdata.append("dropoff_to_time", item.dropTimeToPlanned);

      // ==================================test=========
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
      // });
      console.log("Addone----------Done");

      // below is a temp fix to be able to send the order request only once
      // handleOrder(formdata);

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
        formdata.append(`orders[${index}][to_address_id]`, item.dropOffPlanned);

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

        handleOrder(formdata);
        showNotification();
        navigate("/allshipments");
      } catch (e) {
        console.log(e);
      }
    }

    setList(false); 
  };

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
  return (
    <>
      {/* <Snackbar
        open={openerror}
        autoHideDuration={6000}
        onClose={handleCloseerror}
        message="Note archived"
        action={action}
      /> */}
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
              TruckPlannedChange(indexshipment, indexdetails, choice.value);
            }}
          />
          {errors.trackUser_Choice && (
            <h5 className="error">{errors.trackUser_Choice}</h5>
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
            <h5 className="error">{errors.shipment_type}</h5>
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
              shipmentValuePlannedChange(indexshipment, indexdetails, e);
              setShipmentValue(e.target.value);
            }}
          />
          {errors.shipment_Value && (
            <h5 className="error">{errors.shipment_Value}</h5>
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
              shipmentwieghtPlannedChange(indexshipment, indexdetails, e);
              setWeight(e.target.value);
            }}
          />
          {errors.shipment_Weight && (
            <h5 className="error">{errors.shipment_Weight}</h5>
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
              numTruckPlannedChange(indexshipment, indexdetails, e);
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
              descriptionPlannedChange(indexshipment, indexdetails, e);
            }}
          />
        </div>
      </div>

      <div className="inputs row">
        <div className="input col-3">
          <label htmlFor="address">Packing List Attachments</label>

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
          <label htmlFor="address">Other Documentation</label>
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
              commidityPlannedChange(indexshipment, indexdetails, choice.value);
              setCommodity(choice.value);
            }}
          />
          {errors.commodity_Value && (
            <h5 className="error">{errors.commodity_Value}</h5>
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
              uomPlannedChange(indexshipment, indexdetails, choice.value);
              setUnitMeasure(choice.value);
            }}
          />{" "}
          {errors.unit_Measurement && (
            <h5 className="error">{errors.unit_Measurement}</h5>
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
              quantityPlannedChange(indexshipment, indexdetails, e);
            }}
          />
          {errors.quantity_Value && (
            <h5 className="error">{errors.quantity_Value}</h5>
          )}
        </div>
      </div>
    </>
  );
};
export default Inputs;
