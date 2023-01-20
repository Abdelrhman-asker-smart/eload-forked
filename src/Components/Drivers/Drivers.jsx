import React from 'react'
import '../Drivers/Drivers.css'

const Drivers = () => {
  return (
<div>
        <header className='driver-head px-5'>
        <div className="container-fluid">
          <div className='box-left'>
            <div className='driver-card'>
              <h4>10</h4>
              <h4>Pending Driver</h4>
            </div>
            <div className='driver-card driver-card-blue'>
              <h4>15</h4>
              <h4>Active Driver</h4>
            </div>
          </div>
          <div className='box-right'>
          <button className='btn-driver'><i class="fa-solid fa-plus me-3"></i> Add Driver</button>
          </div>
        </div>
        </header>
        <div className="driver container-fluid px-5">
          <div className="head-input container-fluid">
              <div className="box-left">
                  <div className="head-text">
                      <h2>Drivers</h2>
                      <p>20 Drivers</p>
                  </div>
                  <div className="input-head">
                      <span>Search a Driver</span>
                      <div class="input-group input-group-sm mb-3">
                      <span class="input-group-text" id="inputGroup-sizing-sm"><i class="fa-solid fa-magnifying-glass"></i></span>
                      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder=' Enter Driver’s Name' />
                      </div>
                  </div>
              </div>
              <div className="box-right">
              <div className='print mx-3'>
                  <div className='mx-3'>
                  <div class="dropdown">
                  <button class=" btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa-solid fa-print mx-2"></i>

                      Print
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="#">Name</a></li>
                      <li><a class="dropdown-item" href="#">Code</a></li>
                      <li><a class="dropdown-item" href="#">id</a></li>
                  </ul>
                  </div>
                  </div>
              </div>
              </div>
          </div>
          <hr/>
          <div className="driver-table">
          <table class="table">
            <thead>
              <tr className='head-tr'>
                <th scope="col" className='taple-head'>Name</th>
                <th scope="col" className='taple-head'>E-mail</th>
                <th scope="col" className='taple-head'>PHONE NUMBER</th>
                <th scope="col" className='taple-head'>Edit / remove</th>
              </tr>
            </thead>
            <tbody>
              <tr className='body-tr'>
                <td>Freelance Driver</td>
                <td>test_freelance_driver@example.com</td>
                <td>+92 335 252 2522</td>
                <td>
                  <button className='btn-table'><i class="fa-solid fa-eye me-3"></i>View</button>
                  <button className='btn-table active'><i class="fa-solid fa-pen me-3"></i>View</button>
                  <button className='btn-table'><i class="fa-solid fa-user me-3"></i>View</button>
                </td>
              </tr>
              <tr className='body-tr'>
                <td>Freelance Driver</td>
                <td>test_freelance_driver@example.com</td>
                <td>+92 335 252 2522</td>
                <td>
                  <button className='btn-table'><i class="fa-solid fa-eye me-3"></i>View</button>
                  <button className='btn-table active'><i class="fa-solid fa-pen me-3"></i>View</button>
                  <button className='btn-table'><i class="fa-solid fa-user me-3"></i>View</button>
                </td>
              </tr>
              <tr className='body-tr'>
                <td>Freelance Driver</td>
                <td>test_freelance_driver@example.com</td>
                <td>+92 335 252 2522</td>
                <td>
                  <button className='btn-table'><i class="fa-solid fa-eye me-3"></i>View</button>
                  <button className='btn-table active'><i class="fa-solid fa-pen me-3"></i>View</button>
                  <button className='btn-table'><i class="fa-solid fa-user me-3"></i>View</button>
                </td>
              </tr>
              <tr className='body-tr'>
                <td>Freelance Driver</td>
                <td>test_freelance_driver@example.com</td>
                <td>+92 335 252 2522</td>
                <td>
                  <button className='btn-table'><i class="fa-solid fa-eye me-3"></i>View</button>
                  <button className='btn-table active'><i class="fa-solid fa-pen me-3"></i>View</button>
                  <button className='btn-table'><i class="fa-solid fa-user me-3"></i>View</button>
                </td>
              </tr>
              <tr className='body-tr'>
                <td>Freelance Driver</td>
                <td>test_freelance_driver@example.com</td>
                <td>+92 335 252 2522</td>
                <td>
                  <button className='btn-table'><i class="fa-solid fa-eye me-3"></i>View</button>
                  <button className='btn-table active'><i class="fa-solid fa-pen me-3"></i>View</button>
                  <button className='btn-table'><i class="fa-solid fa-user me-3"></i>View</button>
                </td>
              </tr>
              <tr className='body-tr'>
                <td>Freelance Driver</td>
                <td>test_freelance_driver@example.com</td>
                <td>+92 335 252 2522</td>
                <td>
                  <button className='btn-table'><i class="fa-solid fa-eye me-3"></i>View</button>
                  <button className='btn-table active'><i class="fa-solid fa-pen me-3"></i>View</button>
                  <button className='btn-table'><i class="fa-solid fa-user me-3"></i>View</button>
                </td>
              </tr>
              <tr className='body-tr'>
                <td>Freelance Driver</td>
                <td>test_freelance_driver@example.com</td>
                <td>+92 335 252 2522</td>
                <td>
                  <button className='btn-table'><i class="fa-solid fa-eye me-3"></i>View</button>
                  <button className='btn-table active'><i class="fa-solid fa-pen me-3"></i>View</button>
                  <button className='btn-table'><i class="fa-solid fa-user me-3"></i>View</button>
                </td>
              </tr>


            </tbody>
          </table>
          </div>
        </div>
    </div>
  )
}

export default Drivers
