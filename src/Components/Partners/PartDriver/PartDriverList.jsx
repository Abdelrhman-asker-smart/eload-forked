import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import { ReactComponent as EditIcon } from "../../../icons/editicon.svg";
import { ReactComponent as DeleteIcon } from "../../../icons/deleteicon.svg";
import { ReactComponent as View } from "../../../icons/eye.svg";
import { useParams } from "react-router-dom";

import MaterialReactTable from "material-react-table";
import { Box, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import { useDispatch, useSelector } from "react-redux";
// import { fetchCategoryList } from "../../../redux/Drivers/driverList.js";
import { fetchPartDriverList } from "../../../redux/Partner/partDriver";
import "../Partners.css";
// btns-action

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
                  console.log(id, "id");
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

const ButtonEdit = ({ id, setRemoveableId }) => (
  <div className="w-100">
      <NavLink to={`/Partners/viewdriver-partner/${id}`}>
      <button
      className="btn-table"
      // data-bs-toggle="modal"
      // href="#exampleModalToggle"
      style={{
        textAlign: "center",
        padding: "1% 3%",
        border: "1px solid #0e324a",
        borderRadius: "20px",
        // marginRight: "4%",
        color: "#0b2339",
        backgroundColor: "transparent",
      }}
      onClick={() => setRemoveableId(id)}
    >
      <View className="mx-1" />
      View
    </button>
    </NavLink>
      <NavLink to={`/Partners/part-editdriver/${id}`}>
      <button
        className="btn-table active mx-1"
        style={{
          textAlign: "center",
          padding: "1% 3%",
          border: "1px solid #0e324a",
          borderRadius: "20px",
        //   margin: "4%",
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
        marginTop: "4px",
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
    accessorKey: "name",
    header: "Name",
    size: 10,
  },
  {
    accessorKey: "email",
    header: "Email",
    size: 10,
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
    size: 10,
  },

  {
    accessorKey: "btns",
    header: "Edit / Remove",
    size: 120,
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

const PartDriverList = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const [partnerList, setPartnerList] = useState([]);
    const [removeableId, setRemoveableId] = useState(null);
    const [reload, setReload] = useState(false);
    const [cookie] = useCookies(["eload_token"]);
    const [user_type, setUserType] = useState(localStorage.getItem('user_type'));
    const [user_type_data, setUserTypeData] = useState(JSON.parse(localStorage.getItem('user_type_data')));

    const data = partnerList.map((item, index) => {
      return {
        id:item.id,
        name: item.user?.name,
        email: item.user?.email,
        phone: item.user?.phone,
        btns: <ButtonEdit setRemoveableId={setRemoveableId} id={item.id} />,
      };
    });
    useEffect(() => {
        const allpartDrivers = async () => {
            // console.log(id);
            try {
            // console.log(id);

              const response = await axios.get(
               
                `https://dev.eload.smart.sa/api/v1/drivers?provider_id=${user_type == 'admin' ? id : user_type_data.id}`,
                {
                  headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${cookie.eload_token}`,
                    "api-key":
                      "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
                  },
                }
              );
            //   const data = response.data.data.shipments;
              const data = response.data.data;
              console.log(data);
              console.log(data,"datas");
              setPartnerList(data);
            //   setAllprov(datas);
              return data;
            } catch (e) {
              console.log(e);
            }
          };
          allpartDrivers();
    //   dispatch(fetchPartDriverList({ token: cookie.eload_token , id:id}))
    //     .then((res) => {
  
    //       const data = res.payload.data;
    //       setPartnerList(data);
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    }, [reload]);
  
    const handelItemRemove = async (idrow) => {
        console.log(idrow);
      try {
        const response = await axios.delete(
  
          `https://dev.eload.smart.sa/api/v1/drivers/${idrow}`,
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
  
    const handleExportRows = (rows) => {
      csvExporter.generateCsv(rows.map((row) => row.original));
    };
  
    const handleExportData = () => {
      csvExporter.generateCsv(data);
    };
  return (
    <div>
    <header className="partner-head px-5">
      <div className="container-fluid">
        <div className="box-left">
          <div className="head-text">
            <h2>Drivers</h2>

          </div>

        </div>
        <div className="box-right">
          <NavLink to={`/Partners/part-adddriver/${user_type == 'admin' ? id : user_type_data.id}`}>
            <button className="btn-partner">
              <i className="fa-solid fa-plus me-2"></i>Add Driver
            </button>
          </NavLink>
        </div>
      </div>
    </header>
    <div className="partner container-fluid px-5">
      <div className="head-input container-fluid">
      </div>
 
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

export default PartDriverList