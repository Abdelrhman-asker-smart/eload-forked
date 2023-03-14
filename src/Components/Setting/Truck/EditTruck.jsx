import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryEditReducer,
  EditTruckFunction,
} from "../../../redux/EditTruckslice";

import "./EditTruck.css";

const EditTruck = () => {
  const { list, status } = useSelector((state) => state.TruckList);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [cookie] = useCookies(["eload_token"]);
  console.log(image, "image");

  useEffect(() => {
    const findName = () => {
      let item = list.find((item, _) => item.id == id);
      // console.log(item);
      setImage(item.image);
      setName(item.name);
    };
    findName();
  }, []);
  const edit = () => {
    // console.log(name, "name");
    // console.log(cookie.eload_token, "token");
    // console.log(id, "id");

    var formdata = new FormData();
    formdata.append("_method", "put");
    formdata.append("name", name);
    formdata.append("image", image);

    dispatch(
      EditTruckFunction({
        token: cookie.eload_token,
        id,
        formdata,
      })
    )
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="edittruck container my-4">
      <div className="head container-fluid mb-4 d-flex">
        <div className="side-left">
          <div className="box-text">
            <h2>Edit Truck type</h2>
          </div>
        </div>
        <div className="box-right">
          <div className="link-view">
            <NavLink to="/trucklist">
              <p className="linkview">View All</p>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container-fluid input-section">
        <div className="row ">
          <div className="col-md-12">
            <label className="mx-3 my-3" htmlFor="truckname">
              Name
            </label>
            <input
              className="nameinput"
              type="text"
              placeholder="name"
              name="truckname"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="edit_fields col-md-4 my-4">
            <label htmlFor="truckimg" className="mx-3 my-3">
              Add photo
            </label>
            <input
              className="truckimg"
              type="file"
              id="truckimg"
              name="truckimg"
              accept="image/png, image/jpeg"
              placeholder={image}
              // value={image}
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
            <div className="edit_truck_img">
              <img src={image} alt="" />
            </div>
          </div>
        </div>

        <div className="btn-side text-center my-5">

          <button
            className="btn save-btn"
            data-bs-toggle="modal"
            href="#exampleModalToggle"
            onClick={() => edit()}
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
                <NavLink to="/trucklist">
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
                style={{ marginLeft: "15%" , marginTop: "-25px"}}
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

export default EditTruck;
