import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import "./NavbarRes.css";
import Cookies from "js-cookie";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Navbar({ setLogin, clrUserData, searchMovie }) {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

  const breadcrumbs = pathSegments.map((segment, index, array) => {
    const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const isLast = index === array.length - 1;
    const nextSegmentIsId = index < array.length - 1 && !isNaN(array[index + 1]);
    const isId = !isNaN(segment);

    return (
      <React.Fragment key={url}>
        {index > 0 && <span>{isId ? ' / ' : ' > '}</span>}
        {isLast || isId || nextSegmentIsId ? (
          <span>{segment}</span>
        ) : (
          <Link to={url}>{segment}</Link>
        )}
      </React.Fragment>
    );
  });
  // console.log(pathanme);
  const [user, setUser] = useState({
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
  });
  const [user_type, setUserType] = useState(localStorage.getItem('user_type'));
  const [cookie] = useCookies(["eload_token"]);

  const [notifications_count, setNotificationsCount] = useState(0);
  const [notifications, setNotifications] = useState([]);

  // endpoint is the API endpoint, url is the frontend page url
  const entity_mappings = {
    shipment: { endpoint: 'shipments', url: 'invoices' },
    invoice: { endpoint: 'invoices', url: 'invoices' }
  }

  const getNotifications = async () => {
    try {
      const response = await axios.get(
        'https://dev.eload.smart.sa/api/v1/notifications',
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${cookie.eload_token}`,
            "api-key":
              "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
          },
        }
      );
      // console.log(response.data.data,"nottt");
      let data = response.data.data;
      setNotifications(data);
      setNotificationsCount(data.length);
    } catch (e) {
      console.log(e);
    }
  };

  const readNotification = async (id) => {
    try {
      const response = await axios.get(
        `https://dev.eload.smart.sa/api/v1/notifications/${id}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${cookie.eload_token}`,
            "api-key":
              "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
          },
        }
      );
      console.log(response.data.data);
      setNotificationsCount(notifications_count - 1);
    } catch (e) {
      console.log(e);
    }
  };

  const sendInterest = async (e, shipment_id) => {
    try {
      const response = await axios.post(
        'https://dev.eload.smart.sa/api/v1/interests',
        {shipment_id},
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${cookie.eload_token}`,
            "api-key":
              "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
          },
        }
      );
      console.log(response.data.data);
      alert('Sent Successfully!');
    } catch (e) {
      console.log(e);
    }
  };

  const showNotification = (e, notification) => {
    e.preventDefault();

    let Msg = ({ closeToast, toastProps }) => (
      <div>
        <h5>{notification.title}</h5>
        <p>{notification.body}</p>
        {
          notification.notificationable_type==="shipment"?
          <>
            <div className="row py-3 px-2">
              <div className="col-md-8 d-flex align-items-center my-2">
              <svg className="mx-2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 7H16" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 10.5H13" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

                <h4 className="m-0">Status:</h4>
              </div>
              <div className="col-md-4 d-flex align-items-center my-2">
                <label className="mx-2">{notification.payload.status}</label>
              </div>
              <div className="col-md-8 d-flex align-items-center my-2">
              <svg className="mx-2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z" stroke="#A9A9A9" stroke-width="1.5"/>
              <path d="M3.6202 8.49C5.5902 -0.169998 18.4202 -0.159997 20.3802 8.5C21.5302 13.58 18.3702 17.88 15.6002 20.54C13.5902 22.48 10.4102 22.48 8.3902 20.54C5.6302 17.88 2.4702 13.57 3.6202 8.49Z" stroke="#A9A9A9" stroke-width="1.5"/>
              </svg>

                <h4 className="my-0 mx-1">Pickup:</h4>
                </div>
                <div className="col-md-4 d-flex align-items-center my-2">
                <label className="mx-2">{notification.payload.from_city_name}</label>
              </div>
              <div className="col-md-8 d-flex align-items-center my-2">
              <svg className="mx-2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z" stroke="#A9A9A9" stroke-width="1.5"/>
              <path d="M3.6202 8.49C5.5902 -0.169998 18.4202 -0.159997 20.3802 8.5C21.5302 13.58 18.3702 17.88 15.6002 20.54C13.5902 22.48 10.4102 22.48 8.3902 20.54C5.6302 17.88 2.4702 13.57 3.6202 8.49Z" stroke="#A9A9A9" stroke-width="1.5"/>
              </svg>
                <h4 className="m-0">DropOff:</h4>
                </div>
                <div className="col-md-4 d-flex align-items-center my-2">
                <label className="mx-2">{notification.payload.to_city_name}</label>
              </div>
              <div className="col-md-7 d-flex align-items-center my-2">
              <svg className="mx-2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 2V5" stroke="#A9A9A9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 2V5" stroke="#A9A9A9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.5 9.08984H20.5" stroke="#A9A9A9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#A9A9A9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.6947 13.7002H15.7037" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.6947 16.7002H15.7037" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.9955 13.7002H12.0045" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.9955 16.7002H12.0045" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.29431 13.7002H8.30329" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.29431 16.7002H8.30329" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

                <h4 className="m-0">Pickup Date:</h4>
                </div>
                <div className="col-md-5 d-flex align-items-center my-2">
                <label className="mx-2">{notification.payload.pickup_date}</label>
              </div>
              <div className="col-md-8 d-flex align-items-center my-2">
              <svg className="mx-2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46994" stroke="#B2B2B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 21.61V12.54" stroke="#B2B2B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.93014 2.47979L4.59014 5.43979C3.38014 6.10979 2.39014 7.78979 2.39014 9.16979V14.8198C2.39014 16.1998 3.38014 17.8798 4.59014 18.5498L9.93014 21.5198C11.0701 22.1498 12.9401 22.1498 14.0801 21.5198L19.4201 18.5498C20.6301 17.8798 21.6201 16.1998 21.6201 14.8198V9.16979C21.6201 7.78979 20.6301 6.10979 19.4201 5.43979L14.0801 2.46979C12.9301 1.83979 11.0701 1.83979 9.93014 2.47979Z" stroke="#B2B2B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

                <h4 className="m-0">Shipment Type:</h4>
                </div>
                <div className="col-md-4 d-flex align-items-center my-2">
                <label className="mx-2">{notification.payload.shipment_type_name}</label>
              </div>
              <div className="col-md-8 d-flex align-items-center my-2">
              <svg className="mx-2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 2V12C15 13.1 14.1 14 13 14H2V6C2 3.79 3.79 2 6 2H15Z" stroke="#B2B2B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 14V17C22 18.66 20.66 20 19 20H18C18 18.9 17.1 18 16 18C14.9 18 14 18.9 14 20H10C10 18.9 9.1 18 8 18C6.9 18 6 18.9 6 20H5C3.34 20 2 18.66 2 17V14H13C14.1 14 15 13.1 15 12V5H16.84C17.56 5 18.22 5.39001 18.58 6.01001L20.29 9H19C18.45 9 18 9.45 18 10V13C18 13.55 18.45 14 19 14H22Z" stroke="#B2B2B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" stroke="#B2B2B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" stroke="#B2B2B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z" stroke="#B2B2B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

                <h4 className="m-0">Truck Type:</h4>
                </div>
                <div className="col-md-4 d-flex align-items-center my-2">
                <label className="mx-2">{notification.payload.truck_type_name}</label>
              </div>
              
              {
                notification.payload.provider_price && (user_type === 'admin' || user_type === 'provider') && (
                  <>
                  <div className="col-md-8 d-flex align-items-center my-2">
                  <svg className="mx-2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22.7499C8 22.7499 4.75 19.8799 4.75 16.3499V12.6499C4.75 12.2399 5.09 11.8999 5.5 11.8999C5.91 11.8999 6.25 12.2399 6.25 12.6499C6.25 15.2699 8.72 17.2499 12 17.2499C15.28 17.2499 17.75 15.2699 17.75 12.6499C17.75 12.2399 18.09 11.8999 18.5 11.8999C18.91 11.8999 19.25 12.2399 19.25 12.6499V16.3499C19.25 19.8799 16 22.7499 12 22.7499ZM6.25 16.4599C6.32 19.1099 8.87 21.2499 12 21.2499C15.13 21.2499 17.68 19.1099 17.75 16.4599C16.45 17.8699 14.39 18.7499 12 18.7499C9.61 18.7499 7.56 17.8699 6.25 16.4599Z" fill="#A9A9A9"/>
                  <path d="M12 13.75C9.24 13.75 6.75999 12.51 5.54999 10.51C5.02999 9.66 4.75 8.67 4.75 7.65C4.75 5.93 5.52 4.31 6.91 3.09C8.27 1.9 10.08 1.25 12 1.25C13.92 1.25 15.72 1.9 17.09 3.08C18.48 4.31 19.25 5.93 19.25 7.65C19.25 8.67 18.97 9.65 18.45 10.51C17.24 12.51 14.76 13.75 12 13.75ZM12 2.75C10.44 2.75 8.98001 3.27 7.89001 4.23C6.83001 5.15 6.25 6.37 6.25 7.65C6.25 8.4 6.44999 9.1 6.82999 9.73C7.77999 11.29 9.76 12.25 12 12.25C14.24 12.25 16.22 11.28 17.17 9.73C17.56 9.1 17.75 8.4 17.75 7.65C17.75 6.37 17.17 5.15 16.1 4.21C15.01 3.27 13.56 2.75 12 2.75Z" fill="#A9A9A9"/>
                  <path d="M12 18.75C7.87 18.75 4.75 16.13 4.75 12.65V7.65C4.75 4.12 8 1.25 12 1.25C13.92 1.25 15.72 1.9 17.09 3.08C18.48 4.31 19.25 5.93 19.25 7.65V12.65C19.25 16.13 16.13 18.75 12 18.75ZM12 2.75C8.83 2.75 6.25 4.95 6.25 7.65V12.65C6.25 15.27 8.72 17.25 12 17.25C15.28 17.25 17.75 15.27 17.75 12.65V7.65C17.75 6.37 17.17 5.15 16.1 4.21C15.01 3.27 13.56 2.75 12 2.75Z" fill="#A9A9A9"/>
                  </svg>
  
                    <h4 className="m-0">Provider Price:</h4>
                  </div>
                  <div className="col-md-4 d-flex align-items-center my-2">
                    <label className="mx-2">{notification.payload.provider_price}</label>
                  </div>
                  </>
                )}
            </div>
          </>
           :
          <>        
            <div className="row py-3 px-2">
              <div className="col-md-8 d-flex align-items-center my-2">
              <svg className="mx-2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 7H16" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 10.5H13" stroke="#A9A9A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <h4 className="m-0">Status:</h4>
              </div>
              <div className="col-md-4 d-flex align-items-center my-2">
                <label className="mx-2">{notification.payload.status}</label>
              </div>
              {/* currency */}
              <div className="col-md-8 d-flex align-items-center my-2">
              <svg className="mx-2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22.7499C8 22.7499 4.75 19.8799 4.75 16.3499V12.6499C4.75 12.2399 5.09 11.8999 5.5 11.8999C5.91 11.8999 6.25 12.2399 6.25 12.6499C6.25 15.2699 8.72 17.2499 12 17.2499C15.28 17.2499 17.75 15.2699 17.75 12.6499C17.75 12.2399 18.09 11.8999 18.5 11.8999C18.91 11.8999 19.25 12.2399 19.25 12.6499V16.3499C19.25 19.8799 16 22.7499 12 22.7499ZM6.25 16.4599C6.32 19.1099 8.87 21.2499 12 21.2499C15.13 21.2499 17.68 19.1099 17.75 16.4599C16.45 17.8699 14.39 18.7499 12 18.7499C9.61 18.7499 7.56 17.8699 6.25 16.4599Z" fill="#A9A9A9"/>
              <path d="M12 13.75C9.24 13.75 6.75999 12.51 5.54999 10.51C5.02999 9.66 4.75 8.67 4.75 7.65C4.75 5.93 5.52 4.31 6.91 3.09C8.27 1.9 10.08 1.25 12 1.25C13.92 1.25 15.72 1.9 17.09 3.08C18.48 4.31 19.25 5.93 19.25 7.65C19.25 8.67 18.97 9.65 18.45 10.51C17.24 12.51 14.76 13.75 12 13.75ZM12 2.75C10.44 2.75 8.98001 3.27 7.89001 4.23C6.83001 5.15 6.25 6.37 6.25 7.65C6.25 8.4 6.44999 9.1 6.82999 9.73C7.77999 11.29 9.76 12.25 12 12.25C14.24 12.25 16.22 11.28 17.17 9.73C17.56 9.1 17.75 8.4 17.75 7.65C17.75 6.37 17.17 5.15 16.1 4.21C15.01 3.27 13.56 2.75 12 2.75Z" fill="#A9A9A9"/>
              <path d="M12 18.75C7.87 18.75 4.75 16.13 4.75 12.65V7.65C4.75 4.12 8 1.25 12 1.25C13.92 1.25 15.72 1.9 17.09 3.08C18.48 4.31 19.25 5.93 19.25 7.65V12.65C19.25 16.13 16.13 18.75 12 18.75ZM12 2.75C8.83 2.75 6.25 4.95 6.25 7.65V12.65C6.25 15.27 8.72 17.25 12 17.25C15.28 17.25 17.75 15.27 17.75 12.65V7.65C17.75 6.37 17.17 5.15 16.1 4.21C15.01 3.27 13.56 2.75 12 2.75Z" fill="#A9A9A9"/>
              </svg>
                <h4 className="m-0">Currency:</h4>
              </div>
              <div className="col-md-4 d-flex align-items-center my-2">
                <label className="mx-2">{notification.payload.currency}</label>
              </div>
              {/* du-date */}
              <div className="col-md-7 d-flex align-items-center my-2">
              <svg className="mx-2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 2V5" stroke="#A9A9A9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 2V5" stroke="#A9A9A9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.5 9.08984H20.5" stroke="#A9A9A9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#A9A9A9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.6947 13.7002H15.7037" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.6947 16.7002H15.7037" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.9955 13.7002H12.0045" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.9955 16.7002H12.0045" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.29431 13.7002H8.30329" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.29431 16.7002H8.30329" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <h4 className="m-0">Due date:</h4>
              </div>
              <div className="col-md-5 d-flex align-items-center my-2">
                <label className="mx-2">{notification.payload.due_date}</label>
              </div>
              {/* total */}
              <div className="col-md-8 d-flex align-items-center my-2">
              <svg className="mx-2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22.7499C8 22.7499 4.75 19.8799 4.75 16.3499V12.6499C4.75 12.2399 5.09 11.8999 5.5 11.8999C5.91 11.8999 6.25 12.2399 6.25 12.6499C6.25 15.2699 8.72 17.2499 12 17.2499C15.28 17.2499 17.75 15.2699 17.75 12.6499C17.75 12.2399 18.09 11.8999 18.5 11.8999C18.91 11.8999 19.25 12.2399 19.25 12.6499V16.3499C19.25 19.8799 16 22.7499 12 22.7499ZM6.25 16.4599C6.32 19.1099 8.87 21.2499 12 21.2499C15.13 21.2499 17.68 19.1099 17.75 16.4599C16.45 17.8699 14.39 18.7499 12 18.7499C9.61 18.7499 7.56 17.8699 6.25 16.4599Z" fill="#A9A9A9"/>
              <path d="M12 13.75C9.24 13.75 6.75999 12.51 5.54999 10.51C5.02999 9.66 4.75 8.67 4.75 7.65C4.75 5.93 5.52 4.31 6.91 3.09C8.27 1.9 10.08 1.25 12 1.25C13.92 1.25 15.72 1.9 17.09 3.08C18.48 4.31 19.25 5.93 19.25 7.65C19.25 8.67 18.97 9.65 18.45 10.51C17.24 12.51 14.76 13.75 12 13.75ZM12 2.75C10.44 2.75 8.98001 3.27 7.89001 4.23C6.83001 5.15 6.25 6.37 6.25 7.65C6.25 8.4 6.44999 9.1 6.82999 9.73C7.77999 11.29 9.76 12.25 12 12.25C14.24 12.25 16.22 11.28 17.17 9.73C17.56 9.1 17.75 8.4 17.75 7.65C17.75 6.37 17.17 5.15 16.1 4.21C15.01 3.27 13.56 2.75 12 2.75Z" fill="#A9A9A9"/>
              <path d="M12 18.75C7.87 18.75 4.75 16.13 4.75 12.65V7.65C4.75 4.12 8 1.25 12 1.25C13.92 1.25 15.72 1.9 17.09 3.08C18.48 4.31 19.25 5.93 19.25 7.65V12.65C19.25 16.13 16.13 18.75 12 18.75ZM12 2.75C8.83 2.75 6.25 4.95 6.25 7.65V12.65C6.25 15.27 8.72 17.25 12 17.25C15.28 17.25 17.75 15.27 17.75 12.65V7.65C17.75 6.37 17.17 5.15 16.1 4.21C15.01 3.27 13.56 2.75 12 2.75Z" fill="#A9A9A9"/>
              </svg>
                <h4 className="m-0">Total:</h4>
              </div>
              <div className="col-md-4 d-flex align-items-center my-2">
                <label className="mx-2">{notification.payload.total}</label>
              </div>
            </div>  
          </>
        }
        <a 
          href={`/${entity_mappings[notification.notificationable_type].url}/${notification.payload.id}`} 
          className="btn btndetails">
          View Details
        </a>
        {
          notification.payload.status === 'READY' && user_type === 'provider' &&
          <button className="btn btn-success" onClick={(e) => sendInterest(e, notification.payload.id)}>I'm Interested!</button>
        }

        {/* <button className="btn btn-danger" onClick={closeToast}>Close</button> */}
      </div>
    )

    toast(<Msg />)
    readNotification(notification.id);
  };
  // console.log(notifications,"notification");

  useEffect(() => {
    getNotifications();
  }, []);
  // console.log(entity_mappings[notification.notificationable_type].url,"eeee");
  return (
    <>
    <ToastContainer
      position="top-right"
      autoClose={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      theme="light"
    />

      <div className="header">
        <div className="container-fluid section-nav">
          <div className="content d-flex justify-content-between align-items-center">
            <div className="path">
            <p>
              <Link to="/">Dashboard</Link>
              {location.pathname !== "/" && <span> &gt; </span>}
              {breadcrumbs}
            </p>
            </div>
            <div className="user-side d-flex justify-content-between align-items-center">
              <div className="notification mx-2">
                {/* ------notification-------- */}
                <ul className="nav navbar-nav ms-auto">
                  <li className="nav-item dropdown noti-dropdown">
                    <a
                      href="/#"
                      className="nav-link dropdown-toggle notification-bell"
                      data-bs-toggle="dropdown"
                    >
                      <i className="fa-solid fa-bell"></i>
                      {/* <span className="position-absolute">{notifications_count > 0 ? notifications_count : ''}</span> */}
                    </a>
                    <div className="dropdown-menu dropdown-menu-end" style={{height: "288px", overflowY: "scroll"}}>
                      <a href="#" className="dropdown-item header-noti">
                        Notifications
                      </a>

                      {notifications.map(notification => (
                        <>
                        <div className="dropdown-divider"></div>
                        <a 
                          onClick={(e) => showNotification(e, notification)}
                          href={`/${notification.notificationable_type}/${notification.payload.id}`} 
                          className="dropdown-item not d-block">
                          <p>{notification.title}</p>
                          <label className="time">{notification.body}</label>
                        </a>
                        </>
                      ))}

                      {/* <div className="dropdown-divider"></div> */}
                    </div>
                  </li>
                </ul>
              </div>
              {/* -----------------------------------user--------------------------------------- */}
              <div
                className="user-icon mx-3"
                // onClick={() => {

                // Cookies.remove("eload_token", { path: " /" });
                // localStorage.removeItem("email");
                // localStorage.removeItem("name");
                // setLogin(false);
                // window.location.replace('/login')
                // }}
              >
                {/* ------user-dropdown-------- */}
                <ul className="nav navbar-nav ms-auto ">
                  <li
                    className="nav-item dropdown user-dropdown"
                    style={{ marginTop: "-23%" }}
                  >
                    <a
                      href="/#"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <i className="fa-solid fa-user"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="/#" className="dropdown-item d-flex">
                        <svg
                          className="mx-1"
                          width="60"
                          height="50"
                          viewBox="0 0 64 66"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="32" cy="32" r="32" fill="#D9D9D9" />
                          <path
                            d="M39.6859 32.0557H24.2085V49.7649H39.6859V32.0557Z"
                            fill="#E2988F"
                          />
                          <path
                            d="M47.1363 19.6488C46.2968 17.581 44.513 18.5884 44.513 18.5884C45.5623 9.20354 40.8404 3 31.9736 3C23.1069 3 18.385 9.20354 19.3818 18.5884C19.3818 18.5884 17.6504 17.581 16.7585 19.6488C15.8666 21.7167 17.4406 26.5416 18.4374 28.0793C19.3818 29.6169 21.1132 30.7834 21.1132 30.7834C21.1132 30.7834 21.2181 32.5331 21.6903 33.6996C22.11 34.9191 27.1992 40.4333 28.6683 41.2816C30.6095 42.4481 33.4951 42.4481 35.2265 41.2816C36.6956 40.4333 41.7847 34.9191 42.2045 33.6996C42.6242 32.4801 42.7816 30.7834 42.7816 30.7834C42.7816 30.7834 44.513 29.6169 45.4574 28.0793C46.4542 26.5416 48.0282 21.7167 47.1363 19.6488Z"
                            fill="#E2988F"
                          />
                          <path
                            d="M32.0793 42.3429C30.8726 42.3429 29.6134 42.0247 28.6166 41.4415C27.7246 40.9113 25.626 38.8434 24.1045 37.0937L24.4193 36.8286C25.9933 38.5783 27.987 40.5932 28.8264 41.0703C30.7152 42.1838 33.4959 42.1838 35.1748 41.0703C36.0142 40.5932 38.008 38.5783 39.5819 36.8286L39.8967 37.0937C38.3752 38.8434 36.2766 40.9113 35.3847 41.4415C34.4403 42.0778 33.286 42.3429 32.0793 42.3429Z"
                            fill="#C46966"
                          />
                          <path
                            d="M20.8162 26.7495L20.4517 26.7949L20.9461 30.847L21.3106 30.8015L20.8162 26.7495Z"
                            fill="#C46966"
                          />
                          <path
                            d="M43.0484 26.7493L42.6074 30.7544L43.0246 30.8013L43.4656 26.7962L43.0484 26.7493Z"
                            fill="#C46966"
                          />
                          <path
                            d="M17.9656 24.2614C17.8607 23.9432 17.1786 21.2922 18.123 20.5498C18.4378 20.3378 18.7001 20.3378 18.8575 20.3908C19.3297 20.5498 19.5921 21.1861 19.5921 21.2391L19.2248 21.3982C19.1723 21.2391 18.9625 20.868 18.7001 20.815C18.5952 20.7619 18.4378 20.815 18.3329 20.921C17.7558 21.3452 18.0181 23.1479 18.2804 24.2083L17.9656 24.2614Z"
                            fill="#C46966"
                          />
                          <path
                            d="M46.0354 24.2617L45.6681 24.1556C45.9304 23.0952 46.1927 21.2925 45.6156 20.8683C45.4582 20.7622 45.3533 20.7622 45.2484 20.8153C44.9336 20.9213 44.7237 21.3985 44.7237 21.3985L44.3564 21.2394C44.4089 21.1864 44.6188 20.5502 45.091 20.3911C45.2484 20.3381 45.5107 20.3381 45.8255 20.4971C46.7699 21.2925 46.0878 23.9966 46.0354 24.2617Z"
                            fill="#C46966"
                          />
                          <path
                            d="M20.6411 23.5194C23.2643 23.5194 21.2706 14.9829 23.3693 12.862C24.4186 11.8016 25.9401 11.9607 27.2518 12.3318C28.7733 12.703 30.3472 13.2332 31.9737 13.2862C33.7051 13.3392 35.279 12.703 36.9579 12.2788C38.2171 11.9607 39.6337 11.8546 40.6306 12.862C42.6767 14.9299 40.683 23.5194 43.3588 23.5194C43.2014 21.5576 43.1489 19.3837 44.618 18.5884C45.5624 9.20354 40.8404 3 31.9737 3C23.107 3 18.385 9.20354 19.3819 18.5884C20.5886 19.3307 20.8509 21.4515 20.6411 23.5194Z"
                            fill="#4C224B"
                          />
                          <path
                            d="M57 51.3027C48.7104 47.5912 39.7387 46.2656 39.7387 46.2656C35.5939 50.6134 27.8814 50.6664 24.2613 46.2656C24.2613 46.2656 15.2371 47.5912 7 51.3027C12.0892 59.8392 21.3757 65.5655 31.9738 65.5655C42.5719 65.5655 51.8583 59.8392 57 51.3027Z"
                            fill="#F4BA5D"
                          />
                          <path
                            d="M22.1108 46.5842L24.2095 42.7666L31.03 48.9171L26.8852 53.53L22.1108 46.5842Z"
                            fill="white"
                          />
                          <path
                            d="M41.7852 46.5842L39.739 42.7666L32.9185 48.9171L37.0633 53.53L41.7852 46.5842Z"
                            fill="white"
                          />
                        </svg>

                        <div className="d-block mx-2">
                          <p>Mahmoud Ahmed</p>
                          <label className="time">Admin</label>
                        </div>
                      </a>
                      {/* <div className="dropdown-divider"></div> */}
                      <a
                        href="/#"
                        className="dropdown-item d-block text-center "
                      >
                        <NavLink to="profilepage">
                        <button className="mx-3 btn-profile">
                          View Profile
                        </button>

                        </NavLink>
                      </a>
                      {/* <div className="dropdown-divider"></div> */}
                      <a
                        href="/login"
                        className="dropdown-item d-block text-center "
                      >
                        <button
                          className="mx-3 btn-logout"
                          onClick={() => {
                            Cookies.remove("eload_token", { path: " /" });
                            localStorage.removeItem("email");
                            localStorage.removeItem("name");
                            setLogin(false);
                            window.location.replace("/login");
                          }}
                        >
                          Sign out{" "}
                        </button>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <span style={{ fontWeight: "500", fontSize: "16px" }}>
                Hi, {user.name}

              </span>

            </div>
          </div>
        </div>
      </div>

      {/* <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <Link className="navbar-brand fw-bolder text-white" to="/">
            <img src={Logo} alt="" className='w-50' />
            </Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

            
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">

                {
                    user? <li className="nav-item userControl">
                        <i className="fa-solid fa-user"></i>
                        <span className="nav-link  d-inline user text-white">Hi,Admin</span> */}
      {/* <span className="nav-link  d-inline user text-info ">{user?.name?.length > 0 && user?.name?.slice(0,12)+'...'}</span> */}
      {/* <span
                       onClick={() => {
                        
                        Cookies.remove("eload_token", { path: "/" });
                        localStorage.removeItem("email");
                        localStorage.removeItem("name");
                        setLogin(false);
                         }}
                        className="nav-link d-inline logout user">Logut</span>
                        </li> : null
                }
                
                
                 </ul>
            </div>
        </div>
    </nav> */}
    </>
  );
}
