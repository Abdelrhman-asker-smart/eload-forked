import React from 'react'
import './ShipmentOrder.css';
import Code from '../../icons/code.png';

const ShipmentOrder = () => {
  return (
    <div className="container-fluid px-4">
            <div className="orderhead">
                    <div className="text-head">Shipment: ELD00027</div>
                    <div className="img-head">
                        {/* <Code/> */}
                        img
                    </div>
            </div>
            <hr/>
            <div className="order-info">
                <div className="row">
                    <div className="info-box col-4">
                        <span className='info-text'>Shipper</span>
                        <h4>Mahmoud Abuzeid</h4>
                    </div>
                    <div className="info-box col-4">
                        <span className='info-text'>Receiver</span>
                        <h4>Mahmouud Ahmed</h4>
                    </div>
                    <div className="info-box col-4 text-center">
                        <span className='info-text text-center'>Shipper</span>
                        <button className='btn-info'>On the Way</button>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="element-order">
                <div className="row">
                    <div className="element-box col-2 br-element">
                        <div className="head-element">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.16992 7.44L11.9999 12.55L20.7699 7.47" stroke="#B2B2B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 21.61V12.54" stroke="#B2B2B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.93014 2.48001L4.59014 5.44001C3.38014 6.11001 2.39014 7.79001 2.39014 9.17001V14.82C2.39014 16.2 3.38014 17.88 4.59014 18.55L9.93014 21.52C11.0701 22.15 12.9401 22.15 14.0801 21.52L19.4201 18.55C20.6301 17.88 21.6201 16.2 21.6201 14.82V9.17001C21.6201 7.79001 20.6301 6.11001 19.4201 5.44001L14.0801 2.47001C12.9301 1.84001 11.0701 1.84001 9.93014 2.48001Z" stroke="#B2B2B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div className="element-info">Shipment type</div>
                        </div>
                        <div className="text-element text-center">
                            <h4>Dry 40 high cube</h4>
                        </div>
                    </div>
                    <div className="element-box col-2 br-element">
                        <div className="head-element">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9999 13.43C13.723 13.43 15.1199 12.0331 15.1199 10.31C15.1199 8.58687 13.723 7.19 11.9999 7.19C10.2768 7.19 8.87988 8.58687 8.87988 10.31C8.87988 12.0331 10.2768 13.43 11.9999 13.43Z" stroke="#A9A9A9" stroke-width="1.5"/>
                            <path d="M3.6202 8.49C5.5902 -0.169998 18.4202 -0.159997 20.3802 8.5C21.5302 13.58 18.3702 17.88 15.6002 20.54C13.5902 22.48 10.4102 22.48 8.3902 20.54C5.6302 17.88 2.4702 13.57 3.6202 8.49Z" stroke="#A9A9A9" stroke-width="1.5"/>
                            </svg>
                            <div className="element-info">PICKUP ADDRESS</div>
                        </div>
                        <div className="text-element text-center">
                            <h4>Sharafiyah Dist,Jeddah</h4>
                        </div>
                    </div>
                    <div className="element-box col-2 br-element">
                        <div className="head-element">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9999 13.43C13.723 13.43 15.1199 12.0331 15.1199 10.31C15.1199 8.58687 13.723 7.19 11.9999 7.19C10.2768 7.19 8.87988 8.58687 8.87988 10.31C8.87988 12.0331 10.2768 13.43 11.9999 13.43Z" stroke="#A9A9A9" stroke-width="1.5"/>
                            <path d="M3.6202 8.49C5.5902 -0.169998 18.4202 -0.159997 20.3802 8.5C21.5302 13.58 18.3702 17.88 15.6002 20.54C13.5902 22.48 10.4102 22.48 8.3902 20.54C5.6302 17.88 2.4702 13.57 3.6202 8.49Z" stroke="#A9A9A9" stroke-width="1.5"/>
                            </svg>
                            <div className="element-info">Drop of ADDRESS</div>
                        </div>
                        <div className="text-element text-center">
                            <h4>Al Ta'aown Dist,Mecca</h4>
                        </div>
                    </div>
                    <div className="element-box col-2 br-element">
                        <div className="head-element">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 2V5" stroke="#A9A9A9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16 2V5" stroke="#A9A9A9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.5 9.09H20.5" stroke="#A9A9A9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#A9A9A9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.6947 13.7H15.7037" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.6947 16.7H15.7037" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.9955 13.7H12.0045" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.9955 16.7H12.0045" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.29431 13.7H8.30329" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.29431 16.7H8.30329" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div className="element-info">Created Date</div>
                        </div>
                        <div className="text-element text-center">
                            <h4>27/12  08:00-10:00 PST</h4>
                        </div>
                    </div>
                    <div className="element-box col-2 ">
                        <div className="head-element">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 2V5" stroke="#A9A9A9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16 2V5" stroke="#A9A9A9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.5 9.09H20.5" stroke="#A9A9A9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#A9A9A9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.6947 13.7H15.7037" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.6947 16.7H15.7037" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.9955 13.7H12.0045" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.9955 16.7H12.0045" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.29431 13.7H8.30329" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.29431 16.7H8.30329" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div className="element-info">Shipped Date</div>
                        </div>
                        <div className="text-element ">
                            <h4>27/12  08:00-10:00 PST</h4>
                        </div>
                    </div>
                    <div className="element-box col-2 br-element">
                        <div className="head-element">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 2V12C15 13.1 14.1 14 13 14H2V6C2 3.79 3.79 2 6 2H15Z" stroke="#B2B2B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 14V17C22 18.66 20.66 20 19 20H18C18 18.9 17.1 18 16 18C14.9 18 14 18.9 14 20H10C10 18.9 9.1 18 8 18C6.9 18 6 18.9 6 20H5C3.34 20 2 18.66 2 17V14H13C14.1 14 15 13.1 15 12V5H16.84C17.56 5 18.22 5.39001 18.58 6.01001L20.29 9H19C18.45 9 18 9.45 18 10V13C18 13.55 18.45 14 19 14H22Z" stroke="#B2B2B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" stroke="#B2B2B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" stroke="#B2B2B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z" stroke="#B2B2B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                            <div className="element-info">Shipment type</div>
                        </div>
                        <div className="text-element ">
                            <h4>Dry 40 high cube</h4>
                        </div>
                    </div>
                    <div className="element-box col-2 br-element">
                        <div className="head-element">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9V15C3 20 5 22 10 22Z" stroke="#B2B2B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.25 8.29C14.26 5.63 9.74 5.63 6.75 8.29L8.93 11.79C10.68 10.23 13.32 10.23 15.07 11.79L17.25 8.29Z" stroke="#B2B2B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                            <div className="element-info">Shipment type</div>
                        </div>
                        <div className="text-element ">
                            <h4>Dry 40 high cube</h4>
                        </div>
                    </div>
                    <div className="element-box col-2 br-element">
                        <div className="head-element">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.3 7.91998V13.07C19.3 16.15 17.54 17.47 14.9 17.47H6.10995C5.65995 17.47 5.22996 17.43 4.82996 17.34C4.57996 17.3 4.33996 17.23 4.11996 17.15C2.61996 16.59 1.70996 15.29 1.70996 13.07V7.91998C1.70996 4.83998 3.46995 3.52002 6.10995 3.52002H14.9C17.14 3.52002 18.75 4.47001 19.18 6.64001C19.25 7.04001 19.3 7.44998 19.3 7.91998Z" stroke="#A9A9A9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22.3011 10.9201V16.0701C22.3011 19.1501 20.5411 20.4701 17.9011 20.4701H9.11105C8.37105 20.4701 7.70106 20.3701 7.12106 20.1501C5.93106 19.7101 5.12105 18.8001 4.83105 17.3401C5.23105 17.4301 5.66105 17.4701 6.11105 17.4701H14.9011C17.5411 17.4701 19.3011 16.1501 19.3011 13.0701V7.9201C19.3011 7.4501 19.2611 7.03014 19.1811 6.64014C21.0811 7.04014 22.3011 8.38011 22.3011 10.9201Z" stroke="#A9A9A9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.4984 13.1399C11.9564 13.1399 13.1384 11.9579 13.1384 10.4999C13.1384 9.04185 11.9564 7.85986 10.4984 7.85986C9.04038 7.85986 7.8584 9.04185 7.8584 10.4999C7.8584 11.9579 9.04038 13.1399 10.4984 13.1399Z" stroke="#A9A9A9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.77979 8.29999V12.7" stroke="#A9A9A9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.2217 8.30029V12.7003" stroke="#A9A9A9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                            <div className="element-info">Shipment type</div>
                        </div>
                        <div className="text-element ">
                            <h4>Dry 40 high cube</h4>
                        </div>
                    </div>
                    <div className="element-box col-2 br-element">
                        <div className="head-element">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22.75C8 22.75 4.75 19.88 4.75 16.35V12.65C4.75 12.24 5.09 11.9 5.5 11.9C5.91 11.9 6.25 12.24 6.25 12.65C6.25 15.27 8.72 17.25 12 17.25C15.28 17.25 17.75 15.27 17.75 12.65C17.75 12.24 18.09 11.9 18.5 11.9C18.91 11.9 19.25 12.24 19.25 12.65V16.35C19.25 19.88 16 22.75 12 22.75ZM6.25 16.46C6.32 19.11 8.87 21.25 12 21.25C15.13 21.25 17.68 19.11 17.75 16.46C16.45 17.87 14.39 18.75 12 18.75C9.61 18.75 7.56 17.87 6.25 16.46Z" fill="#A9A9A9"/>
                        <path d="M12 13.75C9.24 13.75 6.75999 12.51 5.54999 10.51C5.02999 9.66 4.75 8.67 4.75 7.65C4.75 5.93 5.52 4.31 6.91 3.09C8.27 1.9 10.08 1.25 12 1.25C13.92 1.25 15.72 1.9 17.09 3.08C18.48 4.31 19.25 5.93 19.25 7.65C19.25 8.67 18.97 9.65 18.45 10.51C17.24 12.51 14.76 13.75 12 13.75ZM12 2.75C10.44 2.75 8.98001 3.27 7.89001 4.23C6.83001 5.15 6.25 6.37 6.25 7.65C6.25 8.4 6.44999 9.1 6.82999 9.73C7.77999 11.29 9.76 12.25 12 12.25C14.24 12.25 16.22 11.28 17.17 9.73C17.56 9.1 17.75 8.4 17.75 7.65C17.75 6.37 17.17 5.15 16.1 4.21C15.01 3.27 13.56 2.75 12 2.75Z" fill="#A9A9A9"/>
                        <path d="M12 18.75C7.87 18.75 4.75 16.13 4.75 12.65V7.65C4.75 4.12 8 1.25 12 1.25C13.92 1.25 15.72 1.9 17.09 3.08C18.48 4.31 19.25 5.93 19.25 7.65V12.65C19.25 16.13 16.13 18.75 12 18.75ZM12 2.75C8.83 2.75 6.25 4.95 6.25 7.65V12.65C6.25 15.27 8.72 17.25 12 17.25C15.28 17.25 17.75 15.27 17.75 12.65V7.65C17.75 6.37 17.17 5.15 16.1 4.21C15.01 3.27 13.56 2.75 12 2.75Z" fill="#A9A9A9"/>
                        </svg>

                            <div className="element-info">Shipment type</div>
                        </div>
                        <div className="text-element ">
                            <h4>Dry 40 high cube</h4>
                        </div>
                    </div>
                    <div className="element-box col-2 br-element">
                        <div className="head-element">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.40002 6.5H15.6C19 6.5 19.34 8.09 19.57 10.03L20.47 17.53C20.76 19.99 20 22 16.5 22H7.51003C4.00003 22 3.24002 19.99 3.54002 17.53L4.44003 10.03C4.66003 8.09 5.00002 6.5 8.40002 6.5Z" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 8V4.5C8 3 9 2 10.5 2H13.5C15 2 16 3 16 4.5V8" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.41 17.03H8" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                            <div className="element-info">Shipment type</div>
                        </div>
                        <div className="text-element ">
                            <h4>Dry 40 high cube</h4>
                        </div>
                    </div>
                    <div className="element-box col-2 br-element">
                        <div className="head-element">
                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1366_11497)">
                        <path d="M10.4624 18C7.29352 18 4.09951 18 0.930646 18C0.653999 18 0.402502 17.949 0.201305 17.745C0.0755561 17.5921 0.000107013 17.4391 0.000107013 17.2351C0.000107013 17.0312 -0.0250427 16.8272 0.125856 16.6742C0.301903 16.4448 0.528251 16.3173 0.830047 16.3173C1.48394 16.3173 2.13783 16.3173 2.81687 16.3173C4.5019 16.3173 6.18693 16.3173 7.87196 16.3173C8.07316 16.3173 8.07316 16.3173 8.07316 16.1133C8.07316 15.5524 8.07316 14.9915 8.07316 14.4306C8.07316 14.3031 8.02286 14.2521 7.92226 14.2011C6.16178 13.4872 4.82885 12.2889 3.97376 10.5552C3.42047 9.43342 3.16897 8.20963 3.24442 6.96034C3.34502 5.27762 3.94861 3.77337 5.0552 2.49858C6.21208 1.1728 7.67077 0.331441 9.40609 0.0764835C11.6444 -0.254961 13.6061 0.331441 15.3163 1.83569C16.6744 3.03399 17.4791 4.56374 17.7055 6.37393C17.9067 7.7762 17.7055 9.12747 17.1019 10.4023C16.272 12.187 14.939 13.4618 13.1283 14.1756C13.0025 14.2266 12.9522 14.3031 12.9522 14.4306C12.9522 14.9915 12.9522 15.5269 12.9522 16.0878C12.9522 16.2918 12.9522 16.2918 13.1534 16.2918C15.4672 16.2918 17.8061 16.2918 20.1199 16.2918C20.3965 16.2918 20.6229 16.3683 20.7989 16.5722C21.0253 16.8272 21.0756 17.1076 20.975 17.4136C20.8744 17.7195 20.648 17.898 20.3211 17.949C20.2205 17.9745 20.1199 17.9745 20.0193 17.9745C16.8253 18 13.6312 18 10.4624 18ZM13.6312 3.72238C12.1726 2.29461 9.28035 1.88668 7.24322 3.77337C5.25639 5.58357 5.1055 8.79603 7.06717 10.8357C9.0037 12.8499 12.2732 12.7479 14.1091 10.6062C15.8947 8.54107 15.5426 5.58357 13.933 4.00283C13.9582 4.05382 13.9582 4.10481 13.9833 4.1558C14.0336 4.35977 14.0085 4.53824 13.8827 4.71671C13.3043 5.43059 12.751 6.14447 12.1726 6.88385C12.0971 6.98583 12.072 7.06232 12.0971 7.1898C12.2732 8.28612 11.2672 9.25495 10.1857 9.05099C9.35579 8.87252 8.7522 8.08215 8.8528 7.26629C8.97855 6.34844 9.70789 5.73654 10.5881 5.78753C10.7139 5.78753 10.7893 5.76204 10.8899 5.68555C11.569 5.12464 12.2732 4.56374 12.9522 4.02833C13.1785 3.79886 13.3797 3.67138 13.6312 3.72238Z" fill="#A9A9A9"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1366_11497">
                        <rect width="21" height="18" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>

                            <div className="element-info">Shipment type</div>
                        </div>
                        <div className="text-element ">
                            <h4>Dry 40 high cube</h4>
                        </div>
                    </div>
                    <div className="element-box col-2 br-element">
                        <div className="head-element">
                        <svg width="23" height="8" viewBox="0 0 23 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.05682 7.30398V0.741477H4.17045V7.30398H3.05682ZM0.332386 4.57955V3.46591H6.89489V4.57955H0.332386Z" fill="#A9A9A9"/>
                        <path d="M22.7841 2.98295V4.54545H16.4205V2.98295H22.7841Z" fill="#A9A9A9"/>
                        </svg>

                            <div className="element-info">Shipment type</div>
                        </div>
                        <div className="text-element ">
                            <h4>Dry 40 high cube</h4>
                        </div>
                    </div>
                    <div className="element-box col-2 br-element">
                        <div className="head-element">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 7H16" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 10.5H13" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                            <div className="element-info">Shipment type</div>
                        </div>
                        <div className="text-element ">
                            <h4>Dry 40 high cube</h4>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="packing-list">
                <div className="head">packing list atachement</div>
                <div className="row">
                    <div className="card-order col-2">
                        <div className="img-box"></div>
                        <div className="card-title text-center">
                            Lorem ipsum dolor sit.
                        </div>
                    </div>
                    <div className="card-order col-2">
                        <div className="img-box"></div>
                        <div className="card-title text-center">
                            Lorem ipsum dolor sit.
                        </div>
                    </div>
                    <div className="card-order col-2">
                        <div className="img-box"></div>
                        <div className="card-title text-center">
                            Lorem ipsum dolor sit.
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="packing-list">
                <div className="head">Other documents</div>
                <div className="row">
                    <div className="card-order col-2">
                        <div className="img-box"></div>
                        <div className="card-title text-center">
                            Lorem ipsum dolor sit.
                        </div>
                    </div>
                    <div className="card-order col-2">
                        <div className="img-box"></div>
                        <div className="card-title text-center">
                            Lorem ipsum dolor sit.
                        </div>
                    </div>
                    <div className="card-order col-2">
                        <div className="img-box"></div>
                        <div className="card-title text-center">
                            Lorem ipsum dolor sit.
                        </div>
                    </div>
                    <div className="card-order col-2">
                        <div className="img-box"></div>
                        <div className="card-title text-center">
                            Lorem ipsum dolor sit.
                        </div>
                    </div>
                    <div className="card-order col-2">
                        <div className="img-box"></div>
                        <div className="card-title text-center">
                            Lorem ipsum dolor sit.
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="packing-list">
                <div className="head">Driver's upload</div>
                <div className="row">
                    <div className="card-order col-2">
                        <div className="img-box"></div>
                        <div className="card-title text-center">
                            Lorem ipsum dolor sit.
                        </div>
                    </div>
                    <div className="card-order col-2">
                        <div className="img-box"></div>
                        <div className="card-title text-center">
                            Lorem ipsum dolor sit.
                        </div>
                    </div>
                    <div className="card-order col-2">
                        <div className="img-box"></div>
                        <div className="card-title text-center">
                            Lorem ipsum dolor sit.
                        </div>
                    </div>
                </div>
            </div>
            <div className="ordertable">
                <div className="orderhead">
                    <div className="text-head">Interested Service provide</div>
                    <div className="backhuling"><div className='orange me-3'></div>Backhuling</div>
                </div>
                <hr />
                <div className="orderbody">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Partner</th>
                            <th scope="col">Contarcted price</th>
                            <th scope="col">Margin</th>
                            <th scope="col">Margin%</th>
                            <th scope="col">mobile</th>
                            <th scope="col">Email</th>
                            <th scope="col">Type</th>
                            <th scope="col">options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-orange'>Driver-name</td>
                            <td>1500 <span className='ms-4'><i class="fa-solid fa-pen"></i></span></td>
                            <td><span className='icon-table-blue me-3'><i class="fa-solid fa-arrow-up"></i></span>480</td>
                            <td><span className='icon-table-blue me-3'><i class="fa-solid fa-arrow-up"></i></span>100</td>
                            <td>+92 435 13 345 23</td>
                            <td>terst-freelancer-driver@example.net</td>
                            <td>freelancer</td>
                            <td><button className='table-btn'><span className='me-3'><i class="fa-solid fa-user-plus"></i></span>Assign</button></td>
                        </tr>
                        <tr>
                            <td className='text-orange'>Driver-name</td>
                            <td>1500</td>
                            <td><span className='icon-table-blue me-3'><i class="fa-solid fa-arrow-up"></i></span>480</td>
                            <td><span className='icon-table-blue me-3'><i class="fa-solid fa-arrow-up"></i></span>100</td>
                            <td>+92 435 13 345 23</td>
                            <td>terst-freelancer-driver@example.net</td>
                            <td>freelancer</td>
                            <td><button className='table-btn'><span className='me-3'><i class="fa-solid fa-user-plus"></i></span>Assign</button></td>
                        </tr>
                        <tr>
                            <td>Freelancer Driver name</td>
                            <td>1500  <span className='ms-4'><i class="fa-solid fa-pen"></i></span></td>
                            <td><span className='icon-table-red me-3'><i class="fa-solid fa-arrow-down"></i></span>-740</td>
                            <td><span className='icon-table-red me-3'><i class="fa-solid fa-arrow-down"></i></span>160</td>
                            <td>+92 435 13 345 23</td>
                            <td>terst-freelancer-driver@example.net</td>
                            <td>freelancer</td>
                            <td><button className='table-btn'><span className='me-3'><i class="fa-solid fa-user-plus"></i></span>Assign</button></td>
                        </tr>
                        <tr>
                            <td>Driver name</td>
                            <td>1500</td>
                            <td><span className='icon-table-red me-3'><i class="fa-solid fa-arrow-down"></i></span>-740</td>
                            <td><span className='icon-table-red me-3'><i class="fa-solid fa-arrow-down"></i></span>160</td>
                            <td>+92 435 13 345 23</td>
                            <td>terst-freelancer-driver@example.net</td>
                            <td>freelancer</td>
                            <td><button className='table-btn'><span className='me-3'><i class="fa-solid fa-user-plus"></i></span>Assign</button></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
            <div className="ordertable">
                <div className="orderhead">
                    <div className="text-head">Eligible Service provide</div>
                    <div className="backhuling"><div className='orange me-3'></div>Backhuling</div>
                </div>
                <hr />
                <div className="orderbody">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Partner</th>
                            <th scope="col">Contarcted price</th>
                            <th scope="col">Margin</th>
                            <th scope="col">Margin%</th>
                            <th scope="col">mobile</th>
                            <th scope="col">Email</th>
                            <th scope="col">Type</th>
                            <th scope="col">options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-orange'>Driver-name</td>
                            <td>1500 <span className='ms-4'><i class="fa-solid fa-pen"></i></span></td>
                            <td><span className='icon-table-blue me-3'><i class="fa-solid fa-arrow-up"></i></span>480</td>
                            <td><span className='icon-table-blue me-3'><i class="fa-solid fa-arrow-up"></i></span>100</td>
                            <td>+92 435 13 345 23</td>
                            <td>terst-freelancer-driver@example.net</td>
                            <td>freelancer</td>
                            <td><button className='table-btn'><span className='me-3'><i class="fa-solid fa-user-plus"></i></span>Assign</button></td>
                        </tr>
                        <tr>
                            <td className='text-orange'>Driver-name</td>
                            <td>1500</td>
                            <td><span className='icon-table-blue me-3'><i class="fa-solid fa-arrow-up"></i></span>480</td>
                            <td><span className='icon-table-blue me-3'><i class="fa-solid fa-arrow-up"></i></span>100</td>
                            <td>+92 435 13 345 23</td>
                            <td>terst-freelancer-driver@example.net</td>
                            <td>freelancer</td>
                            <td><button className='table-btn'><span className='me-3'><i class="fa-solid fa-user-plus"></i></span>Assign</button></td>
                        </tr>
                        <tr>
                            <td>Freelancer Driver name</td>
                            <td>1500  <span className='ms-4'><i class="fa-solid fa-pen"></i></span></td>
                            <td><span className='icon-table-red me-3'><i class="fa-solid fa-arrow-down"></i></span>-740</td>
                            <td><span className='icon-table-red me-3'><i class="fa-solid fa-arrow-down"></i></span>160</td>
                            <td>+92 435 13 345 23</td>
                            <td>terst-freelancer-driver@example.net</td>
                            <td>freelancer</td>
                            <td><button className='table-btn'><span className='me-3'><i class="fa-solid fa-user-plus"></i></span>Assign</button></td>
                        </tr>
                        <tr>
                            <td>Driver name</td>
                            <td>1500</td>
                            <td><span className='icon-table-red me-3'><i class="fa-solid fa-arrow-down"></i></span>-740</td>
                            <td><span className='icon-table-red me-3'><i class="fa-solid fa-arrow-down"></i></span>160</td>
                            <td>+92 435 13 345 23</td>
                            <td>terst-freelancer-driver@example.net</td>
                            <td>freelancer</td>
                            <td><button className='table-btn'><span className='me-3'><i class="fa-solid fa-user-plus"></i></span>Assign</button></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
            <div className="ordertable">
                <div className="orderhead">
                    <div className="text-head">Finacial requests</div>
                    <div className="backhuling"><div className='orange me-3'></div>Backhuling</div>
                </div>
                <hr />
                <div className="orderbody">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Category</th>
                            <th scope="col">Total</th>
                            <th scope="col">desciption</th>
                            <th scope="col">status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>23</td>
                            <td>Desposits</td>
                            <td>100 SAR</td>
                            <td>sfdghfyhglkjhgfdsyzfgjsfhdjjlihguyfutd</td>
                            <td><button className='table-btn-red me-2'>Assign</button><i class="fa-solid fa-pen"></i></td>
                        </tr>
                        <tr>
                            <td>24</td>
                            <td>Desposits</td>
                            <td>100 SAR</td>
                            <td>sfdghfyhglkjhgfdsyzfgjsfhdjjlihguyfutd</td>
                            <td><button className='table-btn-green me-2'>Assign</button><i class="fa-solid fa-pen"></i></td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td>Desposits</td>
                            <td>100 SAR</td>
                            <td>sfdghfyhglkjhgfdsyzfgjsfhdjjlihguyfutd</td>
                            <td><button className='table-btn-red me-2'>Assign</button><i class="fa-solid fa-pen"></i></td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>Desposits</td>
                            <td>100 SAR</td>
                            <td>sfdghfyhglkjhgfdsyzfgjsfhdjjlihguyfutd</td>
                            <td><button className='table-btn-red me-2'>Assign</button><i class="fa-solid fa-pen"></i></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
            <div className="ordertable">
                <div className="orderhead">
                    <div className="text-head">One Time Shippers</div>
                </div>
                <hr />
                <div className="orderbody">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Category</th>
                            <th scope="col">Total</th>
                            <th scope="col">status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Shipper Name</td>
                            <td>100 SAR <span className='text-blue ms-3'>change</span></td>
                            <td><button className='table-btn me-2'>confirm</button></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
  )
}

export default ShipmentOrder