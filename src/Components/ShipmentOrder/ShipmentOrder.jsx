import React, { useCallback } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import "./ShipmentOrder.css";
import code from "../../icons/code.png";
import { useParams } from "react-router-dom";
import Driverimg from '../../icons/drivers-img.png';
import Location from '../../icons/location.png';
// import TruckLoction from "../../icons/truck-marck.png"
import TruckLoction from "../../icons/truckblue.png"


// tables
import { useMemo } from "react";
import MaterialReactTable from "material-react-table";
// import Map from "./Map";
import {
  Box,
  Button,
  ListItemIcon,
  MenuItem,
  Typography,
  TextField,
} from "@mui/material";

import { GoogleMap, LoadScript , Marker , MarkerF} from '@react-google-maps/api';





const icon = {
  url: TruckLoction,
};

const ShipmentOrder = () => {
  const { id } = useParams();
  const shipmentId= id;
  const [detailsList, setDetailsList] = useState([]);
  const [cookie] = useCookies(["eload_token"]);


  const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: "20px"
  };
  
  const center = {
    lat: Number(detailsList.from_city?.latitude),
    lng: Number(detailsList.from_city?.longitude),
  };

  const MarkerTruck = () => <img src={detailsList.truck_type?.image} alt="marker" style={{width:"100%"}}/>

  // Api=====fetch__All-details
  useEffect(() => {
    const allDetails = async () => {
      // setCookie("eload_token", data.data.token.access);
      try {
        const response = await axios.get(
          // https://dev.eload.smart.sa/api/v1/categories
          // `${process.env.REACT_BASE_URL}/categories`,

          `https://dev.eload.smart.sa/api/v1/shipments/${id}`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${cookie.eload_token}`,

              "api-key":
                "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
            },
          }
        );

        const data = response.data.data;
        console.log(data);
        setDetailsList(data);
        return data;
      } catch (e) {
        console.log(e);
      }
    };

    allDetails();
  }, []);

  // Api======Assign-tables

// Api-with no change in price
    const AssignApinochange = async (provider_id ,shipmentId ) => {
      console.log(shipmentId,"shipmentid");
      var urlencoded = new URLSearchParams();
      // urlencoded.append("price", price);
      urlencoded.append("provider_id", provider_id);

      try {
        const response = await axios.put(

          `https://dev.eload.smart.sa/api/v1/shipments/${shipmentId}`,
          // `https://dev.eload.smart.sa/api/v1/shipments/1688`,

          urlencoded,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${cookie.eload_token}`,
              "api-key":
                "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
            },
          }
        );

        console.log(priceValue,"Assigne----done");

      } catch (e) {
        console.log(e);
      }

  };

  // Api with change in price
  const AssignApiPrice = async (price ,interestId ) => {
    console.log(price,"pricechanges");
    var urlencoded = new URLSearchParams();
    urlencoded.append("price", price);
    // urlencoded.append("provider_id", provider_id);

    try {
      const response = await axios.put(

        `https://dev.eload.smart.sa/api/v1/interests/${interestId}`,
        // `https://dev.eload.smart.sa/api/v1/shipments/1688`,

        urlencoded,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${cookie.eload_token}`,
            "api-key":
              "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
          },
        }
      );

      console.log(priceValue,"Assigne----done");

    } catch (e) {
      console.log(e);
    }

};

  // table2 with one Api
  const AssignApiNoAction = async (provider_id ,shipmentId ,price ) => {
    console.log(shipmentId,"shipmentid");
    var urlencoded = new URLSearchParams();
    urlencoded.append("provider_id", provider_id);
    urlencoded.append("price", price);

    try {
      const response = await axios.put(

        `https://dev.eload.smart.sa/api/v1/shipments/${shipmentId}`,


        urlencoded,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${cookie.eload_token}`,
            "api-key":
              "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
          },
        }
      );

      console.log(priceValue,"Assigne----done");

    } catch (e) {
      console.log(e);
    }

};

const [changeprice,setChangePrice]=useState(false);
const [priceValue ,setPriceValue]= useState(0);

// ================tables================

const columnsServiceProvide = useMemo(
  () => [
    {
      accessorKey: "partner",
      header: "PARTNER",
      size: 60,
      Cell: ({ renderedCellValue, row }) => (
        <Box
          sx={{
            display: "flex",
            // alignItems: "center",
            gap: "1rem",
          }}
        >
            {
             
              detailsList?.allow_driver_to_start===true ?
              <span style={{ color: "#FF8A00" }}>{renderedCellValue}</span>
              :
              <span>{renderedCellValue}</span>
            }
           
        </Box>
      ),
    },
    {
      accessorKey: "contractprice",
      header: "CONTARCTED PRICE",
      size: 30,
      Cell: ({ renderedCellValue, row }) => (
        <Box
          sx={{
            display: "flex",
            // alignItems: "center",
            gap: "1rem",
          }}
        >

            <span contentEditable={true} 
            // onInput={handlePriceChange}
            onInput={(e)=>{
              setChangePrice(true);
              console.log("changeeeeeeeeeeeeeeeed");
              setPriceValue(Number(e.target.innerText));

              }}
              dangerouslySetInnerHTML={{ __html: renderedCellValue }}
              ></span>


            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2599 3.59997L5.04985 12.29C4.73985 12.62 4.43985 13.27 4.37985 13.72L4.00985 16.96C3.87985 18.13 4.71985 18.93 5.87985 18.73L9.09985 18.18C9.54985 18.1 10.1799 17.77 10.4899 17.43L18.6999 8.73997C20.1199 7.23997 20.7599 5.52997 18.5499 3.43997C16.3499 1.36997 14.6799 2.09997 13.2599 3.59997Z" stroke="#18AEC9" stroke-width="1.5" strokeMiterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.8901 5.05005C12.3201 7.81005 14.5601 9.92005 17.3401 10.2" stroke="#18AEC9" stroke-width="1.5" strokeMiterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 22H21" stroke="#18AEC9" stroke-width="1.5" strokeMiterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </Box>
      ),
    },
    {
        accessorKey: "margin",
        header: "MARGIN",
        size: 30,
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: "flex",
              // alignItems: "center",
              gap: "1rem",
            }}
          >
            {/* <NavLink style={{ color: "#0085FF" }} to={`/allshipments/shipmentorder/${row.original.id}`}> */}
            {
              renderedCellValue>=0 ? 
              <>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.53 12.03C15.38 12.18 15.19 12.25 15 12.25C14.81 12.25 14.62 12.18 14.47 12.03L12.75 10.31V15.5C12.75 15.91 12.41 16.25 12 16.25C11.59 16.25 11.25 15.91 11.25 15.5V10.31L9.53 12.03C9.24 12.32 8.76 12.32 8.47 12.03C8.18 11.74 8.18 11.26 8.47 10.97L11.47 7.97C11.76 7.68 12.24 7.68 12.53 7.97L15.53 10.97C15.82 11.26 15.82 11.74 15.53 12.03Z" fill="#18AEC9"/>
              </svg>
                <span>{renderedCellValue}</span>
                </>
              :
              <>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM8.47 11.97C8.62 11.82 8.81 11.75 9 11.75C9.19 11.75 9.38 11.82 9.53 11.97L11.25 13.69L11.25 8.5C11.25 8.09 11.59 7.75 12 7.75C12.41 7.75 12.75 8.09 12.75 8.5L12.75 13.69L14.47 11.97C14.76 11.68 15.24 11.68 15.53 11.97C15.82 12.26 15.82 12.74 15.53 13.03L12.53 16.03C12.24 16.32 11.76 16.32 11.47 16.03L8.47 13.03C8.18 12.74 8.18 12.26 8.47 11.97Z" fill="#F80F10"/>
              </svg>
              <span>{renderedCellValue}</span>
              </>
            }

          </Box>
        ),
      },
    {
      accessorKey: "margin2",
      header: "MARGIN%",
      size: 30,
      Cell: ({ renderedCellValue, row }) => (
        <Box
          sx={{
            display: "flex",
            // alignItems: "center",
            gap: "1rem",
          }}
        >
            <span>{renderedCellValue} %</span>
        </Box>
      ),
    },
  
    {
      accessorKey: "mobile",
      header: "MOBILE",
      size: 30,
    },
    {
      accessorKey: "email",
      header: "EMAIL",
      size: 30,
    },
    {
      accessorKey: "type",
      header: "TYPE",
      size: 30,
    },

    {
      accessorKey: "options",
      header: "OPTIONS",
      size: 30,
      Cell: ({ renderedCellValue, row }) => (
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >

          {
            changeprice === true ? 
            <button onClick={()=> {AssignApiPrice(priceValue, row.original.id);
              console.log(row.original.id,"idinbuttonpriceeeeeeeeeeeee");  
      
              console.log(priceValue,"pricefuncttttttttttttttttttttt");  
              }}
                style={{border:"0", borderRadius: "20px", padding: "3px 8px", background:"#0E324A", color:"#fff", fontSize:"16px" , fontWeight:"400"}}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 13.5C17.56 13.5 16.69 13.83 16 14.38C15.08 15.11 14.5 16.24 14.5 17.5C14.5 18.25 14.71 18.96 15.08 19.56C15.77 20.72 17.04 21.5 18.5 21.5C19.51 21.5 20.43 21.13 21.13 20.5C21.44 20.24 21.71 19.92 21.92 19.56C22.29 18.96 22.5 18.25 22.5 17.5C22.5 15.29 20.71 13.5 18.5 13.5ZM20.57 17.07L18.44 19.04C18.3 19.17 18.11 19.24 17.93 19.24C17.74 19.24 17.55 19.17 17.4 19.02L16.41 18.03C16.12 17.74 16.12 17.26 16.41 16.97C16.7 16.68 17.18 16.68 17.47 16.97L17.95 17.45L19.55 15.97C19.85 15.69 20.33 15.71 20.61 16.01C20.89 16.31 20.87 16.78 20.57 17.07Z" fill="white"/>
                <path opacity="0.4" d="M21.5901 22C21.5901 22.28 21.3701 22.5 21.0901 22.5H3.91016C3.63016 22.5 3.41016 22.28 3.41016 22C3.41016 17.86 7.49015 14.5 12.5002 14.5C13.5302 14.5 14.5302 14.64 15.4502 14.91C14.8602 15.61 14.5002 16.52 14.5002 17.5C14.5002 18.25 14.7101 18.96 15.0801 19.56C15.2801 19.9 15.5401 20.21 15.8401 20.47C16.5401 21.11 17.4702 21.5 18.5002 21.5C19.6202 21.5 20.6302 21.04 21.3502 20.3C21.5102 20.84 21.5901 21.41 21.5901 22Z" fill="white"/>
                <path d="M12.5 12.5C15.2614 12.5 17.5 10.2614 17.5 7.5C17.5 4.73858 15.2614 2.5 12.5 2.5C9.73858 2.5 7.5 4.73858 7.5 7.5C7.5 10.2614 9.73858 12.5 12.5 12.5Z" fill="white"/>
                </svg>
                {renderedCellValue}
                </button>
            
            :

            <button onClick={()=> {AssignApinochange(row.original.id, shipmentId);
              console.log(row.original.id,"idinbuttonnoooooooooooo");  
      
          
              }}
                style={{border:"0", borderRadius: "20px", padding: "3px 8px", background:"#0E324A", color:"#fff", fontSize:"16px" , fontWeight:"400"}}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 13.5C17.56 13.5 16.69 13.83 16 14.38C15.08 15.11 14.5 16.24 14.5 17.5C14.5 18.25 14.71 18.96 15.08 19.56C15.77 20.72 17.04 21.5 18.5 21.5C19.51 21.5 20.43 21.13 21.13 20.5C21.44 20.24 21.71 19.92 21.92 19.56C22.29 18.96 22.5 18.25 22.5 17.5C22.5 15.29 20.71 13.5 18.5 13.5ZM20.57 17.07L18.44 19.04C18.3 19.17 18.11 19.24 17.93 19.24C17.74 19.24 17.55 19.17 17.4 19.02L16.41 18.03C16.12 17.74 16.12 17.26 16.41 16.97C16.7 16.68 17.18 16.68 17.47 16.97L17.95 17.45L19.55 15.97C19.85 15.69 20.33 15.71 20.61 16.01C20.89 16.31 20.87 16.78 20.57 17.07Z" fill="white"/>
                <path opacity="0.4" d="M21.5901 22C21.5901 22.28 21.3701 22.5 21.0901 22.5H3.91016C3.63016 22.5 3.41016 22.28 3.41016 22C3.41016 17.86 7.49015 14.5 12.5002 14.5C13.5302 14.5 14.5302 14.64 15.4502 14.91C14.8602 15.61 14.5002 16.52 14.5002 17.5C14.5002 18.25 14.7101 18.96 15.0801 19.56C15.2801 19.9 15.5401 20.21 15.8401 20.47C16.5401 21.11 17.4702 21.5 18.5002 21.5C19.6202 21.5 20.6302 21.04 21.3502 20.3C21.5102 20.84 21.5901 21.41 21.5901 22Z" fill="white"/>
                <path d="M12.5 12.5C15.2614 12.5 17.5 10.2614 17.5 7.5C17.5 4.73858 15.2614 2.5 12.5 2.5C9.73858 2.5 7.5 4.73858 7.5 7.5C7.5 10.2614 9.73858 12.5 12.5 12.5Z" fill="white"/>
                </svg>
                 {renderedCellValue}
                </button> 

          }
          
        </Box>
      ),
    },
  ],
  [priceValue ,changeprice]
);
const InterstedArray =Array.isArray(detailsList.eligible?.interested
  ) ? [...detailsList.eligible?.interested
  ]: [];

// services-table
 const dataservices = InterstedArray.map((item, index) => {
    
    return {
      id:item.id,
      partner: item.name,
      contractprice: item.price,
      margin: item.margin,
      margin2: item.margin_percentage,
      mobile: item.user.phone,
      email: item.user.email,
      type: item.type,
      options: 'Assign',
  
    };
  });// editable-input==============

// ========tanle2-no-action
const columnsServiceProvide2 = useMemo(
  () => [
    {
      accessorKey: "partner",
      header: "PARTNER",
      size: 60,
      Cell: ({ renderedCellValue, row }) => (
        <Box
          sx={{
            display: "flex",
            // alignItems: "center",
            gap: "1rem",
          }}
        >
            {
             
              detailsList?.allow_driver_to_start===true ?
              <span style={{ color: "#FF8A00" }}>{renderedCellValue}</span>
              :
              <span>{renderedCellValue}</span>
            }
           
        </Box>
      ),
    },
    {
      accessorKey: "contractprice",
      header: "CONTARCTED PRICE",
      size: 30,
      Cell: ({ renderedCellValue, row }) => (
        <Box
          sx={{
            display: "flex",
            // alignItems: "center",
            gap: "1rem",
          }}
        >


            <span contentEditable={true} 
            // onInput={handlePriceChange}
            onInput={(e)=>{
              setChangePrice(true);
              console.log("changeeeeeeeeeeeeeeeed");
              setPriceValue(Number(e.target.innerText));

              }}
              dangerouslySetInnerHTML={{ __html: renderedCellValue }}
              ></span>


            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2599 3.59997L5.04985 12.29C4.73985 12.62 4.43985 13.27 4.37985 13.72L4.00985 16.96C3.87985 18.13 4.71985 18.93 5.87985 18.73L9.09985 18.18C9.54985 18.1 10.1799 17.77 10.4899 17.43L18.6999 8.73997C20.1199 7.23997 20.7599 5.52997 18.5499 3.43997C16.3499 1.36997 14.6799 2.09997 13.2599 3.59997Z" stroke="#18AEC9" stroke-width="1.5" strokeMiterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.8901 5.05005C12.3201 7.81005 14.5601 9.92005 17.3401 10.2" stroke="#18AEC9" stroke-width="1.5" strokeMiterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 22H21" stroke="#18AEC9" stroke-width="1.5" strokeMiterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </Box>
      ),
    },
    {
        accessorKey: "margin",
        header: "MARGIN",
        size: 30,
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: "flex",
              // alignItems: "center",
              gap: "1rem",
            }}
          >
            {/* <NavLink style={{ color: "#0085FF" }} to={`/allshipments/shipmentorder/${row.original.id}`}> */}
            {
              renderedCellValue>=0 ? 
              <>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.53 12.03C15.38 12.18 15.19 12.25 15 12.25C14.81 12.25 14.62 12.18 14.47 12.03L12.75 10.31V15.5C12.75 15.91 12.41 16.25 12 16.25C11.59 16.25 11.25 15.91 11.25 15.5V10.31L9.53 12.03C9.24 12.32 8.76 12.32 8.47 12.03C8.18 11.74 8.18 11.26 8.47 10.97L11.47 7.97C11.76 7.68 12.24 7.68 12.53 7.97L15.53 10.97C15.82 11.26 15.82 11.74 15.53 12.03Z" fill="#18AEC9"/>
              </svg>
                <span>{renderedCellValue}</span>
                </>
              :
              <>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM8.47 11.97C8.62 11.82 8.81 11.75 9 11.75C9.19 11.75 9.38 11.82 9.53 11.97L11.25 13.69L11.25 8.5C11.25 8.09 11.59 7.75 12 7.75C12.41 7.75 12.75 8.09 12.75 8.5L12.75 13.69L14.47 11.97C14.76 11.68 15.24 11.68 15.53 11.97C15.82 12.26 15.82 12.74 15.53 13.03L12.53 16.03C12.24 16.32 11.76 16.32 11.47 16.03L8.47 13.03C8.18 12.74 8.18 12.26 8.47 11.97Z" fill="#F80F10"/>
              </svg>
              <span>{renderedCellValue}</span>
              </>
            }

          </Box>
        ),
      },
    {
      accessorKey: "margin2",
      header: "MARGIN%",
      size: 30,
      Cell: ({ renderedCellValue, row }) => (
        <Box
          sx={{
            display: "flex",
            // alignItems: "center",
            gap: "1rem",
          }}
        >
            <span>{renderedCellValue} %</span>
        </Box>
      ),
    },
  
    {
      accessorKey: "mobile",
      header: "MOBILE",
      size: 30,
    },
    {
      accessorKey: "email",
      header: "EMAIL",
      size: 30,
    },
    {
      accessorKey: "type",
      header: "TYPE",
      size: 30,
    },

    {
      accessorKey: "options",
      header: "OPTIONS",
      size: 30,
      Cell: ({ renderedCellValue, row }) => (
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >

            <button onClick={()=> {AssignApiNoAction(row.original.id, shipmentId , priceValue);
              console.log(row.original.id,"table22222222222");
              console.log(priceValue,"table22222222222pricevalue");  
              }}
                style={{border:"0", borderRadius: "20px", padding: "3px 8px", background:"#0E324A", color:"#fff", fontSize:"16px" , fontWeight:"400"}}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 13.5C17.56 13.5 16.69 13.83 16 14.38C15.08 15.11 14.5 16.24 14.5 17.5C14.5 18.25 14.71 18.96 15.08 19.56C15.77 20.72 17.04 21.5 18.5 21.5C19.51 21.5 20.43 21.13 21.13 20.5C21.44 20.24 21.71 19.92 21.92 19.56C22.29 18.96 22.5 18.25 22.5 17.5C22.5 15.29 20.71 13.5 18.5 13.5ZM20.57 17.07L18.44 19.04C18.3 19.17 18.11 19.24 17.93 19.24C17.74 19.24 17.55 19.17 17.4 19.02L16.41 18.03C16.12 17.74 16.12 17.26 16.41 16.97C16.7 16.68 17.18 16.68 17.47 16.97L17.95 17.45L19.55 15.97C19.85 15.69 20.33 15.71 20.61 16.01C20.89 16.31 20.87 16.78 20.57 17.07Z" fill="white"/>
                <path opacity="0.4" d="M21.5901 22C21.5901 22.28 21.3701 22.5 21.0901 22.5H3.91016C3.63016 22.5 3.41016 22.28 3.41016 22C3.41016 17.86 7.49015 14.5 12.5002 14.5C13.5302 14.5 14.5302 14.64 15.4502 14.91C14.8602 15.61 14.5002 16.52 14.5002 17.5C14.5002 18.25 14.7101 18.96 15.0801 19.56C15.2801 19.9 15.5401 20.21 15.8401 20.47C16.5401 21.11 17.4702 21.5 18.5002 21.5C19.6202 21.5 20.6302 21.04 21.3502 20.3C21.5102 20.84 21.5901 21.41 21.5901 22Z" fill="white"/>
                <path d="M12.5 12.5C15.2614 12.5 17.5 10.2614 17.5 7.5C17.5 4.73858 15.2614 2.5 12.5 2.5C9.73858 2.5 7.5 4.73858 7.5 7.5C7.5 10.2614 9.73858 12.5 12.5 12.5Z" fill="white"/>
                </svg>
                 {renderedCellValue}
                </button> 
        </Box>
      ),
    },
  ],
  [priceValue ,changeprice]
);
// console.log(priceValue,"price");
// services-table

// data-no-actions

const noActionArray =Array.isArray(detailsList.eligible?.no_action) ? [...detailsList.eligible?.no_action]: [];

const dataservicesnoaction = noActionArray.map((item, index) => {
    
  return {
    id:item.id,
    partner: item.name,
    contractprice: item.price,
    margin: item.margin,
    margin2: item.margin_percentage,
    mobile: item.user.phone,
    email: item.user.email,
    type: item.type,
    options: 'Assign',

  };
});
// ============table3-------------------------------------
const columnsEligible = useMemo(
  () => [
    {
      accessorKey: "partner",
      header: "PARTNER",
      size: 60,
      Cell: ({ renderedCellValue, row }) => (
        <Box
          sx={{
            display: "flex",
            // alignItems: "center",
            gap: "1rem",
          }}
        >
            {
             
              detailsList?.allow_driver_to_start===true ?
              <span style={{ color: "#FF8A00" }}>{renderedCellValue}</span>
              :
              <span>{renderedCellValue}</span>
            }
           
        </Box>
      ),
    },
    {
      accessorKey: "contractprice",
      header: "CONTARCTED PRICE",
      size: 30,
      Cell: ({ renderedCellValue, row }) => (
        <Box
          sx={{
            display: "flex",
            // alignItems: "center",
            gap: "1rem",
          }}
        >


            <span contentEditable={true} 
            // onInput={handlePriceChange}
            onInput={(e)=>{
              setChangePrice(true);
              console.log("changeeeeeeeeeeeeeeeed");
              setPriceValue(Number(e.target.innerText));

              }}
              dangerouslySetInnerHTML={{ __html: renderedCellValue }}
              ></span>

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2599 3.59997L5.04985 12.29C4.73985 12.62 4.43985 13.27 4.37985 13.72L4.00985 16.96C3.87985 18.13 4.71985 18.93 5.87985 18.73L9.09985 18.18C9.54985 18.1 10.1799 17.77 10.4899 17.43L18.6999 8.73997C20.1199 7.23997 20.7599 5.52997 18.5499 3.43997C16.3499 1.36997 14.6799 2.09997 13.2599 3.59997Z" stroke="#18AEC9" stroke-width="1.5" strokeMiterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.8901 5.05005C12.3201 7.81005 14.5601 9.92005 17.3401 10.2" stroke="#18AEC9" stroke-width="1.5" strokeMiterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 22H21" stroke="#18AEC9" stroke-width="1.5" strokeMiterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </Box>
      ),
    },
    {
        accessorKey: "margin",
        header: "MARGIN",
        size: 30,
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: "flex",
              // alignItems: "center",
              gap: "1rem",
            }}
          >
            {/* <NavLink style={{ color: "#0085FF" }} to={`/allshipments/shipmentorder/${row.original.id}`}> */}
            {
              renderedCellValue>=0 ? 
              <>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.53 12.03C15.38 12.18 15.19 12.25 15 12.25C14.81 12.25 14.62 12.18 14.47 12.03L12.75 10.31V15.5C12.75 15.91 12.41 16.25 12 16.25C11.59 16.25 11.25 15.91 11.25 15.5V10.31L9.53 12.03C9.24 12.32 8.76 12.32 8.47 12.03C8.18 11.74 8.18 11.26 8.47 10.97L11.47 7.97C11.76 7.68 12.24 7.68 12.53 7.97L15.53 10.97C15.82 11.26 15.82 11.74 15.53 12.03Z" fill="#18AEC9"/>
              </svg>
                <span>{renderedCellValue}</span>
                </>
              :
              <>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM8.47 11.97C8.62 11.82 8.81 11.75 9 11.75C9.19 11.75 9.38 11.82 9.53 11.97L11.25 13.69L11.25 8.5C11.25 8.09 11.59 7.75 12 7.75C12.41 7.75 12.75 8.09 12.75 8.5L12.75 13.69L14.47 11.97C14.76 11.68 15.24 11.68 15.53 11.97C15.82 12.26 15.82 12.74 15.53 13.03L12.53 16.03C12.24 16.32 11.76 16.32 11.47 16.03L8.47 13.03C8.18 12.74 8.18 12.26 8.47 11.97Z" fill="#F80F10"/>
              </svg>
              <span>{renderedCellValue}</span>
              </>
            }

          </Box>
        ),
      },
    {
      accessorKey: "margin2",
      header: "MARGIN%",
      size: 30,
      Cell: ({ renderedCellValue, row }) => (
        <Box
          sx={{
            display: "flex",
            // alignItems: "center",
            gap: "1rem",
          }}
        >
            <span>{renderedCellValue} %</span>
        </Box>
      ),
    },
  
    {
      accessorKey: "mobile",
      header: "MOBILE",
      size: 30,
    },
    {
      accessorKey: "email",
      header: "EMAIL",
      size: 30,
    },
    {
      accessorKey: "type",
      header: "TYPE",
      size: 30,
    },

    {
      accessorKey: "options",
      header: "OPTIONS",
      size: 30,
      Cell: ({ renderedCellValue, row }) => (
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >

          {
            changeprice === true ? 
            <button onClick={()=> {AssignApiPrice(priceValue, row.original.id);
              console.log(row.original.id,"idinbuttonpriceeeeeeeeeeeee");  
      
              console.log(priceValue,"pricefuncttttttttttttttttttttt");  
              }}
                style={{border:"0", borderRadius: "20px", padding: "3px 8px", background:"#0E324A", color:"#fff", fontSize:"16px" , fontWeight:"400"}}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 13.5C17.56 13.5 16.69 13.83 16 14.38C15.08 15.11 14.5 16.24 14.5 17.5C14.5 18.25 14.71 18.96 15.08 19.56C15.77 20.72 17.04 21.5 18.5 21.5C19.51 21.5 20.43 21.13 21.13 20.5C21.44 20.24 21.71 19.92 21.92 19.56C22.29 18.96 22.5 18.25 22.5 17.5C22.5 15.29 20.71 13.5 18.5 13.5ZM20.57 17.07L18.44 19.04C18.3 19.17 18.11 19.24 17.93 19.24C17.74 19.24 17.55 19.17 17.4 19.02L16.41 18.03C16.12 17.74 16.12 17.26 16.41 16.97C16.7 16.68 17.18 16.68 17.47 16.97L17.95 17.45L19.55 15.97C19.85 15.69 20.33 15.71 20.61 16.01C20.89 16.31 20.87 16.78 20.57 17.07Z" fill="white"/>
                <path opacity="0.4" d="M21.5901 22C21.5901 22.28 21.3701 22.5 21.0901 22.5H3.91016C3.63016 22.5 3.41016 22.28 3.41016 22C3.41016 17.86 7.49015 14.5 12.5002 14.5C13.5302 14.5 14.5302 14.64 15.4502 14.91C14.8602 15.61 14.5002 16.52 14.5002 17.5C14.5002 18.25 14.7101 18.96 15.0801 19.56C15.2801 19.9 15.5401 20.21 15.8401 20.47C16.5401 21.11 17.4702 21.5 18.5002 21.5C19.6202 21.5 20.6302 21.04 21.3502 20.3C21.5102 20.84 21.5901 21.41 21.5901 22Z" fill="white"/>
                <path d="M12.5 12.5C15.2614 12.5 17.5 10.2614 17.5 7.5C17.5 4.73858 15.2614 2.5 12.5 2.5C9.73858 2.5 7.5 4.73858 7.5 7.5C7.5 10.2614 9.73858 12.5 12.5 12.5Z" fill="white"/>
                </svg>
                {renderedCellValue}
                </button>
            
            :

            <button onClick={()=> {AssignApinochange(row.original.id, shipmentId);
              console.log(row.original.id,"idinbuttonnoooooooooooo");  
      
          
              }}
                style={{border:"0", borderRadius: "20px", padding: "3px 8px", background:"#0E324A", color:"#fff", fontSize:"16px" , fontWeight:"400"}}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 13.5C17.56 13.5 16.69 13.83 16 14.38C15.08 15.11 14.5 16.24 14.5 17.5C14.5 18.25 14.71 18.96 15.08 19.56C15.77 20.72 17.04 21.5 18.5 21.5C19.51 21.5 20.43 21.13 21.13 20.5C21.44 20.24 21.71 19.92 21.92 19.56C22.29 18.96 22.5 18.25 22.5 17.5C22.5 15.29 20.71 13.5 18.5 13.5ZM20.57 17.07L18.44 19.04C18.3 19.17 18.11 19.24 17.93 19.24C17.74 19.24 17.55 19.17 17.4 19.02L16.41 18.03C16.12 17.74 16.12 17.26 16.41 16.97C16.7 16.68 17.18 16.68 17.47 16.97L17.95 17.45L19.55 15.97C19.85 15.69 20.33 15.71 20.61 16.01C20.89 16.31 20.87 16.78 20.57 17.07Z" fill="white"/>
                <path opacity="0.4" d="M21.5901 22C21.5901 22.28 21.3701 22.5 21.0901 22.5H3.91016C3.63016 22.5 3.41016 22.28 3.41016 22C3.41016 17.86 7.49015 14.5 12.5002 14.5C13.5302 14.5 14.5302 14.64 15.4502 14.91C14.8602 15.61 14.5002 16.52 14.5002 17.5C14.5002 18.25 14.7101 18.96 15.0801 19.56C15.2801 19.9 15.5401 20.21 15.8401 20.47C16.5401 21.11 17.4702 21.5 18.5002 21.5C19.6202 21.5 20.6302 21.04 21.3502 20.3C21.5102 20.84 21.5901 21.41 21.5901 22Z" fill="white"/>
                <path d="M12.5 12.5C15.2614 12.5 17.5 10.2614 17.5 7.5C17.5 4.73858 15.2614 2.5 12.5 2.5C9.73858 2.5 7.5 4.73858 7.5 7.5C7.5 10.2614 9.73858 12.5 12.5 12.5Z" fill="white"/>
                </svg>
                 {renderedCellValue}
                </button> 

          }
          
        </Box>
      ),
    },
  ],
  [priceValue ,changeprice]
);
// const FinancialArray =Array.isArray(detailsList.eligible?.no_action) ? [...detailsList.eligible?.no_action]: [];

// Eligible Service provider
 const dataEligible = [
  {
    partner: 'Driver name',
    contractprice: '1500',
    margin: '480',
    margin2: '100',
    mobile: '+92 335 252 2522',
    email: 'test_freelance_driver@example.com',
    type: 'Freelancer',
    options: 'Assign',
  },
  {
    partner: 'Driver name',
    contractprice: '1500',
    margin: '480',
    margin2: '100',
    mobile: '+92 335 252 2522',
    email: 'test_freelance_driver@example.com',
    type: 'Freelancer',
    options: 'Assign',
  },
  {
    partner: 'Freelancer',
    contractprice: '1500',
    margin: '480',
    margin2: '100',
    mobile: '+92 335 252 2522',
    email: 'test_freelance_driver@example.com',
    type: 'Partner',
    options: 'Assign',
  },
  {
    partner: 'Freelancer',
    contractprice: '1500',
    margin: '480',
    margin2: '100',
    mobile: '+92 335 252 2522',
    email: 'test_freelance_driver@example.com',
    type: 'Partner',
    options: 'Assign',
  },
]
// icon
// const iconUrl = detailsList.truck_type?.image;
// =========files
console.log(detailsList?.sorted_attachments ,"filesArray");

const fileboxes = [];

for (const filebox in detailsList.sorted_attachments) {
  fileboxes.push(
    <div key={filebox}>{filebox}</div>
  );
}
const packingListArray = Array.isArray(fileboxes?.packing_list)? [...fileboxes?.packing_list]:[]; 

  return (
    <div className="container-fluid px-4 orderdetails">
      <div className="orderhead px-2">
        <div className="text-head">Shipment:{detailsList?.code}</div>
        <div className="img-head mb-3">
          <img src={code} alt="" />
          {/* img */}
        </div>
      </div>
      <hr />
      <div className="order-info">
        <div className="row">
          <div className="info-box col-4">
            <span className="info-text">Shipper</span>
            {/* <h4>Mahmoud Abuzeid</h4> */}
            <h4>{detailsList.order?.shipper?.name}</h4>
          </div>
          <div className="info-box col-4">
            <span className="info-text">Receiver</span>
            <h4>Mahmoud Ahmed</h4>
          </div>
          <div className="info-box col-4 text-center">
            <span className="info-text text-center">Shipper</span>
            <button className="btn-info">{detailsList?.status_i18n}</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="element-order">
        <div className="row">
          <div className="element-box col-2 br-element">
            <div className="head-element">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.16992 7.44L11.9999 12.55L20.7699 7.47"
                  stroke="#B2B2B2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 21.61V12.54"
                  stroke="#B2B2B2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.93014 2.48001L4.59014 5.44001C3.38014 6.11001 2.39014 7.79001 2.39014 9.17001V14.82C2.39014 16.2 3.38014 17.88 4.59014 18.55L9.93014 21.52C11.0701 22.15 12.9401 22.15 14.0801 21.52L19.4201 18.55C20.6301 17.88 21.6201 16.2 21.6201 14.82V9.17001C21.6201 7.79001 20.6301 6.11001 19.4201 5.44001L14.0801 2.47001C12.9301 1.84001 11.0701 1.84001 9.93014 2.48001Z"
                  stroke="#B2B2B2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="element-info">Shipment type</div>
            </div>
            <div className="text-element text-center">
              <h4>{detailsList.shipment_type?.name}</h4>
            </div>
          </div>
          <div className="element-box col-2 br-element">
            <div className="head-element">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9999 13.43C13.723 13.43 15.1199 12.0331 15.1199 10.31C15.1199 8.58687 13.723 7.19 11.9999 7.19C10.2768 7.19 8.87988 8.58687 8.87988 10.31C8.87988 12.0331 10.2768 13.43 11.9999 13.43Z"
                  stroke="#A9A9A9"
                  stroke-width="1.5"
                />
                <path
                  d="M3.6202 8.49C5.5902 -0.169998 18.4202 -0.159997 20.3802 8.5C21.5302 13.58 18.3702 17.88 15.6002 20.54C13.5902 22.48 10.4102 22.48 8.3902 20.54C5.6302 17.88 2.4702 13.57 3.6202 8.49Z"
                  stroke="#A9A9A9"
                  stroke-width="1.5"
                />
              </svg>
              <div className="element-info">PICKUP ADDRESS</div>
            </div>
            <div className="text-element text-center">
              <h4>{detailsList.from_city?.name}</h4>
            </div>
          </div>
          <div className="element-box col-2 br-element">
            <div className="head-element">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9999 13.43C13.723 13.43 15.1199 12.0331 15.1199 10.31C15.1199 8.58687 13.723 7.19 11.9999 7.19C10.2768 7.19 8.87988 8.58687 8.87988 10.31C8.87988 12.0331 10.2768 13.43 11.9999 13.43Z"
                  stroke="#A9A9A9"
                  stroke-width="1.5"
                />
                <path
                  d="M3.6202 8.49C5.5902 -0.169998 18.4202 -0.159997 20.3802 8.5C21.5302 13.58 18.3702 17.88 15.6002 20.54C13.5902 22.48 10.4102 22.48 8.3902 20.54C5.6302 17.88 2.4702 13.57 3.6202 8.49Z"
                  stroke="#A9A9A9"
                  stroke-width="1.5"
                />
              </svg>
              <div className="element-info">Drop of ADDRESS</div>
            </div>
            <div className="text-element text-center">
              <h4>{detailsList.to_city?.name}</h4>
            </div>
          </div>
          <div className="element-box col-2 br-element">
            <div className="head-element">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2V5"
                  stroke="#A9A9A9"
                  stroke-width="1.5"
                  strokeMiterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 2V5"
                  stroke="#A9A9A9"
                  stroke-width="1.5"
                  strokeMiterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.5 9.09H20.5"
                  stroke="#A9A9A9"
                  stroke-width="1.5"
                  strokeMiterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                  stroke="#A9A9A9"
                  stroke-width="1.5"
                  strokeMiterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.6947 13.7H15.7037"
                  stroke="#A9A9A9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.6947 16.7H15.7037"
                  stroke="#A9A9A9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9955 13.7H12.0045"
                  stroke="#A9A9A9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9955 16.7H12.0045"
                  stroke="#A9A9A9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.29431 13.7H8.30329"
                  stroke="#A9A9A9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.29431 16.7H8.30329"
                  stroke="#A9A9A9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="element-info">Created Date</div>
            </div>
            <div className="text-element text-center">
              <h4>{detailsList.order?.pickup_date}</h4>
            </div>
          </div>
          <div className="element-box col-2 ">
            <div className="head-element">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2V5"
                  stroke="#A9A9A9"
                  stroke-width="1.5"
                  strokeMiterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 2V5"
                  stroke="#A9A9A9"
                  stroke-width="1.5"
                  strokeMiterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.5 9.09H20.5"
                  stroke="#A9A9A9"
                  stroke-width="1.5"
                  strokeMiterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                  stroke="#A9A9A9"
                  stroke-width="1.5"
                  strokeMiterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.6947 13.7H15.7037"
                  stroke="#A9A9A9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.6947 16.7H15.7037"
                  stroke="#A9A9A9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9955 13.7H12.0045"
                  stroke="#A9A9A9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9955 16.7H12.0045"
                  stroke="#A9A9A9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.29431 13.7H8.30329"
                  stroke="#A9A9A9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.29431 16.7H8.30329"
                  stroke="#A9A9A9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="element-info">Shipped Date</div>
            </div>
            <div className="text-element ">
            <h4>{detailsList.order?.pickup_date}</h4>

            </div>
          </div>
          <div className="element-box col-2 br-element">
            <div className="head-element">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 2V12C15 13.1 14.1 14 13 14H2V6C2 3.79 3.79 2 6 2H15Z"
                  stroke="#B2B2B2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 14V17C22 18.66 20.66 20 19 20H18C18 18.9 17.1 18 16 18C14.9 18 14 18.9 14 20H10C10 18.9 9.1 18 8 18C6.9 18 6 18.9 6 20H5C3.34 20 2 18.66 2 17V14H13C14.1 14 15 13.1 15 12V5H16.84C17.56 5 18.22 5.39001 18.58 6.01001L20.29 9H19C18.45 9 18 9.45 18 10V13C18 13.55 18.45 14 19 14H22Z"
                  stroke="#B2B2B2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z"
                  stroke="#B2B2B2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z"
                  stroke="#B2B2B2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z"
                  stroke="#B2B2B2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div className="element-info">TRuck TYPE</div>
            </div>
            <div className="text-element ">
              <h4>{detailsList.truck_type?.name}</h4>
            </div>
          </div>
          <div className="element-box col-2 br-element">
            <div className="head-element">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9V15C3 20 5 22 10 22Z"
                  stroke="#B2B2B2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.25 8.29C14.26 5.63 9.74 5.63 6.75 8.29L8.93 11.79C10.68 10.23 13.32 10.23 15.07 11.79L17.25 8.29Z"
                  stroke="#B2B2B2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div className="element-info">WEIGHT</div>
            </div>
            <div className="text-element ">
              <h4>{detailsList?.weight}</h4>
            </div>
          </div>
          <div className="element-box col-2 br-element">
            <div className="head-element">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3 7.91998V13.07C19.3 16.15 17.54 17.47 14.9 17.47H6.10995C5.65995 17.47 5.22996 17.43 4.82996 17.34C4.57996 17.3 4.33996 17.23 4.11996 17.15C2.61996 16.59 1.70996 15.29 1.70996 13.07V7.91998C1.70996 4.83998 3.46995 3.52002 6.10995 3.52002H14.9C17.14 3.52002 18.75 4.47001 19.18 6.64001C19.25 7.04001 19.3 7.44998 19.3 7.91998Z"
                  stroke="#A9A9A9"
                  stroke-width="1.5"
                  strokeMiterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.3011 10.9201V16.0701C22.3011 19.1501 20.5411 20.4701 17.9011 20.4701H9.11105C8.37105 20.4701 7.70106 20.3701 7.12106 20.1501C5.93106 19.7101 5.12105 18.8001 4.83105 17.3401C5.23105 17.4301 5.66105 17.4701 6.11105 17.4701H14.9011C17.5411 17.4701 19.3011 16.1501 19.3011 13.0701V7.9201C19.3011 7.4501 19.2611 7.03014 19.1811 6.64014C21.0811 7.04014 22.3011 8.38011 22.3011 10.9201Z"
                  stroke="#A9A9A9"
                  stroke-width="1.5"
                  strokeMiterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.4984 13.1399C11.9564 13.1399 13.1384 11.9579 13.1384 10.4999C13.1384 9.04185 11.9564 7.85986 10.4984 7.85986C9.04038 7.85986 7.8584 9.04185 7.8584 10.4999C7.8584 11.9579 9.04038 13.1399 10.4984 13.1399Z"
                  stroke="#A9A9A9"
                  stroke-width="1.5"
                  strokeMiterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.77979 8.29999V12.7"
                  stroke="#A9A9A9"
                  stroke-width="1.5"
                  strokeMiterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.2217 8.30029V12.7003"
                  stroke="#A9A9A9"
                  stroke-width="1.5"
                  strokeMiterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div className="element-info">Shipment cost</div>
            </div>
            <div className="text-element ">
              <h4>{detailsList?.cost}</h4>
            </div>
          </div>
          <div className="element-box col-2 br-element">
            <div className="head-element">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22.75C8 22.75 4.75 19.88 4.75 16.35V12.65C4.75 12.24 5.09 11.9 5.5 11.9C5.91 11.9 6.25 12.24 6.25 12.65C6.25 15.27 8.72 17.25 12 17.25C15.28 17.25 17.75 15.27 17.75 12.65C17.75 12.24 18.09 11.9 18.5 11.9C18.91 11.9 19.25 12.24 19.25 12.65V16.35C19.25 19.88 16 22.75 12 22.75ZM6.25 16.46C6.32 19.11 8.87 21.25 12 21.25C15.13 21.25 17.68 19.11 17.75 16.46C16.45 17.87 14.39 18.75 12 18.75C9.61 18.75 7.56 17.87 6.25 16.46Z"
                  fill="#A9A9A9"
                />
                <path
                  d="M12 13.75C9.24 13.75 6.75999 12.51 5.54999 10.51C5.02999 9.66 4.75 8.67 4.75 7.65C4.75 5.93 5.52 4.31 6.91 3.09C8.27 1.9 10.08 1.25 12 1.25C13.92 1.25 15.72 1.9 17.09 3.08C18.48 4.31 19.25 5.93 19.25 7.65C19.25 8.67 18.97 9.65 18.45 10.51C17.24 12.51 14.76 13.75 12 13.75ZM12 2.75C10.44 2.75 8.98001 3.27 7.89001 4.23C6.83001 5.15 6.25 6.37 6.25 7.65C6.25 8.4 6.44999 9.1 6.82999 9.73C7.77999 11.29 9.76 12.25 12 12.25C14.24 12.25 16.22 11.28 17.17 9.73C17.56 9.1 17.75 8.4 17.75 7.65C17.75 6.37 17.17 5.15 16.1 4.21C15.01 3.27 13.56 2.75 12 2.75Z"
                  fill="#A9A9A9"
                />
                <path
                  d="M12 18.75C7.87 18.75 4.75 16.13 4.75 12.65V7.65C4.75 4.12 8 1.25 12 1.25C13.92 1.25 15.72 1.9 17.09 3.08C18.48 4.31 19.25 5.93 19.25 7.65V12.65C19.25 16.13 16.13 18.75 12 18.75ZM12 2.75C8.83 2.75 6.25 4.95 6.25 7.65V12.65C6.25 15.27 8.72 17.25 12 17.25C15.28 17.25 17.75 15.27 17.75 12.65V7.65C17.75 6.37 17.17 5.15 16.1 4.21C15.01 3.27 13.56 2.75 12 2.75Z"
                  fill="#A9A9A9"
                />
              </svg>

              <div className="element-info">Shipment Value</div>
            </div>
            <div className="text-element ">
              <h4>{detailsList?.value}</h4>
            </div>
          </div>
          <div className="element-box col-2 ">
            <div className="head-element">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.40002 6.5H15.6C19 6.5 19.34 8.09 19.57 10.03L20.47 17.53C20.76 19.99 20 22 16.5 22H7.51003C4.00003 22 3.24002 19.99 3.54002 17.53L4.44003 10.03C4.66003 8.09 5.00002 6.5 8.40002 6.5Z"
                  stroke="#A9A9A9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 8V4.5C8 3 9 2 10.5 2H13.5C15 2 16 3 16 4.5V8"
                  stroke="#A9A9A9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.41 17.03H8"
                  stroke="#A9A9A9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div className="element-info">Commodity TYPE</div>
            </div>
            <div className="text-element ">
              <h4>{detailsList.commodity?.name}</h4>
            </div>
          </div>
          <div className="element-box col-2 br-element">
            <div className="head-element">
              <svg
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1366_11497)">
                  <path
                    d="M10.4624 18C7.29352 18 4.09951 18 0.930646 18C0.653999 18 0.402502 17.949 0.201305 17.745C0.0755561 17.5921 0.000107013 17.4391 0.000107013 17.2351C0.000107013 17.0312 -0.0250427 16.8272 0.125856 16.6742C0.301903 16.4448 0.528251 16.3173 0.830047 16.3173C1.48394 16.3173 2.13783 16.3173 2.81687 16.3173C4.5019 16.3173 6.18693 16.3173 7.87196 16.3173C8.07316 16.3173 8.07316 16.3173 8.07316 16.1133C8.07316 15.5524 8.07316 14.9915 8.07316 14.4306C8.07316 14.3031 8.02286 14.2521 7.92226 14.2011C6.16178 13.4872 4.82885 12.2889 3.97376 10.5552C3.42047 9.43342 3.16897 8.20963 3.24442 6.96034C3.34502 5.27762 3.94861 3.77337 5.0552 2.49858C6.21208 1.1728 7.67077 0.331441 9.40609 0.0764835C11.6444 -0.254961 13.6061 0.331441 15.3163 1.83569C16.6744 3.03399 17.4791 4.56374 17.7055 6.37393C17.9067 7.7762 17.7055 9.12747 17.1019 10.4023C16.272 12.187 14.939 13.4618 13.1283 14.1756C13.0025 14.2266 12.9522 14.3031 12.9522 14.4306C12.9522 14.9915 12.9522 15.5269 12.9522 16.0878C12.9522 16.2918 12.9522 16.2918 13.1534 16.2918C15.4672 16.2918 17.8061 16.2918 20.1199 16.2918C20.3965 16.2918 20.6229 16.3683 20.7989 16.5722C21.0253 16.8272 21.0756 17.1076 20.975 17.4136C20.8744 17.7195 20.648 17.898 20.3211 17.949C20.2205 17.9745 20.1199 17.9745 20.0193 17.9745C16.8253 18 13.6312 18 10.4624 18ZM13.6312 3.72238C12.1726 2.29461 9.28035 1.88668 7.24322 3.77337C5.25639 5.58357 5.1055 8.79603 7.06717 10.8357C9.0037 12.8499 12.2732 12.7479 14.1091 10.6062C15.8947 8.54107 15.5426 5.58357 13.933 4.00283C13.9582 4.05382 13.9582 4.10481 13.9833 4.1558C14.0336 4.35977 14.0085 4.53824 13.8827 4.71671C13.3043 5.43059 12.751 6.14447 12.1726 6.88385C12.0971 6.98583 12.072 7.06232 12.0971 7.1898C12.2732 8.28612 11.2672 9.25495 10.1857 9.05099C9.35579 8.87252 8.7522 8.08215 8.8528 7.26629C8.97855 6.34844 9.70789 5.73654 10.5881 5.78753C10.7139 5.78753 10.7893 5.76204 10.8899 5.68555C11.569 5.12464 12.2732 4.56374 12.9522 4.02833C13.1785 3.79886 13.3797 3.67138 13.6312 3.72238Z"
                    fill="#A9A9A9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1366_11497">
                    <rect width="21" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <div className="element-info">Unity of measurement</div>
            </div>
            <div className="text-element ">
              <h4>{detailsList.uom?.name}</h4>
            </div>
          </div>
          <div className="element-box col-2 br-element">
            <div className="head-element">
              <svg
                width="23"
                height="8"
                viewBox="0 0 23 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.05682 7.30398V0.741477H4.17045V7.30398H3.05682ZM0.332386 4.57955V3.46591H6.89489V4.57955H0.332386Z"
                  fill="#A9A9A9"
                />
                <path
                  d="M22.7841 2.98295V4.54545H16.4205V2.98295H22.7841Z"
                  fill="#A9A9A9"
                />
              </svg>

              <div className="element-info">Quantity</div>
            </div>
            <div className="text-element ">
              <h4>{detailsList?.quantity}</h4>
            </div>
          </div>
          <div className="element-box col-2 ">
            <div className="head-element">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42"
                  stroke="#A9A9A9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z"
                  stroke="#A9A9A9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 7H16"
                  stroke="#A9A9A9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 10.5H13"
                  stroke="#A9A9A9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div className="element-info">Description</div>
            </div>
            <div className="text-element ">
              <h4>{detailsList?.description}</h4>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* maping-section */}
      <div className="row mapsection px-4 py-2">
        <div className="col-md-6">
          <div className="headingdetails">
            <h2 className="my-2">Live Tracking</h2>
            <p className="my-2">Shipment number</p>
            <div className="info-box d-flex justify-content-between mt-3">
              <div className="info">
                <h5 className="my-3">ELD00027</h5>
                <span className="mt-4">Food Materials</span>
              </div>
              <div className="icon">
              <MarkerTruck/>
              </div>
            </div>
          </div>
          <hr/>
          {/* details-more */}
          <div className="locations py-3">
            <div className="source d-flex my-2 align-items-center ">
            <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="34.5" cy="34.5" r="34.5" fill="#E8F9EE"/>
            <circle cx="34.5" cy="34.5" r="12.5" fill="#0EBC93"/>
            </svg>
            <p className="mx-4">{detailsList.from_city?.name}</p>
            </div>
            <div className="source d-flex my-2 align-items-center">
            <svg width="70" height="69" viewBox="0 0 70 69" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35.1234" cy="34.3422" r="34.139" fill="#E5E5FE"/>
            <path d="M50.6118 27.9638C48.7251 19.6626 41.4841 15.9253 35.1234 15.9253C35.1234 15.9253 35.1234 15.9253 35.1055 15.9253C28.7628 15.9253 21.5038 19.6447 19.6171 27.9458C17.5149 37.2173 23.1927 45.0692 28.3316 50.0104C30.2362 51.8432 32.6798 52.7595 35.1234 52.7595C37.5671 52.7595 40.0107 51.8432 41.8973 50.0104C47.0362 45.0692 52.714 37.2352 50.6118 27.9638ZM35.1234 36.9657C31.997 36.9657 29.4635 34.4322 29.4635 31.3058C29.4635 28.1794 31.997 25.6459 35.1234 25.6459C38.2499 25.6459 40.7833 28.1794 40.7833 31.3058C40.7833 34.4322 38.2499 36.9657 35.1234 36.9657Z" fill="#5251FA"/>
            </svg>

            <p className="mx-4">{detailsList.to_city?.name}</p>
            </div>
          </div>
          <hr/>
          {/* drivers-name */}
          <div className="drivers py-3 d-flex align-items-center justify-content-between">
            <div className="source d-flex my-2 align-items-center">
              <div className="img-driver">
             
              <img src={Driverimg} alt="img"/>
              </div>
             <div>
                <p className="mx-4 my-2">Driver’s name</p>
                <span className="mx-4">Driver’s name</span>
             </div>
            </div>
            <div className="icon-call mx-4">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.3999 5.0999C3.3999 4.16102 4.16102 3.3999 5.0999 3.3999H8.75979C9.59081 3.3999 10.3 4.0007 10.4367 4.82042L11.6935 12.3614C11.8162 13.0976 11.4444 13.8277 10.7769 14.1614L8.14504 15.4773C10.0428 20.193 13.8068 23.9571 18.5225 25.8548L19.8384 23.2229C20.1721 22.5554 20.9022 22.1836 21.6384 22.3063L29.1794 23.5631C29.9991 23.6998 30.5999 24.409 30.5999 25.24V28.8999C30.5999 29.8388 29.8388 30.5999 28.8999 30.5999H25.4999C13.2944 30.5999 3.3999 20.7054 3.3999 8.4999V5.0999Z" fill="#244664"/>
            </svg>

            </div>
          </div>
        </div>
        <div className="col-md-6 pt-3">
          <div className="mapbox">

            {/* =============================== */}
 

          <LoadScript
            googleMapsApiKey="AIzaSyC8EXmnX2KsWfgzftLwhx7jhDd0lfDloU4"
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >

              <MarkerF
                position={center}
                icon={icon}
                // options={{
                //   icon:<MarkerTruck/>
                // }}

              />

            </GoogleMap>
          </LoadScript>
           
          </div>
        </div>
      </div>
{/* test */}

  {/* for (const filebox in detailsList.sorted_attachments) {
    return(
          <>
          <div>test</div>
        </>
    );
} */}
    {
    fileboxes.map((filesection,index)=>{
      const filesListArray = Array.isArray(filesection)? [...filesection]:[];
      console.log("testfile2222222222");

        return(
          <>
          {/* {fileboxes} */}
                  <div className="filesbox packing-list">
                    <div className="head">{filesection}</div>
                    <div className="row">
                      { 
                      filesListArray.map((fileitem,indexfile)=>{
                        console.log("testfile");
                        return(
                          <>
                            <div className="card-order col-2 mx-4">
                                <div className="img-box"></div>
                                <p>test</p>
                                {/* <a href={fileitem.path} className="card-title text-center">file name</a> */}
                            </div>
                          </>
                        )
                      })
                      }
                    </div>
                  </div>
          </>
        )

    })
    
    }



{/* test111111111111111111=============== */}
      {/* { detailsList?.sorted_attachments &&
        detailsList.sorted_attachments.map((filebox,index)=>{
          return(
            <>
                    <div className="filesbox packing-list">
                      <div className="head">packing list atachement</div>
                      <div className="row">
                        { filebox?.packing_list &&
                          filebox.packing_list.map((packingitem ,indexpacking)=>{
                            return(
                              <>
                                  <div className="card-order col-2 mx-4">
                                      <div className="img-box"></div>
                                      <a href={packingitem.path} className="card-title text-center">file name</a>
                                  </div>
                              </>
                            )
                          })
                        }

                      </div>
                    </div>
            </>
          )
        })
      } */}
      {/* files-manegments */}
      {/* <div className="filesbox packing-list">
        <div className="head">packing list atachement</div>
        <div className="row">
          <div className="card-order col-2 mx-4 my-2">
            <div className="img-box"></div>
            <div className="card-title text-center">file name</div>
          </div>
          <div className="card-order col-2 mx-4 my-2">
            <div className="img-box"></div>
            <div className="card-title text-center">file name</div>
          </div>
          <div className="card-order col-2 mx-4 my-2">
            <div className="img-box"></div>
            <div className="card-title text-center">file name</div>
          </div>
        </div>
      </div>
      <hr />
      <div className="filesbox other-doc-list">
        <div className="head">Other documents</div>
        <div className="row">
          <div className="card-order col-2 mx-4 my-2">
            <div className="img-box"></div>
            <div className="card-title text-center">file name</div>
          </div>
          <div className="card-order col-2 mx-4 my-2">
            <div className="img-box"></div>
            <div className="card-title text-center">file name</div>
          </div>
          <div className="card-order col-2 mx-4 my-2">
            <div className="img-box"></div>
            <div className="card-title text-center">file name</div>
          </div>
          <div className="card-order col-2 mx-4 my-2">
            <div className="img-box"></div>
            <div className="card-title text-center">file name</div>
          </div>
          <div className="card-order col-2 mx-4">
            <div className="img-box"></div>
            <div className="card-title text-center">file name</div>
          </div>
        </div>
      </div>
      <hr />
      <div className="filesbox user-files">
        <div className="head">Driver's upload</div>
        <div className="row">
          <div className="card-order col-2 mx-4">
            <div className="img-box"></div>
            <div className="card-title text-center">file name</div>
          </div>
          <div className="card-order col-2 mx-4">
            <div className="img-box"></div>
            <div className="card-title text-center">file name</div>
          </div>
          <div className="card-order col-2 mx-4">
            <div className="img-box"></div>
            <div className="card-title text-center">file name</div>
          </div>
        </div>
      </div> */}
      {/* tables============interested1===Service provide */}
      <div className="orderhead px-2">
          <div className="text-head">Interested Service provide</div>
          <div className="backhuling" style={{fontSize:"18px" , fontWeight:"700", color:"#0E324A"}}>
            <div className="orange me-3"></div>Backhuling
          </div>
      </div>
      <MaterialReactTable
            columns={columnsServiceProvide}
            data={dataservices}
            enableRowSelection
            positionToolbarAlertBanner="bottom"
            renderTopToolbarCustomActions={({ table }) => (
              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                  p: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                
              </Box>
            )}
          />
          {/* interested2-no-actions */}
          <div className="orderhead px-2">
          <div className="text-head">Interestes Service provide</div>
          <div className="backhuling" style={{fontSize:"18px" , fontWeight:"700", color:"#0E324A"}}>
            <div className="orange me-3"></div>Backhuling
          </div>
      </div>
      <MaterialReactTable
            columns={columnsServiceProvide2}
            // data={dataservices2}
            data={dataservicesnoaction}

            // dataservices2
            enableRowSelection
            positionToolbarAlertBanner="bottom"
            renderTopToolbarCustomActions={({ table }) => (
              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                  p: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                
              </Box>
            )}
          />
{/* Eligible Service provide=table-request */}
        <div className="orderhead px-2">
          <div className="text-head">Financial requests</div>
          <div className="backhuling" style={{fontSize:"18px" , fontWeight:"700", color:"#0E324A"}}>
            <div className="orange me-3"></div>Backhuling
          </div>
      </div>
      <MaterialReactTable
            columns={columnsEligible}
            data={dataEligible}
            enableRowSelection
            positionToolbarAlertBanner="bottom"
            renderTopToolbarCustomActions={({ table }) => (
              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                  p: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                
              </Box>
            )}
          />

    </div>
  );
};

export default ShipmentOrder;

