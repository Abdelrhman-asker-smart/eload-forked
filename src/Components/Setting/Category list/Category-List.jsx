import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { ReactComponent as EditIcon } from "../../../icons/editicon.svg";
import { ReactComponent as DeleteIcon } from "../../../icons/deleteicon.svg";

import MaterialReactTable from "material-react-table";
import { Box, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here

import "./Category-List.css";

const ButtonEdit = () => (
  <div className="w-100">
    <NavLink to="/catogry-edit">
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


const CategoryList = () => {
  const [categoryList, setCategoryList] = useState([]);
  const data = categoryList.map((item, index) => {
    return {
      id: item.id,
      name: item.name,
      btns: <ButtonEdit />,
    };
  });

  useEffect(() => {
    const allCategory = async () => {
      try {
        const response = await axios.get(
          // https://dev.eload.smart.sa/api/v1/categories
          // `${process.env.REACT_BASE_URL}/categories`,
          "https://dev.eload.smart.sa/api/v1/categories",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiY2RkZjQwNWEwMDM0M2NlODA2NjQwYjk1YjJkNTg0MzdkYjkwZDUxYTdkYmFlYWYyNDg0NzNlZmRmYTI5NWZlMzI0MTNiNmUxYmU2NTY0MmMiLCJpYXQiOjE2Nzc1MDEzNzMuMTgxNDgzOTgzOTkzNTMwMjczNDM3NSwibmJmIjoxNjc3NTAxMzczLjE4MTQ4ODAzNzEwOTM3NSwiZXhwIjoxNzA5MDM3MzczLjE3ODEzNzA2Mzk4MDEwMjUzOTA2MjUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.bjUOUcbVBUorkgeouaGdikpUKUmyvJaKDdnBdfi3iO_WUUZZXBweaKGca2pYHvoZtmETpVT1qlPRnQksGkTVx1M9KpOycBPCq-H2IovJtxoVCSUZxWO9P9IJVMwui6fe4aghRaSuRbmkzs0vCdvclOnkUU0myCqUWuimrQPPG0QDuyBrQCwopMaVyWI9_gQC-WVZvU4XbduN2WUZZgPE2zUZW0GKvEE7B9Go_5GNtk7FRsuuDwkkLJTzawXumpyZGKKkwGJifbp2SSd4bKfjHoVmaCLQBJRS_qZkhKuX1NdYtX92ZbBQqhpFzl3SGgw8M-t6IJcvkWJ1AjMmxs109pEbF6LlGgy7Mb5dnaslAKKxmKlLPHjP6fH-3tlRlL72RCTZoO5eaiTPgRMEC9wbPMxg6rEjWDkYw1Jo2B3tTiNEnVXxi0QPaAH9SKVqIG8FiTyeWKSV2Br3Rlf8VrWQSet_nQ9F5qNbQfRMbCZ7wig2gWQnbwhB_oor8hTGZ76xQsRFgzye-IFupzRngEFeQrlSQuTusoigk74p96vhdYfK2HS6DKWO2cAQEQ3Oz8Ttb0GW-15jvsZKUap9BgYH-RgVXUmhwyB6zIrqWUWwTQ7L0IrBoxzmIJRV92H4xiiLZkSMi0eTVBMW-L9-CVbUe73XHhnuPyj3O6x4vktX2oU`,
              "api-key":
                "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
            },
          }
        );

        const data = response.data.data;
        // console.log(data);
        setCategoryList(data);
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
    <div className="categorylist">
      <div className="container-fluid px-5 py-5">
        <div className="head-input container-fluid mb-4">
          <div className="box-left">
            <div className="head-text">
              <h2>CATEGORY LIST</h2>
            </div>
          </div>
        </div>
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
  );
};

export default CategoryList;
