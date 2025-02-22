import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { ReactComponent as Dr2 } from "../../icons/download 1.svg";
import MaterialReactTable from "material-react-table";
import { Box, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here

import "./viewpartner.css";

const ViewPartner = () => {
  const [prvidersList, setProvidersList] = useState([]);
  const [allprov, setAllprov] = useState();
  const { id } = useParams();

  const [cookie] = useCookies(["eload_token"]);

  useEffect(() => {
    const allproviders = async () => {
      try {
        const response = await axios.get(
          `https://dev.eload.smart.sa/api/v1/providers/${id}`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${cookie.eload_token}`,
              "api-key":
                "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
            },
          }
        );
        const data = response.data.data.shipments;
        const datas = response.data.data;
        // console.log(data);
        // console.log(datas, "datas");
        setProvidersList(data);
        setAllprov(datas);
        return data;
      } catch (e) {
        // console.log(e);
      }
    };
    allproviders();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "Id",
        size: 30,
      },
      {
        accessorKey: "code",
        header: "Code",
        size: 40,
      },
      {
        accessorKey: "Pickup",
        header: "Pick up",
        size: 40,
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
        accessorKey: "shippingcost",
        header: "Shipping Cost",
        size: 30,
      },
      // {
      //   accessorKey: "pickupdate",
      //   header: "pickup Date",
      //   size: 30,
      // },
      {
        accessorKey: "statuse",
        header: "Status",
        size: 30,
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div
              style={{
                backgroundColor: "#31A02F",
                color: "#fff",
                borderRadius: "20px",
                padding: "5px 15px",
                fontSize: "12px",
              }}
            >
              <span>{renderedCellValue}</span>
            </div>
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

  // console.log(prvidersList, "prvidersList");

  const data = prvidersList.map((item, index) => {
    return {
      id: item.id,
      code: item.code,
      Pickup: item.from_city.name,
      dropoff: item.to_city.name,
      shipmenttype: item.shipment_type.name,
      shippingcost: item.cost,
      // pickupdate:"",
      statuse: item.status_i18n,
    };
  });
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
    <div className="viewdriver">
      <div className="header-card">
        <div className="container-fluid">
          <div className="row">
            <div className="information-user col-3 card-header text-center br-right">
              <Dr2 className="mx-5 my-3" style={{ borderRadius: "70px" }} />

              {/* <div className="name-user">Test freelancer Driver</div> */}
              <div className="name-user mx-4">{allprov?.user?.name}</div>

              {/* {prvidersList?.user?.name} */}
            </div>
            <div className="phone-place-data col-3 card-header  br-right py-5">
              <div className="card-box">
                <div className="data-card">
                  <svg
                    className="mx-3"
                    width="25"
                    height="33"
                    viewBox="0 0 25 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 8.8125V24.4375C24 30.6875 22.75 32.25 17.75 32.25H10.25C5.25 32.25 4 30.6875 4 24.4375V8.8125C4 2.5625 5.25 1 10.25 1H17.75C22.75 1 24 2.5625 24 8.8125Z"
                      stroke="#244664"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.5 10.0625V23.1875C21.5 28.4375 20.5625 29.75 16.8125 29.75H11.1875C7.4375 29.75 6.5 28.4375 6.5 23.1875V10.0625C6.5 4.8125 7.4375 3.5 11.1875 3.5H16.8125C20.5625 3.5 21.5 4.8125 21.5 10.0625Z"
                      stroke="#244664"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19 7.25H10.25"
                      stroke="#244664"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14 27.25C14.6904 27.25 15.25 26.6904 15.25 26C15.25 25.3096 14.6904 24.75 14 24.75C13.3096 24.75 12.75 25.3096 12.75 26C12.75 26.6904 13.3096 27.25 14 27.25Z"
                      stroke="#244664"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  {/* <span>+3235345346</span> */}
                  <span>{allprov?.user?.phone}</span>
                </div>
                <div className="data-card">
                  <svg
                    className="mx-3"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25 10.3125V22.5C25 26.25 22.7625 27.5 20 27.5H10C7.2375 27.5 5 26.25 5 22.5V10.3125C5 6.25 7.2375 5.3125 10 5.3125C10 6.0875 10.3125 6.7875 10.825 7.3C11.3375 7.8125 12.0375 8.125 12.8125 8.125H17.1875C18.7375 8.125 20 6.8625 20 5.3125C22.7625 5.3125 25 6.25 25 10.3125Z"
                      stroke="#244664"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20 5.3125C20 6.8625 18.7375 8.125 17.1875 8.125H12.8125C12.0375 8.125 11.3375 7.8125 10.825 7.3C10.3125 6.7875 10 6.0875 10 5.3125C10 3.7625 11.2625 2.5 12.8125 2.5H17.1875C17.9625 2.5 18.6625 2.8125 19.175 3.325C19.6875 3.8375 20 4.5375 20 5.3125Z"
                      stroke="#244664"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 16.25H15"
                      stroke="#244664"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 21.25H20"
                      stroke="#244664"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  {/* take contract-id */}
                  {/* ${allprov?.contract.id} */}
                  <NavLink
                    to={`/allitems/${allprov?.contract?.id}`}
                    className="btn-data-card"
                  >
                    View contract details
                  </NavLink>
                </div>
                {/* emp */}
                {/* <div className="data-card">
                <svg className="mx-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z" stroke="#244664" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.9699 14.44C18.3399 14.67 19.8499 14.43 20.9099 13.72C22.3199 12.78 22.3199 11.24 20.9099 10.3C19.8399 9.59004 18.3099 9.35003 16.9399 9.59003" stroke="#244664" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z" stroke="#244664" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.99994 14.44C5.62994 14.67 4.11994 14.43 3.05994 13.72C1.64994 12.78 1.64994 11.24 3.05994 10.3C4.12994 9.59004 5.65994 9.35003 7.02994 9.59003" stroke="#244664" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.0001 14.63C11.9401 14.62 11.8701 14.62 11.8101 14.63C10.4301 14.58 9.33008 13.45 9.33008 12.05C9.33008 10.62 10.4801 9.46997 11.9101 9.46997C13.3401 9.46997 14.4901 10.63 14.4901 12.05C14.4801 13.45 13.3801 14.59 12.0001 14.63Z" stroke="#244664" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.09021 17.78C7.68021 18.72 7.68021 20.26 9.09021 21.2C10.6902 22.27 13.3102 22.27 14.9102 21.2C16.3202 20.26 16.3202 18.72 14.9102 17.78C13.3202 16.72 10.6902 16.72 9.09021 17.78Z" stroke="#244664" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                    <NavLink to={`/allitems/${id}`}>
                        Employees
                    </NavLink>
                </div> */}
              </div>
            </div>
            <div className="transactions-data col-3 card-header  br-right py-5">
              <div className="card-box">
                <div className="data-card">
                  <svg
                    className="mx-3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.66 2.51814L12.63 2.58814L9.72996 9.31814H6.87996C6.19996 9.31814 5.54996 9.45814 4.95996 9.70814L6.70996 5.52814L6.74996 5.42814L6.81996 5.26814C6.83996 5.20814 6.85996 5.14814 6.88996 5.09814C8.19996 2.06814 9.67996 1.37814 12.66 2.51814Z"
                      stroke="#244664"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.05 9.51819C17.6 9.37819 17.12 9.31819 16.64 9.31819H9.72998L12.63 2.58819L12.66 2.51819C12.81 2.56819 12.95 2.63819 13.1 2.69819L15.31 3.62819C16.54 4.13819 17.4 4.66819 17.92 5.30819C18.02 5.42819 18.1 5.53819 18.17 5.66819C18.26 5.80819 18.33 5.94819 18.37 6.09819C18.41 6.18819 18.44 6.27819 18.46 6.35819C18.73 7.19819 18.57 8.22819 18.05 9.51819Z"
                      stroke="#244664"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.5217 14.1984V16.1484C21.5217 16.3484 21.5117 16.5484 21.5017 16.7484C21.3117 20.2384 19.3617 21.9984 15.6617 21.9984H7.86172C7.62172 21.9984 7.38172 21.9784 7.15172 21.9484C3.97172 21.7384 2.27172 20.0384 2.06172 16.8584C2.03172 16.6284 2.01172 16.3884 2.01172 16.1484V14.1984C2.01172 12.1884 3.23172 10.4584 4.97172 9.70836C5.57172 9.45836 6.21172 9.31836 6.89172 9.31836H16.6517C17.1417 9.31836 17.6217 9.38836 18.0617 9.51836C20.0517 10.1284 21.5217 11.9884 21.5217 14.1984Z"
                      stroke="#244664"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.71 5.52808L4.96 9.70808C3.22 10.4581 2 12.1881 2 14.1981V11.2681C2 8.42808 4.02 6.05808 6.71 5.52808Z"
                      stroke="#244664"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.5186 11.2677V14.1977C21.5186 11.9977 20.0586 10.1277 18.0586 9.52766C18.5786 8.22766 18.7286 7.20766 18.4786 6.35766C18.4586 6.26766 18.4286 6.17766 18.3886 6.09766C20.2486 7.05766 21.5186 9.02766 21.5186 11.2677Z"
                      stroke="#244664"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span>Incentive amount</span>
                </div>
                <div className="data-card">
                  <h5 className="head-card-text mx-3 my-2">
                    SAR{allprov?.user?.wallet?.balance}
                  </h5>
                </div>
              </div>
            </div>
            <div className="shipments-data col-3 card-header  py-5">
              <div className="card-box">
                <div className="data-card my-2">
                  <svg
                    className="mx-3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46994"
                      stroke="#244664"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 21.61V12.54"
                      stroke="#244664"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.92989 2.48004L4.58989 5.44004C3.37989 6.11004 2.38989 7.79004 2.38989 9.17004V14.82C2.38989 16.2 3.37989 17.88 4.58989 18.55L9.92989 21.52C11.0699 22.15 12.9399 22.15 14.0799 21.52L19.4199 18.55C20.6299 17.88 21.6199 16.2 21.6199 14.82V9.17004C21.6199 7.79004 20.6299 6.11004 19.4199 5.44004L14.0799 2.47004C12.9299 1.84004 11.0699 1.84004 9.92989 2.48004Z"
                      stroke="#244664"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span>{prvidersList.length} Shipments</span>
                </div>
                {/* drivers */}
                <div className="data-card d-flex my-2">
                  <svg
                    className="mx-3"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1264_14016)">
                      <path
                        d="M12.5075 9.97808C12.4529 10.0479 12.3983 10.1177 12.3437 10.1875L12.375 9.88378L12.5075 9.97808ZM12.5075 9.97808C12.5178 9.96359 12.5297 9.94949 12.5415 9.93536C12.584 9.88462 12.6269 9.83342 12.6022 9.76188C12.5753 9.68373 12.5022 9.67843 12.4323 9.67335C12.4204 9.67249 12.4085 9.67163 12.3971 9.67042M12.5075 9.97808L12.3759 9.87514L12.3797 9.83868M12.3971 9.67042C12.2884 9.65921 12.1798 9.64801 12.0714 9.63694L12.3447 9.85074L12.3755 9.87481L12.3793 9.83881M12.3971 9.67042L12.3793 9.83881M12.3971 9.67042L12.3797 9.83868M12.3793 9.83881L12.3797 9.83868M12.3793 9.83881L12.3797 9.83868M12.3339 9.85449L12.3746 9.88346L12.3424 10.1892C12.3284 10.2071 12.3143 10.2251 12.3003 10.243C12.2658 10.2281 12.2243 10.2051 12.1822 10.1697C12.108 10.1074 12.0602 10.0305 12.0351 9.95762L12.3339 9.85449ZM12.3339 9.85449L12.0368 9.64304C12.0296 9.66324 12.023 9.68639 12.0181 9.71229C12.0018 9.79725 12.0092 9.88272 12.035 9.95762L12.3339 9.85449ZM9.27775 10.0708L9.28642 10.0707L9.29508 10.0704C9.92865 10.0461 10.7215 10.1071 11.5795 10.1907C10.6759 11.3462 9.77224 12.5035 8.87394 13.6669L8.85372 13.6678L8.82311 13.6691C7.24891 13.7233 5.77307 14.2035 4.52274 15.3359C3.65081 16.1153 3.0373 17.119 2.9007 18.3797C2.51588 18.3754 2.13026 18.3764 1.73999 18.3825C1.60091 18.2114 1.45899 18.0452 1.32255 17.8855L1.32019 17.8827C1.17731 17.7154 1.04035 17.555 0.907976 17.3916L0.90799 17.3916L0.904992 17.388C0.486236 16.8793 0.49682 16.218 0.848103 15.843L0.850688 15.8402C1.63557 14.9916 2.18498 13.9808 2.69274 13.0467C2.81218 12.8269 2.92931 12.6114 3.04666 12.4033C3.27979 11.9966 3.50414 11.5828 3.71962 11.1708L3.71964 11.1708L3.72131 11.1675C3.93141 10.7597 4.24706 10.5376 4.69096 10.4391L4.69096 10.4391L4.69356 10.4385C5.48784 10.2586 6.31167 10.1944 7.18731 10.1273L7.18873 10.1272C7.72995 10.0844 8.25859 10.0798 9.00395 10.0733C9.09207 10.0725 9.18321 10.0717 9.27775 10.0708ZM2.87844 18.6345C2.87835 18.6344 2.87866 18.6321 2.87961 18.6279C2.87901 18.6326 2.87853 18.6347 2.87844 18.6345Z"
                        stroke="#244664"
                        stroke-width="1.2"
                      />
                      <path
                        d="M5.76855 4.08688C5.78224 2.11074 7.30696 0.579198 9.10728 0.599971L9.1093 0.599988C10.7629 0.613495 12.2764 2.21888 12.2626 4.16994L12.2626 4.17226C12.2557 6.31755 10.6118 7.78833 8.88661 7.74029C7.23811 7.69287 5.75463 6.11161 5.76855 4.08688ZM5.76855 4.08688L5.16857 4.08272M5.76855 4.08688L5.16857 4.08272M5.16857 4.08272C5.18435 1.80438 6.952 -0.0249373 9.1142 7.97893e-06C11.1502 0.0166382 12.8783 1.94574 12.8626 4.17419C12.8547 6.63546 10.9529 8.39826 8.86958 8.34005L5.16857 4.08272Z"
                        stroke="#244664"
                        stroke-width="1.2"
                      />
                      <path
                        d="M14.037 10.8247L14.037 10.8247C14.0206 10.8113 14.0051 10.7987 13.9905 10.7868C13.9794 10.8011 13.9677 10.8164 13.9554 10.8325L13.4783 10.4688L13.9562 10.8316C13.921 10.8779 13.8785 10.9316 13.8408 10.9793L14.037 10.8247ZM14.037 10.8247L14.0417 10.8285C14.1175 10.8894 14.1902 10.9834 14.2893 11.1543L14.037 10.8247ZM11.9693 14.3299C11.7866 14.2388 11.5954 14.1642 11.4119 14.1003L16.1103 14.4686C16.3575 14.9139 16.7029 15.2891 16.988 15.5987C17.0342 15.6489 17.0789 15.6974 17.1213 15.7442L17.1213 15.7442L17.1251 15.7484C17.2864 15.9231 17.4007 16.2208 17.403 16.5655C17.4052 16.9072 17.2966 17.2154 17.1159 17.4138C16.8413 17.7116 16.5668 18.0266 16.3138 18.364C16.3015 18.3802 16.2922 18.3902 16.2862 18.396C16.2803 18.3961 16.2716 18.3958 16.2598 18.3946L16.2598 18.3945L16.2475 18.3935C16.0732 18.3799 15.8713 18.3851 15.7211 18.389C15.6644 18.3905 15.6151 18.3917 15.5774 18.3917H15.5759H15.5745H15.5731H15.5716H15.5702H15.5688H15.5673H15.5659H15.5645H15.563H15.5616H15.5602H15.5587H15.5573H15.5559H15.5544H15.553H15.5516H15.5501H15.5487H15.5473H15.5458H15.5444H15.543H15.5415H15.5401H15.5387H15.5372H15.5358H15.5344H15.5329H15.5315H15.5301H15.5286H15.5272H15.5258H15.5243H15.5229H15.5215H15.52H15.5186H15.5172H15.5157H15.5143H15.5129H15.5114H15.51H15.5086H15.5071H15.5057H15.5043H15.5028H15.5014H15.4999H15.4985H15.4971H15.4956H15.4942H15.4928H15.4913H15.4899H15.4885H15.487H15.4856H15.4842H15.4827H15.4813H15.4799H15.4784H15.477H15.4756H15.4741H15.4727H15.4713H15.4698H15.4684H15.467H15.4655H15.4641H15.4627H15.4612H15.4598H15.4584H15.4569H15.4555H15.4541H15.4526H15.4512H15.4497H15.4483H15.4469H15.4454H15.444H15.4426H15.4411H15.4397H15.4383H15.4368H15.4354H15.434H15.4325H15.4311H15.4297H15.4282H15.4268H15.4254H15.4239H15.4225H15.421H15.4196H15.4182H15.4167H15.4153H15.4139H15.4124H15.411H15.4096H15.4081H15.4067H15.4053H15.4038H15.4024H15.4009H15.3995H15.3981H15.3966H15.3952H15.3938H15.3923H15.3909H15.3895H15.388H15.3866H15.3851H15.3837H15.3823H15.3808H15.3794H15.378H15.3765H15.3751H15.3737H15.3722H15.3708H15.3693H15.3679H15.3665H15.365H15.3636H15.3622H15.3607H15.3593H15.3578H15.3564H15.355H15.3535H15.3521H15.3507H15.3492H15.3478H15.3463H15.3449H15.3435H15.342H15.3406H15.3392H15.3377H15.3363H15.3348H15.3334H15.332H15.3305H15.3291H15.3276H15.3262H15.3248H15.3233H15.3219H15.3204H15.319H15.3176H15.3161H15.3147H15.3133H15.3118H15.3104H15.3089H15.3075H15.3061H15.3046H15.3032H15.3017H15.3003H15.2989H15.2974H15.296H15.2945H15.2931H15.2917H15.2902H15.2888H15.2873H15.2859H15.2845H15.283H15.2816H15.2801H15.2787H15.2772H15.2758H15.2744H15.2729H15.2715H15.27H15.2686H15.2672H15.2657H15.2643H15.2628H15.2614H15.2599H15.2585H15.2571H15.2556H15.2542H15.2527H15.2513H15.2499H15.2484H15.247H15.2455H15.2441H15.2426H15.2412H15.2398H15.2383H15.2369H15.2354H15.234H15.2325H15.2311H15.2297H15.2282H15.2268H15.2253H15.2239H15.2224H15.221H15.2195H15.2181H15.2167H15.2152H15.2138H15.2123H15.2109H15.2094H15.208H15.2065H15.2051H15.2036H15.2022H15.2008H15.1993H15.1979H15.1964H15.195H15.1935H15.1921H15.1906H15.1892H15.1877H15.1863H15.1849H15.1834H15.182H15.1805H15.1791H15.1776H15.1762H15.1747H15.1733H15.1718H15.1704H15.1689H15.1675H15.166H15.1646H15.1631H15.1617H15.1602H15.1588H15.1574H15.1559H15.1545H15.153H15.1516H15.1501H15.1487H15.1472H15.1458H15.1457C14.8681 16.3611 13.5939 15.1308 11.9693 14.3299ZM14.8356 18.3917C14.8292 18.3917 14.8302 18.3913 14.837 18.3917H14.8356Z"
                        stroke="#244664"
                        stroke-width="1.2"
                      />
                      <path
                        d="M5.17859 18.3834H5.173C5.34317 17.6996 5.77011 17.1882 6.38697 16.7433C8.00385 15.5863 10.4971 15.7159 12.0109 17.0326C12.4431 17.4102 12.7345 17.8482 12.8693 18.3834H12.8687H12.8606H12.8525H12.8443H12.8362H12.8281H12.8199H12.8118H12.8036H12.7955H12.7874H12.7792H12.7711H12.763H12.7548H12.7467H12.7385H12.7304H12.7223H12.7141H12.706H12.6979H12.6897H12.6816H12.6734H12.6653H12.6572H12.649H12.6409H12.6327H12.6246H12.6165H12.6083H12.6002H12.5921H12.5839H12.5758H12.5676H12.5595H12.5514H12.5432H12.5351H12.527H12.5188H12.5107H12.5025H12.4944H12.4863H12.4781H12.47H12.4619H12.4537H12.4456H12.4374H12.4293H12.4212H12.413H12.4049H12.3967H12.3886H12.3805H12.3723H12.3642H12.3561H12.3479H12.3398H12.3316H12.3235H12.3154H12.3072H12.2991H12.291H12.2828H12.2747H12.2665H12.2584H12.2503H12.2421H12.234H12.2259H12.2177H12.2096H12.2014H12.1933H12.1852H12.177H12.1689H12.1608H12.1526H12.1445H12.1363H12.1282H12.1201H12.1119H12.1038H12.0956H12.0875H12.0794H12.0712H12.0631H12.055H12.0468H12.0387H12.0305H12.0224H12.0143H12.0061H11.998H11.9899H11.9817H11.9736H11.9654H11.9573H11.9492H11.941H11.9329H11.9248H11.9166H11.9085H11.9003H11.8922H11.8841H11.8759H11.8678H11.8596H11.8515H11.8434H11.8352H11.8271H11.819H11.8108H11.8027H11.7945H11.7864H11.7783H11.7701H11.762H11.7539H11.7457H11.7376H11.7294H11.7213H11.7132H11.705H11.6969H11.6888H11.6806H11.6725H11.6643H11.6562H11.6481H11.6399H11.6318H11.6237H11.6155H11.6074H11.5992H11.5911H11.583H11.5748H11.5667H11.5585H11.5504H11.5423H11.5341H11.526H11.5179H11.5097H11.5016H11.4934H11.4853H11.4772H11.469H11.4609H11.4528H11.4446H11.4365H11.4283H11.4202H11.4121H11.4039H11.3958H11.3877H11.3795H11.3714H11.3632H11.3551H11.347H11.3388H11.3307H11.3225H11.3144H11.3063H11.2981H11.29H11.2819H11.2737H11.2656H11.2574H11.2493H11.2412H11.233H11.2249H11.2168H11.2086H11.2005H11.1923H11.1842H11.1761H11.1679H11.1598H11.1517H11.1435H11.1354H11.1272H11.1191H11.111H11.1028H11.0947H11.0866H11.0784H11.0703H11.0621H11.054H11.0459H11.0377H11.0296H11.0214H11.0133H11.0052H10.997H10.9889H10.9808H10.9726H10.9645H10.9563H10.9482H10.9401H10.9319H10.9238H10.9157H10.9075H10.8994H10.8912H10.8831H10.875H10.8668H10.8587H10.8506H10.8424H10.8343H10.8261H10.818H10.8099H10.8017H10.7936H10.7854H10.7773H10.7692H10.761H10.7529H10.7448H10.7366H10.7285H10.7203H10.7122H10.7041H10.6959H10.6878H10.6797H10.6715H10.6634H10.6552H10.6471H10.639H10.6308H10.6227H10.6146H10.6064H10.5983H10.5901H10.582H10.5739H10.5657H10.5576H10.5495H10.5413H10.5332H10.525H10.5169H10.5088H10.5006H10.4925H10.4843H10.4762H10.4681H10.4599H10.4518H10.4437H10.4355H10.4274H10.4192H10.4111H10.403H10.3948H10.3867H10.3786H10.3704H10.3623H10.3541H10.346H10.3379H10.3297H10.3216H10.3135H10.3053H10.2972H10.289H10.2809H10.2728H10.2646H10.2565H10.2483H10.2402H10.2321H10.2239H10.2158H10.2077H10.1995H10.1914H10.1832H10.1751H10.167H10.1588H10.1507H10.1426H10.1344H10.1263H10.1181H10.11H10.1019H10.0937H10.0856H10.0775H10.0693H10.0612H10.053H10.0449H10.0368H10.0286H10.0205H10.0124H10.0042H9.99608H9.98794H9.9798H9.97166H9.96352H9.95539H9.94725H9.93911H9.93097H9.92283H9.9147H9.90656H9.89842H9.89028H9.88215H9.87401H9.86587H9.85773H9.84959H9.84146H9.83332H9.82518H9.81704H9.8089H9.80077H9.79263H9.78449H9.77635H9.76821H9.76008H9.75194H9.7438H9.73566H9.72753H9.71939H9.71125H9.70311H9.69497H9.68684H9.6787H9.67056H9.66242H9.65428H9.64615H9.63801H9.62987H9.62173H9.6136H9.60546H9.59732H9.58918H9.58104H9.57291H9.56477H9.55663H9.54849H9.54035H9.53222H9.52408H9.51594H9.5078H9.49966H9.49153H9.48339H9.47525H9.46711H9.45898H9.45084H9.4427H9.43456H9.42642H9.41829H9.41015H9.40201H9.39387H9.38573H9.3776H9.36946H9.36132H9.35318H9.34505H9.33691H9.32877H9.32063H9.31249H9.30436H9.29622H9.28808H9.27994H9.2718H9.26367H9.25553H9.24739H9.23925H9.23111H9.22298H9.21484H9.2067H9.19856H9.19043H9.18229H9.17415H9.16601H9.15787H9.14974H9.1416H9.13346H9.12532H9.11718H9.10905H9.10091H9.09277H9.08463H9.0765H9.06836H9.06022H9.05208H9.04394H9.03581H9.02767H9.01971H9.01176H9.00381H8.99585H8.9879H8.97995H8.97199H8.96404H8.95608H8.94813H8.94018H8.93222H8.92426H8.91631H8.90835H8.9004H8.89244H8.88449H8.87653H8.86857H8.86062H8.85266H8.8447H8.83675H8.82879H8.82083H8.81288H8.80492H8.79696H8.789H8.78104H8.77309H8.76513H8.75717H8.74921H8.74125H8.73329H8.72533H8.71737H8.70941H8.70145H8.69349H8.68553H8.67757H8.66961H8.66165H8.65369H8.64573H8.63777H8.62981H8.62185H8.61389H8.60593H8.59797H8.59H8.58204H8.57408H8.56612H8.55816H8.55019H8.54223H8.53427H8.5263H8.51834H8.51038H8.50242H8.49445H8.48649H8.47852H8.47056H8.4626H8.45463H8.44667H8.4387H8.43074H8.42278H8.41481H8.40685H8.39888H8.39092H8.38295H8.37499H8.36702H8.35905H8.35109H8.34312H8.33516H8.32719H8.31923H8.31126H8.30329H8.29533H8.28736H8.27939H8.27143H8.26346H8.25549H8.24752H8.23956H8.23159H8.22362H8.21565H8.20769H8.19972H8.19175H8.18378H8.17582H8.16785H8.15988H8.15191H8.14394H8.13597H8.128H8.12003H8.11207H8.1041H8.09613H8.08816H8.08019H8.07222H8.06425H8.05628H8.04831H8.04034H8.03237H8.0244H8.01643H8.00846H8.00049H7.99252H7.98455H7.97658H7.96861H7.96064H7.95267H7.9447H7.93672H7.92875H7.92078H7.91281H7.90484H7.89687H7.8889H7.88093H7.87295H7.86498H7.85701H7.84904H7.84107H7.83309H7.82512H7.81715H7.80918H7.80121H7.79323H7.78526H7.77729H7.76932H7.76134H7.75337H7.7454H7.73742H7.72945H7.72148H7.7135H7.70553H7.69756H7.68959H7.68161H7.67364H7.66566H7.65769H7.64972H7.64174H7.63377H7.6258H7.61782H7.60985H7.60188H7.5939H7.58593H7.57795H7.56998H7.562H7.55403H7.54606H7.53808H7.53011H7.52213H7.51416H7.50618H7.49821H7.49023H7.48226H7.47429H7.46631H7.45834H7.45036H7.44239H7.43441H7.42644H7.41846H7.41049H7.40251H7.39454H7.38656H7.37859H7.37061H7.36264H7.35466H7.34668H7.33871H7.33073H7.32276H7.31478H7.30681H7.29883H7.29086H7.28288H7.27491H7.26693H7.25895H7.25098H7.243H7.23503H7.22705H7.21908H7.2111H7.20312H7.19515H7.18717H7.1792H7.17122H7.16324H7.15527H7.14729H7.13932H7.13134H7.12337H7.11539H7.10741H7.09944H7.09146H7.08349H7.07551H7.06753H7.05956H7.05158H7.04361H7.03563H7.02765H7.01968H7.0117H7.00373H6.99575H6.98777H6.9798H6.97182H6.96385H6.95587H6.94789H6.93992H6.93194H6.92396H6.91599H6.90801H6.90004H6.89206H6.88408H6.87611H6.86813H6.86016H6.85218H6.84421H6.83623H6.82825H6.82028H6.8123H6.80433H6.79635H6.78837H6.7804H6.77242H6.76445H6.75647H6.7485H6.74052H6.73254H6.72457H6.71659H6.70862H6.70064H6.69267H6.68469H6.67671H6.66874H6.66076H6.65279H6.64481H6.63684H6.62886H6.62089H6.61291H6.60494H6.59696H6.58899H6.58101H6.57304H6.56506H6.55709H6.54911H6.54114H6.53316H6.52519H6.51721H6.50924H6.50126H6.49329H6.48531H6.47734H6.46936H6.46139H6.45341H6.44544H6.43746H6.42949H6.42152H6.41354H6.40557H6.39759H6.38962H6.38165H6.37367H6.3657H6.35772H6.34975H6.34178H6.3338H6.32583H6.31786H6.30988H6.30191H6.29393H6.28596H6.27799H6.27002H6.26204H6.25407H6.2461H6.23812H6.23015H6.22218H6.2142H6.20623H6.19826H6.19029H6.18231H6.17434H6.16637H6.1584H6.15042H6.14245H6.13448H6.12651H6.11854H6.11056H6.10259H6.09462H6.08665H6.07868H6.07071H6.06274H6.05476H6.04679H6.03882H6.03085H6.02288H6.01491H6.00694H5.99897H5.991H5.98303H5.97506H5.96709H5.95912H5.95115H5.94318H5.93521H5.92724H5.91927H5.9113H5.90333H5.89536H5.88739H5.87942H5.87145H5.86348H5.85551H5.84754H5.83957H5.83161H5.82364H5.81567H5.8077H5.79973H5.79176H5.7838H5.77583H5.76786H5.75989H5.75192H5.74396H5.73599H5.72802H5.72005H5.71209H5.70412H5.69615H5.68819H5.68022H5.67225H5.66429H5.65632H5.64836H5.64039H5.63242H5.62446H5.61649H5.60853H5.60056H5.5926H5.58463H5.57667H5.5687H5.56074H5.55277H5.54481H5.53684H5.52888H5.52091H5.51295H5.50499H5.49702H5.48906H5.48109H5.47313H5.46517H5.4572H5.44924H5.44128H5.43332H5.42535H5.41739H5.40943H5.40147H5.39351H5.38554H5.37758H5.36962H5.36166H5.3537H5.34574H5.33777H5.32981H5.32185H5.31389H5.30593H5.29797H5.29001H5.28205H5.27409H5.26613H5.25817H5.25021H5.24225H5.2343H5.22634H5.21838H5.21042H5.20246H5.1945H5.18654H5.17859ZM5.10831 18.7466C5.10832 18.7462 5.10833 18.7457 5.10835 18.7451L5.10831 18.7466Z"
                        stroke="#244664"
                        stroke-width="1.2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1264_14016">
                        <rect width="18" height="19" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <div className="d-flex">
                    <span className="mx-2"> Drivers</span>
                    <NavLink
                      to={`/Partners/part-driverlist/${id}`}
                      className="mx-3"
                    >
                      View All
                    </NavLink>
                  </div>
                </div>
                {/* trucks */}
                <div className="data-card d-flex my-2">
                  <svg
                    className="mx-3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 2V12C15 13.1 14.1 14 13 14H2V6C2 3.79 3.79 2 6 2H15Z"
                      stroke="#244664"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22 14V17C22 18.66 20.66 20 19 20H18C18 18.9 17.1 18 16 18C14.9 18 14 18.9 14 20H10C10 18.9 9.1 18 8 18C6.9 18 6 18.9 6 20H5C3.34 20 2 18.66 2 17V14H13C14.1 14 15 13.1 15 12V5H16.84C17.56 5 18.22 5.39001 18.58 6.01001L20.29 9H19C18.45 9 18 9.45 18 10V13C18 13.55 18.45 14 19 14H22Z"
                      stroke="#244664"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z"
                      stroke="#244664"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z"
                      stroke="#244664"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z"
                      stroke="#244664"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div className="d-flex">
                    <span> Trucks</span>
                    <NavLink
                      to={`/Partners/part-trucklist/${id}`}
                      className="mx-3"
                    >
                      View All
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="freelancer-content">
        <div className="container-fluid">
          {/* table */}
          <MaterialReactTable
            columns={columns}
            positionPagination="top"
            data={data}
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
    </div>
  );
};
export default ViewPartner;
