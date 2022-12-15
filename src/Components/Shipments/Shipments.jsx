import React from 'react'
import { useState } from 'react'
import Inputs from './inputs'
import "./Shipments.css"
const Shipments = () => {
  const [input, setInputs] = useState([])
  return (
    <div className='container-fluid px-5'>
      <div className='head-shipments'>
        <div className='shipments-btns'>
          <button className='btn'><i class="fa-solid fa-plus me-3"></i> Add Shipments</button>
          <button  className='btn switch-btn'>Track Shipments</button>
          <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
          <label className="form-check-label" for="flexSwitchCheckDefault">Switch to planned shipments</label>
        </div>
        </div>
      </div>
      <div className='steps-shipments'>
        <div className='steps'>
          <div className='step active'>
            <span>1</span>
            <p>Pick up</p>
          </div>
          <div className='step'>
            <span>2</span>
            <p>Drop off</p>
          </div>
          <div className='step'>
            <span>3</span>
            <p>Details</p>
          </div>
          <div className='step'>
            <span>4</span>
            <p>Notes</p>
          </div>
        </div>
        <hr />
        <div className='input-shipper'>
          <p>Shipper<span>*</span></p>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select client</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className='pick-up box-inputs'>
        <div className='box-inputs-head'>Pick up</div>
        <div className='inputs'>
          <div className='input input-select'>
            <label htmlFor="address">Pickup Address<span>*</span></label>
            <select class="form-select" aria-label="Default select example">
            <option selected>Select client</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          </div>
          <div className='input'>
            <label htmlFor="address">Pickup Date<span>*</span></label>
            <input type="date"></input>
          </div>
          <div className='input'>
            <label htmlFor="address">Pickup Time<span>*</span></label>
            <input type="time" />
          </div>
          <div className='add-btn'><button><i class="fa-solid fa-plus me-3"></i> Add New Address</button></div>
        </div>
        <hr />
      </div>
      <div className='drop-off box-inputs'>
        <div className='box-inputs-head'>Drop off</div>
        <div className='inputs'>
          <div className='input input-select'>
            <label htmlFor="address">Drop off Address<span>*</span></label>
            <select class="form-select" aria-label="Default select example">
            <option selected>Select client</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          </div>
          <div className='input'>
            <label htmlFor="address">Drop off Time<span>*</span></label>
            <input type="time"></input>
          </div>
          <div className='add-btn'><button><i class="fa-solid fa-plus me-3"></i> Add New Address</button></div>
        </div>
        <hr />
      </div>
      <div className='details box-inputs'>
        <div className='box-inputs-head'>Details</div>
        <Inputs />
        {
          input.map((item, index) => {
            return (
            <>
            <Inputs />  
            <button  className='btn' id='delete' onClick={(item) => {
              const newArr = input.filter((i, j) => {
                return index !== j
              })
              setInputs(newArr)
            }}>Delete</button>
           </>)
          })
        }
        <div className='control-btn'>
          <div className='left-btn'>

            <button  className='btn' id='add'  onClick={() => setInputs([...input , ''])}><i class="fa-solid fa-plus me-3"></i> Add truck</button>
          </div>
          <div className='right-btn'>
            <button  className='btn'>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shipments
