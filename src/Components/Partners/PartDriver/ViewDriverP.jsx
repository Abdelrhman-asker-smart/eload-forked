import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { ReactComponent as Dr2 } from "../../../icons/download 1.svg";
import MaterialReactTable from "material-react-table";
import { Box, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
// import './viewpartner.css'
import "./viewdriver.css"

const ViewDriverP = () => {
    const [driverList, setDriversList] = useState([]);
    const [allprov,setAllprov]= useState();
    const { id } = useParams();
  
    const [cookie] = useCookies(["eload_token"]);

    useEffect(() => {
        const allproviders = async () => {
          try {
            const response = await axios.get(
              `https://dev.eload.smart.sa/api/v1/drivers/${id}`,
              {
                headers: {
                  Accept: "application/json",
                  Authorization: `Bearer ${cookie.eload_token}`,
                  "api-key":
                    "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
                },
              }
            );
            const data = response.data.data.shipments;
            const datas = response.data.data;
            console.log(data);
            console.log(datas,"datas");
            setDriversList(data);
            setAllprov(datas);
            return data;
          } catch (e) {
            console.log(e);
          }
        };
        allproviders();
      }, []);

      const columns = useMemo(
        () => [
      {
        accessorKey: "id",
        header: "Id",
        size: 30,
      },
      {
        accessorKey: "code",
        header: "Code",
        size: 40,
      },
      {
        accessorKey: "Pickup",
        header: "Pick up",
        size: 40,
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
        accessorKey: "shippingcost",
        header: "Shipping Cost",
        size: 30,
      },
      // {
      //   accessorKey: "pickupdate",
      //   header: "pickup Date",
      //   size: 30,
      // },
      {
        accessorKey: "statuse",
        header: "Status",
        size: 30,
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div style={{ backgroundColor: "#31A02F" , color:"#fff",borderRadius:"20px" , padding:"5px 15px" , fontSize:"12px" }}>
              <span>{renderedCellValue}</span>
            </div>
          </Box>
        ),
      },
    ],
    []
    );
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
    
    console.log(driverList,"driverssList");
    
      const data = driverList.map((item, index) => {
        return {
          id: item.id,
          code: item.code,
          Pickup:item.from_city.name,
          dropoff:item.to_city.name,
          shipmenttype:item.shipment_type.name,
          shippingcost:item.cost,
          // pickupdate:"",
          statuse:item.status_i18n,
        };
      });
      const handleExportRows = (rows) => {
        csvExporter.generateCsv(rows.map((row) => row.original));
      };
    
      const handleExportData = () => {
        csvExporter.generateCsv(data);
      };  
  return (
<div className="viewdriver">
      <div className="header-card">
        <div className="container-fluid">
          <div className="row">
            <div className="information-user col-3 card-header br-right">
              <Dr2 className="mx-5 my-3" style={{ borderRadius: "70px" }} />

              {/* <div className="name-user">Test freelancer Driver</div> */}
              <div className="name-user">{allprov?.user?.name}</div>

              {/* {prvidersList?.user?.name} */}
            </div>
            <div className="phone-place-data col-3 card-header  br-right py-5">
              <div className="card-box">
                <div className="data-card">
                <svg className="mx-3" width="25" height="33" viewBox="0 0 25 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 8.8125V24.4375C24 30.6875 22.75 32.25 17.75 32.25H10.25C5.25 32.25 4 30.6875 4 24.4375V8.8125C4 2.5625 5.25 1 10.25 1H17.75C22.75 1 24 2.5625 24 8.8125Z" stroke="#244664" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.5 10.0625V23.1875C21.5 28.4375 20.5625 29.75 16.8125 29.75H11.1875C7.4375 29.75 6.5 28.4375 6.5 23.1875V10.0625C6.5 4.8125 7.4375 3.5 11.1875 3.5H16.8125C20.5625 3.5 21.5 4.8125 21.5 10.0625Z" stroke="#244664" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19 7.25H10.25" stroke="#244664" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 27.25C14.6904 27.25 15.25 26.6904 15.25 26C15.25 25.3096 14.6904 24.75 14 24.75C13.3096 24.75 12.75 25.3096 12.75 26C12.75 26.6904 13.3096 27.25 14 27.25Z" stroke="#244664" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                  {/* <span>+3235345346</span> */}
                  <span>{allprov?.user?.phone}</span>
                </div>
                <div className="data-card">
                <svg className="mx-3" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 10.3125V22.5C25 26.25 22.7625 27.5 20 27.5H10C7.2375 27.5 5 26.25 5 22.5V10.3125C5 6.25 7.2375 5.3125 10 5.3125C10 6.0875 10.3125 6.7875 10.825 7.3C11.3375 7.8125 12.0375 8.125 12.8125 8.125H17.1875C18.7375 8.125 20 6.8625 20 5.3125C22.7625 5.3125 25 6.25 25 10.3125Z" stroke="#244664" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 5.3125C20 6.8625 18.7375 8.125 17.1875 8.125H12.8125C12.0375 8.125 11.3375 7.8125 10.825 7.3C10.3125 6.7875 10 6.0875 10 5.3125C10 3.7625 11.2625 2.5 12.8125 2.5H17.1875C17.9625 2.5 18.6625 2.8125 19.175 3.325C19.6875 3.8375 20 4.5375 20 5.3125Z" stroke="#244664" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 16.25H15" stroke="#244664" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 21.25H20" stroke="#244664" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                  {/* take contract-id */}
                  {/* ${allprov?.contract.id} */}
                  <NavLink to={`/allitems/${id}`} className="btn-data-card">
                    View contract details
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="transactions-data col-3 card-header  br-right py-5">
              <div className="card-box">
                <div className="data-card">
                <svg className="mx-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.66 2.51814L12.63 2.58814L9.72996 9.31814H6.87996C6.19996 9.31814 5.54996 9.45814 4.95996 9.70814L6.70996 5.52814L6.74996 5.42814L6.81996 5.26814C6.83996 5.20814 6.85996 5.14814 6.88996 5.09814C8.19996 2.06814 9.67996 1.37814 12.66 2.51814Z" stroke="#244664" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.05 9.51819C17.6 9.37819 17.12 9.31819 16.64 9.31819H9.72998L12.63 2.58819L12.66 2.51819C12.81 2.56819 12.95 2.63819 13.1 2.69819L15.31 3.62819C16.54 4.13819 17.4 4.66819 17.92 5.30819C18.02 5.42819 18.1 5.53819 18.17 5.66819C18.26 5.80819 18.33 5.94819 18.37 6.09819C18.41 6.18819 18.44 6.27819 18.46 6.35819C18.73 7.19819 18.57 8.22819 18.05 9.51819Z" stroke="#244664" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.5217 14.1984V16.1484C21.5217 16.3484 21.5117 16.5484 21.5017 16.7484C21.3117 20.2384 19.3617 21.9984 15.6617 21.9984H7.86172C7.62172 21.9984 7.38172 21.9784 7.15172 21.9484C3.97172 21.7384 2.27172 20.0384 2.06172 16.8584C2.03172 16.6284 2.01172 16.3884 2.01172 16.1484V14.1984C2.01172 12.1884 3.23172 10.4584 4.97172 9.70836C5.57172 9.45836 6.21172 9.31836 6.89172 9.31836H16.6517C17.1417 9.31836 17.6217 9.38836 18.0617 9.51836C20.0517 10.1284 21.5217 11.9884 21.5217 14.1984Z" stroke="#244664" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.71 5.52808L4.96 9.70808C3.22 10.4581 2 12.1881 2 14.1981V11.2681C2 8.42808 4.02 6.05808 6.71 5.52808Z" stroke="#244664" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.5186 11.2677V14.1977C21.5186 11.9977 20.0586 10.1277 18.0586 9.52766C18.5786 8.22766 18.7286 7.20766 18.4786 6.35766C18.4586 6.26766 18.4286 6.17766 18.3886 6.09766C20.2486 7.05766 21.5186 9.02766 21.5186 11.2677Z" stroke="#244664" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                  <span>Wallet amount</span>
                </div>
                <div className="data-card">
                  <h5 className="head-card-text mx-3 my-2">SAR{allprov?.user?.wallet?.balance}</h5>
                </div>
              </div>
            </div>
            <div className="shipments-data col-3 card-header py-5">
              <div className="card-box">
                <div className="data-card">
                <svg className="mx-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46994" stroke="#244664" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 21.61V12.54" stroke="#244664" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.92989 2.48004L4.58989 5.44004C3.37989 6.11004 2.38989 7.79004 2.38989 9.17004V14.82C2.38989 16.2 3.37989 17.88 4.58989 18.55L9.92989 21.52C11.0699 22.15 12.9399 22.15 14.0799 21.52L19.4199 18.55C20.6299 17.88 21.6199 16.2 21.6199 14.82V9.17004C21.6199 7.79004 20.6299 6.11004 19.4199 5.44004L14.0799 2.47004C12.9299 1.84004 11.0699 1.84004 9.92989 2.48004Z" stroke="#244664" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                  <span>{driverList.length} Shipments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="freelancer-content">
        <div className="container-fluid">
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
        </div>
      </div>
    </div>
  )
}

export default ViewDriverP
