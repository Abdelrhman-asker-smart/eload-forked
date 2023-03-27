import React from "react";
import Select from "react-select";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import Joi from "joi";
import "./Shipments.css";

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
  // input,
  setTotalDetails,
  totaldetails,
  indexOfTotalDetails,
  indexOfItem,
  validation,
  getError,
  errList,
}) => {

  const { list, setList } = useContext(ContextStore);
  // const {errorlist , setErrorList}= useContext(ContextStore)

  useEffect(() => {
    if (list) {
      AddShipments_Api();
    }
  }, [list]);
  // useEffect(() => {
  //   if (list) {
  //     getError();
  //   }
  // }, [errorlist]);

  const [cookie] = useCookies(["eload_token"]);
  // const [errList, setErrList] = useState([]);
  const [sendFlag, setsendFlag] = useState(false);

  // select-options
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  // shipmentOptionList
  const [shipmentOptionListList, setShipmentOptionListList] = useState();
  const [truckuserChoice, setTruckuserChoice] = useState();

  // details

  const [truckTypeValue, setTruckTypeValue] = useState("");
  const [shipmentType, setShipmentType] = useState("");
  const [shipmentTypeValue, setshipmentTypeValue] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [number_TrucksValue, setNumber_TrucksValue] = useState("");
  const [picking_ListValue, setPicking_ListValue] = useState("");
  const [Documents_ListValue, setDocments_ListValue] = useState("");
  const [commodityTypeValue, setCommodityTypeValue] = useState("");
  const [uomValue, setUomValue] = useState("");
  const [quantityValue, setQuantityValue] = useState("");

  // truck-type
  const truckTypehandleInputChange = (index, event) => {
    const newInputs = [...totaldetails];
    newInputs[index].truckTypeValue = event;
    setTotalDetails(newInputs);
  };

  // shipment-type
  const shipmentTypehandleInputChange = (index, event) => {
    const newInputs = [...totaldetails];
    newInputs[index].shipmentType = event;
    setTotalDetails(newInputs);
  };

  // valueOfShipment-input
  const valueOfhandleInputChange = (index, event) => {
    const newInputs = [...totaldetails];
    newInputs[index].shipmentTypeValue = event.target.value;
    setTotalDetails(newInputs);
  };
  // weightOfShipment-input
  const weighthandleInputChange = (index, event) => {
    const newInputs = [...totaldetails];
    newInputs[index].weightValue = event.target.value;
    setTotalDetails(newInputs);
  };
  // weightOfShipment-input
  const numberOfTruckshahndleInputChange = (index, event) => {
    const newInputs = [...totaldetails];
    newInputs[index].number_TrucksValue = event.target.value;
    setTotalDetails(newInputs);
  };
  // pack-files
  const pickinghandleInputChange = (index, event) => {
    const newInputs = [...totaldetails];
    console.log(event, "events");
    // totaldetails.picking_ListValue==event;
    // for(let i=0;i<)
    for (let k in event) {
      if (event.hasOwnProperty(k)) {
        // totaldetails.picking_ListValue[k] = event[k];
        totaldetails[index].picking_ListValue.push(event[k]);
      }
    }

    setTotalDetails(newInputs);
  };
  // Doc_files
  const docListhahndleInputChange = (index, event) => {
    const newInputs = [...totaldetails];
    console.log(event, "events");
    for (let k in event) {
      if (event.hasOwnProperty(k)) {
        totaldetails[index].Documents_ListValue.push(event[k]);
      }
    }
    setTotalDetails(newInputs);
  };
  // commidities
  const commiditieshandleInputChange = (index, event) => {
    const newInputs = [...totaldetails];
    newInputs[index].commodityTypeValue = event;
    setTotalDetails(newInputs);
  };
  // UOM
  const uom_handleInputChange = (index, event) => {
    const newInputs = [...totaldetails];
    newInputs[index].uomValue = event;
    setTotalDetails(newInputs);
  };
  // quantityValue
  const quantityValue_handleInputChange = (index, event) => {
    const newInputs = [...totaldetails];
    newInputs[index].quantityValue = event.target.value;
    setTotalDetails(newInputs);
  };

  const [openerror, setOpenerror] = React.useState(false);
  const handleClickerror = () => {
    setOpenerror(true);
  };

  const handleCloseerror = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenerror(false);
  };

  // Api-s
  const AddShipments_Api = async () => {
    // e.preventDefault();

    const formdata = new FormData();
    formdata.append("shipper_id", shipperuserChoice);
    formdata.append("from_address_id", pickupuserChoice);
    formdata.append("to_address_id", dropoffserChoice);
    formdata.append(
      "pickup_date",
      moment(pickup_DateValue).format("YYYY-MM-DD")
    );
    // pickup_DateValue
    formdata.append("pickup_from_time", pickup_TimeFromValue);
    formdata.append("pickup_to_time", pickup_TimeToValue);
    formdata.append("dropoff_from_time", dropoff_TimeFromValue);
    formdata.append("dropoff_to_time", dropoff_TimeToValue);
    // details
    totaldetails.map((item, index) => {
      formdata.append(
        `shipments[${index}][truck_type_id]`,
        totaldetails[index].truckTypeValue
      );
      formdata.append(
        `shipments[${index}][shipment_type_id]`,
        totaldetails[index].shipmentType
      );
      formdata.append(
        `shipments[${index}][value]`,
        totaldetails[index].shipmentTypeValue
      );
      formdata.append(
        `shipments[${index}][weight]`,
        totaldetails[index].weightValue
      );
      formdata.append(
        `shipments[${index}][truck_type_qty]`,
        totaldetails[index].number_TrucksValue
      );
      // pick
      totaldetails[index].picking_ListValue.map((fileitem, fileindexpick) => {
        formdata.append(
          `shipments[${index}][attachments][packing_list][${fileindexpick}]`,
          totaldetails[index].picking_ListValue
        );
      });
      // doc
      totaldetails[index].Documents_ListValue.map((fileitem, fileindexdoc) => {
        formdata.append(
          `shipments[${index}][attachments][other_documentations][${fileindexdoc}]`,
          totaldetails[index].Documents_ListValue
        );
      });

      formdata.append(
        `shipments[${index}][commodity_id]`,
        totaldetails[index].commodityTypeValue
      );
      formdata.append(
        `shipments[${index}][uom_id]`,
        totaldetails[index].uomValue
      );
      formdata.append(
        `shipments[${index}][quantity]`,
        totaldetails[index].quantityValue
      );
    });

    console.log("Add----------Done");

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

      // setName("");
      //   console.log(reponse);
    } catch (e) {
      // handleClick2();
      console.log(e);
    }
    // }
  };

  const shipmentOptionList = (truckuserChoice) => {
    // console.log(truckuserChoice, "testttttttttttttttt");

    detailsList.truck_types?.map((item, index) => {
      // console.log(item,"itemtruck");
      // console.log(item.id,"itemtruckiiiiiiiiiiidddd");
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

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleCloseerror}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseerror}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <Snackbar
        open={openerror}
        autoHideDuration={6000}
        onClose={handleCloseerror}
        message="Note archived"
        action={action}
      />
      <div className="inputs row">
        <div className="input col-2">
          <label htmlFor="address">
            Truck Type<span>*</span>
          </label>
          {/* trucktype */}
          <Select
            classNamePrefix="select"
            className="basic-multi-select"
            // isMulti
            isDisabled={isDisabled}
            required
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
              // setTruckTypeValue(choice.value);
              // console.log(iii, "iii");
              truckTypehandleInputChange(indexOfItem, choice.value);
            }}
            // value={totaldetails[indexOfTotalDetails].truckTypeValue}
          />

        </div>
        <div className="input col-2">
          <label htmlFor="address">
            Shipment type<span>*</span>
          </label>
          {/* shipment-type */}
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
            options={shipmentOptionListList}
            onChange={(choice) => {
              // setShipmentType(choice.value);
              shipmentTypehandleInputChange(indexOfItem, choice.value);
            }}
          />

          {/* <p className="fs-6 text-danger mb-3">{getError("shipmentType")}</p> */}
        </div>
        <div className="input col-2">
          <label htmlFor="address">
            Shipment value<span>*</span>
          </label>
          <input
            type="number"
            required
            placeholder="i,e, 10"
            // name={totaldetails[totaldetails.lenght-1].shipmentTypeValue}
            // totaldetails
            onChange={(e) => valueOfhandleInputChange(indexOfItem, e)}
          />
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
            required
            onChange={(e) => {
              // setWeightValue(e.target.value);
              weighthandleInputChange(indexOfItem, e);
            }}
          />
          {errList ? <span className="err_message mx-3"> required</span> : ""}
          {/* <p className="fs-6 text-danger mb-3">{getError("weight")}</p> */}
        </div>
        <div className="input col-2">
          <label htmlFor="address">
            Number of trucks<span>*</span>
          </label>
          <input
            type="number"
            placeholder="i,e,2000"
            min="1"
            required
            onChange={(e) => {
              // setNumber_TrucksValue(e.target.value);
              numberOfTruckshahndleInputChange(indexOfItem, e);
            }}
          />
        </div>
        <div className="input col-2">
          <label htmlFor="address">Description</label>
          <input type="text" placeholder="text here" min="1" />
        </div>
      </div>

      <div className="inputs row">
        <div className="input col-3">
          <label htmlFor="address">
            Packing List Attachments<span>*</span>
          </label>
          <div className="input-group ">
            <input
              type="file"
              multiple="multiple"
              className="input-file form-control"
              required
              id="inputGroupFile03"
              aria-describedby="inputGroupFileAddon03"
              aria-label="Upload"
              onChange={(e) => {
                pickinghandleInputChange(indexOfItem, e.target.files);
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
              required
              className="input-file form-control"
              id="inputGroupFile03"
              aria-describedby="inputGroupFileAddon03"
              aria-label="Upload"
              onChange={(e) => {
                docListhahndleInputChange(indexOfItem, e.target.files);
              }}
            />
            {errList ? <span className="err_message mx-3"> required</span> : ""}
          </div>
        </div>
        <div className="input col-2">
          <label htmlFor="address">
            Commodity type<span>*</span>
          </label>
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
            options={commidtiesOptions}
            // setCommodityTypeValue
            onChange={(choice) => {
              // setCommodityTypeValue(choice.value);
              commiditieshandleInputChange(indexOfItem, choice.value);
            }}
          />
        </div>
        <div className="input col-2">
          <label htmlFor="address">
            Unity of measurement<span>*</span>
          </label>
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
            options={UOMsOptions}
            onChange={(choice) => {
              // setUomValue(choice.value);
              uom_handleInputChange(indexOfItem, choice.value);
            }}
          />
        </div>
        <div className="input col-2">
          <label htmlFor="address">
            Quantity<span>*</span>
          </label>
          <input
            type="number"
            required
            min="1"
            placeholder="i,e,02"
            onChange={(e) => {
              // setQuantityValue(e.target.value);
              quantityValue_handleInputChange(indexOfItem, e);
            }}
          />
        </div>
      </div>
    </>
  );
};
export default Inputs;
