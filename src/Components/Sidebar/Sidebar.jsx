import React from "react";
import { useState } from "react";
import {NavLink } from "react-router-dom";
import Logo from "./logo-eload.svg";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import "./Sidebar.css";
import { ReactComponent as Arrow } from '../../icons/arrow-right.svg'
import { ReactComponent as Dashboardicon } from '../../icons/Dashboard-Icon.svg';
import { ReactComponent as Shippments } from '../../icons/shippments.svg';
import { ReactComponent as AllShippments } from '../../icons/All-shippments.svg';
import { ReactComponent as Serviceprovediers } from '../../icons/service-providers.svg';
import { ReactComponent as Freelancer } from '../../icons/freelancer.svg';
import { ReactComponent as Alldrivers } from '../../icons/alldrivers.svg';
import { ReactComponent as Adddrivers } from '../../icons/adddrivers.svg';
import { ReactComponent as Partners } from '../../icons/partners.svg';
import { ReactComponent as Allpartners } from '../../icons/allpartners.svg';
import { ReactComponent as Addpartners } from '../../icons/addpartners.svg';
import { ReactComponent as Shippers } from '../../icons/shippers.svg';
import { ReactComponent as Addshipper } from '../../icons/addshipper.svg';
import { ReactComponent as Financial } from '../../icons/financial-icon.svg';
import { ReactComponent as Rewards } from '../../icons/rewards.svg';
import { ReactComponent as Catigorybox } from '../../icons/catigory-box.svg';
import { ReactComponent as ListIcon } from '../../icons/List-icon.svg';
import { ReactComponent as AddIcon } from '../../icons/add-Icon.svg';
import { ReactComponent as Settings } from '../../icons/icon-settings.svg';











// Allpartners






const Sidebar = () => {
  const [isOpen, setIsOpen] = useState({ firstLevel1: false, firstLevel2: false, firstLevel3: false, firstLevel4: false, firstLevel5: false ,firstLevel6: false , firstLevel7 : false , firstLevel8 : false , firstLevel9 : false , firstLevel10 : false , firstLevel11 : false , firstLevel12 : false , firstLevel13 : false , firstLevel14 : false , firstLevel15 : false , firstLevel16 : false , firstLevel17 : false , firstLevel18 : false });

  const openBtn1 = () => {
    setIsOpen({ firstLevel1: !isOpen.firstLevel1, firstLevel2: false, firstLevel3: false, firstLevel4: false, firstLevel5: false , firstLevel6: false , firstLevel7: false ,firstLevel8 : false, firstLevel9 : false ,firstLevel10 : false , firstLevel11 : false , firstLevel12 : false , firstLevel13 : false , firstLevel14 : false , firstLevel15 : false , firstLevel16 : false , firstLevel17 : false , firstLevel18 : false})
  }
  const openBtn2 = () => {
    setIsOpen({ firstLevel1: false, firstLevel2: !isOpen.firstLevel2, firstLevel3: false, firstLevel4: false, firstLevel5: false , firstLevel6: false , firstLevel7: false,firstLevel8 : false, firstLevel9 : false ,firstLevel10 : false , firstLevel11 : false , firstLevel12 : false , firstLevel13 : false , firstLevel14 : false , firstLevel15 : false , firstLevel16 : false , firstLevel17 : false , firstLevel18 : false})
  }
  const openBtn3 = () => {
    setIsOpen({ firstLevel1: false, firstLevel2: true, firstLevel3: !isOpen.firstLevel3, firstLevel4: false, firstLevel5: false , firstLevel6: false , firstLevel7: false, firstLevel8 : false, firstLevel9 : false ,firstLevel10 : false , firstLevel11 : false , firstLevel12 : false , firstLevel13 : false , firstLevel14 : false , firstLevel15 : false , firstLevel16 : false , firstLevel17 : false , firstLevel18 : false})
  }
  const openBtn4 = () => {
    setIsOpen({ firstLevel1: false, firstLevel2: true, firstLevel3: false, firstLevel4: !isOpen.firstLevel4, firstLevel5: false , firstLevel6: false , firstLevel7: false ,firstLevel8 : false, firstLevel9 : false ,firstLevel10 : false , firstLevel11 : false , firstLevel12 : false , firstLevel13 : false , firstLevel14 : false , firstLevel15 : false , firstLevel16 : false , firstLevel17 : false , firstLevel18 : false})
  }
  const openBtn5 = () => {
    setIsOpen({ firstLevel1: false, firstLevel2: false, firstLevel3: false, firstLevel4: false, firstLevel5: !isOpen.firstLevel5 , firstLevel6: false , firstLevel7: false,firstLevel8 : false, firstLevel9 : false ,firstLevel10 : false , firstLevel11 : false , firstLevel12 : false , firstLevel13 : false , firstLevel14 : false , firstLevel15 : false , firstLevel16 : false , firstLevel17 : false , firstLevel18 : false})
  }
  // re
  const openBtn6 = () => {
    setIsOpen({ firstLevel1: false, firstLevel2: false, firstLevel3: false, firstLevel4: false, firstLevel5: false , firstLevel6: !isOpen.firstLevel6 , firstLevel7: false , firstLevel8 : false, firstLevel9 : false ,firstLevel10 : false , firstLevel11 : false , firstLevel12 : false , firstLevel13 : false , firstLevel14 : false , firstLevel15 : false , firstLevel16 : false , firstLevel17 : false , firstLevel18 : false})
  }
  // fina
  const openBtn7 = () => {
    setIsOpen({ firstLevel1: false, firstLevel2: false, firstLevel3: false, firstLevel4: false, firstLevel5: false , firstLevel6: true , firstLevel7: !isOpen.firstLevel7 , firstLevel8 : false, firstLevel9 : false ,firstLevel10 : false , firstLevel11 : false , firstLevel12 : false , firstLevel13 : false , firstLevel14 : false , firstLevel15 : false , firstLevel16 : false , firstLevel17 : false , firstLevel18 : false})
  }
  // over
  const openBtn8 = () => {
    setIsOpen({ firstLevel1: false, firstLevel2: false, firstLevel3: false, firstLevel4: false, firstLevel5: false , firstLevel6: true , firstLevel7: true , firstLevel8 : !isOpen.firstLevel8 , firstLevel9 : false ,firstLevel10 : false , firstLevel11 : false , firstLevel12 : false , firstLevel13 : false , firstLevel14 : false , firstLevel15 : false , firstLevel16 : false , firstLevel17 : false , firstLevel18 : false})
  }
  // re
  const openBtn9 = () => {
    setIsOpen({ firstLevel1: false, firstLevel2: false, firstLevel3: false, firstLevel4: false, firstLevel5: false , firstLevel6: false , firstLevel7: false , firstLevel8 : false, firstLevel9 : true ,firstLevel10 : false , firstLevel11 : false , firstLevel12 : false , firstLevel13 : false , firstLevel14 : false , firstLevel15 : false , firstLevel16 : false , firstLevel17 : false , firstLevel18 : false})
  }
    // setting
    const openBtn10 = () => {
      setIsOpen({ firstLevel1: false, firstLevel2: false, firstLevel3: false, firstLevel4: false, firstLevel5: false , firstLevel6: false , firstLevel7: false , firstLevel8 : false, firstLevel9 : false ,firstLevel10 : true , firstLevel11 : false , firstLevel12 : false , firstLevel13 : false , firstLevel14 : false , firstLevel15 : false , firstLevel16 : false , firstLevel17 : false , firstLevel18 : false})
    }
    // s1
    const openBtn11 = () => {
      setIsOpen({ firstLevel1: false, firstLevel2: false, firstLevel3: false, firstLevel4: false, firstLevel5: false , firstLevel6: false , firstLevel7: false , firstLevel8 : false, firstLevel9 : false ,firstLevel10 : true , firstLevel11 : !isOpen.firstLevel11 , firstLevel12 : false , firstLevel13 : false , firstLevel14 : false , firstLevel15 : false , firstLevel16 : false , firstLevel17 : false , firstLevel18 : false})
    }
    // s2
    const openBtn12 = () => {
      setIsOpen({ firstLevel1: false, firstLevel2: false, firstLevel3: false, firstLevel4: false, firstLevel5: false , firstLevel6: false , firstLevel7: false , firstLevel8 : false, firstLevel9 : false ,firstLevel10 : true , firstLevel11 : false  , firstLevel12 : !isOpen.firstLevel12 , firstLevel13 : false , firstLevel14 : false , firstLevel15 : false , firstLevel16 : false , firstLevel17 : false , firstLevel18 : false})
    }
    // s3
    const openBtn13 = () => {
      setIsOpen({ firstLevel1: false, firstLevel2: false, firstLevel3: false, firstLevel4: false, firstLevel5: false , firstLevel6: false , firstLevel7: false , firstLevel8 : false, firstLevel9 : false ,firstLevel10 : true , firstLevel11 : false  , firstLevel12 : false , firstLevel13 : !isOpen.firstLevel13 , firstLevel14 : false , firstLevel15 : false , firstLevel16 : false , firstLevel17 : false , firstLevel18 : false})
    }
    // s4
    const openBtn14 = () => {
      setIsOpen({ firstLevel1: false, firstLevel2: false, firstLevel3: false, firstLevel4: false, firstLevel5: false , firstLevel6: false , firstLevel7: false , firstLevel8 : false, firstLevel9 : false ,firstLevel10 : true , firstLevel11 : false  , firstLevel12 : false , firstLevel13 : false , firstLevel14 : !isOpen.firstLevel14 , firstLevel15 : false , firstLevel16 : false , firstLevel17 : false , firstLevel18 : false})
    }
    // s5
    const openBtn15 = () => {
      setIsOpen({ firstLevel1: false, firstLevel2: false, firstLevel3: false, firstLevel4: false, firstLevel5: false , firstLevel6: false , firstLevel7: false , firstLevel8 : false, firstLevel9 : false ,firstLevel10 : true , firstLevel11 : false  , firstLevel12 : false , firstLevel13 : false , firstLevel14 : false , firstLevel15 : !isOpen.firstLevel15  , firstLevel16 : false , firstLevel17 : false , firstLevel18 : false})
    }
    // s6
    const openBtn16 = () => {
      setIsOpen({ firstLevel1: false, firstLevel2: false, firstLevel3: false, firstLevel4: false, firstLevel5: false , firstLevel6: false , firstLevel7: false , firstLevel8 : false, firstLevel9 : false ,firstLevel10 : true , firstLevel11 : false  , firstLevel12 : false , firstLevel13 : false , firstLevel14 : false , firstLevel15 : false  , firstLevel16 : !isOpen.firstLevel16  , firstLevel17 : false , firstLevel18 : false})
    }
    // s7
    const openBtn17 = () => {
      setIsOpen({ firstLevel1: false, firstLevel2: false, firstLevel3: false, firstLevel4: false, firstLevel5: false , firstLevel6: false , firstLevel7: false , firstLevel8 : false, firstLevel9 : false ,firstLevel10 : true , firstLevel11 : false  , firstLevel12 : false , firstLevel13 : false , firstLevel14 : false , firstLevel15 : false  , firstLevel16 : false  , firstLevel17 : !isOpen.firstLevel17 , firstLevel18 : false})
    }
    // s8
    const openBtn18 = () => {
      setIsOpen({ firstLevel1: false, firstLevel2: false, firstLevel3: false, firstLevel4: false, firstLevel5: false , firstLevel6: false , firstLevel7: false , firstLevel8 : false, firstLevel9 : false ,firstLevel10 : true , firstLevel11 : false  , firstLevel12 : false , firstLevel13 : false , firstLevel14 : false , firstLevel15 : false  , firstLevel16 : false  , firstLevel17 : false, firstLevel18 : !isOpen.firstLevel18})
    }
  console.log(isOpen, "kareem")
  return (
    <div className="sidebar">
      <div className="img-logo mx-4 my-4">
        <img src={Logo} alt="" className="w-100 " />
      </div>
      {/* all-list */}
      <ul className="navbar-nav ">
        {/* dashboard */}
        <li className="nav-item mt-4">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activeside d-flex justify-content-start align-items-center py-2"
                : "d-flex justify-content-start align-items-center py-2"
            }
            to="/dashboard"
          >
            <Dashboardicon />

            <span className="mx-2">Dashboard</span>
          </NavLink>
        </li>
        <hr style={{ width:" 80%", marginLeft: "5%"}}/>


        <div className="acc-sidebar">
          <Accordion>
            {/* shipments */}
            <AccordionItem>
              <AccordionHeader className={isOpen.firstLevel1 ? "activeside d-flex" : " d-flex"} onClick={openBtn1} >

                
                <Shippments className={isOpen.firstLevel1 ? "svgicon mx-2" : " mx-2"} />


                <h3 className={`accordion-title`}>Shipments</h3>
                <Arrow className={isOpen.firstLevel1 ? "downarrow" : " rightarrow"} />
              </AccordionHeader>

              <AccordionBody className="bg-inside">
                <div className="accordion-body">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "activeside d-flex justify-content-start align-items-center"
                        : "d-flex justify-content-start align-items-center"
                    }
                    to="/Shipments"
                  >

                    <svg
                      width="27"
                      height="22"
                      viewBox="0 0 27 22"
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.8418 6.51701L10.4252 10.2337C10.1668 10.3837 9.84185 10.3837 9.57518 10.2337L3.15851 6.51701C2.70018 6.25035 2.58351 5.62535 2.93351 5.23368C3.17518 4.95868 3.45018 4.73368 3.74185 4.57535L8.25851 2.07535C9.22518 1.53368 10.7918 1.53368 11.7585 2.07535L16.2752 4.57535C16.5668 4.73368 16.8418 4.96701 17.0835 5.23368C17.4168 5.62535 17.3002 6.25035 16.8418 6.51701Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9.52537 11.7832V17.4666C9.52537 18.0999 8.8837 18.5166 8.31704 18.2416C6.60037 17.3999 3.7087 15.8249 3.7087 15.8249C2.69204 15.2499 1.8587 13.7999 1.8587 12.6082V8.30822C1.8587 7.64989 2.55037 7.23322 3.11704 7.55822L9.1087 11.0332C9.3587 11.1916 9.52537 11.4749 9.52537 11.7832Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.4752 11.7832V17.4666C10.4752 18.0999 11.1169 18.5166 11.6836 18.2416C13.4002 17.3999 16.2919 15.8249 16.2919 15.8249C17.3086 15.2499 18.1419 13.7999 18.1419 12.6082V8.30822C18.1419 7.64989 17.4502 7.23322 16.8836 7.55822L10.8919 11.0332C10.6419 11.1916 10.4752 11.4749 10.4752 11.7832Z"
                        fill="currentColor"
                      />
                      <path
                        d="M23.942 14.964V17.316H26.308C26.476 17.316 26.5973 17.4513 26.672 17.722C26.7093 17.862 26.728 17.9973 26.728 18.128C26.728 18.2587 26.7093 18.394 26.672 18.534C26.5973 18.8047 26.476 18.94 26.308 18.94H23.942V21.334C23.942 21.502 23.8067 21.6233 23.536 21.698C23.4053 21.7353 23.27 21.754 23.13 21.754L22.724 21.698C22.4533 21.6233 22.318 21.502 22.318 21.334V18.94H19.938C19.77 18.94 19.6487 18.8047 19.574 18.534C19.5367 18.394 19.518 18.2587 19.518 18.128C19.518 17.9973 19.5367 17.862 19.574 17.722C19.6487 17.4513 19.77 17.316 19.938 17.316H22.318V14.964C22.318 14.796 22.4533 14.6747 22.724 14.6C22.8547 14.5627 22.99 14.544 23.13 14.544L23.536 14.6C23.8067 14.6747 23.942 14.796 23.942 14.964Z"
                        fill="currentColor"
                      />
                    </svg>
                    <p>Add Shipments</p>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "activeside  d-flex justify-content-start align-items-center"
                        : "d-flex justify-content-start align-items-center"
                    }
                    to="/allshipments"
                  >
                    <AllShippments />
                    <p>All Shipments</p>
                  </NavLink>
                </div>
              </AccordionBody>
            </AccordionItem>

            {/* Service providers */}
            <AccordionItem>
              <AccordionHeader className={isOpen.firstLevel2 ? "activeside d-flex" : " d-flex"} onClick={openBtn2} >

                
                <Serviceprovediers className={isOpen.firstLevel2 ? "svgicon mx-2" : " mx-2"} />

                <h3 className={`accordion-title`}>Service providers</h3>
                <Arrow className={isOpen.firstLevel2 ? "downarrow" : "rightarrow"} />
              </AccordionHeader>

              <AccordionBody className="bg-inside">
                <div className="accordion-body">
                  {/* sub-item1 */}
                  <AccordionItem>
                    <AccordionHeader className={isOpen.firstLevel3 ? "activeside d-flex bg-inside" : " d-flex bg-inside"}  onClick={openBtn3}>
                      
                      <Freelancer className={isOpen.firstLevel3 ? "svgicon" : ""} />

                      <h4 className={`accordion-title`}>Freelance drivers</h4>
                      <Arrow className={isOpen.firstLevel3 ? "downarrow" : "rightarrow"} />
                    </AccordionHeader>

                    <AccordionBody className="bg-inside">
                      <div className="accordion-body">
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "activeside d-flex justify-content-start align-items-center"
                              : "d-flex justify-content-start align-items-center"
                          }
                          to="/Serviceproviders/driver"
                        >
                          <Alldrivers />
                          <p>All drivers</p>
                        </NavLink>
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "activeside d-flex justify-content-start align-items-center"
                              : "d-flex justify-content-start align-items-center"
                          }
                          to="/Serviceproviders/adddriver"
                        >
                          <Adddrivers />
                          <p>Add drivers</p>
                        </NavLink>
                      </div>
                    </AccordionBody>
                  </AccordionItem>
                  {/* supitem-2 */}
                  <AccordionItem>
                    <AccordionHeader className={isOpen.firstLevel4 ? "activeside d-flex bg-inside" : " d-flex bg-inside"} onClick={openBtn4}>
                     
                      <Partners className={isOpen.firstLevel4 ? "svgicon" : ""}/>

                      <h4 className={`accordion-title`}> partners</h4>
                      <Arrow className={isOpen.firstLevel4 ? "downarrow" : "rightarrow"} />
                    </AccordionHeader>

                    <AccordionBody>
                      <div className="accordion-body">
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "activeside d-flex justify-content-start align-items-center"
                              : "d-flex justify-content-start align-items-center"
                          }
                          to="/Serviceproviders/partners"
                        >
                          <Allpartners />
                          <p>All Partners</p>
                        </NavLink>
                        {/* Addpartners */}
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "activeside d-flex justify-content-start align-items-center"
                              : "d-flex justify-content-start align-items-center"
                          }
                          to="addpartners"
                        >
                          <Addpartners />
                          <p>Add Partners</p>
                        </NavLink>

                      </div>
                    </AccordionBody>
                  </AccordionItem>
                </div>
              </AccordionBody>
            </AccordionItem>
            {/* shipper */}
            <AccordionItem>
              <AccordionHeader className={isOpen.firstLevel5 ? "activeside d-flex" : " d-flex"} onClick={openBtn5}>
               
                <Shippers className={isOpen.firstLevel5 ? "svgicon mx-2" : " mx-2"}  />

                <h3 className={`accordion-title`}>Shippers</h3>
                <Arrow className={isOpen.firstLevel5 ? "downarrow" : "rightarrow"} />
              </AccordionHeader>

              <AccordionBody className="bg-inside" >
                <div className="accordion-body">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "activeside d-flex justify-content-start align-items-center"
                        : "d-flex justify-content-start align-items-center"
                    }
                    to="/Shipments"
                  >
                    <svg
                      width="37"
                      height="26"
                      viewBox="0 0 37 26"
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.1663 1.75H22.8337C19.6487 1.75 17.75 3.64875 17.75 6.83375V14.1663C17.75 16.625 18.8787 18.3137 20.865 18.9525C21.4425 19.1537 22.1075 19.25 22.8337 19.25H30.1663C30.8925 19.25 31.5575 19.1537 32.135 18.9525C34.1213 18.3137 35.25 16.625 35.25 14.1663V6.83375C35.25 3.64875 33.3513 1.75 30.1663 1.75ZM33.9375 14.1663C33.9375 16.0388 33.2025 17.22 31.7237 17.71C30.875 16.0387 28.8625 14.8487 26.5 14.8487C24.1375 14.8487 22.1337 16.03 21.2763 17.71H21.2675C19.8063 17.2375 19.0625 16.0475 19.0625 14.175V6.83375C19.0625 4.36625 20.3663 3.0625 22.8337 3.0625H30.1663C32.6337 3.0625 33.9375 4.36625 33.9375 6.83375V14.1663Z"
                        fill="currentColor"
                      />
                      <path
                        d="M26.4999 7C24.7674 7 23.3674 8.4 23.3674 10.1325C23.3674 11.865 24.7674 13.2738 26.4999 13.2738C28.2324 13.2738 29.6324 11.865 29.6324 10.1325C29.6324 8.4 28.2324 7 26.4999 7Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.1663 6.75H6.83375C3.64875 6.75 1.75 8.64875 1.75 11.8337V19.1663C1.75 21.625 2.87875 23.3137 4.865 23.9525C5.4425 24.1537 6.1075 24.25 6.83375 24.25H14.1663C14.8925 24.25 15.5575 24.1537 16.135 23.9525C18.1213 23.3137 19.25 21.625 19.25 19.1663V11.8337C19.25 8.64875 17.3513 6.75 14.1663 6.75ZM17.9375 19.1663C17.9375 21.0388 17.2025 22.22 15.7237 22.71C14.875 21.0387 12.8625 19.8487 10.5 19.8487C8.1375 19.8487 6.13375 21.03 5.27625 22.71H5.2675C3.80625 22.2375 3.0625 21.0475 3.0625 19.175V11.8337C3.0625 9.36625 4.36625 8.0625 6.83375 8.0625H14.1663C16.6337 8.0625 17.9375 9.36625 17.9375 11.8337V19.1663Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.4999 12C8.76743 12 7.36743 13.4 7.36743 15.1325C7.36743 16.865 8.76743 18.2738 10.4999 18.2738C12.2324 18.2738 13.6324 16.865 13.6324 15.1325C13.6324 13.4 12.2324 12 10.4999 12Z"
                        fill="currentColor"
                      />
                    </svg>

                    <p>All Shippers</p>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "activeside d-flex justify-content-start align-items-center"
                        : "d-flex justify-content-start align-items-center"
                    }
                    to="/allshipments"
                  >
                    <Addshipper />

                    <p>Add Shippers</p>
                  </NavLink>
                </div>
              </AccordionBody>
            </AccordionItem>
            {/* Reports-item */}
            {/* <AccordionItem>
              <AccordionHeader className={isOpen.firstLevel6 ? "activeside d-flex bg-inside" : " d-flex"} onClick={openBtn6}>
                
                <svg className={isOpen.firstLevel6 ? "svgicon mx-2" : " mx-2"} width="22" height="22" viewBox="0 0 22 22" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.4881 14.0394V16.233C18.4881 17.9265 17.1105 19.3041 15.417 19.3041H6.6424C4.9489 19.3041 3.57129 17.9265 3.57129 16.233V15.6627C3.57129 14.2851 4.69444 13.1619 6.07205 13.1619H17.6107C18.0933 13.1619 18.4881 13.5568 18.4881 14.0394Z" fill="currentColor"/>
                <path d="M14.1008 1.75493H7.9586C4.44875 1.75493 3.57129 2.63239 3.57129 6.14224V12.7934C4.23816 12.2055 5.11562 11.8457 6.07205 11.8457H17.6107C18.0933 11.8457 18.4881 11.4509 18.4881 10.9683V6.14224C18.4881 2.63239 17.6107 1.75493 14.1008 1.75493ZM11.9072 9.43271H7.51987C7.16011 9.43271 6.86177 9.13438 6.86177 8.77462C6.86177 8.41486 7.16011 8.11652 7.51987 8.11652H11.9072C12.2669 8.11652 12.5653 8.41486 12.5653 8.77462C12.5653 9.13438 12.2669 9.43271 11.9072 9.43271ZM14.5396 6.3616H7.51987C7.16011 6.3616 6.86177 6.06326 6.86177 5.7035C6.86177 5.34375 7.16011 5.04541 7.51987 5.04541H14.5396C14.8993 5.04541 15.1977 5.34375 15.1977 5.7035C15.1977 6.06326 14.8993 6.3616 14.5396 6.3616Z" fill="currentColor"/>
                </svg>

                <h3 className={`accordion-title`}>Reports</h3>
                <Arrow className={isOpen.firstLevel6 ? "downarrow" : "rightarrow"} />
              </AccordionHeader>

              <AccordionBody className="bg-inside">
                <div className="accordion-body">
                  <AccordionItem >
                  <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "activeside d-flex justify-content-start align-items-center"
                              : "d-flex justify-content-start align-items-center"
                          }
                          to="/overallreport"
                        > 
                              <AccordionHeader className={isOpen.firstLevel8 ? "activeside d-flex bg-inside" : " d-flex bg-inside"} onClick={openBtn8}>
                            
                            <svg className="mx-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.58 11.9999C15.58 13.9799 13.98 15.5799 12 15.5799C10.02 15.5799 8.42001 13.9799 8.42001 11.9999C8.42001 10.0199 10.02 8.41992 12 8.41992C13.98 8.41992 15.58 10.0199 15.58 11.9999Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.47 3.71997 5.18 5.79997 2.89 9.39997C1.99 10.81 1.99 13.18 2.89 14.59C5.18 18.19 8.47 20.27 12 20.27Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                              <h4 className={`accordion-title`}>Overview</h4>
                      
                    </AccordionHeader>
                        
                          </NavLink>


                    <AccordionBody>

                    </AccordionBody>
                  </AccordionItem>
              

                  <AccordionItem>
                    <AccordionHeader className={isOpen.firstLevel7 ? "activeside d-flex bg-inside" : " d-flex bg-inside"}  onClick={openBtn7}>
                   
                      <svg
                        width="26"
                        height="19"
                        viewBox="0 0 26 19"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 9.50004C18.6861 9.50004 20.4584 7.72783 20.4584 5.54171C20.4584 3.35558 18.6861 1.58337 16.5 1.58337C14.3139 1.58337 12.5417 3.35558 12.5417 5.54171C12.5417 7.72783 14.3139 9.50004 16.5 9.50004Z"
                          fill="currentColor"
                        />
                        <path
                          d="M16.5 11.4791C12.5338 11.4791 9.30377 14.1391 9.30377 17.4166C9.30377 17.6383 9.47794 17.8125 9.69961 17.8125H23.3004C23.5221 17.8125 23.6963 17.6383 23.6963 17.4166C23.6963 14.1391 20.4663 11.4791 16.5 11.4791Z"
                          fill="currentColor"
                        />
                        <path
                          d="M6.99998 8.99996C8.61081 8.99996 9.91665 7.69412 9.91665 6.08329C9.91665 4.47246 8.61081 3.16663 6.99998 3.16663C5.38915 3.16663 4.08331 4.47246 4.08331 6.08329C4.08331 7.69412 5.38915 8.99996 6.99998 8.99996Z"
                          fill="currentColor"
                        />
                        <path
                          d="M7.00001 10.4584C4.07751 10.4584 1.69751 12.4184 1.69751 14.8334C1.69751 14.9967 1.82584 15.125 1.98918 15.125H12.0108C12.1742 15.125 12.3025 14.9967 12.3025 14.8334C12.3025 12.4184 9.92251 10.4584 7.00001 10.4584Z"
                          fill="currentColor"
                        />
                      </svg>

                      <h4 className={`accordion-title`}> Financial requests</h4>
                      <Arrow className={isOpen.firstLevel7 ? "downarrow" : "rightarrow"} />
                    </AccordionHeader>

                    <AccordionBody>
                        <div className="accordion-body d-flex py-3">
                        <svg className="mx-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM13.33 17H10.66C10.25 17 9.91 16.66 9.91 16.25C9.91 15.84 10.25 15.5 10.66 15.5H13.33C13.74 15.5 14.08 15.84 14.08 16.25C14.08 16.66 13.75 17 13.33 17ZM16 12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75ZM18 8.5H6C5.59 8.5 5.25 8.16 5.25 7.75C5.25 7.34 5.59 7 6 7H18C18.41 7 18.75 7.34 18.75 7.75C18.75 8.16 18.41 8.5 18 8.5Z" fill="currentColor"/>
                        </svg>
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "activeside d-flex justify-content-start align-items-center"
                              : "d-flex justify-content-start align-items-center"
                          }
                          to="/financialrequests"
                        > 
                          List
                          </NavLink>
                        </div>
                    </AccordionBody>
                  </AccordionItem>
                </div>
              </AccordionBody>
            </AccordionItem> */}
          </Accordion>
        </div>

        {/* item-9 -rewords*/}
        <li className="nav-item position-relative" onClick={openBtn9}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "activeside d-flex justify-content-start align-items-center"
                : "d-flex justify-content-start align-items-center"
            }
            style={{padding: "20px 0"}}
            to="/rewards"
          >
            <Rewards className="mx-2"/>

            <span className="mx-2">Rewards</span>
            <Arrow className={isOpen.firstLevel9 ? "downarrow position-absolute" : "rightarrow position-absolute"} />
          </NavLink>
        </li>

        {/* setting */}
        <div className="acc-sidebar">
          <Accordion>

           
            <AccordionItem>
              <AccordionHeader className={isOpen.firstLevel10 ? "activeside d-flex" : " d-flex"} onClick={openBtn10}>

              <Settings className={isOpen.firstLevel10 ? "svgicon mx-2" : " mx-2"} />

                <h3 className={`accordion-title`}>Settings</h3>
                <Arrow className={isOpen.firstLevel10 ? "downarrow" : "rightarrow"} />
              </AccordionHeader>

              <AccordionBody className="bg-inside">
                <div className="accordion-body">
                  {/* sub-item1 */}
                  <AccordionItem>
                    <AccordionHeader className={isOpen.firstLevel11 ? "activeside d-flex bg-inside" : " d-flex bg-inside"}  onClick={openBtn11}>
                      
                     
                      <Catigorybox className={isOpen.firstLevel11 ? "svgicon" : ""}/>

                      <h4 className={`accordion-title`}>Categories</h4>
                      <Arrow className={isOpen.firstLevel11 ? "downarrow" : "rightarrow"} />
                    </AccordionHeader>

                    <AccordionBody className="bg-inside">
                      <div className="accordion-body">
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "activeside d-flex justify-content-start align-items-center"
                              : "d-flex justify-content-start align-items-center"
                          }
                          to="/categorylist"
                        >
                          <ListIcon />

                          <p>List</p>
                        </NavLink>
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "activeside d-flex justify-content-start align-items-center"
                              : "d-flex justify-content-start align-items-center"
                          }
                          to="/catogry-add"
                        >
                          <AddIcon/>
                          <p>ADD</p>
                        </NavLink>
                      </div>
                    </AccordionBody>
                  </AccordionItem>
                  {/* supitem-2 */}
                  <AccordionItem>
                    <AccordionHeader className={isOpen.firstLevel12 ? "activeside d-flex bg-inside" : " d-flex bg-inside"} onClick={openBtn12}>
                     
                      
                    <Catigorybox className={isOpen.firstLevel12 ? "svgicon" : ""}/>

                      <h4 className={`accordion-title`}> Truck types</h4>
                      <Arrow className={isOpen.firstLevel12 ? "downarrow" : "rightarrow"} />
                    </AccordionHeader>

                    <AccordionBody>
                      <div className="accordion-body">
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "activeside d-flex justify-content-start align-items-center"
                              : "d-flex justify-content-start align-items-center"
                          }
                          to="/trucklist"
                        >
                          <ListIcon />
                          <p>List</p>
                        </NavLink>
                        {/* Addpartners */}
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "activeside d-flex justify-content-start align-items-center"
                              : "d-flex justify-content-start align-items-center"
                          }
                          to="addtruck"
                        >
                          <AddIcon/>
                          <p>ADD</p>
                        </NavLink>

                      </div>
                    </AccordionBody>
                  </AccordionItem>
                  {/* s3 */}
                  <AccordionItem>
                    <AccordionHeader className={isOpen.firstLevel13 ? "activeside d-flex bg-inside" : " d-flex bg-inside"} onClick={openBtn13}>
                     
                      
                      <Catigorybox className={isOpen.firstLevel13 ? "svgicon" : ""}/>

                      <h4 className={`accordion-title`}>Shipment types</h4>
                      <Arrow className={isOpen.firstLevel13 ? "downarrow" : "rightarrow"} />
                    </AccordionHeader>

                    <AccordionBody>
                      <div className="accordion-body">
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "activeside d-flex justify-content-start align-items-center"
                              : "d-flex justify-content-start align-items-center"
                          }
                          to="shipmentlist"
                        >
                          <ListIcon />
                          <p>List</p>
                        </NavLink>

                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "activeside d-flex justify-content-start align-items-center"
                              : "d-flex justify-content-start align-items-center"
                          }
                          to="addshipment"
                        >
                          <AddIcon/>
                          <p>ADD</p>
                        </NavLink>

                      </div>
                    </AccordionBody>
                  </AccordionItem>
                  {/* s4 */}
                  <AccordionItem>
                    <AccordionHeader className={isOpen.firstLevel14 ? "activeside d-flex bg-inside" : " d-flex bg-inside"} onClick={openBtn14}>
                     
                      <Catigorybox className={isOpen.firstLevel14 ? "svgicon" : ""}/>

                      <h4 className={`accordion-title`}>Unit of Measurements</h4>
                      <Arrow className={isOpen.firstLevel14 ? "downarrow" : "rightarrow"} />
                    </AccordionHeader>

                    <AccordionBody>
                      <div className="accordion-body">
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "activeside d-flex justify-content-start align-items-center"
                              : "d-flex justify-content-start align-items-center"
                          }
                          to="/measurements"
                        >
                          <ListIcon />
                          <p>List</p>
                        </NavLink>
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "activeside d-flex justify-content-start align-items-center"
                              : "d-flex justify-content-start align-items-center"
                          }
                          to="addmeasurements"
                        >
                          <AddIcon/>
                          <p>ADD</p>
                        </NavLink>

                      </div>
                    </AccordionBody>
                  </AccordionItem>

                   {/* s5 */}                              
                <AccordionItem>
                    <AccordionHeader className={isOpen.firstLevel15 ? "activeside d-flex bg-inside" : " d-flex bg-inside"} onClick={openBtn15}>
                     
                    <Catigorybox className={isOpen.firstLevel15 ? "svgicon" : ""}/>

                      <h4 className={`accordion-title`}>Commodities</h4>
                      <Arrow className={isOpen.firstLevel15 ? "downarrow" : "rightarrow"} />
                    </AccordionHeader>

                    <AccordionBody>
                      <div className="accordion-body">
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "activeside d-flex justify-content-start align-items-center"
                              : "d-flex justify-content-start align-items-center"
                          }
                          to="/commodities"
                        >
                          <ListIcon />
                          <p>List</p>
                        </NavLink>

                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "activeside d-flex justify-content-start align-items-center"
                              : "d-flex justify-content-start align-items-center"
                          }
                          to="/addcommodities"
                        >
                          <AddIcon/>
                          <p>ADD</p>
                        </NavLink>

                      </div>
                    </AccordionBody>
                </AccordionItem>
                {/* s6 */}
                <AccordionItem>
                    <AccordionHeader className={isOpen.firstLevel16 ? "activeside d-flex bg-inside" : " d-flex bg-inside"} onClick={openBtn16}>
                     
                    <Catigorybox className={isOpen.firstLevel16 ? "svgicon" : ""}/>

                      <h4 className={`accordion-title`}>Countries</h4>
                      <Arrow className={isOpen.firstLevel16 ? "downarrow" : "rightarrow"} />
                    </AccordionHeader>

                    <AccordionBody>
                      <div className="accordion-body">
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "activeside d-flex justify-content-start align-items-center"
                              : "d-flex justify-content-start align-items-center"
                          }
                          to="/countrieslist"
                        >
                          <ListIcon />
                          <p>List</p>
                        </NavLink>

                        {/* <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "activeside d-flex justify-content-start align-items-center"
                              : "d-flex justify-content-start align-items-center"
                          }
                          to="Serviceproviders/personinfo"
                        >
                          <AddIcon/>
                          <p>ADD</p>
                        </NavLink> */}

                      </div>
                    </AccordionBody>
                </AccordionItem>
                    {/*s7  */}
                    <AccordionItem>
                    <AccordionHeader className={isOpen.firstLevel17 ? "activeside d-flex bg-inside" : " d-flex bg-inside"} onClick={openBtn17}>
                     
                    <Catigorybox className={isOpen.firstLevel17 ? "svgicon" : ""}/>

                      <h4 className={`accordion-title`}>States</h4>
                      <Arrow className={isOpen.firstLevel17 ? "downarrow" : "rightarrow"} />
                    </AccordionHeader>

                    <AccordionBody>
                      <div className="accordion-body">
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "activeside d-flex justify-content-start align-items-center"
                              : "d-flex justify-content-start align-items-center"
                          }
                          to="/stateslist"
                        >
                          <ListIcon />
                          <p>List</p>
                        </NavLink>
                     
                        {/* <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "activeside d-flex justify-content-start align-items-center"
                              : "d-flex justify-content-start align-items-center"
                          }
                          to="Serviceproviders/personinfo"
                        >
                          <AddIcon/>
                          <p>ADD</p>
                        </NavLink> */}

                      </div>
                    </AccordionBody>
                </AccordionItem>
                      {/* s8 */}
                      <AccordionItem>
                    <AccordionHeader className={isOpen.firstLevel18 ? "activeside d-flex bg-inside" : " d-flex bg-inside"} onClick={openBtn18}>
                     
                    <Catigorybox className={isOpen.firstLevel18 ? "svgicon" : ""}/>

                      <h4 className={`accordion-title`}>Cities</h4>
                      <Arrow className={isOpen.firstLevel18 ? "downarrow" : "rightarrow"} />
                    </AccordionHeader>

                    <AccordionBody>
                      <div className="accordion-body">
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "activeside d-flex justify-content-start align-items-center"
                              : "d-flex justify-content-start align-items-center"
                          }
                          to="/citieslist"
                        >
                          <ListIcon />
                          <p>List</p>
                        </NavLink>

                        {/* <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "activeside d-flex justify-content-start align-items-center"
                              : "d-flex justify-content-start align-items-center"
                          }
                          to="Serviceproviders/personinfo"
                        >
                          <AddIcon/>
                          <p>ADD</p>
                        </NavLink> */}

                      </div>
                    </AccordionBody>
                </AccordionItem>
                </div>
              </AccordionBody>
            </AccordionItem>

           
            

          </Accordion>
        </div>


      </ul>
    </div>
  );
};

export default Sidebar;
