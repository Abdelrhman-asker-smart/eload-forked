import React from 'react'
import './AddDriver.css';
import { useState } from 'react'
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import  {ReactComponent as Dateicon} from '../../../icons/date-icon.svg';
import  {ReactComponent as Vector} from '../../../icons/Vector.svg';


const AddDriver = () => {
  const [input, setInputs] = useState([])
  const date  = new Date()
  const [startDate, setStartDate] = useState(date);

    // select-options
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);
  
   
     const CountrySelect= [
      { value: 'Reham', label: 'Reham' },
      { value: 'Eman', label: 'Eman' },
      { value: 'Abdullah ', label: 'Abdullah ' },
      { value: 'Loqman ELgrahy ', label: 'Loqman ELgrahy ' },
    ];
      
        const TruckSelect= [
          { value: 'Truck1', label:<div><Vector className='mx-3'/> Truck1</div> },
          { value: 'Truck2', label:<div><Vector className='mx-3'/> Truck2</div> },
          { value: 'Truck3', label:<div><Vector className='mx-3'/> Truck3</div> },
        ];

  return (
    <div className='container-fluid adddriver p-5'>
      <h3>PERSONAL INFORMATION</h3>
      <form>
      {/* name+email */}
      <div className='row my-4'>
        <div className='col-md-6'>
          <label className='my-2 d-block'>Name</label>
          <input className='input-box px-3' name='namedriver' type="text" placeholder="Name" />
        </div>
        <div className='col-md-6 text-center'>
          <label className='my-2 d-block text-start mx-5'>E-mail</label>
          <input className='input-box px-3' name='emaildriver' type="text" placeholder="E-mail" />
        </div>
      </div>
      {/* brows+password */}
      <div className='row my-4'>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Profile picture</label>
          <input type="file" name='imgdriver' className="input-box" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
        </div>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Password</label>
          <input className='input-box px-3' type="password" name='passdriver' placeholder="Password" />
        </div>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Confirm password</label>
          <input className='input-box px-3' type="password" name='passdriver' placeholder="Confirm password" />
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
      <hr className='my-5' />
      {/* section-ID-information */}
      <h3>ID INFORMATION</h3>
      {/* ID+drivingnumber */}
      <div className='row my-4'>
        <div className='col-md-4'>
          <label className='my-2 d-block'>ID Copy</label>
          <input type="file" className="input-box" name='idcope' id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
        </div>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Driving License NumberOwner Phone </label>
          <input className='input-box px-3' name='driverlicensephone' type="tele" placeholder="Driving License Number" />
        </div>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Driving License Copy</label>
          <input type="file" className="input-box" name='driverlicensecope' id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
        </div>
      </div>
      {/*row-2 ID+date */}
      <div className='row my-4'>
        <div className='col-md-4'>
          <label className='my-2 d-block'>License Id</label>
          <input type="file" className="input-box" name='licensecopeid' id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
        </div>
        <div className='col-md-4 position-relative'>
          <label className='my-2 d-block'>Expiry Date</label>
          <DatePicker className='date-input  px-5 input-box'
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MMMM d, yyyy"
          />
          <Dateicon className='position-absolute' style={{left:"30px",top:"58px"}}/>
          {/* <input className='input-box px-3' name='expirydate' type="tele" placeholder="Driving License Number" /> */}
        </div>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Nationality</label>
                      {/* Country-select */}
          <Select
          classNamePrefix="select"
          className="basic-multi-select"
          // isMulti
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable={isClearable}
          isRtl={isRtl}
          isSearchable={isSearchable}
          name="color"
          options={CountrySelect}
        />
          
        </div>
      </div>
      {/* line-3 */}
      <hr className='my-5' />
      <h3>Sponser information</h3>
      {/* Sponsor */}
      <div className='row my-4'>
        <div className='col-md-6'>
          <label className='my-2 d-block'>Sponsor Establishment Name</label>
          <input className='input-box px-3' name='sponsername' type="text" placeholder="Sponsor Establishment name" />
        </div>
        <div className='col-md-6'>
          <label className='my-2 d-block'>Sponsor Establishment Number</label>
          <input className='input-box px-3' name='sponsernumber' type="text" placeholder="Sponsor Establishment Number" />
        </div>
      </div>
      {/* line-4 */}
      <hr className='my-5' />
      <h3>Truck information</h3>
      {/* Truck  */}
      <div className='row my-4'>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Truck Model</label>
          <input className='input-box px-3' name='truckmodel' type="text" placeholder="Truck Model" />
        </div>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Truck Plate Number</label>
          <input className='input-box px-3' name='trucknumber' type="tele" placeholder="Truck Plate Number" />
        </div>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Chassis Number</label>
          <input className='input-box px-3' name='chassisnumber' type="tele" placeholder="Chassis Number" />
        </div>

      </div>
      {/* row-2 */}
      <div className='row my-4'>
      <div className='col-md-4'>
          <label className='my-2 d-block'>Truck License Number</label>
          <input className='input-box px-3' name='trucklicensenumber' type="tele" placeholder="Chassis Number" />
        </div>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Truck License Copy</label>
          <input type="file" className="input-box" name='trucklicensecope' id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
        </div>
        <div className='col-md-4'>
          <label className='my-2 d-block'>Truck Type</label>
          <Select
          classNamePrefix="select"
          className="basic-multi-select"
          // isMulti
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable={isClearable}
          isRtl={isRtl}
          isSearchable={isSearchable}
          name="color"
          options={TruckSelect}
        />
        </div>
      </div>

      <button type='submit' className='btn-save my-3'>SAVE</button>

      </form>
    </div>
    
  )
}

export default AddDriver
