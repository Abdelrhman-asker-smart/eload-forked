import React from "react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as Dateicon } from "../../icons/date-icon.svg";
import { ReactComponent as Vector } from "../../icons/Vector.svg";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { fetchitemsList } from "../../redux/Items/ItemsList";
import { fetchCityListByCountry } from "../../redux/CityListSlice";
import { fetchPromotionList } from "../../redux/listPromotion";
import { fetchTruckList } from "../../redux/listTruck";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";

import "./Iteminfo.css";

const Iteminfo = () => {
  const navigate = useNavigate();

  const [cookie] = useCookies(["eload_token"]);
  const dispatch = useDispatch();
  const { id } = useParams();

  // const [truck_types, setTruckTypes] = useState([]);
  const [cities, setCities] = useState([]);

  const showNotification = () => {
    // e.preventDefault();

    let Msg = ({ closeToast, toastProps }) => (
      <div>
        <h4>Success</h4>
      </div>
    );

    toast(<Msg />, { autoClose: 3000 });
  };
  // /allitems/${id}

  // select-options
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  // States================================
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [truckType, setTruckType] = useState("");
  const [shipmentType, setShipmentType] = useState("");
  const [price, setPrice] = useState("");

  // country_list
  const [countryList, setCountryList] = useState([]);
  const [truckList, setTruckList] = useState([]);
  const [shipmentList, setShipmentList] = useState([]);

  // Api-post==========================
  const apiAddItems = async (e) => {
    // // console.log(id,"iddddddddd");
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("contract_id", id);
    formdata.append("from_city_id", source);
    formdata.append("to_city_id", destination);
    formdata.append("truck_type_id", truckType);
    formdata.append("shipment_type_id", shipmentType);
    formdata.append("price", price);

    try {
      const reponse = await axios.post(
        "https://dev.eload.smart.sa/api/v1/contract_items",
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
      // // console.log("DoneAdddddddddddd");

      showNotification();
      navigate(`/allitems/${id}`);
    } catch (e) {
      // console.log(e);
    }
  };

  // Api-fetch-Country================
  useEffect(() => {
    const Countrylist = async () => {
      try {
        const response = await axios.get(
          "https://dev.eload.smart.sa/api/v1/countries/194?cities=1",

          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${cookie.eload_token}`,

              "api-key":
                "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
            },
          }
        );

        const data = response.data.data.data.states;

        setCountryList(data);
        // // console.log(data, "datacountry");
        return data;
      } catch (e) {
        // console.log(e);
      }
    };
    Countrylist();

    dispatch(fetchCityListByCountry({ token: cookie.eload_token }))
      .then((cities_res) => {
        let data = cities_res.payload.data.data.states.map((object) => ({
          label: object.name,
          options: object.cities.map((sub_object) => ({
            value: sub_object.id,
            label: sub_object.name,
          })),
        }));
        setCities(data);
      })
      .catch((e) => {
        // console.log(e);
      });
  }, []);
  // Api-fetch-truck
  useEffect(() => {
    const Trucklist = async () => {
      try {
        const response = await axios.get(
          "https://dev.eload.smart.sa/api/v1/truck_types",

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

        setTruckList(data);
        // console.log(data, "dataTruck");
        return data;
      } catch (e) {
        // console.log(e);
      }
    };
    Trucklist();
  }, []);
  // Api-fetch-shipment
  useEffect(() => {
    const Shipmentlist = async () => {
      try {
        const response = await axios.get(
          "https://dev.eload.smart.sa/api/v1/shipment_types",

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

        setShipmentList(data);
        // console.log(data, "datashipment");
        return data;
      } catch (e) {
        // console.log(e);
      }
    };
    Shipmentlist();
  }, []);

  // truckoptions
  const GroupsTruckOptions = truckList.map((item, index) => ({
    label: item.name,
    value: item.id,
  }));
  // truckoptions
  const GroupsShipmentOptions = shipmentList.map((item, index) => ({
    label: item.name,
    value: item.id,
  }));

  return (
    <div className="container-fluid iteminfo p-5">
      <h3>ITEM INFORMATION</h3>
      <form onSubmit={apiAddItems}>
        {/* name+email */}
        <div className="row my-4 iteminfo">
          <div className="col-md-2">
            <label className="my-2 d-block">Source </label>
            <Select
              classNamePrefix="select"
              className="basic-multi-select"
              isMulti={false}
              isDisabled={false}
              isLoading={false}
              isClearable={false}
              isRtl={false}
              isSearchable={true}
              name="source"
              options={cities}
              onChange={(choice) => setSource(choice.value)}
            />
          </div>
          <div className="col-md-2">
            <label className="my-2 d-block ">Destination</label>
            <Select
              classNamePrefix="select"
              className="basic-multi-select"
              isMulti={false}
              isDisabled={false}
              isLoading={false}
              isClearable={false}
              isRtl={false}
              isSearchable={true}
              name="destination"
              options={cities}
              onChange={(choice) => setDestination(choice.value)}
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
              required
              isClearable={isClearable}
              isRtl={isRtl}
              isSearchable={isSearchable}
              name="truck"
              options={GroupsTruckOptions}
              onChange={(choice) => {
                setTruckType(choice.value);
              }}
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
              required
              isSearchable={isSearchable}
              name="shipment"
              options={GroupsShipmentOptions}
              onChange={(choice) => {
                setShipmentType(choice.value);
              }}
            />
          </div>
          {/* price */}
          <div className=" col-md-2 truck">
            <label className="my-2 d-block ">Price</label>
            <input
              className="input-box small-input px-2"
              type="number"
              placeholder="price"
              required
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          {/* </div> */}
        </div>
        <button className="btn-save my-5">SAVE</button>
      </form>
    </div>
  );
};

export default Iteminfo;
