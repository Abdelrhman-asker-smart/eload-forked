import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import { ReactComponent as EditIcon } from "../../icons/editicon.svg";
import { ReactComponent as DeleteIcon } from "../../icons/deleteicon.svg";
import { ReactComponent as View } from "../../icons/eye.svg";
// import { useLocation } from "react-router-dom";
import MaterialReactTable from "material-react-table";
import { Box, Button } from "@mui/material";
import { useParams } from "react-router-dom";

import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import "../GroupList/GroupList.css";

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
                  // // console.log(id, "id");
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
// btns-action
const ButtonEdit = ({ id, setRemoveableId, idshipper }) => (
  // const { idshipper } = useParams();

  <div className="w-100">
    <NavLink to={`/Shipments/addresslist/${id}/shipper/${idshipper}`}>
      <button
        className="btn-table active"
        style={{
          textAlign: "center",
          padding: "1% 3%",
          border: "1px solid #7b82be",
          borderRadius: "20px",
          marginRight: "4%",
          color: "#fff",
          backgroundColor: "#7b82be",
        }}
      >
        <View className="mx-1" />
        Addresses
      </button>
    </NavLink>
    {/* edit */}
    <NavLink to={`/Shipments/editgroup/${id}/shipper/${idshipper}`}>
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

const GroupList = () => {
  const [groupList, setGroupList] = useState([]);
  const [removeableId, setRemoveableId] = useState(null);
  const [reload, setReload] = useState(false);
  const [cookie] = useCookies(["eload_token"]);
  const { id } = useParams();
  const [user_type, setUserType] = useState(localStorage.getItem("user_type"));
  const [user_type_data, setUserTypeData] = useState(
    JSON.parse(localStorage.getItem("user_type_data"))
  );

  // // console.log(idshipper,"shipperid");

  const data = groupList.map((item, index) => {
    return {
      id: item.id,
      name: item.name,
      btns: (
        <ButtonEdit
          setRemoveableId={setRemoveableId}
          id={item.id}
          idshipper={user_type == "admin" ? id : user_type_data.id}
        />
      ),
    };
  });
  useEffect(() => {
    const allGroup = async () => {
      // setCookie("eload_token", data.data.token.access);
      try {
        const response = await axios.get(
          // https://dev.eload.smart.sa/api/v1/categories
          // `${process.env.REACT_BASE_URL}/categories`,

          `https://dev.eload.smart.sa/api/v1/groups?shipper_id=${
            user_type == "admin" ? id : user_type_data.id
          }`,
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
        // // console.log(data);
        setGroupList(data);
        return data;
      } catch (e) {
        // console.log(e);
      }
    };

    allGroup();
  }, [reload]);

  // const handleExportRows = (rows) => {
  //   csvExporter.generateCsv(rows.map((row) => row.original));
  // };

  // const handleExportData = () => {
  //   csvExporter.generateCsv(data);
  // };
  // remove-item
  const handelItemRemove = async (id) => {
    try {
      const response = await axios.delete(
        // https://dev.eload.smart.sa/api/v1/categories
        // `${process.env.REACT_BASE_URL}/categories`,
        `https://dev.eload.smart.sa/api/v1/groups/${id}`,
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
      // console.log(response);
      if (data.is_success && data.status_code === 200) {
        setReload(!reload);
      } else {
        // console.log("error");
      }
      return data;
    } catch (e) {
      // console.log(e);
    }
  };
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
    <div className="group-list">
      <header className="partner-head px-3">
        <div className="container-fluid">
          <div className="box-left">
            <div className="head-text">
              <h3>Groups list</h3>
            </div>
          </div>
          <div className="box-right">
            <NavLink
              to={`/Shipments/addnewgroup/${
                user_type == "admin" ? id : user_type_data.id
              }`}
            >
              <button className="btn-partner">
                <i className="fa-solid fa-plus me-3"></i>Add new group
              </button>
            </NavLink>
          </div>
        </div>
      </header>
      <div className="px-3">
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
      {/* modal */}
      <RemoveModal id={removeableId} handelItemRemove={handelItemRemove} />
    </div>
  );
};

export default GroupList;
