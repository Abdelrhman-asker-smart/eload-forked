import React from 'react'

import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

import { columns, data } from "./datatable";

import "./StatesList.css"

const StatesList = () => {
  const tableData = {
    columns,
    data
  };
  return (
    <div className='stateslist'>
        <div className="container-fluid px-5 py-5">
          <div className="head-input container-fluid mb-4">
              <div className="box-left">
                  <div className="head-text">
                      <h2>State list</h2>
                  </div>
              </div>
          </div>
          <div className="states-table">
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
                <th scope="col" className='taple-head'></th>
                <th scope="col" className='taple-head'></th>
                
              </tr>
            </thead>
            <tbody>
              <tr className='body-tr'>
                <td>1</td>
                <td>Tabuk</td>
                <td></td>
                <td></td>

              </tr>
              <tr className='body-tr'>
              <td>2</td>
                <td>Bahah</td>
                <td></td>
                <td></td>

              </tr>
              <tr className='body-tr'>
              <td>3</td>
                <td>Jawf</td>
                <td></td>
                <td></td>

              </tr>
              <tr className='body-tr'>
              <td>4</td>
                <td>Madinah</td>
                <td></td>
                <td></td>

              </tr>
              <tr className='body-tr'>
              <td>5</td>
                <td>Freelance Driver</td>
                <td></td>
                <td></td>

              </tr>
              <tr className='body-tr'>
              <td>6</td>
                <td>Freelance Driver</td>
                <td></td>
                <td></td>

              </tr>
              <tr className='body-tr'>
              <td>7</td>
                <td>Freelance Driver</td>
                <td></td>
                <td></td>

              </tr>
            </tbody>
          </table> */}
          </div>
        </div>
    </div>
  )
}

export default StatesList