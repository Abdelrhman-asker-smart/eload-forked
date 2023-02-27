import React from 'react'
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

import { columns, data } from "./datatable";

import "./CountriesList.css";

const CountriesList = () => {
  const tableData = {
    columns,
    data
  };
  return (
    <div className='countrylist'>
        <div className="container-fluid px-5 py-5">
          <div className="head-input container-fluid mb-4">
              <div className="box-left">
                  <div className="head-text">
                      <h2>Country list</h2>
                  </div>
              </div>
          </div>
          <div className="country-table">
          <DataTableExtensions {...tableData}>
            <DataTable
              columns={columns}
              data={data}
              noHeader
              defaultSortField="id"
              defaultSortAsc={false}
              pagination
              highlightOnHover
            />
          </DataTableExtensions>
          {/* <table class="table">
            <thead>
              <tr className='head-tr'>
              <th scope="col" className='taple-head'>ID</th>
                <th scope="col" className='taple-head'>Name</th>
                <th scope="col" className='taple-head'>Currency</th>
                <th scope="col" className='taple-head'></th>
                
              </tr>
            </thead>
            <tbody>
              <tr className='body-tr'>
                <td>1</td>
                <td>Saudi Arabia</td>
                <td>Saudi riyal</td>
                <td></td>

              </tr>
              <tr className='body-tr'>
              <td>2</td>
                <td>Egypt</td>
                <td>Egyptian pound</td>
                <td></td>

              </tr>
              <tr className='body-tr'>
              <td>3</td>
              <td>Egypt</td>
                <td>Egyptian pound</td>
                <td></td>
 
              </tr>
              <tr className='body-tr'>
              <td>4</td>
              <td>Egypt</td>
                <td>Egyptian pound</td>
                <td></td>

              </tr>
              <tr className='body-tr'>
              <td>5</td>
              <td>Egypt</td>
                <td>Egyptian pound</td>
                <td></td>

              </tr>
              <tr className='body-tr'>
              <td>6</td>
              <td>Egypt</td>
                <td>Egyptian pound</td>
                <td></td>

              </tr>
              <tr className='body-tr'>
              <td>7</td>
              <td>Egypt</td>
                <td>Egyptian pound</td>
                <td></td>

              </tr>
            </tbody>
          </table> */}
          </div>
        </div>
    </div>
  )
}

export default CountriesList