import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import { ReactComponent as EditIcon } from "../../icons/editicon.svg";
import { ReactComponent as DeleteIcon } from "../../icons/deleteicon.svg";
import { ReactComponent as View } from "../../icons/eye.svg";

// import { useLocation } from "react-router-dom";
// import MaterialReactTable from "material-react-table";
// import { Box, Button } from "@mui/material";
// import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import "./Partners.css";
// btns-action
const ButtonEdit = ({ id, setRemoveableId }) => (
  <div className="w-100">

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
      <View className="mx-1" />
      View
    </button>
    
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
    header: "Id",
    size: 100,
  },
  {
    accessorKey: "name",
    header: "Name",
    size: 100,
  },
  // {
  //   accessorKey: "phone",
  //   header: "Phone Number",
  //   size: 100,
  // },

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

const Partners = () => {

  const [partnerList, setPartnerList] = useState([]);
  // const [removeableId, setRemoveableId] = useState(null);
  // const [reload, setReload] = useState(false);
  const [cookie] = useCookies(["eload_token"]);
  const data = partnerList.map((item, index) => {
    return {
      id: item.id,
      name: item.name,
      btns: <ButtonEdit  />,
    };
  });

  useEffect(() => {
    const allShipper = async () => {
      // setCookie("eload_token", data.data.token.access);
      try {
        const response = await axios.get(
          // https://dev.eload.smart.sa/api/v1/categories
          // `${process.env.REACT_BASE_URL}/categories`,

          "https://dev.eload.smart.sa/api/v1/shippers",
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
        console.log(data);
        setPartnerList(data);
        return data;
      } catch (e) {
        console.log(e);
      }
    };

    allShipper();
  }, []);

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
              <h2>Partners</h2>
              <p>20 Partners</p>
            </div>
            <div className="input-head">
              <span>Search a Partners</span>
              <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder=" Enter Partners Name"
                />
              </div>
            </div>
          </div>
          <div className="box-right">
            <NavLink to="/addpartners">
              <button className="btn-partner">
                <i className="fa-solid fa-plus me-2"></i>Add Partner
              </button>
            </NavLink>
          </div>
        </div>
      </header>
      <div className="partner container-fluid px-5">
        <div className="head-input container-fluid">
          <div className="box-right">
            <div className="print">
              <button className="print-btn">
                <i className="fa-solid fa-print mx-2"></i>
                Print
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="partner-table">
          <table className="table">
            <thead>
              <tr className="head-tr">
                <th scope="col" className="taple-head">
                  Name
                </th>
                <th scope="col" className="taple-head">
                  E-mail
                </th>
                <th scope="col" className="taple-head">
                  PHONE NUMBER
                </th>
                <th scope="col" className="taple-head">
                  Edit / remove
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="body-tr">
                <td>Freelance Driver</td>
                <td>test_freelance_driver@example.com</td>
                <td>+92 335 252 2522</td>
                <td>
                  <button className="btn-table">
                    <i className="fa-solid fa-eye me-3"></i>View
                  </button>
                  <button className="btn-table active">
                    <i className="fa-solid fa-pen me-3"></i>Edit
                  </button>
                  <button className="btn-table">
                    <i className="fa-solid fa-user me-3"></i>Remove
                  </button>
                </td>
              </tr>
              <tr className="body-tr">
                <td>Freelance Driver</td>
                <td>test_freelance_driver@example.com</td>
                <td>+92 335 252 2522</td>
                <td>
                <button className="btn-table">
                    <i className="fa-solid fa-eye me-3"></i>View
                  </button>
                  <button className="btn-table active">
                    <i className="fa-solid fa-pen me-3"></i>Edit
                  </button>
                  <button className="btn-table">
                    <i className="fa-solid fa-user me-3"></i>Remove
                  </button>
                </td>
              </tr>
              <tr className="body-tr">
                <td>Freelance Driver</td>
                <td>test_freelance_driver@example.com</td>
                <td>+92 335 252 2522</td>
                <td>
                <button className="btn-table">
                    <i className="fa-solid fa-eye me-3"></i>View
                  </button>
                  <button className="btn-table active">
                    <i className="fa-solid fa-pen me-3"></i>Edit
                  </button>
                  <button className="btn-table">
                    <i className="fa-solid fa-user me-3"></i>Remove
                  </button>
                </td>
              </tr>
              <tr className="body-tr">
                <td>Freelance Driver</td>
                <td>test_freelance_driver@example.com</td>
                <td>+92 335 252 2522</td>
                <td>
                <button className="btn-table">
                    <i className="fa-solid fa-eye me-3"></i>View
                  </button>
                  <button className="btn-table active">
                    <i className="fa-solid fa-pen me-3"></i>Edit
                  </button>
                  <button className="btn-table">
                    <i className="fa-solid fa-user me-3"></i>Remove
                  </button>
                </td>
              </tr>
              <tr className="body-tr">
                <td>Freelance Driver</td>
                <td>test_freelance_driver@example.com</td>
                <td>+92 335 252 2522</td>
                <td>
                <button className="btn-table">
                    <i className="fa-solid fa-eye me-3"></i>View
                  </button>
                  <button className="btn-table active">
                    <i className="fa-solid fa-pen me-3"></i>Edit
                  </button>
                  <button className="btn-table">
                    <i className="fa-solid fa-user me-3"></i>Remove
                  </button>
                </td>
              </tr>
              <tr className="body-tr">
                <td>Freelance Driver</td>
                <td>test_freelance_driver@example.com</td>
                <td>+92 335 252 2522</td>
                <td>
                <button className="btn-table">
                    <i className="fa-solid fa-eye me-3"></i>View
                  </button>
                  <button className="btn-table active">
                    <i className="fa-solid fa-pen me-3"></i>Edit
                  </button>
                  <button className="btn-table">
                    <i className="fa-solid fa-user me-3"></i>Remove
                  </button>
                </td>
              </tr>
              <tr className="body-tr">
                <td>Freelance Driver</td>
                <td>test_freelance_driver@example.com</td>
                <td>+92 335 252 2522</td>
                <td>
                <button className="btn-table">
                    <i className="fa-solid fa-eye me-3"></i>View
                  </button>
                  <button className="btn-table active">
                    <i className="fa-solid fa-pen me-3"></i>Edit
                  </button>
                  <button className="btn-table">
                    <i className="fa-solid fa-user me-3"></i>Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Partners;
