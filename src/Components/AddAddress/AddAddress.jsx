import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Select from 'react-select';
import "../AddAddress/addAddress.css";

const AddAddress = () => {
    // select-options
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);

      {/* group-select */}
      const groupOptions= [
        { value: 'My warehouses', label: 'My warehouses' },
        { value: 'Othaim', label: 'Othaim' },
        { value: 'Noon', label: 'Noon' },
        { value: 'Shogair', label: 'Shogair' },
      ];
            {/* type-select */}
            const typeOptions= [
              { value: 'Pick up', label: 'Pick up' },
              { value: 'Drop off', label: 'Drop off' },
            ];
           {/* city-select */}
           const cityOptions= [
            { value: 'Jeddah ', label: 'Jeddah ' },
            { value: 'Mecca ', label: 'Mecca ' },
            { value: 'Jeddah', label: 'Jeddah' },
            { value: 'Mecca ', label: 'Mecca ' },
          ];       
  return (
    <div>
      <div className="container-fluid p-5 addaddressstyel">
        <div className="head-address">
          <h2 className="text-head">Add new Address</h2>
          <div className="head-address-input">
            <div className="input-choose-group">
              <div className="row">
                <div className="input-select col-6">
                  <div className="input-select-info">
                    <p className="head-text">Choose Group</p>
                    <NavLink to="/Shipments/grouplist">
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
                  isSearchable={isSearchable}
                  name="color"
                  options={groupOptions}
                />
                </div>
                <div className="col-6  mt-auto  mb-auto text-center btn-side">
                  <NavLink to="/Shipments/addnewgroup">
                    <button className="btn btn-adress">+ Add new group</button>
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
            <input type="text" className="input" placeholder="Name" />
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
                  isSearchable={isSearchable}
                  name="color"
                  options={typeOptions}
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
                  isRtl={isRtl}
                  isSearchable={isSearchable}
                  name="color"
                  options={cityOptions}
                />
          </div>
          <div className="address-input w-100 mb-5">
            <div className="row">
              <div className="input-1 col-4 me-5">
                <p className="head-text mb-2">Phone number</p>
                <input
                  type="tel"
                  className="input"
                  placeholder="Phone number"
                />
              </div>
              <div className="input-2 col-4 ms-5">
                <p className="head-text mb-2">Name (Optional)</p>
                <input type="text" className="input" placeholder="Name" />
              </div>
              <div className="input-add col-3 text-center">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="address-input w-100 mb-5">
            <p className="head-text mb-2">Address</p>
            <input
              type="text"
              className="input input-text-area"
              placeholder="Address"
            />
          </div>
        </div>
        <div className="footer-address text-center">
          <button className="btn btn-adress">Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
