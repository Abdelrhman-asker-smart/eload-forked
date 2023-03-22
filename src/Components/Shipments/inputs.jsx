import React from "react";
import Select from "react-select";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import "./Shipments.css";

// trucks
import { ReactComponent as Truck1 } from "../../icons/Vector.svg";

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
}) => {


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
            }}
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
          />
        </div>
        <div className="input col-2">
          <label htmlFor="address">
            Shipment value<span>*</span>
          </label>
          <input type="text" placeholder="i,e, 10" />
        </div>
        <div className="input col-2">
          <label htmlFor="address">
            Weight<span>*</span>
          </label>
          <input type="text" placeholder="i,e,2000" />
        </div>
        <div className="input col-2">
          <label htmlFor="address">
            Number of trucks<span>*</span>
          </label>
          <input type="text" placeholder="i,e,2000" />
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
          />
        </div>
        <div className="input col-2">
          <label htmlFor="address">
            Quantity<span>*</span>
          </label>
          <input type="text" placeholder="i,e,02" />
        </div>
      </div>
    </>
  );
};
export default Inputs;
