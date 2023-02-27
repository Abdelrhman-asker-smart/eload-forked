import React from 'react'
import $ from 'jquery';
import './rewards.css';
import { useState } from 'react';

const Rewards = () => {
const [count1, setCount1] = useState(1)
const [count2, setCount2] = useState(1)
const [count3, setCount3] = useState(1)

  // $(document).ready(function () {
  //   $('.count').prop('disabled', true);
  //   $(document).on('click', '.plus', function () {
  //     $('.count').val(parseInt($('.count').val()) + 1);
  //   });
  //   $(document).on('click', '.minus', function () {
  //     $('.count').val(parseInt($('.count').val()) - 1);
  //     if ($('.count').val() === 0) {
  //       $('.count').val(1);
  //     }
  //   });
  // });
console.log(count3,'count')

// const increaseCount =(index)=>{
// setCount({...count,})
// }

  return (
    <div className='container rewards px-4'>

      {/* header */}
      <div className='row p-4'>
        <div className='col-md-4'>
          <h5>Rewards</h5>
        </div>
        <div className='col-md-8'>
          <button className='btn add-btn'>Add new reward</button>
        </div>
      </div>
      <hr />
      {/* section-1 */}
      <div className='row px-4 py-2'>
        {/* first-row */}
        <div className='row justify-content-between'>
          <div className='col-md-6 align-items-center'>

            <div className='icon-box d-flex align-items-center'>
              <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M62.8655 54.6404L57.9843 55.7942C56.8897 56.0604 56.0318 56.8888 55.7951 57.9833L54.7597 62.3321C54.1976 64.6987 51.1801 65.4383 49.6122 63.5746L40.7668 53.3979C40.0568 52.5696 40.4414 51.2679 41.5064 51.0017C46.7426 49.7296 51.4464 46.8008 54.9076 42.6296C55.4697 41.9492 56.4755 41.8604 57.0968 42.4817L63.6643 49.0492C65.9126 51.2975 65.1139 54.1079 62.8655 54.6404Z" fill="#FDC500" />
                <path d="M7.98762 54.6404L12.8689 55.7942C13.9634 56.0604 14.8214 56.8888 15.058 57.9833L16.0934 62.3321C16.6555 64.6987 19.673 65.4383 21.2409 63.5746L30.0864 53.3979C30.7964 52.5696 30.4118 51.2679 29.3468 51.0017C24.1105 49.7296 19.4068 46.8008 15.9455 42.6296C15.3834 41.9492 14.3776 41.8604 13.7564 42.4817L7.18887 49.0492C4.94053 51.2975 5.73928 54.1079 7.98762 54.6404Z" fill="#FDC500" />
                <path d="M35.5001 5.9165C24.0513 5.9165 14.7917 15.1761 14.7917 26.6248C14.7917 30.9144 16.0638 34.849 18.253 38.1328C21.448 42.8661 26.5067 46.209 32.3938 47.0669C33.3997 47.2444 34.4351 47.3332 35.5001 47.3332C36.5651 47.3332 37.6005 47.2444 38.6063 47.0669C44.4934 46.209 49.5522 42.8661 52.7472 38.1328C54.9363 34.849 56.2084 30.9144 56.2084 26.6248C56.2084 15.1761 46.9488 5.9165 35.5001 5.9165ZM44.5526 25.974L42.0972 28.4294C41.683 28.8436 41.4463 29.6423 41.5943 30.234L42.3043 33.2811C42.8663 35.6773 41.5942 36.624 39.4643 35.3519L36.5059 33.6065C35.9734 33.2811 35.0859 33.2811 34.5534 33.6065L31.5951 35.3519C29.4651 36.5944 28.193 35.6773 28.7551 33.2811L29.4651 30.234C29.5834 29.6719 29.3763 28.8436 28.9622 28.4294L26.4476 25.974C24.998 24.5244 25.4713 23.0748 27.483 22.7494L30.6484 22.2169C31.1809 22.1282 31.8022 21.6548 32.0388 21.1815L33.7842 17.6907C34.7309 15.7973 36.2692 15.7973 37.2159 17.6907L38.9613 21.1815C39.198 21.6548 39.8192 22.1282 40.3813 22.2169L43.5468 22.7494C45.5288 23.0748 46.0022 24.5244 44.5526 25.974Z" fill="#FDC500" />
              </svg>
              <h4>First Reward</h4>
            </div>

          </div>
          <div className='col-md-4 justfy-content-end pt-3 '>

            <select class="form-select" aria-label="Default select example">
              {/* <option selected>Select client</option> */}
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">three</option>
            </select>

          </div>
        </div>
        {/* secound-row */}
        <div className='row py-5 align-items-center'>
          <div className='col-md-4 input-side'>
            <label htmlFor="address">Shipment value<span>*</span></label>
            <input type="text" placeholder='ie. 500 SAR'  />
          </div>
          <div className='col-md-4 numbers-box text-center'>
            <label htmlFor="address">Shipment value<span>*</span></label>
            <div class="qty">
              <span
              onClick={()=>{
                if(count1 > 1){
                  setCount1(
                    prevState=>prevState-1)
                  }
              }}
              class="minus">-</span>
              {/* <span>{count1}</span> */}
              <input readOnly type="number" class="count" name="qty" value={count1} />
              <span onClick={()=>{
                if(count1 < 50){
                  setCount1(
                    prevState=>prevState+1)
                  }
              }} class="plus ">+</span>
            </div>
          </div>
          <div className='col-md-4 d-flex justify-content-center mt-4'>
            <button className='btn add-btn' style={{ padding: "6px 20px", height: "52%", width: "46%" }}>Save</button>
          </div>
        </div>
      </div>
      <hr />
      {/* section-2 */}
      <div className='row px-4 py-2'>
        {/* first-row */}
        <div className='row justify-content-between'>
          <div className='col-md-6 align-items-center'>

            <div className='icon-box d-flex align-items-center'>
            <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M62.8655 54.6404L57.9843 55.7942C56.8897 56.0604 56.0318 56.8888 55.7951 57.9833L54.7597 62.3321C54.1976 64.6987 51.1801 65.4383 49.6122 63.5746L40.7668 53.3979C40.0568 52.5696 40.4414 51.2679 41.5064 51.0017C46.7426 49.7296 51.4464 46.8008 54.9076 42.6296C55.4697 41.9492 56.4755 41.8604 57.0968 42.4817L63.6643 49.0492C65.9126 51.2975 65.1139 54.1079 62.8655 54.6404Z" fill="#FD3D00"/>
            <path d="M7.98762 54.6404L12.8689 55.7942C13.9634 56.0604 14.8214 56.8888 15.058 57.9833L16.0934 62.3321C16.6555 64.6987 19.673 65.4383 21.2409 63.5746L30.0864 53.3979C30.7964 52.5696 30.4118 51.2679 29.3468 51.0017C24.1105 49.7296 19.4068 46.8008 15.9455 42.6296C15.3834 41.9492 14.3776 41.8604 13.7564 42.4817L7.18887 49.0492C4.94053 51.2975 5.73928 54.1079 7.98762 54.6404Z" fill="#FD3D00"/>
            <path d="M35.5001 5.91699C24.0513 5.91699 14.7917 15.1766 14.7917 26.6253C14.7917 30.9149 16.0638 34.8495 18.253 38.1332C21.448 42.8666 26.5067 46.2095 32.3938 47.0674C33.3997 47.2449 34.4351 47.3337 35.5001 47.3337C36.5651 47.3337 37.6005 47.2449 38.6063 47.0674C44.4934 46.2095 49.5522 42.8666 52.7472 38.1332C54.9363 34.8495 56.2084 30.9149 56.2084 26.6253C56.2084 15.1766 46.9488 5.91699 35.5001 5.91699ZM44.5526 25.9745L42.0972 28.4299C41.683 28.8441 41.4463 29.6428 41.5943 30.2345L42.3043 33.2816C42.8663 35.6778 41.5942 36.6245 39.4643 35.3524L36.5059 33.607C35.9734 33.2816 35.0859 33.2816 34.5534 33.607L31.5951 35.3524C29.4651 36.5949 28.193 35.6778 28.7551 33.2816L29.4651 30.2345C29.5834 29.6724 29.3763 28.8441 28.9622 28.4299L26.4476 25.9745C24.998 24.5249 25.4713 23.0753 27.483 22.7499L30.6484 22.2174C31.1809 22.1287 31.8022 21.6553 32.0388 21.182L33.7842 17.6912C34.7309 15.7978 36.2692 15.7978 37.2159 17.6912L38.9613 21.182C39.198 21.6553 39.8192 22.1287 40.3813 22.2174L43.5468 22.7499C45.5288 23.0753 46.0022 24.5249 44.5526 25.9745Z" fill="#FD3D00"/>
            </svg>

              <h4>Second Reward</h4>
            </div>

          </div>
          <div className='col-md-4 justfy-content-end pt-3 '>

            <select class="form-select" aria-label="Default select example">
              {/* <option selected>Select client</option> */}
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">three</option>
            </select>

          </div>
        </div>
        {/* secound-row */}
        <div className='row py-5 align-items-center'>
          <div className='col-md-4 input-side'>
            <label htmlFor="address">Shipment value<span>*</span></label>
            <input type="text" placeholder='ie. 500 SAR' />
          </div>
          <div className='col-md-4 numbers-box text-center'>
            <label htmlFor="address">Shipment value<span>*</span></label>
            <div class="qty">
              <span 
              
              onClick={()=>{
                if(count2 > 1){
                  setCount2(
                    prevState=>prevState-1)
                  }
              }}
              class="minus">-</span>
              <input type="number" class="count" name="qty" value={count2} />
              <span
              onClick={()=>{
                if(count2 < 50){
                  setCount2(
                    prevState=>prevState+1)
                  }
              }}
              class="plus ">+</span>
            </div>
          </div>
          <div className='col-md-4 d-flex justify-content-center mt-4'>
            <button className='btn add-btn' style={{ padding: "6px 20px", height: "52%", width: "46%" }}>Save</button>
          </div>
        </div>
      </div>

      <hr />
      {/* section-3 */}
      <div className='row px-4 py-2'>
        {/* first-row */}
        <div className='row justify-content-between'>
          <div className='col-md-6 align-items-center'>

            <div className='icon-box d-flex align-items-center'>
            <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M62.8655 54.6404L57.9843 55.7942C56.8897 56.0604 56.0318 56.8888 55.7951 57.9833L54.7597 62.3321C54.1976 64.6987 51.1801 65.4383 49.6122 63.5746L40.7668 53.3979C40.0568 52.5696 40.4414 51.2679 41.5064 51.0017C46.7426 49.7296 51.4464 46.8008 54.9076 42.6296C55.4697 41.9492 56.4755 41.8604 57.0968 42.4817L63.6643 49.0492C65.9126 51.2975 65.1139 54.1079 62.8655 54.6404Z" fill="#ED13CA"/>
            <path d="M7.98762 54.6404L12.8689 55.7942C13.9634 56.0604 14.8214 56.8888 15.058 57.9833L16.0934 62.3321C16.6555 64.6987 19.673 65.4383 21.2409 63.5746L30.0864 53.3979C30.7964 52.5696 30.4118 51.2679 29.3468 51.0017C24.1105 49.7296 19.4068 46.8008 15.9455 42.6296C15.3834 41.9492 14.3776 41.8604 13.7564 42.4817L7.18887 49.0492C4.94053 51.2975 5.73928 54.1079 7.98762 54.6404Z" fill="#ED13CA"/>
            <path d="M35.5001 5.91699C24.0513 5.91699 14.7917 15.1766 14.7917 26.6253C14.7917 30.9149 16.0638 34.8495 18.253 38.1332C21.448 42.8666 26.5067 46.2095 32.3938 47.0674C33.3997 47.2449 34.4351 47.3337 35.5001 47.3337C36.5651 47.3337 37.6005 47.2449 38.6063 47.0674C44.4934 46.2095 49.5522 42.8666 52.7472 38.1332C54.9363 34.8495 56.2084 30.9149 56.2084 26.6253C56.2084 15.1766 46.9488 5.91699 35.5001 5.91699ZM44.5526 25.9745L42.0972 28.4299C41.683 28.8441 41.4463 29.6428 41.5943 30.2345L42.3043 33.2816C42.8663 35.6778 41.5942 36.6245 39.4643 35.3524L36.5059 33.607C35.9734 33.2816 35.0859 33.2816 34.5534 33.607L31.5951 35.3524C29.4651 36.5949 28.193 35.6778 28.7551 33.2816L29.4651 30.2345C29.5834 29.6724 29.3763 28.8441 28.9622 28.4299L26.4476 25.9745C24.998 24.5249 25.4713 23.0753 27.483 22.7499L30.6484 22.2174C31.1809 22.1287 31.8022 21.6553 32.0388 21.182L33.7842 17.6912C34.7309 15.7978 36.2692 15.7978 37.2159 17.6912L38.9613 21.182C39.198 21.6553 39.8192 22.1287 40.3813 22.2174L43.5468 22.7499C45.5288 23.0753 46.0022 24.5249 44.5526 25.9745Z" fill="#ED13CA"/>
            </svg>

              <h4>Second Reward</h4>
            </div>

          </div>
          <div className='col-md-4 justfy-content-end pt-3 '>

            <select class="form-select" aria-label="Default select example">
              {/* <option selected>Select client</option> */}
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">three</option>
            </select>

          </div>
        </div>
        {/* secound-row */}
        <div className='row py-5 align-items-center'>
          <div className='col-md-4 input-side'>
            <label htmlFor="address">Shipment value<span>*</span></label>
            <input type="text" placeholder='ie. 500 SAR' />
          </div>
          <div className='col-md-4 numbers-box text-center'>
            <label htmlFor="address">Shipment value<span>*</span></label>
            <div class="qty">
              <span 
              
              onClick={()=>{
                if(count3 > 1){
                  setCount3(
                    prevState=>prevState-1)
                  }
              }}
              class="minus">-</span>
              <input type="number" class="count" name="qty" value={count3} />
              <span
              
              onClick={()=>{
                if(count3 < 50){
                  setCount3(
                    prevState=>prevState+1)
                  }
              }}
              class="plus ">+</span>
            </div>
          </div>
          <div className='col-md-4 d-flex justify-content-center mt-4'>
            <button className='btn add-btn' style={{ padding: "6px 20px", height: "52%", width: "46%" }}>Save</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Rewards