import React from "react";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import { useMemo } from "react";

import MaterialReactTable from "material-react-table";
import { Box, Button } from "@mui/material";

import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here

// import { MRT_PaginationState} from 'material-react-table';

import "./Allshipments.css";


    // search---handel


const AllShipments = () => {
  const [user_type, setUserType] = useState(localStorage.getItem("user_type"));

  const columnsReady = useMemo(
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
              // alignItems: "center",
              gap: "1rem",
            }}
          >
            <NavLink
              style={{ color: "#0085FF" }}
              to={`/allshipments/shipmentorder/${row.original.id}`}
            >
              <span>{renderedCellValue}</span>
            </NavLink>
            {/* <span>{console.log(row.original)}</span> */}
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
        accessorFn: (row) =>
          `${user_type == "provider" ? row.provider_price : row.shippingcost}`,
        accessorKey: "shippingcost",
        header: `${user_type == "provider" ? "Price" : "Shipping Cost"}`,
        size: 30,
      },
      // {
      //   accessorKey: "",
      //   header: "",
      //   size: 0,
      // },

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
        accessorKey: "status",
        header: "Status",
        size: 30,
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <span style={{ color: "#31A02F" }}>{renderedCellValue}</span>
          </Box>
        ),
      },
    ],
    []
  );

  // all-date
  const columnsAll = useMemo(
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
            <NavLink
              style={{ color: "#0085FF" }}
              to={`/allshipments/shipmentorder/${row.original.id}`}
            >
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
        accessorFn: (row) =>
          `${user_type == "provider" ? row.provider_price : row.shippingcost}`,
        accessorKey: "shippingcost",
        header: `${user_type == "provider" ? "Price" : "Shipping Cost"}`,
        size: 30,
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
        accessorKey: "status",
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
    headers: columnsAll.map((c) => c.header),
  };

  const csvOptionsready = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    useBom: true,
    useKeysAsHeaders: false,
    headers: columnsReady.map((c) => c.header),
  };

  const csvExporter = new ExportToCsv(csvOptions);
  const csvExporterready = new ExportToCsv(csvOptionsready);

  const [shipmentList, setshipmentList] = useState([]);
  const [shipmentListready, setshipmentListready] = useState([]);
  const [cookie] = useCookies(["eload_token"]);

  const data = shipmentList.map((item, index) => {
    return {
      id: item.id,
      code: item.code,
      picup: item.from_city.name,
      dropoff: item.to_city.name,
      shipmenttype: item.shipment_type.name,
      trucktype: item.truck_type.name,
      shippingcost: item.cost,
      provider_price: item.provider_price,
      urgent_action_needed: item.urgent_action_needed,
      pickupdate: item.order.pickup_date,
      status: item.status_i18n,
    };
  });
  const dataReady = shipmentListready.map((item, index) => {
    return {
      id: item.id,
      code: item.code,
      picup: item.from_city.name,
      dropoff: item.to_city.name,
      shipmenttype: item.shipment_type.name,
      trucktype: item.truck_type.name,
      shippingcost: item.cost,
      provider_price: item.provider_price,
      urgent_action_needed: item.urgent_action_needed,
      pickupdate: item.order.pickup_date,
      status: item.status_i18n,
    };
  });

  const [ReadyrowCount, setReadyRowCount] = useState(0);
  // const [searchQuery, setSearchQuery] = useState("");
  const [rowCount, setRowCount] = useState(0);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });
  // ready
  const [readyPagination, setreadyPagination] = useState({
    pageIndexReady: 0,
    pageSizeReady: 5,
  });
  // const handleSearchInputChange = async(event) => {
  //   const query = event.target.value;
  //   setSearchQuery(query);
  //   setPagination((prevPagination) => ({
  //     ...prevPagination,
  //     pageIndex: 1, 
  //   }));
  // };

  useEffect(() => {
    const allShipment = async () => {
      try {
        const response = await axios.get(
          // `https://dev.eload.smart.sa/api/v1/shipments?search=${searchQuery}&paginate=${pagination.pageSize}&page=${pagination.pageIndex+1}`,
          // 
          `https://dev.eload.smart.sa/api/v1/shipments?paginate=${pagination.pageSize}&page=${pagination.pageIndex+1}`,
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
        console.log(data, "data");
        console.log(response, "rrrr");
        setshipmentList(data);
        console.log(response?.data?.meta?.total, "total");
        setRowCount(response?.data?.meta?.total);


          // for(const i=0 ; i<=data.length ; i++){
          //   console.log(searchQuery,"searchQuery");
          //   const foundIndex = data.findIndex((item) => item[i]?.id === searchQuery);
          //   console.log(foundIndex,"foundIndex");
          //   if(data[i] === searchQuery){
          //     const newPageIndex = Math.floor(foundIndex / pagination.pageSize);
          //     setPagination((prevPagination) => ({
          //       ...prevPagination,
          //       pageIndex: ++pagination.pageIndex,
          //     }));
          //   }
          // }
   

        return data;
      } catch (e) {
        console.log(e);
      }
    };
    allShipment();
  }, [pagination.pageIndex, pagination.pageSize]);
  // ready
  useEffect(() => {
    const readyShipment = async () => {
      try {
        const response = await axios.get(
          // https://dev.eload.smart.sa/api/v1/shipments?paginate=${pagination.pageSize}&page=${pagination.pageIndex+1}`,
          `https://dev.eload.smart.sa/api/v1/shipments?status=READY&paginate=${readyPagination.pageSizeReady}&page=${readyPagination.pageIndexReady+1}`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${cookie.eload_token}`,
              "api-key":
                "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
            },
          }
        );

        const dataReady = response.data.data;
        console.log(response, "ready respons");
        setshipmentListready(dataReady);
        setReadyRowCount(response?.data?.meta?.total);
        return dataReady;
      } catch (e) {
        console.log(e);
      }
    };

    if (user_type != "shipper") {
      readyShipment();
    }
  }, [readyPagination.pageIndexReady, readyPagination.pageSizeReady]);

  const handleExportRows = (rows) => {
    csvExporter.generateCsv(rows.map((row) => row.original));
  };
  // ready
  const handleExportRowsready = (rows) => {
    csvExporterready.generateCsv(rows.map((row) => row.original));
  };
  const handleExportData = () => {
    csvExporter.generateCsv(data);
  };
  // ready
  const handleExportDataready = () => {
    csvExporterready.generateCsv(dataReady);
  };

  return (
    <div>
      <div className="container-fluid Allshipment  py-3 px-0">
        {/* ready-shipment */}
        {user_type != "shipper" && (
          <div className=" p-3 tableshipment tableready table-resbon">
            {/* <div className="w-75"> */}
            {/* table */}
            <h3
              style={{ fontWeight: "500", fontSize: "26px", color: "#244664" }}
              className="my-3 mx-3"
            >
              Shipments:
              <span style={{ color: "#31A02F" }} className="mx-2">
                Ready
              </span>
            </h3>
            <MaterialReactTable
              columns={columnsReady}
              data={dataReady}

              onPaginationChange={setreadyPagination}
              state={{ readyPagination }}
              manualPagination
              rowCount={ReadyrowCount}
              positionPagination="top"
              initialState={{
                columnVisibility:
                  user_type == "provider" ? { shippingcost: false } : {},
              }}
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
                    onClick={handleExportDataready}
                    startIcon={<FileDownloadIcon />}
                    variant="contained"
                  >
                    Export All Data
                  </Button>
                  <Button
                    disabled={
                      table.getPrePaginationRowModel().rows.length === 0
                    }
                    //export all rows, including from the next page, (still respects filtering and sorting)
                    onClick={() =>
                      handleExportRowsready(
                        table.getPrePaginationRowModel().rows
                      )
                    }
                    startIcon={<FileDownloadIcon />}
                    variant="contained"
                  >
                    Export All Rows
                  </Button>
                  <Button
                    disabled={table.getRowModel().rows.length === 0}
                    //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
                    onClick={() =>
                      handleExportRowsready(table.getRowModel().rows)
                    }
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
                      handleExportRowsready(table.getSelectedRowModel().rows)
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
        )}



        {/* table-data */}
        <div className=" p-3 tableshipment table-resbon">
          {/* <div className="w-75"> */}
          {/* table */}
          <h3
            style={{ fontWeight: "500", fontSize: "26px", color: "#244664" }}
            className="my-3 mx-3"
          >
            All Shipments
          </h3>
          {/* <input
            type="text"
            // value={searchQuery}
            onChange={(e) => handleSearchInputChange(e)}
            placeholder="Search..."
          /> */}

          <MaterialReactTable
            columns={columnsAll}
            data={data} 
            state={{ pagination }}
            onPaginationChange={setPagination}
            manualPagination
            rowCount={rowCount}
            positionPagination="top"
            
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
                  onClick={handleExportData}
                  startIcon={<FileDownloadIcon />}
                  variant="contained"
                >
                  Export All Data
                </Button>
                <Button
                  disabled={table.getPrePaginationRowModel().rows.length === 0}
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
