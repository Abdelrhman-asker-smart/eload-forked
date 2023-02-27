import React from 'react'
import './Addpartners.css';
import { NavLink } from 'react-router-dom';
// import { useState } from 'react'
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
// import  {ReactComponent as Dateicon} from '../../icons/date-icon.svg';
// import CustomSelect from '../CustomeSelect/CustomeSelect';

const Addpartners = () => {
    // const [input, setInputs] = useState([])
    // const date  = new Date()
    // const [startDate, setStartDate] = useState(date);

  return (
    <div className='container-fluid addpartners p-5'>
    <h3>PARTNER INFORMATION</h3>
    <form>
    {/* name+email */}
    <div className='row my-4'>
      <div className='col-md-6'>
        <label className='my-2 d-block'>Name</label>
        <input className='input-box px-3' name='namepartner' type="text" placeholder="Name" />
      </div>
      <div className='col-md-6 text-center'>
        <label className='my-2 d-block text-start mx-5'>E-mail</label>
        <input className='input-box px-3' name='emailpartner' type="text" placeholder="E-mail" />
      </div>
    </div>
    {/* brows+password */}
    <div className='row my-4'>
      <div className='col-md-4'>
        <label className='my-2 d-block'>Profile picture</label>
        <input type="file" name='imgpartner' className="input-box" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
      </div>
      <div className='col-md-4'>
        <label className='my-2 d-block'>Password</label>
        <input className='input-box px-3' type="password" name='passpartner' placeholder="Password" />
      </div>
      <div className='col-md-4'>
        <label className='my-2 d-block'>Confirm password</label>
        <input className='input-box px-3' type="password" name='passpartner' placeholder="Confirm password" />
      </div>
    </div>
    {/* line-1 */}
    <hr className='my-5' />
    {/* section-owner-information */}
    <h3>OWNER INFORMATION</h3>
    {/* name+PHONE+id */}
    <div className='row my-4'>
      <div className='col-md-4'>
        <label className='my-2 d-block'>Owner name</label>
        <input className='input-box px-3' name='nameowner' type="text" placeholder="Owner name" />
      </div>
      <div className='col-md-4'>
        <label className='my-2 d-block'>Owner Phone </label>
        <input className='input-box px-3' name='phoneowner' type="tele" placeholder="Owner Phone " />
      </div>
      <div className='col-md-4'>
        <label className='my-2 d-block'>Owner National ID</label>
        <input className='input-box px-3' name='idowner' type="tele" placeholder="Owner National ID" />
      </div>
    </div>
    {/* line-2 */}
    <NavLink to="/Serviceproviders/Partners">
    <button type='submit' className='btn-save my-3'>SAVE</button>
    </NavLink>

    </form>
  </div>
  )
}

export default Addpartners