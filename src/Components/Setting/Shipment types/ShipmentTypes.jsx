import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as EditIcon } from "../../../icons/editicon.svg";
import { ReactComponent as DeleteIcon } from "../../../icons/deleteicon.svg";
// import { CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol, CDBContainer } from 'cdbreact';
import "./ShipmentTypes.css";

// import DataTable from "react-data-table-component";
// import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

// import { columns, data } from "./datatable";

import { useEffect, useState } from "react";
import axios from "axios";

import MaterialReactTable from "material-react-table";
import { Box, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
// import { data } from "./DataList";

// btns

const ButtonEdit = () => (
  <div className="w-100">
    <NavLink to="/addshipment">
      <button
        className="btn-table active"
        style={{
          textAlign: "center",
          padding: "1% 3%",
          border: "1px solid #0e324a",
          borderRadius: "20px",
          marginRight: "4%",
          color: "#fff",
          backgroundColor: "#0b2339",
        }}
      >
        <EditIcon className="mx-1" />
        EDIT
      </button>
    </NavLink>

    <button
      className="btn-table"
      style={{
        textAlign: "center",
        padding: "1% 3%",
        border: "1px solid #0e324a",
        borderRadius: "20px",
        marginRight: "4%",
        color: "#0b2339",
        backgroundColor: "transparent",
      }}
    >
      <DeleteIcon className="mx-1" />
      REMOVE
    </button>
  </div>
);

const columns = [
  {
    accessorKey: "id",
    header: "ID",
    size: 40,
  },
  {
    accessorKey: "name",
    header: "Name",
    size: 300,
  },

  {
    accessorKey: "btns",
    header: "Edit / Remove",
    size: 220,
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

const ShipmentTypes = () => {
  const [shipmentList, setShipmentList] = useState([]);
  const data = shipmentList.map((shipment, index) => {
    return {
      id: shipment.id,
      name: shipment.name,
      btns: <ButtonEdit />,
    };
  });


  useEffect(() => {
    const allCategory = async () => {
      try {
        const response = await axios.get(
          // https://dev.eload.smart.sa/api/v1/categories
          // `${process.env.REACT_BASE_URL}/categories`,
          "https://dev.eload.smart.sa/api/v1/shipment_types",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOWY4YTc3NDNhNmY4MzAwMTA3YWE0NTVhZmZiYjkzM2QzMzM1YWNlZmJjNmQ0ZThlNjcwYTI4Mjg2ZjM4YjIxYjdlYzI0YjAzYmYwNWJjZTkiLCJpYXQiOjE2NzIyMjIxMTguMTE2MDc2OTQ2MjU4NTQ0OTIxODc1LCJuYmYiOjE2NzIyMjIxMTguMTE2MDgwMDQ1NzAwMDczMjQyMTg3NSwiZXhwIjoxNzAzNzU4MTE4LjExMjM1OTA0NjkzNjAzNTE1NjI1LCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.rnz0wHsys2ONo2zlyfQQ4ZopqVii0DcZ1U9wluIiKnGIBm-Ahc0YY9Aj28XXCIj3jOcC60nUChuQD7lH-4Vl96Ug-Y4zMjG5QWVGkUrfKobSEgrVwj-yMxEK0Hgwknf91pdWWIVSf0xethAqPjxwXTUGjRdjQ76p70Vs798iKwsn-rnuVjLx8SZhwWyFq-zSTFz_372k7aH9mlWdqcYCMjIv7V4HM41beMTSrbtM1_YhQetsBdMsRx4JilH--aIBkQOANhn-2dlQ_TD28JsOQjMgLbEq6EmUU6JomiO_AOIQRNi2jkoimcYlvKBh8ZSXsXju_6NbxxViwIIGYJQGmxtiNfXPx-ZVvPMuiiH7Dz3nRMBy8j_y62aTz1Vglq7mvTYBCp01_huqUb3guPHlNPaWvZJkvqktMcobrvQcSnbLx4d1ZTMrUK2OdXZHB0RoBhhawIdkeJLmu9OafMrFeQAhh0ukux041QEev_jFgrZz1-7qdjQ5W9QB8uMNUFbd_1C3zvnTRfFqjeLoYvU1aBhMZKNYiITIn7VB4oOKfJbsXUEPj83gOEr0hucnzH8AV7FhO3PuQExY4t1zxzdo5mj0DWlM1c30wyYF_2LrBCuv0F6rzaWfLMZMQBz_8havQwmerfTwLgnJJlUe7DoGQn_M_a9U6bQHuoSmOBDDVTI`,
              "api-key":
                "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
            },
          }
        );

        const data = response.data.data;
        console.log(data);
        setShipmentList(data);
        return data;
      } catch (e) {
        console.log(e);
      }
    };

    allCategory();
  }, []);

  const handleExportRows = (rows) => {
    csvExporter.generateCsv(rows.map((row) => row.original));
  };

  const handleExportData = () => {
    csvExporter.generateCsv(data);
  };

  return (
    <div className="Shipmentlist">
      <div className="container-fluid  py-5">
        <div className="head-input container-fluid mb-4">
          <div className="box-left">
            <div className="head-text">
              <h2>Shipment type list</h2>
            </div>
          </div>
        </div>
        {/* table-3 */}
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

        {/* table-2 */}
        {/* <DataTableExtensions {...tableData}>
            <DataTable
              columns={columns}
              data={data}
              noHeader
              defaultSortField="id"
              defaultSortAsc={false}
              pagination
              highlightOnHover
            />
          </DataTableExtensions> */}

        {/* table-1 */}
        {/* <CDBContainer>
            <CDBCard>
              <CDBCardBody>
                <CDBDataTable
                  striped
                  bordered
                  hover
                  scrollX
                  scrollY
                  maxHeight="300xp"
                  data={data()}
                  materialSearch
                  fullPagination
                />
              </CDBCardBody>
            </CDBCard>
          </CDBContainer> */}

        {/* <table class="table">
            <thead>
              <tr className='head-tr'>
              <th scope="col" className='taple-head'>#</th>
                <th scope="col" className='taple-head'>Name</th>
                <th scope="col" className='taple-head'></th>
                <th scope="col" className='taple-head'></th>
                <th scope="col" className='taple-head'>Edit / remove</th>
              </tr>
            </thead>
            <tbody>
              <tr className='body-tr'>
                <td>1</td>
                <td>Freelance Driver</td>
                <td></td>
                <td></td>
                <td>
                  <NavLink to="/addshipment">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr>
              <tr className='body-tr'>
              <td>2</td>
                <td>Freelance Driver</td>
                <td></td>
                <td></td>
                <td>
                  <NavLink to="/addshipment">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr>
              <tr className='body-tr'>
              <td>3</td>
                <td>Freelance Driver</td>
                <td></td>
                <td></td>
                <td>
                  <NavLink to="/addshipment">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr>
              <tr className='body-tr'>
              <td>4</td>
                <td>Freelance Driver</td>
                <td></td>
                <td></td>
                <td>
                  <NavLink to="/addshipment">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr>
              <tr className='body-tr'>
              <td>5</td>
                <td>Freelance Driver</td>
                <td></td>
                <td></td>
                <td>
                  <NavLink to="/addshipment">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr>
              <tr className='body-tr'>
              <td>6</td>
                <td>Freelance Driver</td>
                <td></td>
                <td></td>
                <td>
                  <NavLink to="/addshipment">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr>
              <tr className='body-tr'>
              <td>7</td>
                <td>Freelance Driver</td>
                <td></td>
                <td></td>
                <td>
                  <NavLink to="/addshipment">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr>
            </tbody>
          </table> */}
      </div>
    </div>
  );
};

export default ShipmentTypes;
