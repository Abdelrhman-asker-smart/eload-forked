import React from 'react'
import './Personinformation.css';

const Personinformation = () => {
  return (
    <div className='container-fluid personinfo p-5'>
      <h3>PERSONAL INFORMATION</h3>
      {/* name+email */}
      <div className='row my-4'>
        <div className='col-md-6'>
          <label className='my-2 d-block'>Name</label>
          <input className='input-box px-3' type="text" placeholder="Name" />
        </div>
        <div className='col-md-6 text-center'>
          <label className='my-2 d-block text-start mx-5'>E-mail</label>
          <input className='input-box px-3' type="text" placeholder="E-mail" />
        </div>
      </div>
      {/* brows+password */}
      <div className='row my-4'>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Profile picture</label>
          <input type="file" className="input-box" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
        </div>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Password</label>
          <input className='input-box px-3' type="password" placeholder="Password" />
        </div>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Confirm password</label>
          <input className='input-box px-3' type="password" placeholder="Confirm password" />
        </div>
      </div>
      {/* line-1 */}
      <hr className='my-5' />
      {/* section-owner-information */}
      <h3>OWNER INFORMATION</h3>
      {/* name+PHONE+id */}
      <div className='row my-4'>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Owner name</label>
          <input className='input-box px-3' type="text" placeholder="Owner name" />
        </div>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Owner Phone </label>
          <input className='input-box px-3' type="tele" placeholder="Owner Phone " />
        </div>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Owner National ID</label>
          <input className='input-box px-3' type="tele" placeholder="Owner National ID" />
        </div>
      </div>
      {/* line-2 */}
      <hr className='my-5' />
      {/* section-ID-information */}
      <h3>ID INFORMATION</h3>
      {/* ID+drivingnumber */}
      <div className='row my-4'>
        <div className='col-md-4'>
          <label className='my-2 d-block'>ID Copy</label>
          <input type="file" className="input-box" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
        </div>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Driving License NumberOwner Phone </label>
          <input className='input-box px-3' type="tele" placeholder="Driving License Number" />
        </div>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Driving License Copy</label>
          <input type="file" className="input-box" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
        </div>
      </div>
      {/*row-2 ID+date */}
      <div className='row my-4'>
        <div className='col-md-4'>
          <label className='my-2 d-block'>License Id</label>
          <input type="file" className="input-box" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
        </div>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Expiry Date</label>
          <input className='input-box px-3' type="tele" placeholder="Driving License Number" />
        </div>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Nationality</label>
          <input type="file" className="input-box" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
        </div>
      </div>
      {/* line-3 */}
      <hr className='my-5' />
      <h3>Sponser information</h3>
      {/* Sponsor */}
      <div className='row my-4'>
        <div className='col-md-6'>
          <label className='my-2 d-block'>Sponsor Establishment Name</label>
          <input className='input-box px-3' type="text" placeholder="Sponsor Establishment name" />
        </div>
        <div className='col-md-6'>
          <label className='my-2 d-block'>Sponsor Establishment Number</label>
          <input className='input-box px-3' type="text" placeholder="Sponsor Establishment Number" />
        </div>
      </div>
      {/* line-4 */}
      <hr className='my-5' />
      <h3>Truck information</h3>
      {/* Truck  */}
      <div className='row my-4'>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Truck Model</label>
          <input className='input-box px-3' type="text" placeholder="Truck Model" />
        </div>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Truck Plate Number</label>
          <input className='input-box px-3' type="tele" placeholder="Truck Plate Number" />
        </div>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Chassis Number</label>
          <input className='input-box px-3' type="tele" placeholder="Chassis Number" />
        </div>

      </div>
      {/* row-2 */}
      <div className='row my-4'>
      <div className='col-md-4'>
          <label className='my-2 d-block'>Truck License Number</label>
          <input className='input-box px-3' type="tele" placeholder="Chassis Number" />
        </div>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Truck License Copy</label>
          <input type="file" className="input-box" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
        </div>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Truck Type</label>
          <input className='input-box px-3' type="text" placeholder="Chassis Number" />
        </div>
      </div>

      <button className='btn-save my-3'>SAVE</button>

    </div>
  )
}

export default Personinformation
