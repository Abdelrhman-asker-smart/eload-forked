import React, { useState } from "react";
import Joi from "joi";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { useCookies } from "react-cookie";
import "./Login.css";
import Img from "./Eloadlogo.png";

export default function Login({ decodeData }) {
  // let navigate = useNavigate();
  //Data
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errList, setErrList] = useState([]);
  const [emailExist, setEmailExist] = useState("");
  const [loginFlag, setLoginFlag] = useState(false);
  const [cookie, setCookie] = useCookies(["eload_token"]);

  // const [errormessage, setErrorMessage] = useState("");

  //Functions
  function getUser(e) {
    let inputValue = e.target.value;
    let newUser = { ...user };
    newUser[e.target.id] = inputValue;
    setUser(newUser);
  }

  async function submitForm(e) {
    e.preventDefault();
    const schema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      // password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
      password: Joi.string().required(),
    });

    let joiResponse = schema.validate(user, { abortEarly: false });
    if (joiResponse.error) {
      setErrList(joiResponse.error.details);
    } else {
      setErrList([]);
      setLoginFlag(true);
      let formdata = new FormData();
      formdata.append("email", user.email);
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
        console.log(request.data,'this is the damn request')
        const data = request.data;
        // setLoginFlag(false);
        localStorage.setItem("email", data.data.user.email);
        localStorage.setItem("name", data.data.user.name);
        // ===============id users
        localStorage.setItem("id", data.data.user.id);


        let user_type = 'admin';
        if (data.data.user.hasOwnProperty('type')) {
          user_type = data.data.user.type;
          let user_type_data = data.data.user[user_type];
          localStorage.setItem('user_type_data', JSON.stringify(user_type_data));

          if (user_type_data.hasOwnProperty('contract')) {
            localStorage.setItem('is_contracted', true);
          } else {
            localStorage.setItem('is_contracted', false);
          }
        }

        localStorage.setItem('user_type', user_type);


        setCookie("eload_token", data.data.token.access);
        window.location.replace(`/${user_type == 'admin' ? 'dashboard' : 'allshipments'}`);
        // navigate('/dashboard');
        setLoginFlag(false);

        return data;
        // return request
      } catch (err) {
        // setErrorMessage(err.response.data.message);

        Swal.fire({
          position: 'top-end',
          icon: 'error',
          color: '#0e4579',
          title: `${err.response.data.message}`,
          showConfirmButton: false,
          showCancelButton:true,
          cancelButtonText: "ok",
          timer: 8000,
        })
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
      <div className="login w-50 mx-auto mt-5 h-100">
        <div className="content">
          <div className="logo my-3 text-center">
            <img src={Img} alt="" />
          </div>
          <h2 className="fs-3">Login Form</h2>
          <form onSubmit={submitForm}>
            <label htmlFor="email"> Email: </label>
            <input
              onChange={getUser}
              type="email"
              id="email"
              className="mt-3 form-control"
              placeholder="email"
            />
            <p className="fs-6 text-danger mb-3">{getError("email")}</p>

            <label htmlFor="password"> Password: </label>
            <input
              onChange={getUser}
              type="password"
              id="password"
              className="mt-3 form-control"
              placeholder="password"
            />
            <p className="fs-6 text-danger mb-3">{getError("password")}</p>

            <button
              type="submit"
              style={{ padding: "10px 20px" }}
              className="btn-submit my-2 btn btn-outline-info"
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
              ) : (
                <span>Log in</span>
              )}
            </button>
            {emailExist.length === 0 ? (
              ""
            ) : (
              <p className="fs-6 text-danger">{emailExist}</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
