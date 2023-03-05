import React from "react";
import "./Allorders.css";

const Allorders = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {/* filter */}
          <div className="col-md-3 filter-side py-5">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              {/* date-pick */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Pick up date
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    <input type="date" className="date-input py-2 px-2" />
                  </div>
                </div>
              </div>
              {/* city-location */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Location
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body">
                    <label className="my-3">Pick Up City</label>
                    <select
                      className="form-select select-city"
                      aria-label="Default select example"
                    >
                      {/* <option className='w-25' selected>Select City</option> */}
                      <option className="w-25" value="1">
                        Jeddah
                      </option>
                      <option className="w-25" value="2">
                        Mecca
                      </option>
                      <option className="w-25" value="3">
                        Mecca
                      </option>
                    </select>
                    <label className="my-3">Drop off City</label>
                    <select
                      className="form-select select-city"
                      aria-label="Default select example"
                    >
                      {/* <option className='w-25' selected>Select City</option> */}
                      <option className="w-25" value="1">
                        Jeddah
                      </option>
                      <option className="w-25" value="2">
                        Mecca
                      </option>
                      <option className="w-25" value="3">
                        Mecca
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              {/*Truck Type  */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingThree"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    Truck Type
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body">
                    {/* 1 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Container
                      </label>
                    </div>
                    {/* 2 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckChecked"
                      >
                        Dry Van / Enclosed Trailer
                      </label>
                    </div>
                    {/* 3 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Flatbed
                      </label>
                    </div>
                    {/* 4 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Lowboy Trailer
                      </label>
                    </div>
                    {/* 5 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Oil Tanker
                      </label>
                    </div>
                    {/* 6 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Reefer
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/*Commodity  */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingFour"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    Commodity
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFour"
                >
                  <div className="accordion-body">
                    {/* 1 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Beverages
                      </label>
                    </div>
                    {/* 2 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckChecked"
                      >
                        Cement
                      </label>
                    </div>
                    {/* 3 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Chemical
                      </label>
                    </div>
                    {/* 4 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        FMCG
                      </label>
                    </div>
                    {/* 5 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        General Goods
                      </label>
                    </div>
                    {/* 6 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Oil & Gas
                      </label>
                    </div>
                    {/* 7 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Pharmaceutical
                      </label>
                    </div>
                    {/* 8 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Textile
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/*Shipment Type  */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingFive"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFive"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFive"
                  >
                    Shipment Type
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFive"
                >
                  <div className="accordion-body">
                    {/* 1 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Frozen 1
                      </label>
                    </div>
                    {/* 2 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckChecked"
                      >
                        Frozen 2
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/*Unit of measurment  */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSix"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseSix"
                  >
                    Unit of measurment
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingSix"
                >
                  <div className="accordion-body">
                    {/* 1 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Pallets
                      </label>
                    </div>
                    {/* 2 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckChecked"
                      >
                        Pieces
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* btns */}
              <button type="button" className="btn-search btn btn-primary">
                Search
              </button>
              <br />
              <button type="button" className="btn-rest btn btn-primary">
                Rest
              </button>
            </div>
          </div>

          {/* orders-data */}
          <div className="col-md-9 p-3 ">
            <div className="orders-box my-2">
              <h2># ELD00028</h2>
              <div className="data-info row py-3 mx-3">
                <div className="col-md-3 col-data py-2">
                  <div className="title-box d-flex align-items-center">
                    <svg
                      className="mx-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z"
                        stroke="#A9A9A9"
                        stroke-width="1.5"
                      />
                      <path
                        d="M3.6202 8.49C5.5902 -0.169998 18.4202 -0.159997 20.3802 8.5C21.5302 13.58 18.3702 17.88 15.6002 20.54C13.5902 22.48 10.4102 22.48 8.3902 20.54C5.6302 17.88 2.4702 13.57 3.6202 8.49Z"
                        stroke="#A9A9A9"
                        stroke-width="1.5"
                      />
                    </svg>
                    <p className="title">PICKUP ADDRESS</p>
                  </div>
                  <div className="px-3">
                    <span className="addres-span">Sharafiyah Dist,Jeddah</span>
                    <br />
                    <span className="text-info">FaisalAbdullah</span>
                    <br />
                    <span className="text-info">+92 335 2522522</span>
                  </div>
                </div>
                <div className="col-md-3 col-data py-2 col2-data">
                  <div className="title d-flex align-items-center">
                    <svg
                      className="mx-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z"
                        stroke="#A9A9A9"
                        stroke-width="1.5"
                      />
                      <path
                        d="M3.6202 8.49C5.5902 -0.169998 18.4202 -0.159997 20.3802 8.5C21.5302 13.58 18.3702 17.88 15.6002 20.54C13.5902 22.48 10.4102 22.48 8.3902 20.54C5.6302 17.88 2.4702 13.57 3.6202 8.49Z"
                        stroke="#A9A9A9"
                        stroke-width="1.5"
                      />
                    </svg>
                    <p className="title">Drop of ADDRESS</p>
                  </div>
                  <div className="px-3">
                    <span className="addres-span">Al Ta'aown Dist,Mecca</span>
                    <br />
                    <span className="text-info">FaisalAbdullah</span>
                    <br />
                    <span className="text-info">+92 335 2522522</span>
                  </div>
                </div>
                <div className="col-md-2 col-data col2-data">
                  {/* t-1 */}
                  <div className="box mb-3">
                    <div className="title d-flex align-items-center">
                      <svg
                        className="mx-2"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 2V12C15 13.1 14.1 14 13 14H2V6C2 3.79 3.79 2 6 2H15Z"
                          stroke="#B2B2B2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M22 14V17C22 18.66 20.66 20 19 20H18C18 18.9 17.1 18 16 18C14.9 18 14 18.9 14 20H10C10 18.9 9.1 18 8 18C6.9 18 6 18.9 6 20H5C3.34 20 2 18.66 2 17V14H13C14.1 14 15 13.1 15 12V5H16.84C17.56 5 18.22 5.39001 18.58 6.01001L20.29 9H19C18.45 9 18 9.45 18 10V13C18 13.55 18.45 14 19 14H22Z"
                          stroke="#B2B2B2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z"
                          stroke="#B2B2B2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z"
                          stroke="#B2B2B2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z"
                          stroke="#B2B2B2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <p className="title">TRuck TYPE</p>
                    </div>
                    <div className="px-3">
                      <span className="addres-span">Container</span>
                    </div>
                  </div>
                  {/* t-2 */}

                  <div className="title d-flex align-items-center">
                    <svg
                      className="mx-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46994"
                        stroke="#B2B2B2"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 21.61V12.54"
                        stroke="#B2B2B2"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.93014 2.48004L4.59014 5.44004C3.38014 6.11004 2.39014 7.79004 2.39014 9.17004V14.82C2.39014 16.2 3.38014 17.88 4.59014 18.55L9.93014 21.52C11.0701 22.15 12.9401 22.15 14.0801 21.52L19.4201 18.55C20.6301 17.88 21.6201 16.2 21.6201 14.82V9.17004C21.6201 7.79004 20.6301 6.11004 19.4201 5.44004L14.0801 2.47004C12.9301 1.84004 11.0701 1.84004 9.93014 2.48004Z"
                        stroke="#B2B2B2"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <p className="title">Shipment type</p>
                  </div>
                  <div className="px-3">
                    <span className="addres-span">Dry 40 high cube</span>
                  </div>
                </div>
                {/* col-4 */}
                <div className="col-md-2 col-data">
                  {/* t-1 */}
                  <div className="box mb-3">
                    <div className="title d-flex align-items-center">
                      <svg
                        className="mx-2"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9V15C3 20 5 22 10 22Z"
                          stroke="#B2B2B2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.25 8.29004C14.26 5.63004 9.74 5.63004 6.75 8.29004L8.93 11.79C10.68 10.23 13.32 10.23 15.07 11.79L17.25 8.29004Z"
                          stroke="#B2B2B2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p>WEIGHT</p>
                    </div>
                    <div className="px-3">
                      <span>2000 kg</span>
                    </div>
                  </div>
                  {/* t-2 */}
                  <div className="title d-flex align-items-center">
                    <svg
                      className="mx-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.3 7.91998V13.07C19.3 16.15 17.54 17.47 14.9 17.47H6.10995C5.65995 17.47 5.22996 17.43 4.82996 17.34C4.57996 17.3 4.33996 17.23 4.11996 17.15C2.61996 16.59 1.70996 15.29 1.70996 13.07V7.91998C1.70996 4.83998 3.46995 3.52002 6.10995 3.52002H14.9C17.14 3.52002 18.75 4.47001 19.18 6.64001C19.25 7.04001 19.3 7.44998 19.3 7.91998Z"
                        stroke="#A9A9A9"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22.3011 10.9201V16.0701C22.3011 19.1501 20.5411 20.4701 17.9011 20.4701H9.11105C8.37105 20.4701 7.70106 20.3701 7.12106 20.1501C5.93106 19.7101 5.12105 18.8001 4.83105 17.3401C5.23105 17.4301 5.66105 17.4701 6.11105 17.4701H14.9011C17.5411 17.4701 19.3011 16.1501 19.3011 13.0701V7.9201C19.3011 7.4501 19.2611 7.03014 19.1811 6.64014C21.0811 7.04014 22.3011 8.38011 22.3011 10.9201Z"
                        stroke="#A9A9A9"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.4984 13.1399C11.9564 13.1399 13.1384 11.9579 13.1384 10.4999C13.1384 9.04185 11.9564 7.85986 10.4984 7.85986C9.04038 7.85986 7.8584 9.04185 7.8584 10.4999C7.8584 11.9579 9.04038 13.1399 10.4984 13.1399Z"
                        stroke="#A9A9A9"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.77979 8.30005V12.7001"
                        stroke="#A9A9A9"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.2217 8.30029V12.7003"
                        stroke="#A9A9A9"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <p>Shipment cost</p>
                  </div>
                  <div className="px-3">
                    <span>SAR17,756.000</span>
                  </div>
                </div>
                {/* col-5 */}
                <div className="col-md-2 col-data">
                  {/* t-1 */}
                  <div className="box mb-3">
                    <div className="title d-flex align-items-center">
                      <svg
                        className="mx-2"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 2V5"
                          stroke="#A9A9A9"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16 2V5"
                          stroke="#A9A9A9"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.5 9.08997H20.5"
                          stroke="#A9A9A9"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                          stroke="#A9A9A9"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.6947 13.7H15.7037"
                          stroke="#A9A9A9"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.6947 16.7H15.7037"
                          stroke="#A9A9A9"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.9955 13.7H12.0045"
                          stroke="#A9A9A9"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.9955 16.7H12.0045"
                          stroke="#A9A9A9"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.29431 13.7H8.30329"
                          stroke="#A9A9A9"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.29431 16.7H8.30329"
                          stroke="#A9A9A9"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p>Date</p>
                    </div>
                    <div className="px-3">
                      <span>MON 27/12 08:00-10:00 PST</span>
                    </div>
                  </div>
                  {/* t-2 */}
                  <div className="btn-state px-3">
                    <span>Assigned</span>
                  </div>
                </div>
              </div>
            </div>
            {/* order-2 */}
            <div className="orders-box my-2">
              <h2># ELD00028</h2>
              <div className="data-info row py-3 mx-3">
                <div className="col-md-3 col-data py-2">
                  <div className="title-box d-flex align-items-center">
                    <svg
                      className="mx-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z"
                        stroke="#A9A9A9"
                        stroke-width="1.5"
                      />
                      <path
                        d="M3.6202 8.49C5.5902 -0.169998 18.4202 -0.159997 20.3802 8.5C21.5302 13.58 18.3702 17.88 15.6002 20.54C13.5902 22.48 10.4102 22.48 8.3902 20.54C5.6302 17.88 2.4702 13.57 3.6202 8.49Z"
                        stroke="#A9A9A9"
                        stroke-width="1.5"
                      />
                    </svg>
                    <p className="title">PICKUP ADDRESS</p>
                  </div>
                  <div className="px-3">
                    <span className="addres-span">Sharafiyah Dist,Jeddah</span>
                    <br />
                    <span className="text-info">FaisalAbdullah</span>
                    <br />
                    <span className="text-info">+92 335 2522522</span>
                  </div>
                </div>
                <div className="col-md-3 col-data py-2 col2-data">
                  <div className="title d-flex align-items-center">
                    <svg
                      className="mx-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z"
                        stroke="#A9A9A9"
                        stroke-width="1.5"
                      />
                      <path
                        d="M3.6202 8.49C5.5902 -0.169998 18.4202 -0.159997 20.3802 8.5C21.5302 13.58 18.3702 17.88 15.6002 20.54C13.5902 22.48 10.4102 22.48 8.3902 20.54C5.6302 17.88 2.4702 13.57 3.6202 8.49Z"
                        stroke="#A9A9A9"
                        stroke-width="1.5"
                      />
                    </svg>
                    <p className="title">Drop of ADDRESS</p>
                  </div>
                  <div className="px-3">
                    <span className="addres-span">Al Ta'aown Dist,Mecca</span>
                    <br />
                    <span className="text-info">FaisalAbdullah</span>
                    <br />
                    <span className="text-info">+92 335 2522522</span>
                  </div>
                </div>
                <div className="col-md-2 col-data col2-data">
                  {/* t-1 */}
                  <div className="box mb-3">
                    <div className="title d-flex align-items-center">
                      <svg
                        className="mx-2"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 2V12C15 13.1 14.1 14 13 14H2V6C2 3.79 3.79 2 6 2H15Z"
                          stroke="#B2B2B2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M22 14V17C22 18.66 20.66 20 19 20H18C18 18.9 17.1 18 16 18C14.9 18 14 18.9 14 20H10C10 18.9 9.1 18 8 18C6.9 18 6 18.9 6 20H5C3.34 20 2 18.66 2 17V14H13C14.1 14 15 13.1 15 12V5H16.84C17.56 5 18.22 5.39001 18.58 6.01001L20.29 9H19C18.45 9 18 9.45 18 10V13C18 13.55 18.45 14 19 14H22Z"
                          stroke="#B2B2B2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z"
                          stroke="#B2B2B2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z"
                          stroke="#B2B2B2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z"
                          stroke="#B2B2B2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <p className="title">TRuck TYPE</p>
                    </div>
                    <div className="px-3">
                      <span className="addres-span">Container</span>
                    </div>
                  </div>
                  {/* t-2 */}

                  <div className="title d-flex align-items-center">
                    <svg
                      className="mx-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46994"
                        stroke="#B2B2B2"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 21.61V12.54"
                        stroke="#B2B2B2"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.93014 2.48004L4.59014 5.44004C3.38014 6.11004 2.39014 7.79004 2.39014 9.17004V14.82C2.39014 16.2 3.38014 17.88 4.59014 18.55L9.93014 21.52C11.0701 22.15 12.9401 22.15 14.0801 21.52L19.4201 18.55C20.6301 17.88 21.6201 16.2 21.6201 14.82V9.17004C21.6201 7.79004 20.6301 6.11004 19.4201 5.44004L14.0801 2.47004C12.9301 1.84004 11.0701 1.84004 9.93014 2.48004Z"
                        stroke="#B2B2B2"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <p className="title">Shipment type</p>
                  </div>
                  <div className="px-3">
                    <span className="addres-span">Dry 40 high cube</span>
                  </div>
                </div>
                {/* col-4 */}
                <div className="col-md-2 col-data">
                  {/* t-1 */}
                  <div className="box mb-3">
                    <div className="title d-flex align-items-center">
                      <svg
                        className="mx-2"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9V15C3 20 5 22 10 22Z"
                          stroke="#B2B2B2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.25 8.29004C14.26 5.63004 9.74 5.63004 6.75 8.29004L8.93 11.79C10.68 10.23 13.32 10.23 15.07 11.79L17.25 8.29004Z"
                          stroke="#B2B2B2"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p>WEIGHT</p>
                    </div>
                    <div className="px-3">
                      <span>2000 kg</span>
                    </div>
                  </div>
                  {/* t-2 */}
                  <div className="title d-flex align-items-center">
                    <svg
                      className="mx-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.3 7.91998V13.07C19.3 16.15 17.54 17.47 14.9 17.47H6.10995C5.65995 17.47 5.22996 17.43 4.82996 17.34C4.57996 17.3 4.33996 17.23 4.11996 17.15C2.61996 16.59 1.70996 15.29 1.70996 13.07V7.91998C1.70996 4.83998 3.46995 3.52002 6.10995 3.52002H14.9C17.14 3.52002 18.75 4.47001 19.18 6.64001C19.25 7.04001 19.3 7.44998 19.3 7.91998Z"
                        stroke="#A9A9A9"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22.3011 10.9201V16.0701C22.3011 19.1501 20.5411 20.4701 17.9011 20.4701H9.11105C8.37105 20.4701 7.70106 20.3701 7.12106 20.1501C5.93106 19.7101 5.12105 18.8001 4.83105 17.3401C5.23105 17.4301 5.66105 17.4701 6.11105 17.4701H14.9011C17.5411 17.4701 19.3011 16.1501 19.3011 13.0701V7.9201C19.3011 7.4501 19.2611 7.03014 19.1811 6.64014C21.0811 7.04014 22.3011 8.38011 22.3011 10.9201Z"
                        stroke="#A9A9A9"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.4984 13.1399C11.9564 13.1399 13.1384 11.9579 13.1384 10.4999C13.1384 9.04185 11.9564 7.85986 10.4984 7.85986C9.04038 7.85986 7.8584 9.04185 7.8584 10.4999C7.8584 11.9579 9.04038 13.1399 10.4984 13.1399Z"
                        stroke="#A9A9A9"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.77979 8.30005V12.7001"
                        stroke="#A9A9A9"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.2217 8.30029V12.7003"
                        stroke="#A9A9A9"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <p>Shipment cost</p>
                  </div>
                  <div className="px-3">
                    <span>SAR17,756.000</span>
                  </div>
                </div>
                {/* col-5 */}
                <div className="col-md-2 col-data">
                  {/* t-1 */}
                  <div className="box mb-3">
                    <div className="title d-flex align-items-center">
                      <svg
                        className="mx-2"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 2V5"
                          stroke="#A9A9A9"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16 2V5"
                          stroke="#A9A9A9"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.5 9.08997H20.5"
                          stroke="#A9A9A9"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                          stroke="#A9A9A9"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.6947 13.7H15.7037"
                          stroke="#A9A9A9"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.6947 16.7H15.7037"
                          stroke="#A9A9A9"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.9955 13.7H12.0045"
                          stroke="#A9A9A9"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.9955 16.7H12.0045"
                          stroke="#A9A9A9"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.29431 13.7H8.30329"
                          stroke="#A9A9A9"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.29431 16.7H8.30329"
                          stroke="#A9A9A9"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p>Date</p>
                    </div>
                    <div className="px-3">
                      <span>MON 27/12 08:00-10:00 PST</span>
                    </div>
                  </div>
                  {/* t-2 */}
                  <div className="btn-state px-3">
                    <span>Assigned</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allorders;
