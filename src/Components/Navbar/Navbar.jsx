import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import "./NavbarRes.css";
import Cookies from "js-cookie";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Navbar({ setLogin, clrUserData, searchMovie }) {
  const pathanme = useLocation();
  // console.log(pathanme);
  const [user, setUser] = useState({
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
  });
  const [cookie] = useCookies(["eload_token"]);

  const [notifications_count, setNotificationsCount] = useState(0);
  const [notifications, setNotifications] = useState([]);

  // endpoint is the API endpoint, url is the frontend page url
  const entity_mappings = {
    shipment: { endpoint: 'shipments', url: 'allshipments/shipmentorder' },
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
      console.log(response.data.data);
      let data = response.data.data;
      setNotifications(data);
      setNotificationsCount(data.length);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <>
      <div className="header">
        <div className="container-fluid section-nav">
          <div className="content d-flex justify-content-between align-items-center">
            <div className="path">
              <p>
                <Link to="/">Dashboard </Link>
                {pathanme.pathname === "/"
                  ? null
                  : "> " + pathanme.pathname.slice(1, pathanme.length)}
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
                      <span className="position-absolute">{notifications_count > 0 ? notifications_count : ''}</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="#" className="dropdown-item header-noti">
                        Notifications
                      </a>

                      {notifications.map(notification => (
                        <>
                        <div className="dropdown-divider"></div>
                        <a 
                          href={`/${entity_mappings[notification.notificationable_type].url}/${notification.payload.id}`} 
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
                Hi,Admin
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
