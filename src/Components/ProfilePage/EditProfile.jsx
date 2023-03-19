import React from 'react'
import { NavLink } from 'react-router-dom';
import { ReactComponent as Userprofile } from '../../icons/userprofile.svg';
import './EditProfile.css';

const EditProfile = () => {
  return (
    <div className='container edit-profile p-5'>
        <div className='row'>
            <div className='col-md-6 px-4'>
                <div className='contannt d-flex justfy-content-center align-items-center'>
                    <div className='img-user'>
                        <Userprofile/>
                    </div>
                    <div className='name-box px-3'>
                        <h3>Mohmoud Ahmed</h3>
                        <p>Admin</p>
                    </div>
                </div>
            </div>
            <div className='col-md-6 text-center py-4'>
                <NavLink to="/profilepage">
                <button className='btn btn-profile'
                >Save</button>
                </NavLink>
            </div>
        </div>
        <div className='row info py-5 px-4 '>
            <div className='col-md-6'>
                <div className='info-line d-flex justify-content-between py-3 align-items-center'>
                    <h5>Name</h5>
                    <input type="text" className='text-input px-3 py-2'value="Mahmoud Ahmed"/>
                </div>

                <div className='info-line d-flex  justify-content-between py-3 align-items-center'>
                    <h5>Email</h5>
                    <input type="email" className='text-input px-3 py-2' value="mahmoudahmed@gmail.com"/>
                </div>

            </div>
            <div className='col-md-6'>
            </div>
            <div className="row align-items-center">
                <div className='col-md-6 info-line d-flex  justify-content-between py-3'>
                        <h5 className='my-3'>Profile Picture</h5>
                        <svg width="43" height="45" viewBox="0 0 43 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="21.5" cy="21.5977" r="21.5" fill="#D9D9D9"/>
                        <path d="M26.664 21.6353H16.2651V33.5336H26.664V21.6353Z" fill="#E2988F"/>
                        <path d="M31.6699 13.2992C31.1059 11.9099 29.9073 12.5867 29.9073 12.5867C30.6124 6.28128 27.4398 2.11328 21.4825 2.11328C15.5251 2.11328 12.3526 6.28128 13.0223 12.5867C13.0223 12.5867 11.8591 11.9099 11.2598 13.2992C10.6606 14.6885 11.7181 17.9303 12.3878 18.9634C13.0223 19.9965 14.1856 20.7802 14.1856 20.7802C14.1856 20.7802 14.2561 21.9558 14.5734 22.7395C14.8554 23.5589 18.2747 27.2638 19.2617 27.8338C20.566 28.6175 22.5047 28.6175 23.668 27.8338C24.655 27.2638 28.0743 23.5589 28.3563 22.7395C28.6383 21.9202 28.7441 20.7802 28.7441 20.7802C28.7441 20.7802 29.9073 19.9965 30.5419 18.9634C31.2116 17.9303 32.2691 14.6885 31.6699 13.2992Z" fill="#E2988F"/>
                        <path d="M21.5534 28.5467C20.7426 28.5467 19.8966 28.3329 19.2269 27.9411C18.6276 27.5848 17.2176 26.1955 16.1953 25.0199L16.4068 24.8418C17.4643 26.0174 18.8039 27.3711 19.3679 27.6917C20.6369 28.4398 22.5052 28.4398 23.6332 27.6917C24.1972 27.3711 25.5367 26.0174 26.5942 24.8418L26.8057 25.0199C25.7835 26.1955 24.3734 27.5848 23.7742 27.9411C23.1397 28.3686 22.3642 28.5467 21.5534 28.5467Z" fill="#C46966"/>
                        <path d="M13.9856 18.0701L13.7407 18.1006L14.073 20.8231L14.3179 20.7925L13.9856 18.0701Z" fill="#C46966"/>
                        <path d="M28.9228 18.0703L28.6265 20.7612L28.9067 20.7928L29.2031 18.1018L28.9228 18.0703Z" fill="#C46966"/>
                        <path d="M12.0706 16.3982C12.0001 16.1844 11.5419 14.4032 12.1764 13.9045C12.3879 13.762 12.5641 13.762 12.6699 13.7976C12.9871 13.9045 13.1634 14.332 13.1634 14.3676L12.9166 14.4745C12.8814 14.3676 12.7404 14.1182 12.5641 14.0826C12.4936 14.047 12.3879 14.0826 12.3174 14.1539C11.9296 14.4389 12.1059 15.6501 12.2821 16.3625L12.0706 16.3982Z" fill="#C46966"/>
                        <path d="M30.9298 16.3982L30.683 16.327C30.8593 15.6145 31.0355 14.4033 30.6478 14.1183C30.542 14.047 30.4715 14.047 30.401 14.0827C30.1895 14.1539 30.0485 14.4745 30.0485 14.4745L29.8018 14.3677C29.837 14.332 29.978 13.9045 30.2953 13.7977C30.401 13.762 30.5773 13.762 30.7888 13.8689C31.4233 14.4033 30.965 16.2201 30.9298 16.3982Z" fill="#C46966"/>
                        <path d="M13.8684 15.8997C15.6309 15.8997 14.2914 10.1643 15.7014 8.73933C16.4064 8.02685 17.4287 8.13373 18.3099 8.38309C19.3322 8.63246 20.3897 8.9887 21.4825 9.02432C22.6457 9.05995 23.7033 8.63246 24.8313 8.34747C25.6773 8.13373 26.6291 8.06248 27.2988 8.73933C28.6736 10.1287 27.3341 15.8997 29.1318 15.8997C29.0261 14.5817 28.9908 13.1211 29.9779 12.5867C30.6124 6.28128 27.4398 2.11328 21.4825 2.11328C15.5251 2.11328 12.3526 6.28128 13.0224 12.5867C13.8331 13.0855 14.0094 14.5104 13.8684 15.8997Z" fill="#4C224B"/>
                        <path d="M38.2969 34.5664C32.7273 32.0727 26.6995 31.1821 26.6995 31.1821C23.9147 34.1033 18.7328 34.1389 16.3005 31.1821C16.3005 31.1821 10.2375 32.0727 4.70312 34.5664C8.12243 40.3019 14.3618 44.1492 21.4824 44.1492C28.603 44.1492 34.8423 40.3019 38.2969 34.5664Z" fill="#F4BA5D"/>
                        <path d="M14.856 31.3965L16.266 28.8315L20.8485 32.9639L18.0638 36.0632L14.856 31.3965Z" fill="white"/>
                        <path d="M28.074 31.3965L26.6993 28.8315L22.1167 32.9639L24.9015 36.0632L28.074 31.3965Z" fill="white"/>
                        </svg>
                </div>
                <div className='col-md-6 d-flex'>
                        <p className='mx-5'>Delete</p>
                        <p className='mx-5'>Update</p>
                </div>
            </div>
            <div className='col-md-6'>
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label mx-3" for="exampleCheck1">Receive SMS notifications</label>
            </div>
        </div>

    </div>
  )
}

export default EditProfile