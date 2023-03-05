import React from 'react'
import './AddShippers.css';
import { NavLink } from 'react-router-dom';

const AddShippers = () => {
  return (
    <div className='container-fluid addshipper p-5'>
    <h3>PARTNER INFORMATION</h3>
    <form>
    {/* name+email */}
    <div className='row my-4'>
      <div className='col-md-6'>
        <label className='my-2 d-block'>Name</label>
        <input className='input-box px-3' name='nameshipper' type="text" placeholder="Name" />
      </div>
      <div className='col-md-6 text-center'>
        <label className='my-2 d-block text-start mx-5'>E-mail</label>
        <input className='input-box px-3' name='emailshipper' type="text" placeholder="E-mail" />
      </div>
    </div>
    {/* brows+password */}
    <div className='row my-4'>
      <div className='col-md-4'>
        <label className='my-2 d-block'>Profile picture</label>
        <input type="file" name='imgpartner' className="input-box" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
      </div>
      <div className='col-md-4'>
        <label className='my-2 d-block'>Password</label>
        <input className='input-box px-3' type="password" name='passshipper' placeholder="Password" />
      </div>
      <div className='col-md-4'>
        <label className='my-2 d-block'>Confirm password</label>
        <input className='input-box px-3' type="password" name='passshipper' placeholder="Confirm password" />
      </div>
    </div>
    {/* line-1 */}
    <hr className='my-5' />
    {/* section-owner-information */}
    <h3>OWNER INFORMATION</h3>
    {/* name+PHONE+id */}
    <div className='row my-4'>
      <div className='col-md-4'>
        <label className='my-2 d-block'> name</label>
        <input className='input-box px-3' name='nameowner' type="text" placeholder="Owner name" />
      </div>
      <div className='col-md-4'>
        <label className='my-2 d-block'>Owner Phone </label>
        <input className='input-box px-3' name='phoneowner' type="tele" placeholder="Owner Phone " />
      </div>
      <div className='col-md-4'>
        <label className='my-2 d-block'>Owner National ID</label>
        <input className='input-box px-3' name='idowner' type="tele" placeholder="Owner National ID" />
      </div>
    </div>
    {/* follow */}
    <div className='row my-4'>
      <div className='col-md-4'>
        <label className='my-2 d-block'>Follow up name</label>
        <input className='input-box px-3' name='nameowner' type="text"  />
      </div>
      <div className='col-md-4'>
        <label className='my-2 d-block'>Follow up Phone </label>
        <input className='input-box px-3' name='phoneowner' type="tele"  />
      </div>
      <div className='col-md-4'>
        <label className='my-2 d-block'>Contacted ?</label>
        <div className='d-flex'>
        <label>
            <input 
            className='mx-1'
              type="radio" 
              name="isPublished" 
              value="true" />
            Yes
          </label>
          <label className='mx-4'>
            <input 
            className='mx-1'
              type="radio" 
              name="isPublished" 
              value="false" />
            No
          </label>

        </div>

      </div>
    </div>
    {/* line-2 */}
    <NavLink to="/allshippers">
    <button type='submit' className='btn-save my-3'>SAVE</button>
    </NavLink>

    </form>
  </div>
  )
}

export default AddShippers