import React from "react";
import Select from "react-select";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import "./Shipments.css";

// trucks
import { ReactComponent as Truck1 } from "../../icons/Vector.svg";
import { ContextStore } from "../contaxt";
import { useContext } from "react";
import moment from "moment";

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
  input,
  setTotalDetails,
  totaldetails,
  indexOfTotalDetails,
  indexOfItem,
}) => {
  const { list, setList } = useContext(ContextStore);

  useEffect(() => {
    if (list) {
      AddShipments_Api();
    }
  }, [list]);

  const [cookie] = useCookies(["eload_token"]);
  // console.log(shipperuserChoice, "shiperinputssssssssssssss");
  // console.log(pickupuserChoice, "pickupinputssssssssssssss");
  // console.log(detailsList, "detailsLiiiiiiiiiiiiiiiiiist");
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

  // valueOfShipment-input
  const handleInputChange = (index, event) => {
    const newInputs = [...totaldetails];
    newInputs[index].shipmentTypeValue = event.target.value;
    setTotalDetails(newInputs);
  };
  // truck-type
  const truckTypehandleInputChange = (index, event) => {
    const newInputs = [...totaldetails];
    newInputs[index].truckTypeValue = event;
    setTotalDetails(newInputs);
  };
  // pack-list

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
    // event.map(
    //   (item, index) => console.log(index, "evvvvvvvvvv")
    //   // newInputs[index].picking_ListValue.push(item);
    // );
    setTotalDetails(newInputs);
  };

  const AddShipments_Api = async () => {
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
    formdata.append(`shipments[0][truck_type_id]`, truckTypeValue);
    formdata.append(`shipments[0][shipment_type_id]`, shipmentType);
    formdata.append(`shipments[0][value]`, shipmentTypeValue);
    formdata.append(`shipments[0][weight]`, weightValue);
    formdata.append(`shipments[0][commodity_id]`, commodityTypeValue);
    formdata.append(`shipments[0][uom_id]`, uomValue);
    formdata.append(`shipments[0][truck_type_qty]`, number_TrucksValue);

    formdata.append(
      `shipments[0][attachments][packing_list][0]`,
      picking_ListValue
    );
    formdata.append(
      `shipments[0][attachments][other_documentations][0]`,
      Documents_ListValue
    );
    formdata.append(`shipments[0][quantity]`, quantityValue);

    input.map((item, index) => {
      formdata.append(`shipments[${index + 1}][truck_type_id]`, truckTypeValue);
      formdata.append(
        `shipments[${index + 1}][shipment_type_id]`,
        shipmentType
      );
      formdata.append(`shipments[${index + 1}][value]`, shipmentTypeValue);
      formdata.append(`shipments[${index + 1}][weight]`, weightValue);
      formdata.append(
        `shipments[${index + 1}][commodity_id]`,
        commodityTypeValue
      );
      formdata.append(`shipments[${index + 1}][uom_id]`, uomValue);
      formdata.append(
        `shipments[${index + 1}][truck_type_qty]`,
        number_TrucksValue
      );
      formdata.append(
        `shipments[${index + 1}][attachments][packing_list][0]`,
        picking_ListValue
      );
      formdata.append(
        `shipments[${index + 1}][attachments][other_documentations][0]`,
        Documents_ListValue
      );
      formdata.append(`shipments[${index + 1}][quantity]`, quantityValue);
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
      console.log(e);
    }
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

  const commidtiesOptions = detailsList.commodities?.map((item, index) => {
    return {
      value: item.id,
      label: item.name,
    };
  });
  // uom

  const UOMsOptions = detailsList.uom?.map((item, index) => {
    return {
      value: item.id,
      label: item.name,
    };
  });
  // console.log(UOMsOptions, "UOMsOptions");
  // truck_types
  const truckOptions = detailsList.truck_types?.map((item, index) => {
    return {
      value: item.id,
      label: item.name,
    };
  });

  // shipment-type

  return (
    <>
      {/* {
          callApi(AddShipments_Api)
        } */}
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
            isRtl={isRtl}
            isSearchable={isSearchable}
            name="color"
            options={shipmentOptionListList}
            onChange={(choice) => {
              setShipmentType(choice.value);
            }}
          />
        </div>
        <div className="input col-2">
          <label htmlFor="address">
            Shipment value<span>*</span>
          </label>
          <input
            type="number"
            placeholder="i,e, 10"
            // name={totaldetails[totaldetails.lenght-1].shipmentTypeValue}
            // totaldetails
            onChange={(e) =>
              // setshipmentTypeValue(e.target.value);
              // console.log(e.target.name);
              // console.log(totaldetails);
              // setTotalDetails({totaldetails[0].shipmentTypeValue : e.target.value})
              handleInputChange(indexOfItem, e)
            }

            // value={totaldetails[indexOfTotalDetails].shipmentTypeValue}
          />
        </div>
        <div className="input col-2">
          <label htmlFor="address">
            Weight<span>*</span>
          </label>
          <input
            type="number"
            placeholder="i,e,2000  Kgs"
            onChange={(e) => {
              setWeightValue(e.target.value);
            }}
          />
          {/* setWeightValue */}
        </div>
        <div className="input col-2">
          <label htmlFor="address">
            Number of trucks<span>*</span>
          </label>
          <input
            type="number"
            placeholder="i,e,2000"
            onChange={(e) => {
              setNumber_TrucksValue(e.target.value);
            }}
          />
        </div>
        <div className="input col-2">
          <label htmlFor="address">Description</label>
          <input type="text" placeholder="text here" />
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
              className="input-file form-control"
              id="inputGroupFile03"
              aria-describedby="inputGroupFileAddon03"
              aria-label="Upload"
              onChange={(e) => {
                setDocments_ListValue(e.target.files[0]);
              }}
              // setDocments_ListValue
            />
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
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            name="color"
            options={commidtiesOptions}
            // setCommodityTypeValue
            onChange={(choice) => {
              setCommodityTypeValue(choice.value);
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
            isSearchable={isSearchable}
            name="color"
            options={UOMsOptions}
            onChange={(choice) => {
              setUomValue(choice.value);
            }}
          />
        </div>
        <div className="input col-2">
          <label htmlFor="address">
            Quantity<span>*</span>
          </label>
          <input
            type="number"
            placeholder="i,e,02"
            onChange={(e) => {
              setQuantityValue(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};
export default Inputs;
