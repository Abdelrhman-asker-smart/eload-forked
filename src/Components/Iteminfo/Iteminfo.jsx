import React from 'react'


import './Iteminfo.css'



const Iteminfo = () => {

  return (
    <div className='container-fluid iteminfo p-5'>
      <h3>PERSONAL INFORMATION</h3>

      {/* name+email */}
      <div className='row my-4'>
        <div className='col-md-3'>
          <label className='my-2 d-block'>Source </label>
          <select class="input-box px-2" aria-label="Default select example">
            <option selected>Riyadh</option>
            <option value="1">Riyadh</option>
            <option value="2">Riyadh</option>
            <option value="3">Riyadh</option>
          </select>
        </div>
        <div className='col-md-3'>
          <label className='my-2 d-block '>Destination</label>
          <input className='input-box px-2' type="text" placeholder="E-mail" />
        </div>
        <div className='col-md-3'>
          <label className='my-2 d-block '>Truck Type</label>
          <input className='input-box  px-2' type="text" placeholder="E-mail" />
        </div>
        <div className='col-md-3 d-flex align-items-center'>
          <div className='truck'>
            <label className='my-2 d-block '>Shipment type</label>
            <input className='input-box small-input px-2' type="text" placeholder="E-mail" />
          </div>
          {/* price */}
          <div className='truck'>
            <label className='my-2 d-block '>Price</label>
            <input className='input-box small-input px-2' type="text" placeholder="E-mail" />
          </div>
        </div>
        <button className='btn-save my-5'>SAVE</button>
      </div>
    </div>
  )
}

export default Iteminfo
