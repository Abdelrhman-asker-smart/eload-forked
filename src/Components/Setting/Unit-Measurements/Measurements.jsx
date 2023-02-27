import React from 'react'
import {  NavLink } from "react-router-dom";
import { ReactComponent as EditIcon } from '../../../icons/editicon.svg';
import { ReactComponent as DeleteIcon } from '../../../icons/deleteicon.svg';
import "./Measurements.css"

const Measurements = () => {
  return (
    <div className='measurements'>
        <div className="container-fluid px-5 py-5">
          <div className="head-input container-fluid mb-4">
              <div className="box-left">
                  <div className="head-text">
                      <h2>Unit Measurement List</h2>
                  </div>
              </div>
          </div>
          <div className="measurements-table">
          <table class="table">
            <thead>
              <tr className='head-tr'>
              <th scope="col" className='taple-head'>#</th>
                <th scope="col" className='taple-head'>Name</th>
                <th scope="col" className='taple-head'></th>
                <th scope="col" className='taple-head'></th>
                <th scope="col" className='taple-head'>Edit / remove</th>
              </tr>
            </thead>
            <tbody>
              <tr className='body-tr'>
                <td>1</td>
                <td>Pallets</td>
                <td></td>
                <td></td>
                <td>
                  <NavLink to="/editmeasurements">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr>
              <tr className='body-tr'>
              <td>2</td>
                <td>Freelance Driver</td>
                <td></td>
                <td></td>
                <td>
                  <NavLink to="/editmeasurements">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr>
              <tr className='body-tr'>
              <td>3</td>
                <td>Freelance Driver</td>
                <td></td>
                <td></td>
                <td>
                  <NavLink to="/editmeasurements">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr>
              <tr className='body-tr'>
              <td>4</td>
                <td>Freelance Driver</td>
                <td></td>
                <td></td>
                <td>
                  <NavLink to="/editmeasurements">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr>
              <tr className='body-tr'>
              <td>5</td>
                <td>Freelance Driver</td>
                <td></td>
                <td></td>
                <td>
                  <NavLink to="/editmeasurements">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr>
              <tr className='body-tr'>
              <td>6</td>
                <td>Freelance Driver</td>
                <td></td>
                <td></td>
                <td>
                  <NavLink to="/editmeasurements">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr>
              <tr className='body-tr'>
              <td>7</td>
                <td>Freelance Driver</td>
                <td></td>
                <td></td>
                <td>
                  <NavLink to="/editmeasurements">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
    </div>
  )
}

export default Measurements