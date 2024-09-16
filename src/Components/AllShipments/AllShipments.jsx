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


import "./Allshipments.css";

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
      // provider_price: item.provider_price,
      urgent_action_needed: item.urgent_action_needed,
      pickupdate: item.order.pickup_date,
      status: item.status_i18n,
    };
  });
  const dataReadyth = shipmentListready.map((item, index) => {
    return {
      id: item.id,
      code: item.code,
      picup: item.from_city.name,
      dropoff: item.to_city.name,
      shipmenttype: item.shipment_type.name,
      trucktype: item.truck_type.name,
      shippingcost: item.cost,
      // provider_price: item.provider_price,
      urgent_action_needed: item.urgent_action_needed,
      pickupdate: item.order.pickup_date,
      status: item.status_i18n,
    };
  });

  const [rowCount, setRowCount] = useState(0);
  const [ReadyrowCount, setReadyRowCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchreadyQuery, setSearchreadyQuery] = useState("");

  // checked
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    if(isChecked == false){
      setIsChecked(true);

    }else{
      setIsChecked(false);

    }
  };
  // sort
  const [selectedOption, setSelectedOption] = useState('asc');
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

      // All
      const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 5,
      });
      // readypagination
      const [readyeee, setreadyeee] = useState({
        pIndexrrrr: 0,
        pSizerrrr: 5,
      });


  // search All
  const handleSearchInputChange = async(event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };
  // search ready
  const handleSearchInputreadyChange = async(event) => {
    const query = event.target.value;
    setSearchreadyQuery(query);
  };
  console.log(selectedOption ,"selectedOption");
  // All--ready
  useEffect(() => {
    const allShipment = async () => {
      try {
        const response = await axios.get(
          // `https://dev.eload.smart.sa/api/v1/shipments?search=${searchQuery}&paginate=${pagination.pageSize}&page=${pagination.pageIndex+1}`,
          // /shipmentsSearch?term=11&per_page=5&page=2&select=id&sort=desc&status=READY
          // `https://dev.eload.smart.sa/api/v1/shipmentsSearch?term=${searchQuery}&per_page=${pagination.pageSize}&page=${pagination.pageIndex+1}&sort=asc`,

          isChecked === false
          ? `https://dev.eload.smart.sa/api/v1/shipmentsSearch?term=${searchQuery}&per_page=${pagination.pageSize}&page=${pagination.pageIndex+1}&sort=${selectedOption}`
          : `https://dev.eload.smart.sa/api/v1/shipmentsSearch?term=${searchQuery}&per_page=${pagination.pageSize}&page=${pagination.pageIndex+1}&sort=${selectedOption}&status=READY`,
          
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
        setshipmentList(data);
        console.log(response?.data?.meta?.total, "total");
        setRowCount(response?.data?.meta?.total);
   

        return data;
      } catch (e) {
        console.log(e);
      }
    };
    // ---------ready
    const readyShipment = async () => {
      try {
        const responseready = await axios.get(
          // `https://dev.eload.smart.sa/api/v1/shipmentsSearch?term=${searchQuery}&per_page=${pagination.pageSize}&page=${pagination.pageIndex+1}&sort=asc`,
          // `https://dev.eload.smart.sa/api/v1/shipmentsSearch?term=${searchreadyQuery}&per_page=${pagination.pageSize}&page=${pagination.pageIndex+1}&sort=asc`,
          `https://dev.eload.smart.sa/api/v1/shipmentsSearch?term=${searchreadyQuery}&per_page=${readyeee.pSizerrrr}&page=${readyeee.pIndexrrrr+1}&sort=asc?&status=?READY`,
          // `https://dev.eload.smart.sa/api/v1/shipments?status=READY&paginate=${readyPagination.pageSizeReady}&page=${readyPagination.pageIndexReady+1}`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${cookie.eload_token}`,
              "api-key":
                "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
            },
          }
        );

        const dataReady = responseready.data.data;
        console.log(dataReady, "ready respons");
        setshipmentListready(dataReady);
        setReadyRowCount(responseready?.data?.meta?.total);

        return dataReady;
      } catch (e) {
        console.log(e);
      }
    };
    allShipment();
    // if (user_type != "shipper") {
    //   readyShipment();
    // }
  }, [pagination.pageIndex, pagination.pageSize , searchQuery , isChecked , selectedOption , readyeee.pIndexrrrr , readyeee.pSizerrrr ,  searchreadyQuery]);


  console.log(readyeee.pSizerrrr,"pSizerrrr");
  // const handleExportRows = (rows) => {
  //   csvExporter.generateCsv(rows.map((row) => row.original));
  // };
  // const handleExportData = () => {
  //   csvExporter.generateCsv(data);
  // };
  const handleExportRows = (rows) => {
    const csvOptions = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      useBom: true,
      useKeysAsHeaders: true,
    };

    const csvExporter = new ExportToCsv(csvOptions);

    const exportData = rows.map((row) => row.original);
    csvExporter.generateCsv(exportData);
  };
  // ready
  const handleExportRowsready = (rows) => {
    csvExporterready.generateCsv(rows.map((row) => row.original));
  };
  // ready
  const handleExportDataready = () => {
    csvExporterready.generateCsv(dataReadyth);
  };

  return (
    <div>
      <div className="container-fluid Allshipment  py-3 px-0">

        {/* table-data ---All */}
        <div className=" p-3 tableshipment table-resbon">

          <div className="d-flex justify-content-start align-items-center">
            <h3
              style={{ fontWeight: "500", fontSize: "26px", color: "#244664" }}
              className="my-3 "
            >
              All Shipments
            </h3>
          <div class="form-check d-flex justify-content-between align-items-center mx-3">
              <input class="form-check-input mx-3" type="checkbox" value=""  checked={isChecked}
                onChange={handleCheckboxChange} id="flexCheckChecked" />
              <label class="form-check-label status_check" for="flexCheckChecked">
                Ready status
              </label>
          </div>
          <div className="d-flex justify-content-end align-items-center">
              {/* ----sort--- */}
              <select class="form-select sortinput mx-2" aria-label="Default select example" value={selectedOption}
              onChange={handleSelectChange}>
                <option value="asc">asc</option>
                <option value="desc">desc</option>
              </select>
              <input
              className="searchtable py-2 px-4 w-100 "
                type="text"
                onChange={(e) => handleSearchInputChange(e)}
                placeholder="Search..."
              />
          </div>

          </div>

          <MaterialReactTable
            columns={columnsAll}
            data={data} 
            state={{ pagination }}
            onPaginationChange={setPagination}
            manualPagination
            rowCount={rowCount}
            positionPagination="top"
            enableGlobalFilter={false}
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
                {/* <Button
                  color="primary"
                  onClick={handleExportData}
                  startIcon={<FileDownloadIcon />}
                  variant="contained"
                >
                  Export All Data
                </Button> */}
                {/* <Button
                  disabled={table.getPrePaginationRowModel().rows.length === 0}
                  onClick={() =>
                    handleExportRows(table.getPrePaginationRowModel().rows)
                  }
                  startIcon={<FileDownloadIcon />}
                  variant="contained"
                >
                  Export All Rows
                </Button> */}
                {/* <Button
                  disabled={table.getRowModel().rows.length === 0}
                  onClick={() => handleExportRows(table.getRowModel().rows)}
                  startIcon={<FileDownloadIcon />}
                  variant="contained"
                >
                  Export Page Rows
                </Button> */}
                {/* <Button
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
                </Button> */}
      {/* renderTopToolbarCustomActions={({ table }) => ( */}
        <Button
          style={{marginBottom:"-50px"}}
            startIcon={<FileDownloadIcon />}
                  variant="contained"
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
        >
          Export Selected Rows
        </Button>
      {/* )} */}
              </Box>
            )}
          />
    
        </div>

        {/* ready-shipment */}
        {/* {user_type != "shipper" && (
          <div className=" p-3 tableshipment tableready table-resbon">

            <div className="d-flex justify-content-between align-items-center">
            <h3
              style={{ fontWeight: "500", fontSize: "26px", color: "#244664" }}
              className="my-3 mx-3"
            >
              Shipments:
              <span style={{ color: "#31A02F" }} className="mx-2">
                Ready 
              </span>
            </h3>
           <input
           className="searchtable py-2 px-4 w-25"
            type="text"
            onChange={(e) => handleSearchInputreadyChange(e)}
            placeholder="Search..."
          />

          </div>

            <MaterialReactTable
              columns={columnsReady}
                        data={dataReadyth} 

                        onPaginationChange={setreadyeee}
                        state={{ readyeee }}
                        manualPagination
                        rowCount={ReadyrowCount}
                        positionPagination="top"
                        enableGlobalFilter={false}
                        enableRowSelection
                        positionToolbarAlertBanner="bottom"


                      //   initialState={{
                      //   columnVisibility:
                      //     user_type == "provider" ? { shippingcost: false } : {},
                      // }}
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
          
          </div>
        )} */}

      </div>
    </div>
  );
};

export default AllShipments;
