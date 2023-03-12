import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Inputs from "./inputs";
import DatePicker from "react-datepicker";
// import  $  from 'jquery';
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as Dateicon } from "../../icons/date-icon.svg";
import Select from 'react-select';
import "./Shipments.css";
// trucks
// import  {ReactComponent as Truck1} from '../../icons/Vector.svg';



const Btnadd =() =>{
  return(
    <NavLink to="/addshippers">
    <button className='p-2' style={{border:"0",borderRadius:"20px", backgroundColor:"#0B2339", color:"#fff", marginLeft:"35%"}}>Add New Shipper</button>
    </NavLink>
  )
}

const Shipments = () => {

  const [isACtive, setIsActive] = useState({ pickup: false, dropoff: false, details: false });

  const tabPickup = () => {
    setIsActive({ pickup: true, dropoff: false, details: false })
  }
  const tabdropoff = () => {
    setIsActive({ pickup: false, dropoff: true, details: false })
  }
  const tabdetails = () => {
    setIsActive({ pickup: false, dropoff: false, details: true })
  } 



  const [input, setInputs] = useState([]);
  const date = new Date();
  const [startDate, setStartDate] = useState(date);

  // checked-btn-steps
  const [ischeck , setIsChecked] = useState(false);
  console.log(ischeck);

  // select-options
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  {/* shipper-select */}
   const shipperOptions= [
    { value: 'Reham', label: 'Reham' },
    { value: 'Eman', label: 'Eman' },
    { value: 'Mahmoud Abu zeid', label: 'Mahmoud Abu zeid' },
    { value: 'Abdullah ', label: 'Abdullah ' },
    { value: 'Loqman ELgrahy ', label: 'Loqman ELgrahy ' },
    { value: 'btnadd', label: <Btnadd/> },
  ];
    {/* pickup-select */}
    const pickupOptions= [
      { value: 'Riyadh Whse', label: 'Riyadh Whse' },
      { value: 'My Main Whse', label: 'My Main Whse' },
      { value: 'MJeddah', label: 'Jeddah' },
      { value: 'Abdullah ', label: 'Abdullah ' },
    ];
    {/* drop-select */}
    const dropOptions= [
        { value: 'My Warehouses', label: 'My Warehouses', isDisabled: true  },
        { value: 'Riyadh Whse', label: 'Riyadh Whse' },
        { value: 'My Main Whse', label: 'My Main Whse' },
        { value: 'Abuzaid ', label: 'Abuzaid ' },
        { value: 'Othaim', label: 'Othaim', isDisabled: true  },
        { value: 'Noon', label: 'Noon', isDisabled: true  },
    ];
    {/* truck-select */}
    const truckOptions= [
      { value: 'Container', label: "<Truck1/>Container" },
      { value: 'Flatbed', label: 'Riyadh Whse' },
      { value: 'Dry Van', label: 'My Main Whse' },
      { value: 'Lowboy trailer', label: 'Abuzaid ' },
    ];    

  return (
    <div className="container-fluid px-5 shipments">
      <div className="head-shipments">
        <div className="shipments-btns d-block">
          <div className="form-check form-switch d-flex justify-content-center my-4">
            <input
              className="form-check-input"
              type="checkbox"
              value={ischeck}
              id="flexSwitchCheckDefault"
              onChange={()=>setIsChecked( !ischeck)}
            />
            <label className="form-check-label my-1" htmlFor="flexSwitchCheckDefault" style={{fontWeight:"500"}}>
              Switch to planned shipments <span style={{color:"red" , fontWeight:"500"}}>?</span>
            </label>
          </div>
                {ischeck &&
                    <div className="steps">
                    {/* <stepsShipments/> */}
                    <div className="row">
                      <hr className="position-relative" style={{width: "60%",marginLeft: "18%", backgroundColor:"#0B2339",border:"none",opacity:"1", height:"4px"}}/>
                      <div className="col-md-4">
                            <div className="line-active position-absolute" style={{width: "196px",
                            top: "145.1px",
                            right: "45rem",
                            height: "6px",
                            backgroundColor: "#CBFF39",}}></div>
                            <div className="step1 d-block position-absolute  step-active" style={{ top:"130px",
                                right: "50rem",
                              }}>
                                <label >1</label>
                            </div>
                     
        
                        <p className="my-2" style={{marginLeft: "14.5rem",fontWeight: "400"}}>shipment 1</p>
                      </div>
                      <div className="col-md-4">
                        <div className="step1 d-block position-absolute shipmentnormal" style={{ top:"130px",
                            right: "37rem",
                            color: "#fff",
                            background: "#0B2339",
                            fontWeight: "500",
                            padding: "5px 13px",
                            borderRadius: "50px",
                          }}>
                            <label >2</label>
                        </div>
                        <p className="my-2" style={{marginLeft: "5.5rem",fontWeight: "400"}}>shipment 2</p>
                      </div>
                      <div className="col-md-4">
                        <div className="step1 d-block position-absolute shipmentnormal" style={{ top:"130px",
                            right: "22rem",
                            color: "#fff",
                            background: "#0B2339",
                            fontWeight: "500",
                            padding: "5px 13px",
                            borderRadius: "50px",
                          }}>
                            <label>3</label>
                        </div>
                        <p className="my-2" style={{marginLeft: "-1.5rem",fontWeight: "400"}}>shipment 3</p>
                      </div>
                    </div>
                  </div> 
                }

        </div>
      </div>
      <div className="steps-shipments">
        <div className="steps">
          <div className={isACtive.pickup ? "step pickup active" : "step pickup"} >
            <span>1</span>
            <p style={{fontWeight:"400"}}>Pick up</p>
          </div>
          <div  className={isACtive.dropoff ? "step dropoff active" : "step dropoff"}>
            <span>2</span>
            <p style={{fontWeight:"400"}}>Drop off</p>
          </div>
          <div className={isACtive.details ? "step details active" : "step details"}>
            <span>3</span>
            <p style={{fontWeight:"400"}}>Details</p>
          </div>
          <div className="step notes ">
            <span>4</span>
            <p style={{fontWeight:"400"}}>Notes</p>
          </div>
        </div>
        <hr />
        <div className="input-shipper ">
          <p>
            Shipper<span>*</span>
          </p>
          {/* shipper-select */}
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
          options={shipperOptions}
        />

        </div>
      </div>
      <div className="pick-up box-inputs" onClick={tabPickup}>
        <div className="box-inputs-head">Pick up</div>
        <div className="inputs row">
          <div className="input input-select col-md-6">
            <label htmlFor="address">
              Pickup Address<span>*</span>
            </label>
            {/* pickup-Address */}
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
            options={pickupOptions}
          />
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
            <input type="time"  />
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
            className="basic-multi-select"
            // isMulti
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            name="color"
            options={dropOptions}
          />
          </div>
          <div className="input mx-3">
            <label htmlFor="address">
              Drop off Time<span>*</span>
            </label>
            <input type="time"></input>
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
      <div className="details box-inputs mb-4" onClick={tabdetails}>
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
