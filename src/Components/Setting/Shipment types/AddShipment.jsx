import React from "react";
import { NavLink } from "react-router-dom";
import "./AddShipment.css";
import { useEffect, useState } from "react";
import axios from "axios";

const AddShipment = () => {
  // const [shipmentList, setShipmentList] = useState([]);
  const [name, setName] = useState("");
  console.log(name, "name");
  const urlencoded = new URLSearchParams();
  urlencoded.append("name", name);

  const recordShippment = async () => {
    console.log("save triggered");
    try {
      const reponse = await axios.post(
        "https://dev.eload.smart.sa/api/v1/shipment_types",
        urlencoded,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOWY4YTc3NDNhNmY4MzAwMTA3YWE0NTVhZmZiYjkzM2QzMzM1YWNlZmJjNmQ0ZThlNjcwYTI4Mjg2ZjM4YjIxYjdlYzI0YjAzYmYwNWJjZTkiLCJpYXQiOjE2NzIyMjIxMTguMTE2MDc2OTQ2MjU4NTQ0OTIxODc1LCJuYmYiOjE2NzIyMjIxMTguMTE2MDgwMDQ1NzAwMDczMjQyMTg3NSwiZXhwIjoxNzAzNzU4MTE4LjExMjM1OTA0NjkzNjAzNTE1NjI1LCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.rnz0wHsys2ONo2zlyfQQ4ZopqVii0DcZ1U9wluIiKnGIBm-Ahc0YY9Aj28XXCIj3jOcC60nUChuQD7lH-4Vl96Ug-Y4zMjG5QWVGkUrfKobSEgrVwj-yMxEK0Hgwknf91pdWWIVSf0xethAqPjxwXTUGjRdjQ76p70Vs798iKwsn-rnuVjLx8SZhwWyFq-zSTFz_372k7aH9mlWdqcYCMjIv7V4HM41beMTSrbtM1_YhQetsBdMsRx4JilH--aIBkQOANhn-2dlQ_TD28JsOQjMgLbEq6EmUU6JomiO_AOIQRNi2jkoimcYlvKBh8ZSXsXju_6NbxxViwIIGYJQGmxtiNfXPx-ZVvPMuiiH7Dz3nRMBy8j_y62aTz1Vglq7mvTYBCp01_huqUb3guPHlNPaWvZJkvqktMcobrvQcSnbLx4d1ZTMrUK2OdXZHB0RoBhhawIdkeJLmu9OafMrFeQAhh0ukux041QEev_jFgrZz1-7qdjQ5W9QB8uMNUFbd_1C3zvnTRfFqjeLoYvU1aBhMZKNYiITIn7VB4oOKfJbsXUEPj83gOEr0hucnzH8AV7FhO3PuQExY4t1zxzdo5mj0DWlM1c30wyYF_2LrBCuv0F6rzaWfLMZMQBz_8havQwmerfTwLgnJJlUe7DoGQn_M_a9U6bQHuoSmOBDDVTI`,
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
    <div className="addshipment container my-4">
      <div className="head container-fluid mb-4 d-flex">
        <div className="side-left">
          <div className="box-text">
            <h2>Add new Shipment type</h2>
          </div>
        </div>
        <div className="box-right">
          <div className="link-view">
            <NavLink to="/shipmentlist">
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
              name="name"
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
            onClick={recordShippment}
          >
            Save
          </button>
        </div>

        {/* modal */}
        <div
          class="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabindex="-1"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div
              class="modal-content"
              style={{ borderRadius: "25px", width: "80%" }}
            >
              <div class="modal-header border-0">
                <NavLink to="/shipmentlist">
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </NavLink>
              </div>
              <div
                class="modal-body d-flex text-center my-3 "
                style={{ marginLeft: "12%" }}
              >
                <h3 className="my-4 mx-4" style={{ fontSize: "40px" }}>
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

export default AddShipment;
