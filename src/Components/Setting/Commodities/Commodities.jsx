import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import { ReactComponent as EditIcon } from "../../../icons/editicon.svg";
import { ReactComponent as DeleteIcon } from "../../../icons/deleteicon.svg";

import MaterialReactTable from "material-react-table";
import { Box, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here

import { useDispatch, useSelector } from "react-redux";
import { fetchCommoditList } from "../../../redux/listCommodities";

import "./Commodities.css"

// model
const RemoveModal = ({ handelItemRemove, id }) => {
  return (
    <div
      className="modal fade"
      id="exampleModalToggle"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={{ borderRadius: "25px" }}>
          <div className="modal-body  text-center my-5 ">
            <p
              className="my-4 mx-4"
              style={{ fontSize: "27px", fontWeight: "500" }}
            >
              Are you sure to Remove this Item ?
            </p>
            <div className="btns-box d-flex justify-content-center">
              <button
                className="btn-table active"
                data-bs-dismiss="modal"
                aria-label="Close"
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
                {" "}
                close{" "}
              </button>
              <button
                data-bs-dismiss="modal"
                aria-label="Close"
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
                onClick={() => {
                  handelItemRemove(id);
                  // console.log(id, "id");
                }}
              >
                {" "}
                Remove{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// btn
const ButtonEdit = ({ id, setRemoveableId }) => (
  <div className="w-100">
    <NavLink to={`/editcommodities/${id}`}>
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
      data-bs-toggle="modal"
      href="#exampleModalToggle"
      style={{
        textAlign: "center",
        padding: "1% 3%",
        border: "1px solid #0e324a",
        borderRadius: "20px",
        marginRight: "4%",
        color: "#0b2339",
        backgroundColor: "transparent",
      }}
      onClick={() => setRemoveableId(id)}
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
const Commodities = () => {

  const [commoditiesList, setCommoditiesList] = useState([]);
  const [removeableId, setRemoveableId] = useState(null);
  const [reload, setReload] = useState(false);
  const [cookie] = useCookies(["eload_token"]);
  const data = commoditiesList.map((item, index) => {
    return {
      id: item.id,
      name: item.name,
      btns: <ButtonEdit setRemoveableId={setRemoveableId} id={item.id} />,
    };
  });
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchCommoditList({ token: cookie.eload_token }))
    .then((res) => {
      console.log(res, "response from api");
      const data = res.payload.data;
      setCommoditiesList(data);
    })
    .catch((e) => {
      console.log(e);
    });


    // const allCommodities = async () => {
    //   try {
    //     const response = await axios.get(

    //       "https://dev.eload.smart.sa/api/v1/commodities",
    //       {
    //         headers: {
    //           Accept: "application/json",
    //           Authorization: `Bearer ${cookie.eload_token}`,
    //           "api-key":
    //             "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
    //         },
    //       }
    //     );

    //     const data = response.data.data;
       
    //     setCommoditiesList(data);
    //     return data;
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };

    // allCommodities();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);

  const handleExportRows = (rows) => {
    csvExporter.generateCsv(rows.map((row) => row.original));
  };

  const handleExportData = () => {
    csvExporter.generateCsv(data);
  };

  // remove-item
  const handelItemRemove = async (id) => {
    try {
      const response = await axios.delete(
        // https://dev.eload.smart.sa/api/v1/categories
        // `${process.env.REACT_BASE_URL}/categories`,
        `https://dev.eload.smart.sa/api/v1/commodities/${id}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${cookie.eload_token}`,
            "api-key":
              "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
          },
        }
      );

      const data = response.data;
      console.log(response);
      if (data.is_success && data.status_code === 200) {
        setReload(!reload);
      } else {
        console.log("error");
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <div className='commodities'>
        <div className="container-fluid px-5 py-5">
          <div className="head-input container-fluid mb-4">
              <div className="box-left">
                  <div className="head-text">
                      <h2>Commodity list</h2>
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
          {/* modal */}
          <RemoveModal id={removeableId} handelItemRemove={handelItemRemove} />
        </div>
    </div>
  )
}

export default Commodities