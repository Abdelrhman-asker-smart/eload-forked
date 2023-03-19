import React from 'react';
import './AddEmployees.css'

const AddEmployees = () => {
  return (
    <div className='container addemployees p-5'>
        <h3 className='mb-5'>Employee Informations</h3>
        <div className='row'>
            <div className='col-md-4'>
                <label className='d-block m-2'>Name</label>
                <input type="text" placeholder='name' className='input-box p-2' />
            </div>
            <div className='col-md-4'>
                <label className='d-block m-2'>E-mail</label>
                <input type="email" placeholder='name' className='input-box p-2' />
            </div>
            <div className='col-md-4'>
                <label className='d-block m-2'>Passoword</label>
                <input type="password" placeholder='******' className='input-box p-2' />
            </div>
        </div>

        <button className='btn-save my-5' style={{marginLeft:"40%"}}
            data-bs-toggle="modal"
            href="#exampleModalToggle"
        >Save</button>


              {/* modal */}
              <div
          className="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabIndex="-1"
          >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content"
              style={{ borderRadius: "25px", width: "80%" }}
            >
              <div className="modal-header border-0 justify-content-end">
               
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
              </div>
              <div
                className="modal-body d-flex text-center "
                style={{ marginLeft: "15%" , marginTop: "-25px"}}
              >
                <h3
                  className="my-4 mx-4"
                  style={{ fontSize: "50px", fontWeight: "500" }}
                >
                  Save
                </h3>
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 105 105"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M70.8313 8.75H34.1687C18.2437 8.75 8.75 18.2437 8.75 34.1687V70.7875C8.75 86.7562 18.2437 96.25 34.1687 96.25H70.7875C86.7125 96.25 96.2062 86.7563 96.2062 70.8313V34.1687C96.25 18.2437 86.7563 8.75 70.8313 8.75ZM73.4125 42.4375L48.6062 67.2437C47.9937 67.8563 47.1625 68.2062 46.2875 68.2062C45.4125 68.2062 44.5812 67.8563 43.9688 67.2437L31.5875 54.8625C30.3187 53.5938 30.3187 51.4937 31.5875 50.225C32.8562 48.9562 34.9562 48.9562 36.225 50.225L46.2875 60.2875L68.775 37.8C70.0438 36.5313 72.1438 36.5313 73.4125 37.8C74.6813 39.0688 74.6813 41.125 73.4125 42.4375Z"
                    fill="#CBFF39"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default AddEmployees