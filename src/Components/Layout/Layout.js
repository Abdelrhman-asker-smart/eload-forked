import React from "react";
import { Routes, Route, Router, NavLink } from "react-router-dom";
// import Home from "../Home/Home";
// import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";
// import { useState, useEffect } from "react";
// import { useCookies } from "react-cookie";
import Dashbord from "../Dashboard/Dashbord";
import User from "../User/User"
// import Sidebar from "../Sidebar/Sidebar";
import Logo from './Eloadlogo.png'
import Shipments from '../Shipments/Shipments.jsx'
import Reports from '../Reports/Reports.jsx'
import Shipmentsettings from "../Shipmentsettings/Shipmentsettings";
import Transactions from "../Transactions/Transactions";

import './Layout.css';

const Layout = ({ setLogin }) => {
  return (
    <>
      
      <div className="d-flex">
        {/* <Router> */}
          {/* <Sidebar /> */}
          <div className="sidebar ">
            <div className="img-logo mx-2 my-5">
              <img src={Logo} alt="" className="w-75 " />
            </div>
            {/* all-list */}
            <ul className="navbar-nav ">
              {/* item-1 */}
              <li className="nav-item mt-4 px-2 py-1">
                {/* <NavLink className="d-flex justify-content-start align-items-center" */}
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-green-500 font-bold d-flex justify-content-start align-items-center"
                      : "d-flex justify-content-start align-items-center"
                  }
                  to="/dashboard"
                >
                  <svg
                    className="svg-icon"
                    width="47"
                    height="47"
                    viewBox="0 0 47 47"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.9666 7.83337C9.23615 7.83337 7.83331 9.23622 7.83331 10.9667V17.2334C7.83331 18.9639 9.23615 20.3667 10.9666 20.3667H17.2333C18.9638 20.3667 20.3666 18.9639 20.3666 17.2334V10.9667C20.3666 9.23622 18.9638 7.83337 17.2333 7.83337H10.9666ZM10.9666 26.6334C9.23615 26.6334 7.83331 28.0362 7.83331 29.7667V36.0334C7.83331 37.7639 9.23615 39.1667 10.9666 39.1667H17.2333C18.9638 39.1667 20.3666 37.7639 20.3666 36.0334V29.7667C20.3666 28.0362 18.9638 26.6334 17.2333 26.6334H10.9666ZM26.6333 29.7667C26.6333 28.0362 28.0362 26.6334 29.7666 26.6334H36.0333C37.7638 26.6334 39.1666 28.0362 39.1666 29.7667V36.0334C39.1666 37.7639 37.7638 39.1667 36.0333 39.1667H29.7666C28.0362 39.1667 26.6333 37.7639 26.6333 36.0334V29.7667ZM29.7666 7.83337C28.0362 7.83337 26.6333 9.23622 26.6333 10.9667V17.2334C26.6333 18.9639 28.0362 20.3667 29.7666 20.3667H36.0333C37.7638 20.3667 39.1666 18.9639 39.1666 17.2334V10.9667C39.1666 9.23622 37.7638 7.83337 36.0333 7.83337H29.7666Z"
                    />
                  </svg>
                  <span className="mx-2">Dashboard</span>
                </NavLink>
              </li>
              <hr />
              {/* item-2 */}
              <li className="nav-item mt-4 px-2 py-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "activeStyle d-flex justify-content-start align-items-center"
                      : "d-flex justify-content-start align-items-center"
                  }
                  to="/shipments"
                >
                  <svg
                    className="svg-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.2 10.49L13.23 8.51999L10.02 5.30999C9.33999 4.63999 8.17999 5.11999 8.17999 6.07999V12.31V17.92C8.17999 18.88 9.33999 19.36 10.02 18.68L15.2 13.5C16.03 12.68 16.03 11.32 15.2 10.49Z" />
                  </svg>
                  {/* box-icon */}
                  <svg
                    className="svg-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.2102 7.82043L12.5102 12.2804C12.2002 12.4604 11.8102 12.4604 11.4902 12.2804L3.79021 7.82043C3.24021 7.50043 3.10021 6.75043 3.52021 6.28043C3.81021 5.95043 4.14021 5.68043 4.49021 5.49043L9.91022 2.49043C11.0702 1.84043 12.9502 1.84043 14.1102 2.49043L19.5302 5.49043C19.8802 5.68043 20.2102 5.96043 20.5002 6.28043C20.9002 6.75043 20.7602 7.50043 20.2102 7.82043Z" />
                    <path d="M11.4305 14.1399V20.9599C11.4305 21.7199 10.6605 22.2199 9.98047 21.8899C7.92047 20.8799 4.45047 18.9899 4.45047 18.9899C3.23047 18.2999 2.23047 16.5599 2.23047 15.1299V9.96988C2.23047 9.17988 3.06047 8.67988 3.74047 9.06988L10.9305 13.2399C11.2305 13.4299 11.4305 13.7699 11.4305 14.1399Z" />
                    <path d="M12.5703 14.1399V20.9599C12.5703 21.7199 13.3403 22.2199 14.0203 21.8899C16.0803 20.8799 19.5503 18.9899 19.5503 18.9899C20.7703 18.2999 21.7703 16.5599 21.7703 15.1299V9.96988C21.7703 9.17988 20.9403 8.67988 20.2603 9.06988L13.0703 13.2399C12.7703 13.4299 12.5703 13.7699 12.5703 14.1399Z" />
                  </svg>

                  <span className="mx-2">Shipments</span>
                </NavLink>
              </li>
              {/* item-3 */}
              <li className="nav-item mt-4 px-2 py-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "activeStyle d-flex justify-content-start align-items-center"
                      : "d-flex justify-content-start align-items-center"
                  }
                  to="/user"
                >
                  <svg
                    className="svg-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.2 10.49L13.23 8.51999L10.02 5.30999C9.33999 4.63999 8.17999 5.11999 8.17999 6.07999V12.31V17.92C8.17999 18.88 9.33999 19.36 10.02 18.68L15.2 13.5C16.03 12.68 16.03 11.32 15.2 10.49Z" />
                  </svg>
                  {/* box-icon */}
                  <svg
                    className="svg-icon"
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.62502 1.83334C6.11419 1.83334 4.07294 3.78584 4.07294 6.18751C4.07294 8.54334 5.99919 10.45 8.51002 10.5325C8.58669 10.5233 8.66335 10.5233 8.72085 10.5325C8.74002 10.5325 8.7496 10.5325 8.76877 10.5325C8.77835 10.5325 8.77835 10.5325 8.78794 10.5325C11.2413 10.45 13.1675 8.54334 13.1771 6.18751C13.1771 3.78584 11.1359 1.83334 8.62502 1.83334Z" />
                    <path d="M13.4934 12.9708C10.8196 11.2658 6.45919 11.2658 3.76627 12.9708C2.54919 13.75 1.87836 14.8042 1.87836 15.9317C1.87836 17.0592 2.54919 18.1042 3.75669 18.8742C5.09836 19.7358 6.86169 20.1667 8.62502 20.1667C10.3884 20.1667 12.1517 19.7358 13.4934 18.8742C14.7009 18.095 15.3717 17.05 15.3717 15.9133C15.3621 14.7858 14.7009 13.7408 13.4934 12.9708Z" />
                    <path d="M19.1571 6.72834C19.3104 8.50668 17.9879 10.065 16.1575 10.2758C16.1479 10.2758 16.1479 10.2758 16.1383 10.2758H16.1096C16.0521 10.2758 15.9946 10.2758 15.9467 10.2942C15.0171 10.34 14.1642 10.0558 13.5221 9.53334C14.5092 8.69001 15.0746 7.42501 14.9596 6.05001C14.8925 5.30751 14.6242 4.62918 14.2217 4.05168C14.5858 3.87751 15.0075 3.76751 15.4388 3.73084C17.3171 3.57501 18.9942 4.91334 19.1571 6.72834Z" />
                    <path d="M21.0738 15.2075C20.9971 16.0967 20.4029 16.8667 19.4063 17.3892C18.4479 17.8933 17.2404 18.1317 16.0425 18.1042C16.7325 17.5083 17.135 16.7658 17.2117 15.9775C17.3075 14.8408 16.7421 13.75 15.6113 12.8792C14.9692 12.3933 14.2217 12.0083 13.4071 11.7242C15.525 11.1375 18.1892 11.5317 19.8279 12.7967C20.7096 13.475 21.16 14.3275 21.0738 15.2075Z" />
                  </svg>
                  <span className="mx-2">Users</span>
                </NavLink>
              </li>
              {/* item-4 */}
              <li className="nav-item mt-4 px-2 py-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "activeStyle d-flex justify-content-start align-items-center"
                      : "d-flex justify-content-start align-items-center"
                  }
                  to="/reports"
                >
                  <svg
                    className="svg-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.2 10.49L13.23 8.51999L10.02 5.30999C9.33999 4.63999 8.17999 5.11999 8.17999 6.07999V12.31V17.92C8.17999 18.88 9.33999 19.36 10.02 18.68L15.2 13.5C16.03 12.68 16.03 11.32 15.2 10.49Z" />
                  </svg>
                  {/* box-icon */}
                  <svg
                    className="svg-icon"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.7053 14.0394V16.233C18.7053 17.9265 17.3277 19.3042 15.6342 19.3042H6.85957C5.16607 19.3042 3.78845 17.9265 3.78845 16.233V15.6627C3.78845 14.2851 4.9116 13.1619 6.28922 13.1619H17.8278C18.3104 13.1619 18.7053 13.5568 18.7053 14.0394Z" />
                    <path d="M14.318 1.75494H8.17576C4.66591 1.75494 3.78845 2.63241 3.78845 6.14225V12.7934C4.45532 12.2055 5.33278 11.8457 6.28922 11.8457H17.8278C18.3104 11.8457 18.7053 11.4509 18.7053 10.9683V6.14225C18.7053 2.63241 17.8278 1.75494 14.318 1.75494ZM12.1243 9.43273H7.73703C7.37727 9.43273 7.07893 9.13439 7.07893 8.77463C7.07893 8.41488 7.37727 8.11654 7.73703 8.11654H12.1243C12.4841 8.11654 12.7824 8.41488 12.7824 8.77463C12.7824 9.13439 12.4841 9.43273 12.1243 9.43273ZM14.7567 6.36162H7.73703C7.37727 6.36162 7.07893 6.06328 7.07893 5.70352C7.07893 5.34376 7.37727 5.04542 7.73703 5.04542H14.7567C15.1165 5.04542 15.4148 5.34376 15.4148 5.70352C15.4148 6.06328 15.1165 6.36162 14.7567 6.36162Z" />
                  </svg>
                  <span className="mx-2">Reports</span>
                </NavLink>
              </li>
              {/* item-5 */}
              <li className="nav-item mt-4 px-2 py-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "activeStyle d-flex justify-content-start align-items-center"
                      : "d-flex justify-content-start align-items-center"
                  }
                  to="/transactions"
                >
                  <svg
                    className="svg-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.2 10.49L13.23 8.51999L10.02 5.30999C9.33999 4.63999 8.17999 5.11999 8.17999 6.07999V12.31V17.92C8.17999 18.88 9.33999 19.36 10.02 18.68L15.2 13.5C16.03 12.68 16.03 11.32 15.2 10.49Z" />
                  </svg>
                  {/* box-icon */}
                  <svg
                    className="svg-icon"
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.0833 13.75C21.0833 17.2975 18.0838 20.1667 14.375 20.1667L15.3812 18.5625"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.91669 8.24999C1.91669 4.70249 4.91627 1.83333 8.62502 1.83333L7.61877 3.43749"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M21.0833 3.84999V3.95083C21.0833 4.20749 20.8725 4.40916 20.6042 4.40916H11.9792C11.7108 4.40916 11.5 4.20749 11.5 3.95083V3.84999C11.5 2.23666 11.9217 1.83333 13.6275 1.83333H18.9558C20.6617 1.83333 21.0833 2.23666 21.0833 3.84999Z" />
                    <path d="M11.9792 5.32584C11.7108 5.32584 11.5 5.5275 11.5 5.78417V6.70084V7.60834C11.5 9.22167 11.9217 9.625 13.6275 9.625H18.9558C20.6617 9.625 21.0833 9.22167 21.0833 7.60834V6.70084V5.78417C21.0833 5.5275 20.8725 5.32584 20.6042 5.32584H11.9792Z" />
                    <path d="M11.5 14.3917V14.4925C11.5 14.7492 11.2892 14.9508 11.0209 14.9508H2.39585C2.12752 14.9508 1.91669 14.7492 1.91669 14.4925V14.3917C1.91669 12.7783 2.33835 12.375 4.04419 12.375H9.37252C11.0784 12.375 11.5 12.7783 11.5 14.3917Z" />
                    <path d="M2.39585 15.8675C2.12752 15.8675 1.91669 16.0692 1.91669 16.3258V17.2425V18.15C1.91669 19.7633 2.33835 20.1667 4.04419 20.1667H9.37252C11.0784 20.1667 11.5 19.7633 11.5 18.15V17.2425V16.3258C11.5 16.0692 11.2892 15.8675 11.0209 15.8675H2.39585Z" />
                  </svg>
                  <span className="mx-2">Transactions</span>
                </NavLink>
              </li>
              {/* item-6 */}
              <li className="nav-item mt-4 px-2 py-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "activeStyle d-flex justify-content-start align-items-center"
                      : "d-flex justify-content-start align-items-center"
                  }
                  to="/shipmentsettings"
                >
                  <svg
                    className="svg-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.2 10.49L13.23 8.51999L10.02 5.30999C9.33999 4.63999 8.17999 5.11999 8.17999 6.07999V12.31V17.92C8.17999 18.88 9.33999 19.36 10.02 18.68L15.2 13.5C16.03 12.68 16.03 11.32 15.2 10.49Z" />
                  </svg>
                  {/* box-icon */}
                  <svg
                    className="svg-icon"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.4 6.14667C12.1933 6.14667 11.7 5.29333 12.3 4.24667C12.6466 3.64 12.44 2.86667 11.8333 2.52L10.68 1.86C10.1533 1.54666 9.47331 1.73333 9.15998 2.26L9.08665 2.38666C8.48665 3.43333 7.49998 3.43333 6.89331 2.38666L6.81998 2.26C6.51998 1.73333 5.83998 1.54666 5.31331 1.86L4.15998 2.52C3.55331 2.86667 3.34665 3.64667 3.69331 4.25333C4.29998 5.29333 3.80665 6.14667 2.59998 6.14667C1.90665 6.14667 1.33331 6.71333 1.33331 7.41333V8.58667C1.33331 9.28 1.89998 9.85333 2.59998 9.85333C3.80665 9.85333 4.29998 10.7067 3.69331 11.7533C3.34665 12.36 3.55331 13.1333 4.15998 13.48L5.31331 14.14C5.83998 14.4533 6.51998 14.2667 6.83331 13.74L6.90665 13.6133C7.50665 12.5667 8.49331 12.5667 9.09998 13.6133L9.17331 13.74C9.48665 14.2667 10.1666 14.4533 10.6933 14.14L11.8466 13.48C12.4533 13.1333 12.66 12.3533 12.3133 11.7533C11.7066 10.7067 12.2 9.85333 13.4066 9.85333C14.1 9.85333 14.6733 9.28666 14.6733 8.58667V7.41333C14.6666 6.72 14.1 6.14667 13.4 6.14667ZM7.99998 10.1667C6.80665 10.1667 5.83331 9.19333 5.83331 8C5.83331 6.80666 6.80665 5.83333 7.99998 5.83333C9.19331 5.83333 10.1666 6.80666 10.1666 8C10.1666 9.19333 9.19331 10.1667 7.99998 10.1667Z" />
                    <path d="M24.375 9.84167C23.6208 9.84167 23.3125 9.30833 23.6875 8.65417C23.9041 8.275 23.775 7.79167 23.3958 7.575L22.675 7.1625C22.3458 6.96667 21.9208 7.08333 21.725 7.4125L21.6791 7.49167C21.3041 8.14583 20.6875 8.14583 20.3083 7.49167L20.2625 7.4125C20.075 7.08333 19.65 6.96667 19.3208 7.1625L18.6 7.575C18.2208 7.79167 18.0916 8.27917 18.3083 8.65833C18.6875 9.30833 18.3791 9.84167 17.625 9.84167C17.1916 9.84167 16.8333 10.1958 16.8333 10.6333V11.3667C16.8333 11.8 17.1875 12.1583 17.625 12.1583C18.3791 12.1583 18.6875 12.6917 18.3083 13.3458C18.0916 13.725 18.2208 14.2083 18.6 14.425L19.3208 14.8375C19.65 15.0333 20.075 14.9167 20.2708 14.5875L20.3166 14.5083C20.6916 13.8542 21.3083 13.8542 21.6875 14.5083L21.7333 14.5875C21.9291 14.9167 22.3541 15.0333 22.6833 14.8375L23.4041 14.425C23.7833 14.2083 23.9125 13.7208 23.6958 13.3458C23.3166 12.6917 23.625 12.1583 24.3791 12.1583C24.8125 12.1583 25.1708 11.8042 25.1708 11.3667V10.6333C25.1666 10.2 24.8125 9.84167 24.375 9.84167ZM21 12.3542C20.2541 12.3542 19.6458 11.7458 19.6458 11C19.6458 10.2542 20.2541 9.64583 21 9.64583C21.7458 9.64583 22.3541 10.2542 22.3541 11C22.3541 11.7458 21.7458 12.3542 21 12.3542Z" />
                    <path d="M18.375 19.8417C17.6208 19.8417 17.3125 19.3083 17.6875 18.6542C17.9041 18.275 17.775 17.7917 17.3958 17.575L16.675 17.1625C16.3458 16.9667 15.9208 17.0833 15.725 17.4125L15.6791 17.4917C15.3041 18.1458 14.6875 18.1458 14.3083 17.4917L14.2625 17.4125C14.075 17.0833 13.65 16.9667 13.3208 17.1625L12.6 17.575C12.2208 17.7917 12.0916 18.2792 12.3083 18.6583C12.6875 19.3083 12.3791 19.8417 11.625 19.8417C11.1916 19.8417 10.8333 20.1958 10.8333 20.6333V21.3667C10.8333 21.8 11.1875 22.1583 11.625 22.1583C12.3791 22.1583 12.6875 22.6917 12.3083 23.3458C12.0916 23.725 12.2208 24.2083 12.6 24.425L13.3208 24.8375C13.65 25.0333 14.075 24.9167 14.2708 24.5875L14.3166 24.5083C14.6916 23.8542 15.3083 23.8542 15.6875 24.5083L15.7333 24.5875C15.9291 24.9167 16.3541 25.0333 16.6833 24.8375L17.4041 24.425C17.7833 24.2083 17.9125 23.7208 17.6958 23.3458C17.3166 22.6917 17.625 22.1583 18.3791 22.1583C18.8125 22.1583 19.1708 21.8042 19.1708 21.3667V20.6333C19.1666 20.2 18.8125 19.8417 18.375 19.8417ZM15 22.3542C14.2541 22.3542 13.6458 21.7458 13.6458 21C13.6458 20.2542 14.2541 19.6458 15 19.6458C15.7458 19.6458 16.3541 20.2542 16.3541 21C16.3541 21.7458 15.7458 22.3542 15 22.3542Z" />
                  </svg>
                  <span className="mx-2">Shipment settings</span>
                </NavLink>
              </li>
              <hr />
              {/* item-7 */}
              <li className="nav-item mt-4 px-2 py-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "activeStyle d-flex justify-content-start align-items-center"
                      : "d-flex justify-content-start align-items-center"
                  }
                  to="/dashboard"
                >
                  <svg
                    className="svg-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.2 10.49L13.23 8.51999L10.02 5.30999C9.33999 4.63999 8.17999 5.11999 8.17999 6.07999V12.31V17.92C8.17999 18.88 9.33999 19.36 10.02 18.68L15.2 13.5C16.03 12.68 16.03 11.32 15.2 10.49Z" />
                  </svg>
                  {/* box-icon */}
                  <svg
                    className="svg-icon"
                    width="29"
                    height="30"
                    viewBox="0 0 29 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.05 20.95L9.2 22.8C8.81 23.19 8.19 23.19 7.79 22.81C7.68 22.7 7.57 22.6 7.46 22.49C6.43 21.45 5.5 20.36 4.67 19.22C3.85 18.08 3.19 16.94 2.71 15.81C2.24 14.67 2 13.58 2 12.54C2 11.86 2.12 11.21 2.36 10.61C2.6 10 2.98 9.44 3.51 8.94C4.15 8.31 4.85 8 5.59 8C5.87 8 6.15 8.06 6.4 8.18C6.66 8.3 6.89 8.48 7.07 8.74L9.39 12.01C9.57 12.26 9.7 12.49 9.79 12.71C9.88 12.92 9.93 13.13 9.93 13.32C9.93 13.56 9.86 13.8 9.72 14.03C9.59 14.26 9.4 14.5 9.16 14.74L8.4 15.53C8.29 15.64 8.24 15.77 8.24 15.93C8.24 16.01 8.25 16.08 8.27 16.16C8.3 16.24 8.33 16.3 8.35 16.36C8.53 16.69 8.84 17.12 9.28 17.64C9.73 18.16 10.21 18.69 10.73 19.22C10.83 19.32 10.94 19.42 11.04 19.52C11.44 19.91 11.45 20.55 11.05 20.95Z" />
                    <path d="M21.97 24.33C21.97 24.61 21.92 24.9 21.82 25.18C21.79 25.26 21.76 25.34 21.72 25.42C21.55 25.78 21.33 26.12 21.04 26.44C20.55 26.98 20.01 27.37 19.4 27.62C19.39 27.62 19.38 27.63 19.37 27.63C18.78 27.87 18.14 28 17.45 28C16.43 28 15.34 27.76 14.19 27.27C13.04 26.78 11.89 26.12 10.75 25.29C10.36 25 9.96998 24.71 9.59998 24.4L12.87 21.13C13.15 21.34 13.4 21.5 13.61 21.61C13.66 21.63 13.72 21.66 13.79 21.69C13.87 21.72 13.95 21.73 14.04 21.73C14.21 21.73 14.34 21.67 14.45 21.56L15.21 20.81C15.46 20.56 15.7 20.37 15.93 20.25C16.16 20.11 16.39 20.04 16.64 20.04C16.83 20.04 17.03 20.08 17.25 20.17C17.47 20.26 17.7 20.39 17.95 20.56L21.26 22.91C21.52 23.09 21.7 23.3 21.81 23.55C21.91 23.8 21.97 24.05 21.97 24.33Z" />
                    <path d="M24.3333 1.62H17.6666C15.6666 1.62 14.3333 2.95334 14.3333 4.95334V8.95334C14.3333 10.9533 15.6666 12.2867 17.6666 12.2867V13.7067C17.6666 14.24 18.26 14.56 18.7 14.26L21.6666 12.2867H24.3333C26.3333 12.2867 27.6666 10.9533 27.6666 8.95334V4.95334C27.6666 2.95334 26.3333 1.62 24.3333 1.62ZM21 9.73334C20.72 9.73334 20.5 9.50667 20.5 9.23334C20.5 8.96 20.72 8.73334 21 8.73334C21.28 8.73334 21.5 8.96 21.5 9.23334C21.5 9.50667 21.28 9.73334 21 9.73334ZM21.84 6.96667C21.58 7.14 21.5 7.25334 21.5 7.44V7.58C21.5 7.85334 21.2733 8.08 21 8.08C20.7266 8.08 20.5 7.85334 20.5 7.58V7.44C20.5 6.66667 21.0666 6.28667 21.28 6.14C21.5266 5.97334 21.6066 5.86 21.6066 5.68667C21.6066 5.35334 21.3333 5.08 21 5.08C20.6666 5.08 20.3933 5.35334 20.3933 5.68667C20.3933 5.96 20.1666 6.18667 19.8933 6.18667C19.62 6.18667 19.3933 5.96 19.3933 5.68667C19.3933 4.8 20.1133 4.08 21 4.08C21.8866 4.08 22.6066 4.8 22.6066 5.68667C22.6066 6.44667 22.0466 6.82667 21.84 6.96667Z" />
                  </svg>

                  <span className="mx-2">Support</span>
                </NavLink>
              </li>
            </ul>
          </div>
          {/* pages */}
          <div className="w-100 main-containt">
          <Navbar setLogin={setLogin} />
            <Routes>
              {/* <Route path="/login" element={<Login />} /> */}
              <Route path="/" element={<Dashbord />} />
              <Route path="/dashboard" element={<Dashbord />} />
              <Route path="/Shipments" element={<Shipments />} />
              <Route path="/user" element={<User />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/shipmentsettings" element={<Shipmentsettings />} />
              <Route path="/transactions" element={<Transactions />} />
              

              

              <Route
                path="*"
                element={
                  <div className="d-flex justify-content-center py-5 ">
                    <p className="fs-1 fw-bold"> 404 </p>
                  </div>
                }
              />
            </Routes>
          </div>
        {/* </Router> */}
      </div>
    </>
  );
};

export default Layout;
