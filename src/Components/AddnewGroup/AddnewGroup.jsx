import React from 'react'
import '../AddnewGroup/addnewgroup.css'
import {  NavLink } from "react-router-dom";

const AddnewGroup = () => {
  return (
    <div className='newgroup'>
      <div className="container-fluid">
        <div className="header-newgroup">
          <h2>Add new group</h2>
          
          <button>
          <NavLink to="/Shipments/grouplist">
            <a href="#">View All</a>
            </NavLink>
            </button>
          
        </div>
        <div className="content-newgroup">
          <p>New</p>
          <input type="text" name="Name" id="" placeholder='Name' />
        </div>
        <div className="footer-newgroup text-center">
          <button className="btn btn-newgroup">Save</button>
        </div>
      </div>
    </div>
  )
}

export default AddnewGroup
