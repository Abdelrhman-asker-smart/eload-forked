import React from "react";
import Select from 'react-select';
import { useState } from "react";
import "./Shipments.css";

// trucks
import  {ReactComponent as Truck1} from '../../icons/Vector.svg';


// const truckChoose=() =>{
//   return(
//     <div className="d-flex">
//      <Truck1/>
//      <span>truckchoose</span>
//     </div>
//   )
// }


function Inputs() {


  // select-options
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

      {/* truck-select */}
      const truckOptions= [
        { value: 'Container', label: <Truck1/> },
        { value: 'Flatbed', label: 'Riyadh Whse' },
        { value: 'Dry Van', label: 'My Main Whse' },
        { value: 'Lowboy trailer', label: 'Abuzaid ' },
      ]; 
      {/* shipmentType-select */}
      const shipmentOptions= [
        { value: 'Freezed', label: "Freezed" },
        { value: 'Normal', label: 'Normal' },
      ]; 
      // commidity-type
      const commidityOptions= [
        { value: 'Load type 1 ', label: "Load type 1 " },
        { value: 'Load type 2', label: 'Load type 2' },
      ]; 
      // UOF-M
      const UnitmeasureOptions= [
        { value: 'Pallets', label: "Pallets" },
        { value: 'Pisces', label: 'Pisces' },
      ];
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
            options={truckOptions}
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
            options={shipmentOptions}
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
      </div>

      <div className="inputs row">
        <div className="input col-3">
          <label htmlFor="address">
            Packing List Attachments<span>*</span>
          </label>
          <div className="input-group ">
            <input
              type="file"
              className="input-file form-control"
              id="inputGroupFile03"
              aria-describedby="inputGroupFileAddon03"
              aria-label="Upload"
            />
          </div>
        </div>
        <div className="input col-3">
          <label htmlFor="address">
            Other Documentation<span>*</span>
          </label>
          <div className="input-group ">
            <input
              type="file"
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
            options={commidityOptions}
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
            options={UnitmeasureOptions}
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
}
export default Inputs;
