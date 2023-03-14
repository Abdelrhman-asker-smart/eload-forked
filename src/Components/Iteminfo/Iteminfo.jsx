import React from "react";
import Select from 'react-select';
import { useState } from 'react'
import  {ReactComponent as Vector} from '../../icons/Vector.svg';
import "./Iteminfo.css";

const Iteminfo = () => {
      // select-options
      const [isClearable, setIsClearable] = useState(true);
      const [isSearchable, setIsSearchable] = useState(true);
      const [isDisabled, setIsDisabled] = useState(false);
      const [isLoading, setIsLoading] = useState(false);
      const [isRtl, setIsRtl] = useState(false);
    
     
       const SourceSelect= [
        { value: 'Jeddah ', label: 'Jeddah ' },
        { value: 'Mecca', label: 'Mecca' },
        { value: 'Mecca ', label: 'Mecca ' },
        { value: 'Jeddah ', label: 'Jeddah ' },
      ];
      const DestnationSelect= [
        { value: 'Jeddah ', label: 'Jeddah ' },
        { value: 'Mecca', label: 'Mecca' },
        { value: 'Mecca ', label: 'Mecca ' },
        { value: 'Jeddah ', label: 'Jeddah ' },
      ];
      const TruckSelect= [
        { value: 'Truck1', label:<div><Vector className='mx-3'/> Truck1</div> },
        { value: 'Truck2', label:<div><Vector className='mx-3'/> Truck2</div> },
        { value: 'Truck3', label:<div><Vector className='mx-3'/> Truck3</div> },
      ];
      const shipmentOptions= [
        { value: 'Freezed', label: "Freezed" },
        { value: 'Normal', label: 'Normal' },
      ]; 
  return (
    <div className="container-fluid iteminfo p-5">
      <h3>ITEM INFORMATION</h3>

      {/* name+email */}
      <div className="row my-4 iteminfo">
        <div className="col-md-2">
          <label className="my-2 d-block">Source </label>
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
          options={SourceSelect}
        />
        </div>
        <div className="col-md-2">
          <label className="my-2 d-block ">Destination</label>
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
          options={DestnationSelect}
        />
        </div>
        <div className="col-md-2">
          <label className="my-2 d-block ">Truck Type</label>
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
          options={TruckSelect}
        />
        </div>
        {/* <div className="col-md-3 d-flex align-items-center"> */}
          <div className=" col-md-2 truck">
            <label className="my-2 d-block ">Shipment type</label>
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
          {/* price */}
          <div className=" col-md-2 truck">
            <label className="my-2 d-block ">Price</label>
            <input
              className="input-box small-input px-2"
              type="number"
              placeholder="price"
            />
          </div>
        {/* </div> */}
        
      </div>
      <button className="btn-save my-5">SAVE</button>
    </div>
  );
};

export default Iteminfo;
