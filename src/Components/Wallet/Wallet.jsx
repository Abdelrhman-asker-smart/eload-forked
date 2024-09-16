import React from "react";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { Box, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv";
import "./wallet.css";

const Wallet = () => {
  const dispatch = useDispatch();
  const [cookie] = useCookies(["eload_token"]);
  const [wallet, setWallet] = useState({});
  const [transactions, setTransactions] = useState([]);

  // endpoint is the API endpoint, url is the frontend page url
  const entity_mappings = {
    invoice: { endpoint: 'invoices', url: 'invoices' }
  }

  const getWalletDetails = async () => {
    try {
      const response = await axios.get(
        `https://dev.eload.smart.sa/api/v1/auth/me?transactions=1`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${cookie.eload_token}`,
            "api-key":
              "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
          },
        }
      );

      let data = response.data.data;
      setWallet(data.wallet);

      let transactions = data.wallet.transactions.map((item) => {
        return {
          id: item.id,
          transactionable_type: item.transactionable_type,
          transactionable_id: item.transactionable_id,
          amount: item.amount,
        };
      });

      setTransactions(transactions);
    } catch (e) {
      console.log(e);
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorFn: (row) => `TRX#${row.id}`,
        accessorKey: "id",
        header: "Reference",
        size: 30,
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
            }}
          >
            {renderedCellValue}
            {
              entity_mappings.hasOwnProperty(row.original.transactionable_type) &&
              <NavLink style={{ color: "#0085FF" }} to={`/${entity_mappings[row.original.transactionable_type].url}/${row.original.transactionable_id}`}>
                <span>Details</span>
              </NavLink>
            }

            {
              !entity_mappings.hasOwnProperty(row.original.transactionable_type) &&
              <span>{row.original.transactionable_type.replace(/-/g, ' ')}</span>
            }
          </Box>
        ),
      },
      {
        accessorKey: "amount",
        header: "Amount",
        size: 30,
      }
    ],
    []
  );

  const csvOptionsready = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    useBom: true,
    useKeysAsHeaders: false,
    headers: columns.map((c) => c.header),
  };

  const csvExporterready = new ExportToCsv(csvOptionsready);

  const handleExportDataready = () => {
    csvExporterready.generateCsv(transactions);
  };

  const handleExportRowsready = (rows) => {
    csvExporterready.generateCsv(rows.map((row) => row.original));
  };

  useEffect(() => {
    getWalletDetails();
  }, []);

  return (
    <div className="container wallet px-4">
      <div className="row p-4">
        <div className="col-md-4 offset-md-4 text-center top-section">
            <h4>{wallet.balance} {wallet.currency}</h4>
            <h6><i className="fa fa-wallet"></i> Wallet Amount</h6>
        </div>
      </div>

      <h5 className="mt-10">All Transactions Details</h5>

      <MaterialReactTable
        columns={columns}
        data={transactions}
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
              disabled={table.getPrePaginationRowModel().rows.length === 0}
              //export all rows, including from the next page, (still respects filtering and sorting)
              onClick={() =>
                handleExportRowsready(table.getPrePaginationRowModel().rows)
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
    </div>
  );
};

export default Wallet;
