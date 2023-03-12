import React from "react";
// import Drivericon from "../../icons/Driver-icon.svg";
// import Dr2 from '../../icons/download 1.svg'
import { ReactComponent as Dr2 } from "../../icons/download 1.svg";
// import { ReactComponent as User } from '../../icons/user-icon.png';
// import { User } from '../../icons/user-icon.png';

import "./ViewDriver.css";
import { NavLink } from "react-router-dom";

const ViewDriver = () => {
  console.log(Dr2);
  return (
    <>
      <div className="header-card">
        <div className="container-fluid">
          <div className="row">
            <div className="information-user col-3 card-header br-right">
              <Dr2 className="mx-5 my-3" style={{ borderRadius: "70px" }} />

              <div className="name-user">Test freelancer Driver</div>
            </div>
            <div className="phone-place-data col-3 card-header  br-right py-4">
              <div className="card-box">
                <div className="data-card">
                  <i className="fa-solid fa-mobile-screen"></i>
                  <span>+92 335 252 2522</span>
                </div>
                <div className="data-card">
                  <i className="fa-solid fa-calendar-day"></i>
                  <NavLink to="/allitems" className="btn-data-card">
                    View contract details
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="transactions-data col-3 card-header  br-right py-4">
              <div className="card-box">
                <div className="data-card">
                  <i className="fa-solid fa-basket-shopping"></i>
                  <span>Transactions</span>
                </div>
                <div className="data-card">
                  <h5 className="head-card-text">SAR 6,000</h5>
                </div>
              </div>
            </div>
            <div className="shipments-data col-3 card-header py-4">
              <div className="card-box">
                <div className="data-card">
                  <i className="fa-solid fa-box-open"></i>
                  <span>7 Shipments</span>
                </div>
                <div className="data-card">
                  <a href="/#"  className="btn-data-card">
                    View All
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="freelancer-content">
        <div className="container-fluid">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Code</th>
                <th scope="col">Pick Up </th>
                <th scope="col">Drop off</th>
                <th scope="col">Shipment TYPE</th>
                <th scope="col">Truck TYPE</th>
                <th scope="col">Shipping cost</th>
                <th scope="col">Pick up Date</th>
                <th scope="col">STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input me-3"
                      id="customCheck1"
                    />
                    <label className="custom-control-label" for="customCheck1">
                      1
                    </label>
                  </div>
                </td>
                <td>ELD00028</td>
                <td>
                  Jeddah{" "}
                  <span className="ms-3">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </td>
                <td>Mecca</td>
                <td>Dry 40 high cube</td>
                <td>Flatbed</td>
                <td>SAR17,756.000</td>
                <td>2022-09-14</td>
                <td>
                  <span className="btn-blur-table btn-table">New</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input me-3"
                      id="customCheck1"
                    />
                    <label className="custom-control-label" for="customCheck1">
                      1
                    </label>
                  </div>
                </td>
                <td>ELD00028</td>
                <td>
                  Jeddah{" "}
                  <span className="ms-3">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </td>
                <td>Mecca</td>
                <td>Dry 40 high cube</td>
                <td>Flatbed</td>
                <td>SAR17,756.000</td>
                <td>2022-09-14</td>
                <td>
                  <span className="btn-blur-table btn-table">New</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input me-3"
                      id="customCheck1"
                    />
                    <label className="custom-control-label" for="customCheck1">
                      1
                    </label>
                  </div>
                </td>
                <td>ELD00028</td>
                <td>
                  Jeddah{" "}
                  <span className="ms-3">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </td>
                <td>Mecca</td>
                <td>Dry 40 high cube</td>
                <td>Flatbed</td>
                <td>SAR17,756.000</td>
                <td>2022-09-14</td>
                <td>
                  <span className="btn-red-table btn-table">Assigned</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input me-3"
                      id="customCheck1"
                    />
                    <label className="custom-control-label" for="customCheck1">
                      1
                    </label>
                  </div>
                </td>
                <td>ELD00028</td>
                <td>
                  Jeddah{" "}
                  <span className="ms-3">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </td>
                <td>Mecca</td>
                <td>Dry 40 high cube</td>
                <td>Flatbed</td>
                <td>SAR17,756.000</td>
                <td>2022-09-14</td>
                <td>
                  <span className="btn-red-table btn-table">Assigned</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input me-3"
                      id="customCheck1"
                    />
                    <label className="custom-control-label" for="customCheck1">
                      1
                    </label>
                  </div>
                </td>
                <td>ELD00028</td>
                <td>
                  Jeddah{" "}
                  <span className="ms-3">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </td>
                <td>Mecca</td>
                <td>Dry 40 high cube</td>
                <td>Flatbed</td>
                <td>SAR17,756.000</td>
                <td>2022-09-14</td>
                <td>
                  <span className="btn-blue-light-table btn-table">
                    On the Way{" "}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input me-3"
                      id="customCheck1"
                    />
                    <label className="custom-control-label" for="customCheck1">
                      1
                    </label>
                  </div>
                </td>
                <td>ELD00028</td>
                <td>
                  Jeddah{" "}
                  <span className="ms-3">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </td>
                <td>Mecca</td>
                <td>Dry 40 high cube</td>
                <td>Flatbed</td>
                <td>SAR17,756.000</td>
                <td>2022-09-14</td>
                <td>
                  <span className="btn-blue-light-table btn-table">
                    On the Way{" "}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input me-3"
                      id="customCheck1"
                    />
                    <label className="custom-control-label" for="customCheck1">
                      1
                    </label>
                  </div>
                </td>
                <td>ELD00028</td>
                <td>
                  Jeddah{" "}
                  <span className="ms-3">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </td>
                <td>Mecca</td>
                <td>Dry 40 high cube</td>
                <td>Flatbed</td>
                <td>SAR17,756.000</td>
                <td>2022-09-14</td>
                <td>
                  <span className="btn-orange-table btn-table">DISPATCH</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default ViewDriver;
