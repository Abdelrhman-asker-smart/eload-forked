import React from "react";
import "../AddAddress/addAddress.css";
import { NavLink } from "react-router-dom";

const AddAddress = () => {
  return (
    <div>
      {/*         //  <NavLink

to="/financialrequests"
> */}
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
                        <a href="#">View All</a>
                      </button>
                    </NavLink>
                  </div>
                  <select
                    className="form-select input"
                    aria-label="Default select example"
                    placeholder="Select a group"
                  >
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
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
            <input type="text" className="input" placeholder="Type" />{" "}
            {/* select */}
          </div>
          <div className="address-input w-100 mb-5">
            <p className="head-text mb-2">City</p>
            <input type="text" className="input" placeholder="City" />{" "}
            {/* select */}
          </div>
          <div className="address-input w-100 mb-5">
            <div className="row">
              <div className="input-1 col-4 me-5">
                <p className="head-text mb-2">Phone number</p>
                <input
                  type="text"
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
