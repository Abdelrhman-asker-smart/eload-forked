import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import Select from "react-select";
import { ReactComponent as Vector } from "../../icons/Vector.svg";

import { useParams } from "react-router-dom";
import { fetchCityListByCountry } from "../../redux/CityListSlice";
import { useDispatch, useSelector } from "react-redux";
import { EditItemFunction } from "../../redux/Items/EditItems";
import "./Iteminfo.css";

const EditItem = () => {
  // const { list, status } = useSelector((state) => state.ItemsList);
  const { item, setItem } = useState({});

  const dispatch = useDispatch();
  const [cities, setCities] = useState([]);
  const [groupsTruckOptions, setGroupsTruckOptions] = useState([]);
  const [groupsShipmentOptions, setGroupsShipmentOptions] = useState([]);

  const { id } = useParams();
  const [cookie] = useCookies(["eload_token"]);
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

  // selects_list
  const [countryList, setCountryList] = useState([]);
  const [truckList, setTruckList] = useState([]);
  const [shipmentList, setShipmentList] = useState([]);

  useEffect(() => {
    // console.log(id,"id-----");
    const ItemsFetch = async (id) => {
      try {
        const response = await axios.get(
          `https://dev.eload.smart.sa/api/v1/contract_items/${id}`,
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
        // console.log(data,"itemfromAPiiiiiiiiiiii");
        // setItem(data);

        setSource(data.from_city_id);
        setDestination(data.to_city_id);
        setTruckType(data.truck_type_id);
        setShipmentType(data.shipment_type_id);
        setPrice(data.price);
        // console.log(data.price,"price");
        // console.log(data.truck_type.name,"truck");

        return data;
      } catch (e) {
        // console.log(e);
      }
    };

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

        // shipmentoptions
        let groupsShipmentOptionsData = data.map((item) => ({
          label: item.name,
          value: item.id,
        }));

        setGroupsShipmentOptions(groupsShipmentOptionsData);
      } catch (e) {
        // console.log(e);
      }
    };
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

        // truckoptions
        let groupsTruckOptionsData = data.map((item) => ({
          label: item.name,
          value: item.id,
        }));

        setGroupsTruckOptions(groupsTruckOptionsData);
      } catch (e) {
        // console.log(e);
      }
    };

    ItemsFetch(id);
    Shipmentlist();
    Trucklist();

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

  const edit = () => {
    const formdata = new FormData();

    formdata.append("_method", "put");
    formdata.append("from_city_id", source);
    formdata.append("to_city_id", destination);
    formdata.append("truck_type_id", truckType);
    formdata.append("shipment_type_id", shipmentType);
    formdata.append("price", price);

    // console.log("editDone");
    dispatch(
      EditItemFunction({
        token: cookie.eload_token,
        id,
        formdata,
      })
    )
      .then((res) => {
        // console.log(res);
        alert("Successfully Saved!");
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const handleSelectedOptionsCities = (city_id) => {
    for (let i = 0; i < cities.length; i++) {
      for (let city of cities[i].options) {
        if (city_id == city.value) {
          return city;
        }
      }
    }

    return {};
  };
  return (
    <div className="container-fluid iteminfo p-5">
      <h3>ITEM INFORMATION</h3>

      {/* name+email */}
      <div className="row my-4 iteminfo">
        <div className="col-md-2">
          <label className="my-2 d-block">Source</label>
          {cities.length > 0 && source && (
            <Select
              classNamePrefix="select"
              className="basic-multi-select"
              // isMulti
              isDisabled={isDisabled}
              isLoading={isLoading}
              isClearable={isClearable}
              defaultValue={handleSelectedOptionsCities(source)}
              isRtl={isRtl}
              isSearchable={isSearchable}
              name="source"
              options={cities}
              onChange={(choice) => setSource(choice.value)}
            />
          )}
        </div>
        <div className="col-md-2">
          <label className="my-2 d-block ">Destination</label>
          {cities.length > 0 && destination && (
            <Select
              classNamePrefix="select"
              className="basic-multi-select"
              // isMulti
              isDisabled={isDisabled}
              isLoading={isLoading}
              isClearable={isClearable}
              defaultValue={handleSelectedOptionsCities(destination)}
              isRtl={isRtl}
              isSearchable={isSearchable}
              name="destination"
              options={cities}
              onChange={(choice) => setDestination(choice.value)}
            />
          )}
        </div>
        <div className="col-md-2">
          <label className="my-2 d-block ">Truck Type</label>
          {groupsTruckOptions.length > 0 && truckType && (
            <Select
              classNamePrefix="select"
              className="basic-multi-select"
              // isMulti
              isDisabled={isDisabled}
              isLoading={isLoading}
              isClearable={isClearable}
              isRtl={isRtl}
              isSearchable={isSearchable}
              name="truck"
              options={groupsTruckOptions}
              defaultValue={groupsTruckOptions.find(
                ({ value }) => value === truckType
              )}
              onChange={(choice) => setTruckType(choice.value)}
            />
          )}
        </div>
        {/* <div className="col-md-3 d-flex align-items-center"> */}
        <div className=" col-md-2 truck">
          <label className="my-2 d-block ">Shipment type</label>
          {groupsShipmentOptions.length > 0 && shipmentType && (
            <Select
              classNamePrefix="select"
              className="basic-multi-select"
              // isMulti
              isDisabled={isDisabled}
              isLoading={isLoading}
              isClearable={isClearable}
              isRtl={isRtl}
              isSearchable={isSearchable}
              name="shipment"
              options={groupsShipmentOptions}
              defaultValue={groupsShipmentOptions.find(
                ({ value }) => value === shipmentType
              )}
              onChange={(choice) => setShipmentType(choice.value)}
            />
          )}
        </div>
        {/* price */}
        <div className=" col-md-2 truck">
          <label className="my-2 d-block ">Price</label>
          {/* <span>{price}</span> */}
          <input
            className="input-box small-input px-2"
            type="number"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            placeholder="price"
          />
        </div>
        {/* </div> */}
      </div>
      <button className="btn-save my-5" onClick={edit}>
        SAVE
      </button>
    </div>
  );
};

export default EditItem;
