import React from "react";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Select from 'react-select';


import { useMemo } from "react";

import MaterialReactTable from "material-react-table";
import {Box, Button} from "@mui/material";

import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here

import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [order, setOrder] = useState({});
  const [shipments, setShipments] = useState([]);
  const [cookie] = useCookies(["eload_token"]);
  const [user_type, setUserType] = useState(localStorage.getItem('user_type'));
  const [any_confirmation , setAnyConfirmation] = useState(false);
  const [selected_payment_method, setSelectedPaymentMethod] = useState('');
  const [attachments, setAttachments] = useState([]);

  const paymentMethods = [
    { value: "ONLINE", label: "Online" },
    { value: "BANK-TRANSFER", label: "Bank Transfer" },
  ];

  let Msg = ({ closeToast, toastProps }) => (
    <div>
      <h5>updated successfully!</h5>
      <p>the page will be refreshed in a moment...</p>
    </div>
  )

  let PaidMsg = ({ closeToast, toastProps }) => (
    <div>
      <h5>Paid Successfully!</h5>
      <p>the page will be refreshed in a moment...</p>
    </div>
  )

  let NotPaidMsg = ({ closeToast, toastProps }) => (
    <div>
      <h5 className="text-danger">There is an Error</h5>
      <p>try to pay again later on</p>
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

  const sendModificationRequest = async(id, type, reason = '') => {
    var urlencoded = new URLSearchParams();
    urlencoded.append('modification_type', type);

    if (type === 'OTHER') {
      urlencoded.append('modification_reason', reason);
    }

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

  const confirm = async(id) => {
    var urlencoded = new URLSearchParams();
    urlencoded.append('status', 'CONFIRMED');

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

  const pay = async() => {
    var formdata = new FormData();
    formdata.append('payment_method', selected_payment_method);

    if (selected_payment_method == 'BANK-TRANSFER') {
      for (let key in attachments) {
        if (attachments.hasOwnProperty(key)) {
          formdata.append(`attachments[${key}]`, attachments[key]);
        }
      }
    }

    if (selected_payment_method == 'ONLINE') {
      formdata.append('callback_url', window.location.href);
    }

    try {
      const response = await axios.post(
        `https://dev.eload.smart.sa/api/v1/orders/${order.id}/pay`,
        formdata,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${cookie.eload_token}`,
            "api-key":
              "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
          },
        }
      );

      if (response.data.data.hasOwnProperty('redirect_to')) {
        window.location.replace(response.data.data.redirect_to);
      } else {
        toast(<Msg />)
        setTimeout(() => window.location.reload(), 5000);
      }
    } catch (e) {
      console.log(e);
    }
  }

  const check = async(data) => {
    try {
      const response = await axios.post(
        `https://dev.eload.smart.sa/api/v1/orders/${id}/check`,
        data,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${cookie.eload_token}`,
            "api-key":
              "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
          },
        }
      );
        toast(<PaidMsg />)
        setTimeout(() => { window.location = window.location.pathname; }, 5000);
    } catch (e) {
      console.log(e);
      toast(<NotPaidMsg />)
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
        accessorFn: (row) => {
          if (user_type == 'shipper' && row.status == 'REVIEWED') {
            return 'I need to change ...';
          }

          return `${ row.status == 'MODIFICATION-REQUEST' ? row.modification_reason : '' }`;
        },
        accessorKey: "modification_reason",
        header: "Notes",
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
            user_type == 'shipper' && row.original.status == 'REVIEWED' ?
            <>
              <span
                contentEditable={true}
                onInput={(e) => {
                  row.original.modification_reason = e.target.innerText;
                }}
                dangerouslySetInnerHTML={{ __html: renderedCellValue }}
              ></span>
            </>
            :
            <span dangerouslySetInnerHTML={{ __html: renderedCellValue }}></span>
          }
          </Box>
        ),
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

            {
              user_type == 'shipper' && row.original.status == 'REVIEWED' &&
              <>
              <button className="btn btn-info btn-sm" onClick={() => { sendModificationRequest(row.original.id, 'CHANGE-COST') }}>
                Change Cost
              </button>

              <button className="btn btn-info btn-sm" onClick={() => { sendModificationRequest(row.original.id, 'OTHER', row.original.modification_reason) }}>
                Other
              </button>

              <button className="btn btn-success btn-sm" onClick={() => { confirm(row.original.id) }}>
                Confirm
              </button>
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

    if (!any_confirmation && item.status == 'CONFIRMED') {
      setAnyConfirmation(true);
    }

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
    if (searchParams.get('TranId')) {
      check(Object.fromEntries([...searchParams]));
    }

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

            <strong>
              Order Details
              { order.invoice &&
                <>
                <span> , </span>
                <NavLink style={{ color: "#0085FF" }} to={`/invoices/${order.invoice.id}`}>
                  <span> Invoice details for this order</span>
                </NavLink>
                </>
              }
            </strong>
          </h3>
          <MaterialReactTable
            columns={columns}
            data={data}
            positionPagination="top"

            enableRowSelection
            positionToolbarAlertBanner="top"
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

          {user_type == 'shipper' && any_confirmation && !order.invoice &&
            <div className="row p-4 mb-4 mt-4">
              <div className="col-md-12 text-center">
                <div>
                  <label htmlFor="payment_method">
                    Payment Method<span>*</span>
                  </label>
                  <Select
                    classNamePrefix="select"
                    className="basic-multi-select mt-2"
                    isMulti={false}
                    isDisabled={false}
                    isLoading={false}
                    isClearable={false}
                    isRtl={false}
                    isSearchable={true}
                    name="payment_methods"
                    options={paymentMethods}
                    onChange={(choice) => setSelectedPaymentMethod(choice.value)}
                  />
                </div>

                { selected_payment_method == 'BANK-TRANSFER' &&
                  <div className="mt-3">
                    <label htmlFor="attachments">
                      Attachments<span>*</span>
                    </label>
                    <div className="input-group ">
                      <input
                        type="file"
                        multiple="multiple"
                        accept="audio/*,video/*,image/*,.pdf,.doc"
                        className="input-file form-control"
                        required
                        id="inputGroupFile03"
                        aria-describedby="inputGroupFileAddon03"
                        aria-label="Upload"
                        onChange={(e) => { setAttachments(e.target.files); }}
                      />
                    </div>
                  </div>
                }

                {
                  selected_payment_method && 
                  <button
                  disabled={selected_payment_method == 'BANK-TRANSFER' && attachments.length == 0 ? 'disabled' : ''}
                  onClick={() => { pay() }}
                  className="btn btn-success w-100 mt-3">Pay</button>
                }
              </div>
            </div>
          }

          {/* </div> */}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Details;
