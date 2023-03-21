import React from "react";
import Select from 'react-select';
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import "./Shipments.css";

// trucks
import  {ReactComponent as Truck1} from '../../icons/Vector.svg';





// const truckChoose=() =>{
//   return(
//     <div className="d-flex">
//      <Truck1/>
//      <span>truckchoose</span>
//     </div>
//   )
// }

// details-Api

const Inputs = (shipperuserChoice ,pickupuserChoice ,detailsApi , detailsList)=> {
// function Inputs(shipperuserChoice ,pickupuserChoice ,detailsApi , detailsList) {

console.log(shipperuserChoice ,"shiperinputssssssssssssss");
console.log(pickupuserChoice ,"pickupinputssssssssssssss");
console.log(detailsList ,"detailsLiiiiiiiiiiiiiiiiiist");



// const GroupspickupOptions = pickupList.map((item, index) => ({
//   label: item.name,
//   options: item.addresses.map((sub_item, index) => ({
//           value: sub_item.id,
//           label:sub_item.name,
//     })),
// }));
// const commidsOptions = ()=>{
//   if(detailsList.length > 0){
    // const commidtiesOptions = detailsList.map((item, index) => {
    //   item.commodities.map((sub_item , index) => ({
    //     value:sub_item.id,
    //     label:sub_item.name,
    //   }));
    // });
//   }else{
//     console.log("contain");
//   }
// }




// const commidtiesOptions = shipperuserChoice.detailsList.map((item, index) => {
//      item.commodities.map((sub_item, index) => {
//       return{
//         value: sub_item.id,
//         label:sub_item.name,
//       }
//     });
// });
// const shipperOptions = shipperList.map((item, index) => {
//   return {
//     value: item.id,
//     label: item.name,
//   };
// });



  // select-options
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

      {/* truck-select */}
      const truckOptions= [
        { value: 'Container', label:  <div><Truck1 className="mx-1"/>Container</div> },
        { value: 'Flatbed', label: <div><Truck1 className="mx-1"/>Flatbed</div>  },
        { value: 'Dry Van', label: <div><Truck1 className="mx-1"/>Dry Van</div>  },
        { value: 'Lowboy trailer', label: <div><Truck1 className="mx-1"/>Lowboy</div>  },
      ]; 
      {/* shipmentType-select */}
      const shipmentOptions= [
        { value: 'Freezed', label: "Freezed" },
        { value: 'Normal', label: 'Normal' },
      ]; 
      // commidity-type
      // const commidityOptions= [
      //   { value: 'Load type 1 ', label: "Load type 1 " },
      //   { value: 'Load type 2', label: 'Load type 2' },
      // ]; 
      // UOF-M
      const UnitmeasureOptions= [
        { value: 'Pallets', label: "Pallets" },
        { value: 'Pisces', label: 'Pisces' },
      ];
  return (
    <>
      <div className="inputs row">
        <div className="input col-2">
          <label htmlFor="address">
            Truck Type<span>*</span>
          </label>
            {/* trucktype */}
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
            options={truckOptions}
        />
        </div>
        <div className="input col-2">
          <label htmlFor="address">
            Shipment type<span>*</span>
          </label>
            {/* shipment-type */}
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
            options={shipmentOptions}
        />
        </div>
        <div className="input col-2">
          <label htmlFor="address">
            Shipment value<span>*</span>
          </label>
          <input type="text" placeholder="i,e, 10" />
        </div>
        <div className="input col-2">
          <label htmlFor="address">
            Weight<span>*</span>
          </label>
          <input type="text" placeholder="i,e,2000" />
        </div>
        <div className="input col-2">
          <label htmlFor="address">
            Number of trucks<span>*</span>
          </label>
          <input type="text" placeholder="i,e,2000" />
        </div>
        <div className="input col-2">
          <label htmlFor="address">
            Description
          </label>
          <input type="text" placeholder="text here" />
        </div>
      </div>

      <div className="inputs row">
        <div className="input col-3">
          <label htmlFor="address">
            Packing List Attachments<span>*</span>
          </label>
          <div className="input-group ">
            <input
              type="file"
              multiple="multiple"
              className="input-file form-control"
              id="inputGroupFile03"
              aria-describedby="inputGroupFileAddon03"
              aria-label="Upload"
            />
          </div>
        </div>
        <div className="input col-3">
          <label htmlFor="address">
            Other Documentation
          </label>
          <div className="input-group ">
            <input
              type="file"
              multiple="multiple"
              className="input-file form-control"
              id="inputGroupFile03"
              aria-describedby="inputGroupFileAddon03"
              aria-label="Upload"
            />
          </div>
        </div>
        <div className="input col-2">
          <label htmlFor="address">
            Commodity type<span>*</span>
          </label>
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
            // options={commidtiesOptions}
        />
        </div>
        <div className="input col-2">
          <label htmlFor="address">
            Unity of measurement<span>*</span>
          </label>
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
            options={UnitmeasureOptions}
        />
        </div>
        <div className="input col-2">
          <label htmlFor="address">
            Quantity<span>*</span>
          </label>
          <input type="text" placeholder="i,e,02" />
        </div>
      </div>
    </>
  );
}
export default Inputs;
