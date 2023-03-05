import React from "react";
import "../GroupList/GroupList.css";

const GroupList = () => {
  return (
    <div className="group-list">
      <header className="partner-head px-5">
        <div className="container-fluid">
          <div className="box-left">
            <div className="head-text">
              <h2>Groups list</h2>
            </div>
          </div>
          <div className="box-right">
            <button className="btn-partner">
              <i className="fa-solid fa-plus me-3"></i>Add new group
            </button>
          </div>
        </div>
        <hr />
      </header>
      <div className="partner container-fluid px-5">
        <div className="partner-table">
          <table className="table">
            <thead>
              <tr className="head-tr">
                <th scope="col" className="taple-head ">
                  #
                </th>
                <th scope="col" className="taple-head ">
                  Name
                </th>
                <th scope="col" className="taple-head "></th>
                <th scope="col" className="taple-head text-center">
                  Edit / remove
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="body-tr">
                <td>1</td>
                <td>My warehouses</td>
                <td></td>
                <td>
                  <button className="btn-table">
                    <i className="fa-solid fa-eye me-3"></i>View
                  </button>
                  <button className="btn-table active">
                    <i className="fa-solid fa-pen me-3"></i>View
                  </button>
                </td>
              </tr>
              <tr className="body-tr">
                <td>1</td>
                <td>My warehouses</td>
                <td></td>
                <td>
                  <button className="btn-table">
                    <i className="fa-solid fa-eye me-3"></i>View
                  </button>
                  <button className="btn-table active">
                    <i className="fa-solid fa-pen me-3"></i>View
                  </button>
                </td>
              </tr>
              <tr className="body-tr">
                <td>1</td>
                <td>My warehouses</td>
                <td></td>
                <td>
                  <button className="btn-table">
                    <i className="fa-solid fa-eye me-3"></i>View
                  </button>
                  <button className="btn-table active">
                    <i className="fa-solid fa-pen me-3"></i>View
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

export default GroupList;
