import React from "react";

import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import { ReactComponent as EditIcon } from "../../../icons/editicon.svg";
import { ReactComponent as DeleteIcon } from "../../../icons/deleteicon.svg";
// import { useLocation } from "react-router-dom";
import MaterialReactTable from "material-react-table";
import { Box, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here

import { useDispatch, useSelector } from "react-redux";
import { fetchCountryList } from "../../../redux/CountryList";

import "./CountriesList.css";

const columns = [
  {
    accessorKey: "id",
    header: "ID",
    size: 100,
  },
  {
    accessorKey: "name",
    header: "Name",
    size: 100,
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

const CountriesList = () => {
  const dispatch = useDispatch();
  const [countryList, setcountryList] = useState([]);
  const [cookie] = useCookies(["eload_token"]);
  const data = countryList.map((item, index) => {
    return {
      id: item.id,
      name: item.name,
    };
  });

  useEffect(() => {
    dispatch(fetchCountryList({ token: cookie.eload_token }))
      .then((res) => {
        // console.log(res, "response from api");
        const data = res.payload.data;
        setcountryList(data);
      })
      .catch((e) => {
        // console.log(e);
      });
  }, []);

  // const handleExportRows = (rows) => {
  //   csvExporter.generateCsv(rows.map((row) => row.original));
  // };

  // const handleExportData = () => {
  //   csvExporter.generateCsv(data);
  // };
  const handleExportRows = (rows) => {
    const csvOptions = {
      fieldSeparator: ",",
      quoteStrings: '"',
      decimalSeparator: ".",
      showLabels: true,
      useBom: true,
      useKeysAsHeaders: true,
    };

    const csvExporter = new ExportToCsv(csvOptions);

    const exportData = rows.map((row) => row.original);
    csvExporter.generateCsv(exportData);
  };
  return (
    <div className="countrylist">
      <div className="container-fluid px-5 py-5">
        <div className="head-input container-fluid mb-4">
          <div className="box-left">
            <div className="head-text">
              <h2>Country list</h2>
            </div>
          </div>
        </div>
        {/* table */}
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
              {/* <Button
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
              </Button> */}
              <Button
                style={{ marginBottom: "-50px" }}
                startIcon={<FileDownloadIcon />}
                variant="contained"
                onClick={() =>
                  handleExportRows(table.getSelectedRowModel().rows)
                }
              >
                Export Selected Rows
              </Button>
            </Box>
          )}
        />
      </div>
    </div>
  );
};

export default CountriesList;
