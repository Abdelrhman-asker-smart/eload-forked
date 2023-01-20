import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import './NavbarRes.css';
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";

export default function Navbar({setLogin , clrUserData , searchMovie}) {

    const pathanme = useLocation()
    console.log(pathanme)
    const [user, setUser] = useState({
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
    });
return <>
    <div className='header'>
    <div className='container-fluid'>
     <div className='content d-flex justify-content-between '>
        <div className='path'>
            <p>
                <Link to="/">
                Dashboard {" "}
                </Link>
                {
                    pathanme.pathname === '/' ? null
                : "> " + pathanme.pathname.slice(1,pathanme.length) }</p>
        </div>
        <div className='user-side d-flex justify-content-between '>
            <div className='notification'>
             <i className="fa-solid fa-bell"></i>
             <span className='position-absolute'>2</span>
            </div>
            <div className='user-icon mx-3'
            onClick={() => {
                        
            Cookies.remove("eload_token", { path: " /" });
            localStorage.removeItem("email"); 
            localStorage.removeItem("name");
            setLogin(false);
            window.location.replace('/login')
            }}
            >
            <i className="fa-solid fa-user"></i>
            </div>
            <span>Hi,Admin</span>
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
                        <i class="fa-solid fa-user"></i>
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
}
