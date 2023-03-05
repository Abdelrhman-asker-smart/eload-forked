import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Inputs from "./inputs";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as Dateicon } from "../../icons/date-icon.svg";

import "./Shipments.css";

// const Btnadd =() =>{
//   return(
//     <button className='btn-danger'>Add shippments</button>
//   )
// }

const Shipments = () => {
  const [input, setInputs] = useState([]);
  const date = new Date();
  const [startDate, setStartDate] = useState(date);

  return (
    <div className="container-fluid px-5 shipments">
      <div className="head-shipments">
        <div className="shipments-btns">
          {/* <button className='btn-shipment-up'><i className="fa-solid fa-plus me-3"></i> Add Shipments</button>
          <button  className='btn-shipment-up switch-btn'>Track Shipments</button> */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" for="flexSwitchCheckDefault">
              Switch to planned shipments
            </label>
          </div>
        </div>
      </div>
      <div className="steps-shipments">
        <div className="steps">
          <div className="step active">
            <span>1</span>
            <p>Pick up</p>
          </div>
          <div className="step">
            <span>2</span>
            <p>Drop off</p>
          </div>
          <div className="step">
            <span>3</span>
            <p>Details</p>
          </div>
          <div className="step">
            <span>4</span>
            <p>Notes</p>
          </div>
        </div>
        <hr />
        <div className="input-shipper ">
          <p>
            Shipper<span>*</span>
          </p>
          <select
            className="form-select custom-select"
            aria-label="Default select example"
          >
            <option selected>Select shipper</option>
            <option value="1">Mahmoud Abu zeid</option>
            <option value="2">Abdullah </option>
            <option value="3">Abdullah </option>
            <option value="4">Abdullah </option>
            <option value="5">Abdullah </option>
            <option value="3" className="text-center py-3">
              <div
                className="text-center py-3"
                style={{ color: "red", background: "black" }}
              >
                Add
              </div>
            </option>
          </select>
        </div>
      </div>
      <div className="pick-up box-inputs">
        <div className="box-inputs-head">Pick up</div>
        <div className="inputs row">
          <div className="input input-select col-md-6">
            <label htmlFor="address">
              Pickup Address<span>*</span>
            </label>
            <select className="form-select" aria-label="Default select example">
              {/* <option selected>Select client</option> */}
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">three</option>
            </select>
          </div>
          <div className="input col-md-4">
            <label htmlFor="address">
              Pickup Date<span>*</span>
            </label>

            <DatePicker
              className="date-input position-relative px-5"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="MMMM d, yyyy"
            />
            <Dateicon
              className="position-absolute top-2 left-2"
              style={{ marginTop: "3%", marginLeft: "2%" }}
            />
          </div>
          {/* time-from */}
          <div className="input col-md-3">
            <label htmlFor="address">
              Pickup Time<span>*</span>
            </label>
            <input type="time" />
          </div>
          {/* time-to */}
          <div className="input col-md-3 mt-4">
            <input type="time" value="17:00:00" />
          </div>
          <div className="add-btn">
            <NavLink to="/Shipments/addAddress">
              <button>
                <i className="fa-solid fa-plus me-3"></i> Add New Address
              </button>
            </NavLink>
          </div>
        </div>
        <hr />
      </div>
      <div className="drop-off box-inputs">
        <div className="box-inputs-head">Drop off</div>
        <div className="inputs">
          <div className="input input-select">
            <label htmlFor="address">
              Drop off Address<span>*</span>
            </label>
            <select className="form-select" aria-label="Default select example">
              {/* <option selected>Select shipper</option> */}
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="input mx-3">
            <label htmlFor="address">
              Drop off Time<span>*</span>
            </label>
            <input type="time" value="17:00:00"></input>
          </div>
          <div className="add-btn">
            <NavLink to="/Shipments/addAddress">
              <button>
                <i className="fa-solid fa-plus me-3"></i> Add New Address
              </button>
            </NavLink>
          </div>
        </div>
        <hr />
      </div>
      <div className="details box-inputs mb-4">
        <div className="box-inputs-head">Details</div>
        <Inputs />
        {input.map((item, index) => {
          return (
            <>
              <Inputs />
              <button
                className="btn-delete"
                id="delete"
                onClick={(item) => {
                  const newArr = input.filter((i, j) => {
                    return index !== j;
                  });
                  setInputs(newArr);
                }}
              >
                Delete
              </button>
            </>
          );
        })}
        <div className="control-btn">
          <div className="left-btn">
            <button
              className="btn-add "
              id="add"
              onClick={() => setInputs([...input, ""])}
            >
              <i className="fa-solid fa-plus me-3"></i> Add truck
            </button>
          </div>
          <div className="right-btn">
            <NavLink to="/allshipments">
              <button className="btn-save">Save</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipments;
