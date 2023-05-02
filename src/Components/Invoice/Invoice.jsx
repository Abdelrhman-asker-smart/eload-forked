import React from "react";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { Box, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv";
import { ToastContainer, toast } from "react-toastify";
import "./invoice.css";

const Invoice = () => {
  const dispatch = useDispatch();
  const [cookie] = useCookies(["eload_token"]);
  const [invoice, setInvoice] = useState({});
  const [attachments, setAttachments] = useState([]);
  const [items, setItems] = useState([]);
  const { id } = useParams();

  // endpoint is the API endpoint, url is the frontend page url
  const entity_mappings = {
    invoice: { endpoint: 'invoices', url: 'invoices' },
    request: { endpoint: 'requests', url: 'requests' },
    shipment: { endpoint: 'shipments', url: 'allshipments/shipmentorder' },
    order: { endpoint: 'orders', url: 'orders' },
  }

  let Msg = ({ closeToast, toastProps }) => (
    <div>
      <h5>updated successfully!</h5>
      <p>the page will be refreshed in a moment...</p>
    </div>
  )

  const changeStatus = async(status = 'PAID') => {
    var urlencoded = new URLSearchParams();
    urlencoded.append('status', status);

    try {
      const response = await axios.put(
        `https://dev.eload.smart.sa/api/v1/invoices/${invoice.id}`,
        urlencoded,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${cookie.eload_token}`,
            "api-key":
              "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
          },
        }
      );

      toast(<Msg />)
      setTimeout(() => window.location.reload(), 5000);
    } catch (e) {
      console.log(e);
    }
  }

  const getInvoiceDetails = async () => {
    try {
      const response = await axios.get(
        `https://dev.eload.smart.sa/api/v1/invoices/${id}`,
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
      setInvoice(data);
      setAttachments(data.attachments);

      let items = data.items.map((item) => {
        return {
          id: item.id,
          itemable_type: item.itemable_type,
          itemable_id: item.itemable_id,
          price: item.price,
          qty: 1,
          amount: item.price,
        };
      });

      setItems(items);
    } catch (e) {
      console.log(e);
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorFn: (row) => `${row.itemable_type} #${row.itemable_id}`,
        accessorKey: "id",
        header: "Item",
        size: 30,
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <NavLink style={{ color: "#0085FF" }} to={`/${entity_mappings[row.original.itemable_type].url}/${row.original.itemable_id}`}>
              <span>{renderedCellValue}</span>
            </NavLink>
          </Box>
        ),
      },
      {
        accessorKey: "price",
        header: "Unit Cost",
        size: 30,
      },
      {
        accessorKey: "qty",
        header: "QTY",
        size: 30,
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
    csvExporterready.generateCsv(items);
  };

  const handleExportRowsready = (rows) => {
    csvExporterready.generateCsv(rows.map((row) => row.original));
  };

  useEffect(() => {
    getInvoiceDetails();
  }, []);

  return (
    <div className="container invoice px-4">
        <ToastContainer
          position="top-right"
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="light"
        />
      <div className="row p-4">
        <h2 className="mb-20">
          <strong>
            Invoice
            { invoice.invoiceable_id &&
              <>
              <span> for</span>
              <NavLink style={{ color: "#0085FF" }} to={`/${entity_mappings[invoice?.invoiceable_type].url}/${invoice?.invoiceable_id}`}>
                <span> {invoice?.invoiceable_type} #{invoice?.invoiceable_id}</span>
              </NavLink>
              </>
            }
          </strong>
        </h2>
        
        <div className="col-md-4">
            <h5>Number: <strong>{invoice.code}</strong></h5>
        </div>
        <div className="col-md-4">
            <h5>Due Date: <strong>{invoice.due_date}</strong></h5>
        </div>
        <div className="col-md-4">
            <h5>Status: 
              <span class={`badge badge-${invoice.status == 'PAID' ? 'success' : 'danger'}`}>{invoice.status}</span>
            </h5>
            {
              invoice.status == 'PENDING' && attachments.length > 0 && 
              <button className="btn btn-success btn-sm" onClick={() => changeStatus()}>Mark As Paid</button>
            }
        </div>
        {
          attachments.length > 0 &&
          <div className="col-md-4">
            <h5>Attachments:</h5>
            {attachments.map((attachment, index) => <><a href={attachment.path} target="_blank" className="text-primary">File {index + 1}</a><br /> </>)} 
          </div>
        }
      </div>

      <h6 className="mt-10">All Items</h6>

      <MaterialReactTable
        columns={columns}
        data={items}
        enableRowSelection
        enableBottomToolbar={false}
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

      <div className="row p-4">
        <div className="col-md-4 offset-md-8">
          <table className="table table-striped">
            <tr>
              <td>Subtotal</td>
              <td>{invoice?.total} {invoice?.currency}</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>0.00 {invoice?.currency}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{invoice?.total} {invoice?.currency}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
