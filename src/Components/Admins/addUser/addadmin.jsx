import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

import axios from "axios";
import "./addUser.css";

const Addadmin = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const [cookie] = useCookies(["eload_token"]);
  // console.log(name, "name");
  // const urlencoded = new URLSearchParams();
  // urlencoded.append("name", name);
  // urlencoded.append("email", email);
  // urlencoded.append("password", password);

  const [emptyInput, setEmptyInput] = useState(false);
  // Error List
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  // Api-post==========================
  const Joi = require("joi");
  const recordAdmins = async (e) => {
    e.preventDefault();
    console.log("save triggered");

    setLoading(true);
    const schema = Joi.object({
      name: Joi.string().required(),
      // password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string().min(6).required(),
    });
    const formDataObject = {
      name: name,
      email: email,
      password: password,
    };
    const { error } = schema.validate(formDataObject, { abortEarly: false });

    if (error) {
      setTargetElement(error.details[0].context.label);
      console.log(error);
      console.log("errorrrr", error.details);
      const newErrors = error.details.reduce((acc, detail) => {
        acc[detail.path[0]] = detail.message;
        return acc;
      }, {});
      setErrors(newErrors);
      setLoading(false);
    } else {
      console.log("Validation succeeded");
      setLoading(true);
      setErrors({});

      const formdata = new FormData();
      formdata.append("name", name);
      formdata.append("email", email);
      formdata.append("password", password);
      try {
        const reponse = await axios.post(
          "https://dev.eload.smart.sa/api/v1/users",
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

        setName("");
        setEmail("");
        setPass("");
        navigate(`/all-admins`);

        //   console.log(reponse);
      } catch (e) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          color: "#0e4579",
          title: `${e.response.data.message}`,
          showConfirmButton: false,
          showCancelButton: true,
          cancelButtonText: "ok",
          timer: 8000,
        });
        console.log(e);
      }
    }
  };
  const [targetElement, setTargetElement] = useState("name");
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      element.focus();
    }
  };
  return (
    <div className="addadmins container my-4">
      <div className="head container-fluid mb-4 d-flex">
        <div className="side-left">
          <div className="box-text">
            <h2>Add new Admin</h2>
          </div>
        </div>
        <div className="box-right">
          <div className="link-view">
            <NavLink to="/all-admins">
              <p className="linkview">View All</p>
            </NavLink>
          </div>
        </div>
      </div>
      <form onSubmit={recordAdmins} className={loading ? "disabled" : ""}>
        <div className=" input-section">
          <div className="row">
            <div className="col-md-12">
              <label className="mx-3 my-3">Name</label>
              <input
                type="text"
                placeholder="name"
                className={
                  errors.name ? "hasError input-box px-3" : "input-box px-3"
                }
                id="name"
                // value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            {/* email */}
            <div className="col-md-6">
              <label className="mx-3 my-3">Email</label>
              <input
                className={
                  errors.email ? "hasError input-box px-3" : "input-box px-3"
                }
                id="email"
                type="email"
                placeholder="email"
                // value={name}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            {/* password */}
            <div className="col-md-6">
              <label className="mx-3 my-3">Password</label>
              <input
                type="text"
                className={
                  errors.password ? "hasError input-box px-3" : "input-box px-3"
                }
                id="password"
                placeholder="password"
                // value={name}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>
          </div>

          <div className="btn-side text-center my-5">
            <>
              <button
                type="submit"
                className="btn save-btn"
                onClick={() => scrollToElement(targetElement)}
                disabled={loading}
              >
                Save
              </button>
            </>
            {/* <button
            className="btn save-btn"
            data-bs-toggle="modal"
            href="#exampleModalToggle"
            onClick={recordCategory}
          >
            Save
          </button> */}
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
                  <NavLink to="/all-admins">
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
      </form>
    </div>
  );
};

export default Addadmin;
