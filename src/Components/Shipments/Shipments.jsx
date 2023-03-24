import React, { CSSProperties } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import Inputs from "./inputs";
import DatePicker from "react-datepicker";
// import  $  from 'jquery';
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as Dateicon } from "../../icons/date-icon.svg";
import Select from "react-select";
import moment from "moment";
import "./Shipments.css";
import { useContext } from "react";
import { ContextStore } from "../contaxt";
// import { array } from "joi";

const Btnadd = () => {
  return (
    <NavLink to="/addshippers">
      <button
        className="p-2"
        style={{
          border: "0",
          borderRadius: "20px",
          backgroundColor: "#0B2339",
          color: "#fff",
          marginLeft: "35%",
        }}
      >
        Add New Shipper
      </button>
    </NavLink>
  );
};

const Shipments = () => {
  const { setList } = useContext(ContextStore);
  // checked-btn-steps
  const [ischeck, setIsChecked] = useState(false);

  const [cookie] = useCookies(["eload_token"]);

  // console.log(userChoice);
  const [isACtive, setIsActive] = useState({
    pickup: false,
    dropoff: false,
    details: false,
  });

  const tabPickup = () => {
    setIsActive({ pickup: true, dropoff: false, details: false });
  };
  const tabdropoff = () => {
    setIsActive({ pickup: false, dropoff: true, details: false });
  };
  const tabdetails = () => {
    setIsActive({ pickup: false, dropoff: false, details: true });
  };

  // select
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const [input, setInputs] = useState([]);
  // const date = new Date();
  const [startDate, setStartDate] = useState(null);

  // ====================================shipments-states============================================

  const [shipperList, setShipperList] = useState([]);
  const [pickupList, setPickupList] = useState([]);
  const [dropofList, setDropofList] = useState([]);
  const [detailsList, setDetailsList] = useState([]);

  const [shipperuserChoice, setShipperUserChoice] = useState();
  const [pickupuserChoice, setpickupUserChoice] = useState();
  const [dropoffserChoice, setdropoffUserChoice] = useState();

  // state-add
  const [shipperValue, setShipperValue] = useState("");
  // pickup-chooses
  const [pickupValue, setPickupValue] = useState("");
  const [pickup_DateValue, setPickup_DateValue] = useState("");
  const [pickup_TimeFromValue, setPickup_TimeFromValue] = useState("");
  const [pickup_TimeToValue, setPickup_TimeToValue] = useState("");
  // dropoff-chooses
  const [dropoffValue, setDropoffValue] = useState("");

  const [dropoff_TimeFromValue, setDrop_TimeFromValue] = useState("");
  const [dropoff_TimeToValue, setDrop_TimeToValue] = useState("");

  // details
  // const [truckTypeValue, setTruckTypeValue] = useState("");
  // const [shipmentTypeValue, setshipmentTypeValue] = useState("");
  // const [weightValue, setWeightValue] = useState("");
  // const [number_TrucksValue, setNumber_TrucksValue] = useState("");
  // const [picking_ListValue, setPicking_ListValue] = useState("");
  // const [Documents_ListValue, setDocments_ListValue] = useState("");
  // const [commodityTypeValue, setCommodityTypeValue] = useState("");
  // const [uomValue, setUomValue] = useState("");
  // const [quantityValue, setQuantityValue] = useState("");

  // pickup-Api
  const pickupListApi = async (shipper_id) => {
    console.log(shipper_id, "triggered");
    try {
      const response = await axios.get(
        `https://dev.eload.smart.sa/api/v1/orders/request/prepare?shipper_id=${shipper_id}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${cookie.eload_token}`,
            "api-key":
              "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
          },
        }
      );
      const data = response.data.data;
      console.log(data, "pickup");
      setPickupList(data);
      // console.log(pickupList, "pickup list hereeee");
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  //dropoff_Api
  const droppofflist = async (shipper_id, id_pickup) => {
    console.log(shipper_id, "shiperiddddddddddddddddddd");
    console.log(id_pickup, "pickupiddddddddddddddddddd");

    try {
      const response = await axios.get(
        `https://dev.eload.smart.sa/api/v1/orders/request/prepare?shipper_id=${shipper_id}&from_address_id=${id_pickup}`,

        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${cookie.eload_token}`,

            "api-key":
              "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
          },
        }
      );

      const data = response.data.data;
      console.log(data, "drop-off done");
      // console.log(data[0].id, "drop-off-id");

      setDropofList(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  // details
  const detailsApi = async (shipper_id, id_pickup, id_dropoff) => {
    console.log(shipper_id, "shiperiddddddddddddddddddd");
    console.log(id_pickup, "pickupiddddddddddddddddddd");
    console.log(id_dropoff, "dropoffiddddddddddddddddddd");

    try {
      const response = await axios.get(
        `https://dev.eload.smart.sa/api/v1/orders/request/prepare?shipper_id=${shipper_id}&from_address_id=${id_pickup}&to_address_id=${id_dropoff}`,

        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${cookie.eload_token}`,

            "api-key":
              "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
          },
        }
      );

      const data = response.data.data;
      console.log(data, "details doneeeeeeeeeeeeeeee");

      setDetailsList(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  // pickup-group
  const GroupspickupOptions = pickupList.map((item, index) => ({
    label: item.name,
    options: item.addresses.map((sub_item, index) => ({
      value: sub_item.id,
      label: sub_item.name,
    })),
  }));
  // dropoff-group
  const GroupsdropoffOptions = dropofList.map((item, index) => ({
    label: item.name,
    options: item.addresses.map((sub_item, index) => ({
      value: sub_item.id,
      label: sub_item.name,
    })),
  }));

  // select-pickup
  useEffect(() => {
    if (pickupList.length > 0) {
      // const optionsPickup = [
      //   pickupList.map((item, index) => {
      //     item.addresses.map((item_ad, index) => {
      //       console.log(item_ad, "items");
      //         return {
      //           value: item_ad.id,
      //           label: item_ad.name,
      //         };

      //     });
      //   }),
      // ];
      // const newArray = [];
      // const optionsPickup = [
      //   pickupList.map((item, index) => {
      //     item.addresses.map((item_ad, i) => {
      //       console.log(item_ad, "items");
      //       // const smallItem = {
      //       //   value: item_ad.id,
      //       //   label: item_ad.name,
      //       // };
      //       newArray.push(item_ad);
      //       // return {
      //       //   value: item_ad.id,
      //       //   label: item_ad.name,
      //       // };
      //       return newArray;
      //     });
      //   }),
      // ];
      // console.log(newArray, "newArray");
      // let address = [];
      const GroupspickupOptions2 = pickupList.map((item, index) => ({
        label: item.name,
        options: item.addresses.map((sub_item, index) => ({
          value: sub_item.id,
          label: sub_item.name,
        })),
      }));
    }
  }, [pickupList]);

  // Shipper-Api
  useEffect(() => {
    // all-shipper
    const allshipper = async () => {
      try {
        const response = await axios.get(
          "https://dev.eload.smart.sa/api/v1/shippers",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${cookie.eload_token}`,

              "api-key":
                "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
            },
          }
        );
        const data = response.data.data;
        console.log(data);
        setShipperList(data);

        return data;
      } catch (e) {
        console.log(e);
      }
    };

    allshipper();
    // pickuplist();
    // droppofflist();
  }, []);

  // shipperoptions

  const shipperOptions = shipperList.map((item, index) => {
    return {
      value: item.id,
      label: item.name,
    };
  });

  // new Array(5).fill(1).map((item , index)=>{
  //   console.log(index, "index");
  // })




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
              onChange={() => setIsChecked(!ischeck)}
            />
            <label
              className="form-check-label my-1 position-relative"
              htmlFor="flexSwitchCheckDefault"
              style={{ fontWeight: "500" }}
            >
              Switch to planned shipments{" "}
              <span style={{ color: "red", fontWeight: "500" }}>?</span>
            </label>
            <p className="position-absolute notegray">
              * you can choose many shipments{" "}
            </p>
          </div>
          {ischeck && (
            <div className="steps">
              {/* <stepsShipments/> */}
              <div className="row">
                <hr
                  className="position-relative"
                  style={{
                    width: "60%",
                    marginLeft: "18%",
                    backgroundColor: "#0B2339",
                    border: "none",
                    opacity: "1",
                    height: "4px",
                  }}
                />
                <div className="col-md-4">
                  <div
                    className="line-active position-absolute"
                    style={{
                      width: "196px",
                      top: "145.1px",
                      right: "45rem",
                      height: "6px",
                      backgroundColor: "#CBFF39",
                    }}
                  ></div>
                  <div
                    className="step1 d-block position-absolute  step-active"
                    style={{ top: "130px", right: "50rem" }}
                  >
                    <label>1</label>
                  </div>

                  <p
                    className="my-2"
                    style={{ marginLeft: "14.5rem", fontWeight: "400" }}
                  >
                    shipment 1
                  </p>
                </div>
                <div className="col-md-4">
                  <div
                    className="step1 d-block position-absolute shipmentnormal"
                    style={{
                      top: "130px",
                      right: "37rem",
                      color: "#fff",
                      background: "#0B2339",
                      fontWeight: "500",
                      padding: "5px 13px",
                      borderRadius: "50px",
                    }}
                  >
                    <label>2</label>
                  </div>
                  <p
                    className="my-2"
                    style={{ marginLeft: "5.5rem", fontWeight: "400" }}
                  >
                    shipment 2
                  </p>
                </div>
                <div className="col-md-4">
                  <div
                    className="step1 d-block position-absolute shipmentnormal"
                    style={{
                      top: "130px",
                      right: "22rem",
                      color: "#fff",
                      background: "#0B2339",
                      fontWeight: "500",
                      padding: "5px 13px",
                      borderRadius: "50px",
                    }}
                  >
                    <label>3</label>
                  </div>
                  <p
                    className="my-2"
                    style={{ marginLeft: "-1.5rem", fontWeight: "400" }}
                  >
                    shipment 3
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="steps-shipments">
        <div className="steps">
          <div
            className={isACtive.pickup ? "step pickup active" : "step pickup"}
          >
            <span>1</span>
            <p style={{ fontWeight: "400" }}>Pick up</p>
          </div>
          <div
            className={
              isACtive.dropoff ? "step dropoff active" : "step dropoff"
            }
          >
            <span>2</span>
            <p style={{ fontWeight: "400" }}>Drop off</p>
          </div>
          <div
            className={
              isACtive.details ? "step details active" : "step details"
            }
          >
            <span>3</span>
            <p style={{ fontWeight: "400" }}>Details</p>
          </div>
          <div className="step notes ">
            <span>4</span>
            <p style={{ fontWeight: "400" }}>Notes</p>
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
            onChange={(choice) => {
              pickupListApi(choice.value);
              setShipperUserChoice(choice.value);
              setShipperValue(choice.value);
            }}
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
              options={GroupspickupOptions}
              onChange={(choice) => {
                // console.log(shipperuserChoice, "shipper id here");
                // console.log(choice.value, "pickup id here");
                setpickupUserChoice(choice.value);
                droppofflist(shipperuserChoice, choice.value);
                setPickupValue(choice.value);
              }}
              // userChoice
            />
          </div>
          <div className="input col-md-4">
            <label htmlFor="address">
              Pickup Date<span>*</span>
            </label>

            <DatePicker
              className="date-input position-relative px-5"
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setPickup_DateValue(date);
              }}
              placeholderText={"dd/mm/yyyy"}
              // filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
              minDate={moment().toDate()}
              showYearDropdown // year show and scrolldown alos
              scrollableYearDropdown
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
            <input
              type="time"
              onChange={(v) => setPickup_TimeFromValue(v.target.value)}
            />
           
          </div>
          {/* time-to */}
          <div className="input col-md-3 mt-4">
            <input
              type="time"
              onChange={(v) => setPickup_TimeToValue(v.target.value)}
            />
           
          </div>
          <div className="add-btn">
            <NavLink to="/Shipments/addAddress">
              <button>
                <i className="fa-solid fa-plus"></i> Add New Address
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
              options={GroupsdropoffOptions}
              onChange={(choice) => {
                setdropoffUserChoice(choice.value);
                detailsApi(shipperuserChoice, pickupuserChoice, choice.value);
                setDropoffValue(choice.value);
              }}
            />
          </div>
          <div className="input mx-3">
            <label htmlFor="address">
              Drop off Time<span>*</span>
            </label>
            <input
              type="time"
              onChange={(v) => setDrop_TimeFromValue(v.target.value)}
            />
            {/* onChange={()=>setDrop_TimeFromValue()} */}
          </div>
          <div className="input mx-3 mt-4">
            <input
              type="time"
              onChange={(v) => setDrop_TimeToValue(v.target.value)}
            />
            {/* onChange={()=>setDrop_TimeToValue()} */}
          </div>
          <div className="add-btn">
            <NavLink to="/Shipments/addAddress">
              <button>
                <i className="fa-solid fa-plus"></i> Add New Address
              </button>
            </NavLink>
          </div>
        </div>
        <hr />
      </div>
      <div className="details box-inputs mb-4" onClick={tabdetails}>
        <div className="box-inputs-head">Details</div>

        <Inputs
          shipperuserChoice={shipperuserChoice}
          pickupuserChoice={pickupuserChoice}
          detailsApi={detailsApi}
          detailsList={detailsList}
          dropoffserChoice={dropoffserChoice}
          pickup_DateValue={pickup_DateValue}
          pickup_TimeFromValue={pickup_TimeFromValue}
          pickup_TimeToValue={pickup_TimeToValue}
          dropoff_TimeFromValue={dropoff_TimeFromValue}
          dropoff_TimeToValue={dropoff_TimeToValue}
          input={input}
        />
        {input.map((item, index) => {
          return (
            <>
              <Inputs
                shipperuserChoice={shipperuserChoice}
                pickupuserChoice={pickupuserChoice}
                detailsApi={detailsApi}
                detailsList={detailsList}
                dropoffserChoice={dropoffserChoice}
                pickup_DateValue={pickup_DateValue}
                pickup_TimeFromValue={pickup_TimeFromValue}
                pickup_TimeToValue={pickup_TimeToValue}
                dropoff_TimeFromValue={dropoff_TimeFromValue}
                dropoff_TimeToValue={dropoff_TimeToValue}
                input={input}
              />
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
              <i className="fa-solid fa-plus"></i> Add truck
            </button>
          </div>
          <div className="right-btn">
            <button
              className="btn-save"
              onClick={() => {
                setList(Math.random()*234567);
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipments;
