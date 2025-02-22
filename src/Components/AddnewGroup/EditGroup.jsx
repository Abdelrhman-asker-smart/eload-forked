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
import { EditgroupFunction } from "../../redux/Editgroup";
import "./addnewgroup.css";

const EditGroup = () => {
  const dispatch = useDispatch();
  const { id, idshipper } = useParams();
  const [cookie] = useCookies(["eload_token"]);
  // select-options
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  // States================================
  const [name, setName] = useState("");

  useEffect(() => {
    // // console.log(id, "id-----");
    const ItemsFetch = async (id) => {
      try {
        const response = await axios.get(
          `https://dev.eload.smart.sa/api/v1/groups/${id}`,
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
        // // console.log(data, "itemfromAPiiiiiiiiiiii");
        setName(data.name);

        return data;
      } catch (e) {
        // console.log(e);
      }
    };

    ItemsFetch(id);
  }, []);

  //   // console.log(name,"name");

  const edit = () => {
    const urlencoded = new URLSearchParams();
    urlencoded.append("_method", "put");
    urlencoded.append("name", name);
    urlencoded.append("shipper_id", idshipper);

    // // console.log("editDone");
    dispatch(
      EditgroupFunction({
        token: cookie.eload_token,
        id,
        urlencoded,
      })
    )
      .then((res) => {
        // // console.log(res);
        alert("Successfully Saved!");
      })
      .catch((e) => {
        // console.log(e);
      });
  };
  return (
    <div className="newgroup px-3">
      <div className="container-fluid">
        <div className="header-newgroup">
          <h2>Edit group</h2>

          <button>
            <NavLink to={`/Shipments/grouplist/${idshipper}`}>
              <p className="linkview">View All</p>
            </NavLink>
          </button>
        </div>
        <form>
          <div className="content-newgroup">
            <p>Name</p>
            <input
              type="text"
              name="Name"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            {name.length < 1 && (
              <h5 className="error">please type your name</h5>
            )}
          </div>
          <div className="footer-newgroup text-center">
            <button
              className="btn btn-newgroup"
              type="button"
              // data-bs-toggle="modal"
              // href="#exampleModalToggle"
              onClick={edit}
            >
              Save
            </button>
          </div>
        </form>

        {/* modal */}
        <div
          className="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content"
              style={{ borderRadius: "25px", width: "80%" }}
            >
              <div className="modal-header border-0 justify-content-end">
                <NavLink to="/Shipments/grouplist">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </NavLink>
              </div>
              <div
                className="modal-body d-flex text-center "
                style={{ marginLeft: "15%", marginTop: "-25px" }}
              >
                <h3
                  className="my-4 mx-4"
                  style={{ fontSize: "50px", fontWeight: "500" }}
                >
                  Save
                </h3>
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 105 105"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M70.8313 8.75H34.1687C18.2437 8.75 8.75 18.2437 8.75 34.1687V70.7875C8.75 86.7562 18.2437 96.25 34.1687 96.25H70.7875C86.7125 96.25 96.2062 86.7563 96.2062 70.8313V34.1687C96.25 18.2437 86.7563 8.75 70.8313 8.75ZM73.4125 42.4375L48.6062 67.2437C47.9937 67.8563 47.1625 68.2062 46.2875 68.2062C45.4125 68.2062 44.5812 67.8563 43.9688 67.2437L31.5875 54.8625C30.3187 53.5938 30.3187 51.4937 31.5875 50.225C32.8562 48.9562 34.9562 48.9562 36.225 50.225L46.2875 60.2875L68.775 37.8C70.0438 36.5313 72.1438 36.5313 73.4125 37.8C74.6813 39.0688 74.6813 41.125 73.4125 42.4375Z"
                    fill="#CBFF39"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditGroup;
