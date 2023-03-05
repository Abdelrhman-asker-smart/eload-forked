import React from "react";
import { NavLink } from "react-router-dom";
import "./Partners.css";

const Partners = () => {
  return (
    <div>
      <header className="partner-head px-5">
        <div className="container-fluid">
          <div className="box-left">
            <div className="head-text">
              <h2>Partners</h2>
              <p>20 Partners</p>
            </div>
            <div className="input-head">
              <span>Search a Partners</span>
              <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder=" Enter Partners Name"
                />
              </div>
            </div>
          </div>
          <div className="box-right">
            <NavLink to="/addpartners">
              <button className="btn-partner">
                <i className="fa-solid fa-plus me-3"></i> + ADDPartner
              </button>
            </NavLink>
          </div>
        </div>
      </header>
      <div className="partner container-fluid px-5">
        <div className="head-input container-fluid">
          <div className="box-right">
            <div className="print">
              <button className="print-btn">
                <i className="fa-solid fa-print mx-2"></i>
                Print
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="partner-table">
          <table className="table">
            <thead>
              <tr className="head-tr">
                <th scope="col" className="taple-head">
                  Name
                </th>
                <th scope="col" className="taple-head">
                  E-mail
                </th>
                <th scope="col" className="taple-head">
                  PHONE NUMBER
                </th>
                <th scope="col" className="taple-head">
                  Edit / remove
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="body-tr">
                <td>Freelance Driver</td>
                <td>test_freelance_driver@example.com</td>
                <td>+92 335 252 2522</td>
                <td>
                  <button className="btn-table">
                    <i className="fa-solid fa-eye me-3"></i>View
                  </button>
                  <button className="btn-table active">
                    <i className="fa-solid fa-pen me-3"></i>View
                  </button>
                  <button className="btn-table">
                    <i className="fa-solid fa-user me-3"></i>View
                  </button>
                </td>
              </tr>
              <tr className="body-tr">
                <td>Freelance Driver</td>
                <td>test_freelance_driver@example.com</td>
                <td>+92 335 252 2522</td>
                <td>
                  <button className="btn-table">
                    <i className="fa-solid fa-eye me-3"></i>View
                  </button>
                  <button className="btn-table active">
                    <i className="fa-solid fa-pen me-3"></i>View
                  </button>
                  <button className="btn-table">
                    <i className="fa-solid fa-user me-3"></i>View
                  </button>
                </td>
              </tr>
              <tr className="body-tr">
                <td>Freelance Driver</td>
                <td>test_freelance_driver@example.com</td>
                <td>+92 335 252 2522</td>
                <td>
                  <button className="btn-table">
                    <i className="fa-solid fa-eye me-3"></i>View
                  </button>
                  <button className="btn-table active">
                    <i className="fa-solid fa-pen me-3"></i>View
                  </button>
                  <button className="btn-table">
                    <i className="fa-solid fa-user me-3"></i>View
                  </button>
                </td>
              </tr>
              <tr className="body-tr">
                <td>Freelance Driver</td>
                <td>test_freelance_driver@example.com</td>
                <td>+92 335 252 2522</td>
                <td>
                  <button className="btn-table">
                    <i className="fa-solid fa-eye me-3"></i>View
                  </button>
                  <button className="btn-table active">
                    <i className="fa-solid fa-pen me-3"></i>View
                  </button>
                  <button className="btn-table">
                    <i className="fa-solid fa-user me-3"></i>View
                  </button>
                </td>
              </tr>
              <tr className="body-tr">
                <td>Freelance Driver</td>
                <td>test_freelance_driver@example.com</td>
                <td>+92 335 252 2522</td>
                <td>
                  <button className="btn-table">
                    <i className="fa-solid fa-eye me-3"></i>View
                  </button>
                  <button className="btn-table active">
                    <i className="fa-solid fa-pen me-3"></i>View
                  </button>
                  <button className="btn-table">
                    <i className="fa-solid fa-user me-3"></i>View
                  </button>
                </td>
              </tr>
              <tr className="body-tr">
                <td>Freelance Driver</td>
                <td>test_freelance_driver@example.com</td>
                <td>+92 335 252 2522</td>
                <td>
                  <button className="btn-table">
                    <i className="fa-solid fa-eye me-3"></i>View
                  </button>
                  <button className="btn-table active">
                    <i className="fa-solid fa-pen me-3"></i>View
                  </button>
                  <button className="btn-table">
                    <i className="fa-solid fa-user me-3"></i>View
                  </button>
                </td>
              </tr>
              <tr className="body-tr">
                <td>Freelance Driver</td>
                <td>test_freelance_driver@example.com</td>
                <td>+92 335 252 2522</td>
                <td>
                  <button className="btn-table">
                    <i className="fa-solid fa-eye me-3"></i>View
                  </button>
                  <button className="btn-table active">
                    <i className="fa-solid fa-pen me-3"></i>View
                  </button>
                  <button className="btn-table">
                    <i className="fa-solid fa-user me-3"></i>View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Partners;
