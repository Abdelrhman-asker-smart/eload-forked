import React, { useState } from "react";
import Joi from "joi";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useCookies } from "react-cookie";
import "./Login.css";
import Img from "./Eloadlogo.png";
import ImgSide from "./Login_img.png";

export default function Login({ decodeData }) {
  // let navigate = useNavigate();
  //Data
  const [user, setUser] = useState({
    // email: "",
    password: "",
    Confirm_password: "",
  });
  const [errList, setErrList] = useState([]);
  const [emailExist, setEmailExist] = useState("");
  const [loginFlag, setLoginFlag] = useState(false);
  const [cookie, setCookie] = useCookies(["eload_token"]);
  const [rememberMe, setRememberMe] = useState(false);

  // const [errormessage, setErrorMessage] = useState("");

  //Functions
  function getUser(e) {
    let inputValue = e.target.value;
    let newUser = { ...user };
    newUser[e.target.id] = inputValue;
    setUser(newUser);
  }
  // console.log(user);
  async function submitForm(e) {
    e.preventDefault();
    const schema = Joi.object({
      // password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
      password: Joi.string().required(),
      Confirm_password: Joi.string()
        .required()
        .valid(Joi.ref("password"))
        .messages({
          "any.only": "Confirm password must match the password",
        }),
    });

    let joiResponse = schema.validate(user, { abortEarly: false });
    if (joiResponse.error || user.password !== user.Confirm_password) {
      setErrList(joiResponse.error.details);
      console.log("error stage", errList);
    } else {
      setErrList([]);
      setLoginFlag(true);
      let formdata = new FormData();
      // formdata.append("email", user.email);
      formdata.append("password", user.password);
      formdata.append("fcm_token", "dummy-fcm-token");

      try {
        const request = await axios.post(
          "https://dev.eload.smart.sa/api/v1/auth/login",
          formdata,
          {
            headers: {
              Accept: "application/json",
              "api-key": `b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9`,
            },
          }
        );
        console.log(request.data, "this is the damn request");
        const data = request.data;
        // setLoginFlag(false);
        localStorage.setItem("email", data.data.user.email);
        localStorage.setItem("name", data.data.user.name);
        // ===============id users
        localStorage.setItem("id", data.data.user.id);

        let user_type = "admin";
        if (data.data.user.hasOwnProperty("type")) {
          user_type = data.data.user.type;
          let user_type_data = data.data.user[user_type];
          localStorage.setItem(
            "user_type_data",
            JSON.stringify(user_type_data)
          );

          if (user_type_data.hasOwnProperty("contract")) {
            localStorage.setItem("is_contracted", true);
          } else {
            localStorage.setItem("is_contracted", false);
          }
        }

        localStorage.setItem("user_type", user_type);

        setCookie("eload_token", data.data.token.access);
        window.location.replace(
          `/${user_type === "admin" ? "dashboard" : "allshipments"}`
        );
        // navigate('/dashboard');
        setLoginFlag(false);

        return data;
        // return request
      } catch (err) {
        // setErrorMessage(err.response.data.message);

        Swal.fire({
          position: "top-end",
          icon: "error",
          color: "#0e4579",
          title: `${err.response.data.message}`,
          showConfirmButton: false,
          showCancelButton: true,
          cancelButtonText: "ok",
          timer: 8000,
        });
        console.log(err.response.data.message);
      }

      // fetch("https://dev.eload.smart.sa/api/v1/auth/login", requestOptions)
      //   .then(response => response.text())
      //   .then(result => console.log(result))
      //   .catch(error => console.log('error', error));
    }
  }
  function getError(key) {
    for (const error of errList) {
      if (error.context.key === key) {
        return error.message;
      }
    }
    return "";
  }
  // console.log(user, "user");
  return (
    <>
      <div className="login">
        <div className="row">
          <div className="col-md-6 p-5">
            <div className="logo my-4 text-center">
              <img src={Img} alt="" />
              <h2 className="fs-3" style={{ fontWeight: "300" }}>
                Freight at your fingertips
              </h2>
            </div>
            <form onSubmit={submitForm} className="my-5">
              <h3 className="fs-3 my-2 mb-5 fw-bold">Set a password</h3>
              <label htmlFor="password"> Create Password </label>
              <input
                onChange={getUser}
                type="password"
                id="password"
                className="mt-3 form-control"
                placeholder="Enter yourPassword"
              />
              <p className="fs-6 text-danger mb-3">{getError("password")}</p>

              <label className="mt-2" htmlFor="Confirm-password">
                {" "}
                Confirm Password{" "}
              </label>
              <input
                onChange={getUser}
                type="password"
                id="Confirm_password"
                className="mt-3 form-control"
                placeholder="Enter yourPassword"
              />
              <p className="fs-6 text-danger mb-3">{getError("password")}</p>

              {/* ============= */}
              <div className=" text-center my-5">
                <button
                  type="submit"
                  style={{ padding: "10px 80px" }}
                  className="btn-submit my-2 btn btn-outline-info"
                  disabled={user.password !== user.Confirm_password}
                >
                  {" "}
                  {loginFlag ? (
                    <>
                      <div className="spinner text-center">
                        <div className="rect1"></div>
                        <div className="rect2"></div>
                        <div className="rect3"></div>
                        <div className="rect4"></div>
                        <div className="rect5"></div>
                      </div>{" "}
                    </>
                  ) : user.password !== user.Confirm_password ? (
                    <span>Please Match your password</span>
                  ) : (
                    <span>Set Password</span>
                  )}
                </button>
              </div>
            </form>
          </div>
          {/* img */}
          <div className="col-md-6">
            <div
              className="Imgside text-center"
              style={{ borderLeft: "2px solid white" }}
            >
              <img src={ImgSide} alt="" width="100%" height={"100%"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
