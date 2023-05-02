import React from "react";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { useMemo } from "react";

import MaterialReactTable from "material-react-table";
import {Box, Button} from "@mui/material";

import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here

import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [shipments, setShipments] = useState([]);
  const [cookie] = useCookies(["eload_token"]);
  const [user_type, setUserType] = useState(localStorage.getItem('user_type'));

  let Msg = ({ closeToast, toastProps }) => (
    <div>
      <h5>updated successfully!</h5>
      <p>the page will be refreshed in a moment...</p>
    </div>
  )

  const changeCost = async(id, cost) => {
    console.log('cost', cost);
    var urlencoded = new URLSearchParams();
    urlencoded.append('cost', cost);

    try {
      const response = await axios.put(
        `https://dev.eload.smart.sa/api/v1/shipments/${id}`,
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

      toast(<Msg />)
      setTimeout(() => window.location.reload(), 5000);
    } catch (e) {
      console.log(e);
    }
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        size: 30,
      },
      {
        accessorKey: "code",
        header: "Code",
        size: 30,
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <NavLink style={{ color: "#0085FF" }} to={`/allshipments/shipmentorder/${row.original.id}`}>
              
              <span>{renderedCellValue}</span>
            </NavLink>
          </Box>
        ),
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
        header: 'Shipping Cost',
        size: 30,
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: "flex",
              // alignItems: "center",
              gap: "1rem",
            }}
          >
          {
            user_type == 'admin' && (row.original.status == 'PENDING' || row.original.status == 'MODIFICATION-REQUEST') ?
            <>
              <span
                contentEditable={true}
                onInput={(e) => {
                  row.original.shippingcost = Number(e.target.innerText);
                }}
                dangerouslySetInnerHTML={{ __html: renderedCellValue }}
              ></span>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2599 3.59997L5.04985 12.29C4.73985 12.62 4.43985 13.27 4.37985 13.72L4.00985 16.96C3.87985 18.13 4.71985 18.93 5.87985 18.73L9.09985 18.18C9.54985 18.1 10.1799 17.77 10.4899 17.43L18.6999 8.73997C20.1199 7.23997 20.7599 5.52997 18.5499 3.43997C16.3499 1.36997 14.6799 2.09997 13.2599 3.59997Z"
                  stroke="#18AEC9"
                  stroke-width="1.5"
                  strokeMiterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.8901 5.05005C12.3201 7.81005 14.5601 9.92005 17.3401 10.2"
                  stroke="#18AEC9"
                  stroke-width="1.5"
                  strokeMiterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 22H21"
                  stroke="#18AEC9"
                  stroke-width="1.5"
                  strokeMiterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </>
            :
            <span dangerouslySetInnerHTML={{ __html: renderedCellValue }}></span>
          }
          </Box>
        ),
      },
      {
        accessorKey: "pickupdate",
        header: "Pickup Date",
        size: 30,
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: "flex",
              // alignItems: "center",
              gap: "1rem",
            }}
          >
            {row.original.urgent_action_needed == true ? (
              <div className="position-relative" style={{ color: "#E80102" }}>
                <div
                  className="red-circle position-absolute"
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "25px",
                    top: "4px",
                    left: "-11px",
                    backgroundColor: "#E80102",
                  }}
                ></div>
                {renderedCellValue}
                <span
                  className="position-absolute"
                  style={{
                    color: "#E80102",
                    fontWeight: "500",
                    top: "-11px",
                    fontSize: "18px",
                  }}
                >
                  !
                </span>
              </div>
            ) : (
              <div className="position-relative">
                <div
                  className="red-circle position-absolute"
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "25px",
                    top: "4px",
                    left: "-11px",
                    backgroundColor: "#CBFF39",
                  }}
                ></div>
                {renderedCellValue}
              </div>
            )}
          </Box>
        ),
      },
      {
        accessorKey: "status_i18n",
        header: "Status",
        size: 30,
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: "flex",
              // alignItems: "center",
              gap: "1rem",
            }}
          >
            <span style={{ color: "#31A02F" }}>{renderedCellValue}</span>
            {/* <span>{console.log(row.original, "ready")}</span> */}
          </Box>
        ),
      },
      {
        accessorFn: (row) => `${ row.status == 'MODIFICATION-REQUEST' ? row.modification_reason : '' }`,
        accessorKey: "modification_reason",
        header: "Notes",
        size: 30,
      },
      {
        accessorKey: "action",
        header: "Action",
        size: 30,
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: "flex",
              // alignItems: "center",
              gap: "1rem",
            }}
          >
            {
              user_type == 'admin' && (row.original.status == 'PENDING' || row.original.status == 'MODIFICATION-REQUEST') &&
              <>
              <button className="btn btn-primary btn-sm" onClick={() => { changeCost(row.original.id, row.original.shippingcost) }}>
                Change Cost
              </button>

              {
                row.original.shippingcost && row.original.shippingcost != '-' &&
                <button className="btn btn-success btn-sm" onClick={() => { changeCost(row.original.id, row.original.shippingcost) }}>
                  Approve
                </button>
              }
              </>
            }
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

  const data = shipments.map((item) => {
    return {
      id:  item.id,
      code: item.code,
      picup: item.from_city.name,
      dropoff: item.to_city.name,
      shipmenttype: item.shipment_type.name,
      trucktype: item.truck_type.name,
      shippingcost: item.cost ? item.cost : '-',
      provider_price: item.provider_price,
      pickupdate: order?.pickup_date,
      status_i18n: item.status_i18n,
      status: item.status,
      modification_reason: item.modification_reason,
      action: ''
    };
  });

  useEffect(() => {
    const getOrder = async (id) => {
      try {
        const response = await axios.get(
          `https://dev.eload.smart.sa/api/v1/orders/${id}`,
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
        setOrder(data);
        setShipments(data.shipments);
      } catch (e) {
        console.log(e);
      }
    };

    getOrder(id);
  }, []);

  const handleExportRows = (rows) => {
    csvExporter.generateCsv(rows.map((row) => row.original));
  };

  const handleExportData = () => {
    csvExporter.generateCsv(data);
  };

  return (
    <div>

        <ToastContainer
          position="top-right"
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="light"
        />
      
      <div className="container-fluid Allshipment  py-3 px-0">
        {/* table-data */}
        <div className=" p-3 tableshipment table-resbon">
          {/* <div className="w-75"> */}
          {/* table */}
          <h3
            style={{ fontWeight: "500", fontSize: "26px", color: "#244664" }}
            className="my-3 mx-3"
          >
            Order Details
          </h3>
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

export default Details;
