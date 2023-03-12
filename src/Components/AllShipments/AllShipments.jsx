import React from "react";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
// import Select from 'react-select';
// import { DateRangePicker } from 'rsuite';
import MaterialReactTable from "material-react-table";
import { Box, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import "./Allshipments.css";
// import { MDBDataTableV5 } from "mdbreact";

const columns = [
  {
    accessorKey: "id",
    header: "ID",
    size: 30,
  },
  {
    accessorKey: "code",
    header: "Code",
    size: 30,
  },
  {
    accessorKey: "picup",
    header: "Pick Up",
    size: 30,
  },
  {
    accessorKey: "dropoff",
    header: "Drop Off",
    size: 30,
  },
  {
    accessorKey: "shipmenttype",
    header: "Shipment Type",
    size: 30,
  },
  {
    accessorKey: "trucktype",
    header: "Truck Type",
    size: 30,
  },
  {
    accessorKey: "shippingcost",
    header: "Shipping Cost",
    size: 30,
  },
  {
    accessorKey: "pickupdate",
    header: "Pickup Date",
    size: 30,
  },
  {
    accessorKey: "status",
    header: "Status",
    size: 30,
  },

];



const csvOptions = {
  fieldSeparator: ",",
  quoteStrings: '"',
  decimalSeparator: ".",
  showLabels: true,
  useBom: true,
  useKeysAsHeaders: false,
  headers: columns.map((c) => c.header),
};

const csvExporter = new ExportToCsv(csvOptions);

// const RowButton = ({ status }) => {
//   return (
//     <div>
//       {status == "NEW" ? (
//         <button
//           style={{
//             fontSize: "12px",
//             color: "white",
//             backgroundColor: "#0085FF",
//             border: "none",
//             outline: "none",
//             borderRadius: "30px",
//             marginTop: "-5px",
//             width: "100%",
//             height: "30px",
//           }}
//         >
//           {status}
//         </button>
//       ) : (
//         ""
//       )}
//       {status == "Assigned" ? (
//         <button
//           style={{
//             fontSize: "12px",
//             color: "white",
//             backgroundColor: "red",
//             border: "none",
//             outline: "none",
//             borderRadius: "30px",
//             marginTop: "-5px",
//             width: "100%",
//             height: "30px",
//           }}
//         >
//           {status}
//         </button>
//       ) : (
//         ""
//       )}
//       {status == "On the Way " ? (
//         <button
//           style={{
//             fontSize: "12px",
//             color: "white",
//             backgroundColor: "#18AEC9",
//             border: "none",
//             outline: "none",
//             borderRadius: "30px",
//             marginTop: "-5px",
//             width: "100%",
//             height: "30px",
//           }}
//         >
//           {status}
//         </button>
//       ) : (
//         ""
//       )}
//       {status == "DISPATCH" ? (
//         <button
//           style={{
//             fontSize: "12px",
//             color: "white",
//             backgroundColor: "#FF8A00",
//             border: "none",
//             outline: "none",
//             borderRadius: "30px",
//             marginTop: "-5px",
//             width: "100%",
//             height: "30px",
//           }}
//         >
//           {status}
//         </button>
//       ) : (
//         ""
//       )}
//       {status == "Delivered" ? (
//         <button
//           style={{
//             fontSize: "12px",
//             color: "white",
//             backgroundColor: "#31A02F",
//             border: "none",
//             outline: "none",
//             borderRadius: "30px",
//             marginTop: "-5px",
//             width: "100%",
//             height: "30px",
//           }}
//         >
//           {status}
//         </button>
//       ) : (
//         ""
//       )}
//       {/* <button style={{fontSize:"16px",color:"white",backgroundColor:"#0085FF",border:"none",outline:"none",borderRadius:"30px",padding:"5px 30px"}}>{status}</button> */}
//     </div>
//   );
// };

const AllShipments = () => {
  const [shipmentList, setshipmentList] = useState([]);
  // const [removeableId, setRemoveableId] = useState(null);
  // const [reload, setReload] = useState(false);
  const [cookie] = useCookies(["eload_token"]);
  const data = shipmentList.map((item, index) => {
    return {
      id: item.id,
      code: item.id,
      picup: item.from_city.name,
      dropoff: item.to_city.name,
      shipmenttype: item.shipment_type.name,
      trucktype : item.truck_type.name,
      shippingcost: item.cost,
      pickupdate :item.order.pickup_date,
      status: item.status,
    };
  });


  useEffect(() => {
    const allShipment = async () => {
      try {
        const response = await axios.get(
          "https://dev.eload.smart.sa/api/v1/shipments",
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
        console.log(response);
        setshipmentList(data);
        return data;
      } catch (e) {
        console.log(e);
      }
    };

    allShipment();
  }, []);

      // select-options
      // const [isClearable, setIsClearable] = useState(true);
      // const [isSearchable, setIsSearchable] = useState(true);
      // const [isDisabled, setIsDisabled] = useState(false);
      // const [isLoading, setIsLoading] = useState(false);
      // const [isRtl, setIsRtl] = useState(false);
    
      /* shipment-select */
      //  const shipmentOptions= [
      //   { value: 'Reham', label: 'Reham' },
      //   { value: 'Eman', label: 'Eman' },
      //   { value: 'Mahmoud Abu zeid', label: 'Mahmoud Abu zeid' },
      //   { value: 'Abdullah ', label: 'Abdullah ' },
      //   { value: 'Loqman ELgrahy ', label: 'Loqman ELgrahy ' },
      //   { value: 'btnadd', label: "ffsf" },
      // ];
    // const [datatable, setDatatable] = React.useState({
    //   columns: [
    //     {
    //       label: "#",
    //       field: "id",
    //       width: 100,
    //     },
    //     {
    //       label: "CODE",
    //       field: "code",
    //       width: 100,
    //       attributes: {
    //         "aria-controls": "DataTable",
    //         "aria-label": "Name",
    //       },
    //     },
    //     {
    //       label: "Pick Up",
    //       field: "pickup",
    //       sort: "disabled",
    //       width: 100,
    //     },
    //     {
    //       label: "Drop off",
    //       field: "dropoff",
    //       sort: "disabled",
    //       width: 100,
    //     },
    //     {
    //       label: "Shipment TYPE",
    //       field: "shipmenttype",
    //       sort: "disabled",
    //       width: 100,
    //     },
    //     {
    //       label: "Truck TYPE",
    //       field: "trucktype",
    //       sort: "disabled",
    //       width: 100,
    //     },
    //     {
    //       label: "Shipping cost",
    //       field: "shippingcost",
    //       sort: "disabled",
    //       width: 100,
    //     },
    //     {
    //       label: "Pick up Date",
    //       field: "pickupDate",
    //       sort: "disabled",
    //       width: 100,
    //     },
    //     {
    //       label: "STATUS",
    //       field: "statu",
    //       sort: "disabled",
    //       width: 100,
    //     },
    //   ],
    //   rows: [
    //     {
    //       id: "1",
    //       code: "ELD00028",
    //       pickup: "Jeddah",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="NEW" />,
    //     },
    //     {
    //       id: "2",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="NEW" />,
    //     },
    //     {
    //       id: "4",
    //       code: "ELD00028",
    //       pickup: "Jeddah",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Assigned" />,
    //     },
    //     {
    //       id: "5",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Assigned" />,
    //     },
    //     {
    //       id: "6",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="On the Way " />,
    //     },
    //     {
    //       id: "7",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="On the Way " />,
    //     },
    //     {
    //       id: "8",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="NEW" />,
    //     },
    //     {
    //       id: "9",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="DISPATCH" />,
    //     },
    //     {
    //       id: "10",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "11",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "12",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="NEW" />,
    //     },
    //     {
    //       id: "13",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="NEW" />,
    //     },
    //     {
    //       id: "14",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "15",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "16",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "17",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "18",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "19",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "20",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "21",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "22",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "23",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "24",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "25",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "26",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "27",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "28",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "29",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "30",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "31",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "32",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "33",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "34",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "35",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "36",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "37",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "1",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "1",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "1",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "1",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "1",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "1",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "1",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "1",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "1",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "1",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "1",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "1",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "1",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "1",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "1",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "1",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "1",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "1",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "1",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "1",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //     {
    //       id: "1",
    //       code: "ELD00028",
    //       pickup: "Jeddah ",
    //       dropoff: "Mecca",
    //       shipmenttype: "Dry 40 high cube",
    //       trucktype: "Flatbed",
    //       shippingcost: "SAR17,756.000",
    //       pickupDate: "2022-09-14",
    //       statu: <RowButton status="Delivered" />,
    //     },
    //   ],
    // });
    // const [checkbox1, setCheckbox1] = React.useState('');
  
    // const showLogs2 = (e) => {
    //   setCheckbox1(e);
    // };
  
    // const [shipmentList, setshipmentList] = useState([]);
    // const [cookie] = useCookies(["eload_token"]);
    // const data = shipmentList.map((item, index) => {
    //   return {
    //     id: item.id,
    //     code: item.order,
    //     picup: item.pickup,
    //     dropoff: item.dropoff,
    //     shipmenttype: item.shipmenttype,
    //     trucktype: item.trucktype,
    //     shippingcost: item.shippingcost,
    //     pickupdate: item.picku_pdate,
    //     status: item.status,
    //   };
    // });
    // const data = [
    //   {
    //     id: 1,
    //     code: 'Elenora',
    //     picup: 'Wilkinson',
    //     dropoff: 'Feest - Reilly',
    //     shipmenttype: 'Hertaland',
    //     trucktype :"container",
    //     shippingcost: 'Qatar',
    //     pickupdate: "2/345",
    //     status:"ready"
    //   },
    //   {
    //     id: 1,
    //     code: 'Elenora',
    //     picup: 'Wilkinson',
    //     dropoff: 'Feest - Reilly',
    //     shipmenttype: 'Hertaland',
    //     trucktype :"container",
    //     shippingcost: 'Qatar',
    //     pickupdate: "2/345",
    //     status:"ready"
    //   },
    //   {
    //     id: 1,
    //     code: 'Elenora',
    //     picup: 'Wilkinson',
    //     dropoff: 'Feest - Reilly',
    //     shipmenttype: 'Hertaland',
    //     trucktype :"container",
    //     shippingcost: 'Qatar',
    //     pickupdate: "2/345",
    //     status:"ready"
    //   },
    //   {
    //     id: 1,
    //     code: 'Elenora',
    //     picup: 'Wilkinson',
    //     dropoff: 'Feest - Reilly',
    //     shipmenttype: 'Hertaland',
    //     trucktype :"container",
    //     shippingcost: 'Qatar',
    //     pickupdate: "2/345",
    //     status:"ready"
    //   },
    // ]
  
  const handleExportRows = (rows) => {
    csvExporter.generateCsv(rows.map((row) => row.original));
  };

  const handleExportData = () => {
    csvExporter.generateCsv(data);
  };

  return (
    <div>
      <div className="container-fluid Allshipment d-flex p-0">
        {/* <div className="row"> */}
          {/* filter */}
          {/* <div className=" filter-side py-5">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Pick up date
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body px-3">

                  </div>
                </div>
              </div>
              
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Location
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body px-3">
                    <label className="my-3">Pick Up City</label>
                             
                      <Select
                      classNamePrefix="select"
                      className="basic-multi-select"
                     
                      isDisabled={isDisabled}
                      isLoading={isLoading}
                      isClearable={isClearable}
                      isRtl={isRtl}
                      isSearchable={isSearchable}
                      name="color"
                      options={shipmentOptions}
                    />
                    <label className="my-3">Drop off City</label>
                    <Select
                      classNamePrefix="select"
                      className="basic-multi-select pb-2"
                      
                      isDisabled={isDisabled}
                      isLoading={isLoading}
                      isClearable={isClearable}
                      isRtl={isRtl}
                      isSearchable={isSearchable}
                      name="color"
                      options={shipmentOptions}
                    />
                  </div>
                </div>
              </div>
              
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingThree"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    Truck Type
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse "
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body px-3">
                  
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Container
                      </label>
                    </div>
                    
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        Dry Van / Enclosed Trailer
                      </label>
                    </div>
                   
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Flatbed
                      </label>
                    </div>
                   
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Lowboy Trailer
                      </label>
                    </div>
                    
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Oil Tanker
                      </label>
                    </div>
                   
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Reefer
                      </label>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingFour"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    Commodity
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFour"
                >
                  <div className="accordion-body px-3">
                
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Beverages
                      </label>
                    </div>
              
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckChecked"
                      >
                        Cement
                      </label>
                    </div>
                 
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Chemical
                      </label>
                    </div>
              
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        FMCG
                      </label>
                    </div>
                  
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        General Goods
                      </label>
                    </div>
                  
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Oil & Gas
                      </label>
                    </div>
                    
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Pharmaceutical
                      </label>
                    </div>
                   
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Textile
                      </label>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingFive"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFive"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFive"
                  >
                    Shipment Type
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFive"
                >
                  <div className="accordion-body px-3">
                   
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Frozen 1
                      </label>
                    </div>
                   
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckChecked"
                      >
                        Frozen 2
                      </label>
                    </div>
                  </div>
                </div>
              </div>
           
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSix"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseSix"
                  >
                    Unit of measurment
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingSix"
                >
                  <div className="accordion-body px-3">
                  
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Pallets
                      </label>
                    </div>
                   
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckChecked"
                      >
                        Pieces
                      </label>
                    </div>
                  </div>
                </div>
              </div>
             
              <button type="button" className="btn-search btn btn-primary my-4">
                Search
              </button>
              <br />
              <button type="button" className="btn-rest btn btn-primary">
                Rest
              </button>
            </div>
          </div> */}


          {/* table-data */}
          <div className=" p-3 tableshipment" style={{maxWidth: "70rem"}} >
            {/* <div className="w-75"> */}
            {/* table */}
            <MaterialReactTable
              columns={columns}
              data={data}
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
                  <Button
                    color="primary"
                    //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
                    onClick={handleExportData}
                    startIcon={<FileDownloadIcon />}
                    variant="contained"
                  >
                    Export All Data
                  </Button>
                  <Button
                    disabled={table.getPrePaginationRowModel().rows.length === 0}
                    //export all rows, including from the next page, (still respects filtering and sorting)
                    onClick={() =>
                      handleExportRows(table.getPrePaginationRowModel().rows)
                    }
                    startIcon={<FileDownloadIcon />}
                    variant="contained"
                  >
                    Export All Rows
                  </Button>
                  <Button
                    disabled={table.getRowModel().rows.length === 0}
                    //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
                    onClick={() => handleExportRows(table.getRowModel().rows)}
                    startIcon={<FileDownloadIcon />}
                    variant="contained"
                  >
                    Export Page Rows
                  </Button>
                  <Button
                    disabled={
                      !table.getIsSomeRowsSelected() &&
                      !table.getIsAllRowsSelected()
                    }
                    //only export selected rows
                    onClick={() =>
                      handleExportRows(table.getSelectedRowModel().rows)
                    }
                    startIcon={<FileDownloadIcon />}
                    variant="contained"
                  >
                    Export Selected Rows
                  </Button>
                </Box>
              )}
            />
            {/* </div> */}
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default AllShipments;
