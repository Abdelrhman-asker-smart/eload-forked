import React from "react";
import "../FinancialList/FinancialList.css";

const Request = () => {
  return (
    <>
      <div className="container-fluid financiallist px-4">
        <div className="request-head">
          <div className="text-head">Reports</div>
          <div className="date">
            <input type="date" />
          </div>
        </div>
        <div className="request-nav">
          <div className="row">
            <div className="text-head col-4">Financial requests</div>
            <div className="col-2">
              <select
                className="form-select input"
                aria-label="Default select example"
              >
                <option selected>Dec 24 - Dec 28</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-2">
              <input
                type="text"
                className="text-input input"
                placeholder="Shipment Number"
              />
            </div>
            <div className="col-2">
              <select
                className="form-select input"
                aria-label="Default select example"
              >
                <option selected>Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-1">
              <input
                type="text"
                className="text-input input"
                placeholder="Total"
              />
            </div>
            <div className="col-1">
              <select
                className="form-select input"
                aria-label="Default select example"
              >
                <option selected>Status</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
        <hr />
        <div className="requestable">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Shipment</th>
                <th scope="col">Category</th>
                <th scope="col">Total</th>
                <th scope="col">desciption</th>
                <th scope="col">status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Desposits</td>
                <td>100 SAR</td>
                <td>sfdghfyhglkjhgfdsyzfgjsfhdjjlihguyfutd</td>
                <td>
                  <button className="table-btn-red me-2">Pending</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Desposits</td>
                <td>100 SAR</td>
                <td>sfdghfyhglkjhgfdsyzfgjsfhdjjlihguyfutd</td>
                <td>
                  <button className="table-btn-green me-2">Done</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Desposits</td>
                <td>100 SAR</td>
                <td>sfdghfyhglkjhgfdsyzfgjsfhdjjlihguyfutd</td>
                <td>
                  <button className="table-btn-blue me-2">In progress</button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Desposits</td>
                <td>100 SAR</td>
                <td>sfdghfyhglkjhgfdsyzfgjsfhdjjlihguyfutd</td>
                <td>
                  <button className="table-btn-red me-2">Pending</button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Desposits</td>
                <td>100 SAR</td>
                <td>sfdghfyhglkjhgfdsyzfgjsfhdjjlihguyfutd</td>
                <td>
                  <button className="table-btn-green me-2">Done</button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Desposits</td>
                <td>100 SAR</td>
                <td>sfdghfyhglkjhgfdsyzfgjsfhdjjlihguyfutd</td>
                <td>
                  <button className="table-btn-blue me-2">In progress</button>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>Desposits</td>
                <td>100 SAR</td>
                <td>sfdghfyhglkjhgfdsyzfgjsfhdjjlihguyfutd</td>
                <td>
                  <button className="table-btn-red me-2">Pending</button>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>Desposits</td>
                <td>100 SAR</td>
                <td>sfdghfyhglkjhgfdsyzfgjsfhdjjlihguyfutd</td>
                <td>
                  <button className="table-btn-green me-2">Done</button>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>Desposits</td>
                <td>100 SAR</td>
                <td>sfdghfyhglkjhgfdsyzfgjsfhdjjlihguyfutd</td>
                <td>
                  <button className="table-btn-blue me-2">In progress</button>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>Desposits</td>
                <td>100 SAR</td>
                <td>sfdghfyhglkjhgfdsyzfgjsfhdjjlihguyfutd</td>
                <td>
                  <button className="table-btn-red me-2">Pending</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Request;
