import React from "react";
import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState } from "react";
import axios from "axios";
import "./AddMeasurements.css";

const AddMeasurements = () => {
  const [name, setName] = useState("");
  const [cookie] = useCookies(["eload_token"]);
  console.log(name, "name");
  const urlencoded = new URLSearchParams();
  urlencoded.append("name", name);

  const recordCategory = async () => {
    console.log("save triggered");
    try {
      const reponse = await axios.post(
        "https://dev.eload.smart.sa/api/v1/uom",
        urlencoded,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${cookie.eload_token}`,
            "api-key":
              "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
          },
        }
      );
      //   if(reponse.data.data.is_success){
      //     setName("")
      //     console.log('logged in')
      //   }
      setName("");
      //   console.log(reponse);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="addmeasurments container my-4">
      <div className="head container-fluid mb-4 d-flex">
        <div className="side-left">
          <div className="box-text">
            <h2>Add new unit measurement</h2>
          </div>
        </div>
        <div className="box-right">
          <div className="link-view">
            <NavLink to="/measurements">
              <p className="linkview">View All</p>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container-fluid input-section">
        <div className="row">
          <div className="col-md-12">
            <label className="mx-3 my-3">Name</label>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="btn-side text-center my-5">
          <button
            className="btn save-btn"
            data-bs-toggle="modal"
            href="#exampleModalToggle"
          >
            Save
          </button>
        </div>

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
                <NavLink to="/measurements">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={recordCategory}
                  ></button>
                </NavLink>
              </div>
              <div
                className="modal-body d-flex text-center my-3 "
                style={{ marginLeft: "12%" }}
              >
                <h3
                  className="my-4 mx-4"
                  style={{ fontSize: "40px", fontWeight: "500" }}
                >
                  Save
                </h3>
                <svg
                  width="105"
                  height="105"
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

export default AddMeasurements;
