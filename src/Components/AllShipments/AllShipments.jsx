import React from "react";
import "./Allshipments.css";
import { MDBDataTableV5 } from "mdbreact";

const RowButton = ({ status }) => {
  return (
    <div>
      {status == "NEW" ? (
        <button
          style={{
            fontSize: "12px",
            color: "white",
            backgroundColor: "#0085FF",
            border: "none",
            outline: "none",
            borderRadius: "30px",
            marginTop: "-5px",
            width: "100%",
            height: "30px",
          }}
        >
          {status}
        </button>
      ) : (
        ""
      )}
      {status == "Assigned" ? (
        <button
          style={{
            fontSize: "12px",
            color: "white",
            backgroundColor: "red",
            border: "none",
            outline: "none",
            borderRadius: "30px",
            marginTop: "-5px",
            width: "100%",
            height: "30px",
          }}
        >
          {status}
        </button>
      ) : (
        ""
      )}
      {status == "On the Way " ? (
        <button
          style={{
            fontSize: "12px",
            color: "white",
            backgroundColor: "#18AEC9",
            border: "none",
            outline: "none",
            borderRadius: "30px",
            marginTop: "-5px",
            width: "100%",
            height: "30px",
          }}
        >
          {status}
        </button>
      ) : (
        ""
      )}
      {status == "DISPATCH" ? (
        <button
          style={{
            fontSize: "12px",
            color: "white",
            backgroundColor: "#FF8A00",
            border: "none",
            outline: "none",
            borderRadius: "30px",
            marginTop: "-5px",
            width: "100%",
            height: "30px",
          }}
        >
          {status}
        </button>
      ) : (
        ""
      )}
      {status == "Delivered" ? (
        <button
          style={{
            fontSize: "12px",
            color: "white",
            backgroundColor: "#31A02F",
            border: "none",
            outline: "none",
            borderRadius: "30px",
            marginTop: "-5px",
            width: "100%",
            height: "30px",
          }}
        >
          {status}
        </button>
      ) : (
        ""
      )}
      {/* <button style={{fontSize:"16px",color:"white",backgroundColor:"#0085FF",border:"none",outline:"none",borderRadius:"30px",padding:"5px 30px"}}>{status}</button> */}
    </div>
  );
};

const AllShipments = () => {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "#",
        field: "id",
        width: 100,
      },
      {
        label: "CODE",
        field: "code",
        width: 100,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Pick Up",
        field: "pickup",
        sort: "disabled",
        width: 100,
      },
      {
        label: "Drop off",
        field: "dropoff",
        sort: "disabled",
        width: 100,
      },
      {
        label: "Shipment TYPE",
        field: "shipmenttype",
        sort: "disabled",
        width: 100,
      },
      {
        label: "Truck TYPE",
        field: "trucktype",
        sort: "disabled",
        width: 100,
      },
      {
        label: "Shipping cost",
        field: "shippingcost",
        sort: "disabled",
        width: 100,
      },
      {
        label: "Pick up Date",
        field: "pickupDate",
        sort: "disabled",
        width: 100,
      },
      {
        label: "STATUS",
        field: "statu",
        sort: "disabled",
        width: 100,
      },
    ],
    rows: [
      {
        id: "1",
        code: "ELD00028",
        pickup: "Jeddah",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="NEW" />,
      },
      {
        id: "2",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="NEW" />,
      },
      {
        id: "4",
        code: "ELD00028",
        pickup: "Jeddah",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Assigned" />,
      },
      {
        id: "5",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Assigned" />,
      },
      {
        id: "6",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="On the Way " />,
      },
      {
        id: "7",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="On the Way " />,
      },
      {
        id: "8",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="NEW" />,
      },
      {
        id: "9",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="DISPATCH" />,
      },
      {
        id: "10",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "11",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "12",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="NEW" />,
      },
      {
        id: "13",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="NEW" />,
      },
      {
        id: "14",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "15",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "16",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "17",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "18",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "19",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "20",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "21",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "22",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "23",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "24",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "25",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "26",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "27",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "28",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "29",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "30",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "31",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "32",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "33",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "34",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "35",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "36",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "37",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "1",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "1",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "1",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "1",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "1",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "1",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "1",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "1",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "1",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "1",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "1",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "1",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "1",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "1",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "1",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "1",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "1",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "1",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "1",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "1",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
      {
        id: "1",
        code: "ELD00028",
        pickup: "Jeddah ",
        dropoff: "Mecca",
        shipmenttype: "Dry 40 high cube",
        trucktype: "Flatbed",
        shippingcost: "SAR17,756.000",
        pickupDate: "2022-09-14",
        statu: <RowButton status="Delivered" />,
      },
    ],
  });
  // const [checkbox1, setCheckbox1] = React.useState('');

  // const showLogs2 = (e) => {
  //   setCheckbox1(e);
  // };

  return (
    <div>
      <div className="container-fluid Allshipment">
        <div className="row">
          {/* filter */}
          <div className="col-md-3 filter-side py-5">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              {/* date-pick */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Pick up date
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    <input type="date" className="date-input py-2 px-2" />
                  </div>
                </div>
              </div>
              {/* city-location */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Location
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body">
                    <label className="my-3">Pick Up City</label>
                    <select
                      className="form-select select-city"
                      aria-label="Default select example"
                    >
                      {/* <option className='w-25' selected>Select City</option> */}
                      <option className="w-25" value="1">
                        Jeddah
                      </option>
                      <option className="w-25" value="2">
                        Mecca
                      </option>
                      <option className="w-25" value="3">
                        Mecca
                      </option>
                    </select>
                    <label className="my-3">Drop off City</label>
                    <select
                      className="form-select select-city"
                      aria-label="Default select example"
                    >
                      {/* <option className='w-25' selected>Select City</option> */}
                      <option className="w-25" value="1">
                        Jeddah
                      </option>
                      <option className="w-25" value="2">
                        Mecca
                      </option>
                      <option className="w-25" value="3">
                        Mecca
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              {/*Truck Type  */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingThree"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    Truck Type
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body">
                    {/* 1 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Container
                      </label>
                    </div>
                    {/* 2 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckChecked"
                      >
                        Dry Van / Enclosed Trailer
                      </label>
                    </div>
                    {/* 3 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Flatbed
                      </label>
                    </div>
                    {/* 4 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Lowboy Trailer
                      </label>
                    </div>
                    {/* 5 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Oil Tanker
                      </label>
                    </div>
                    {/* 6 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Reefer
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/*Commodity  */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingFour"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    Commodity
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFour"
                >
                  <div className="accordion-body">
                    {/* 1 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Beverages
                      </label>
                    </div>
                    {/* 2 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckChecked"
                      >
                        Cement
                      </label>
                    </div>
                    {/* 3 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Chemical
                      </label>
                    </div>
                    {/* 4 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        FMCG
                      </label>
                    </div>
                    {/* 5 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        General Goods
                      </label>
                    </div>
                    {/* 6 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Oil & Gas
                      </label>
                    </div>
                    {/* 7 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Pharmaceutical
                      </label>
                    </div>
                    {/* 8 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Textile
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/*Shipment Type  */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingFive"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFive"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFive"
                  >
                    Shipment Type
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFive"
                >
                  <div className="accordion-body">
                    {/* 1 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Frozen 1
                      </label>
                    </div>
                    {/* 2 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckChecked"
                      >
                        Frozen 2
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/*Unit of measurment  */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSix"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseSix"
                  >
                    Unit of measurment
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingSix"
                >
                  <div className="accordion-body">
                    {/* 1 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Pallets
                      </label>
                    </div>
                    {/* 2 */}
                    <div className="form-check">
                      <input
                        className="check-filter form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckChecked"
                      >
                        Pieces
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* btns */}
              <button type="button" className="btn-search btn btn-primary">
                Search
              </button>
              <br />
              <button type="button" className="btn-rest btn btn-primary">
                Rest
              </button>
            </div>
          </div>

          {/* table-data */}
          <div className="col-md-9 p-3 position-relative">
            <div className="export-side position-absolute d-flex justify-content-center align-items-center">
              {/* sort */}
              {/* <div className='sort mx-3'>
                                <div className="Sort-list dropdown">
                                <button className="Sort-list-btn btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.75 9.6875H4.25C3.7375 9.6875 3.3125 9.2625 3.3125 8.75C3.3125 8.2375 3.7375 7.8125 4.25 7.8125H26.75C27.2625 7.8125 27.6875 8.2375 27.6875 8.75C27.6875 9.2625 27.2625 9.6875 26.75 9.6875Z" fill="#292D32"/>
                                <path d="M23 15.9375H8C7.4875 15.9375 7.0625 15.5125 7.0625 15C7.0625 14.4875 7.4875 14.0625 8 14.0625H23C23.5125 14.0625 23.9375 14.4875 23.9375 15C23.9375 15.5125 23.5125 15.9375 23 15.9375Z" fill="#292D32"/>
                                <path d="M18 22.1875H13C12.4875 22.1875 12.0625 21.7625 12.0625 21.25C12.0625 20.7375 12.4875 20.3125 13 20.3125H18C18.5125 20.3125 18.9375 20.7375 18.9375 21.25C18.9375 21.7625 18.5125 22.1875 18 22.1875Z" fill="#292D32"/>
                                </svg>

                                        Sort by
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Name</a></li>
                                    <li><a className="dropdown-item" href="#">Code</a></li>
                                    <li><a className="dropdown-item" href="#">id</a></li>
                                </ul>
                                </div>
                                </div>  */}
              {/* print */}
              {/* <div className='print mx-3'>
                                <div className='sort mx-3'>
                                <div className="Sort-list dropdown">
                                <button className="Sort-list-btn btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-solid fa-print mx-2"></i>
                                        Print
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Name</a></li>
                                    <li><a className="dropdown-item" href="#">Code</a></li>
                                    <li><a className="dropdown-item" href="#">id</a></li>
                                </ul>
                                </div>
                                </div>
                                </div>  */}
            </div>
            {/* </div> */}
            {/* table */}

            <MDBDataTableV5
              hover
              entriesOptions={[5, 20, 25]}
              entries={10}
              pagesAmount={4}
              data={datatable}
              checkbox
              // multipleCheckboxes
              pagingTop
              searchTop
              searchBottom={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllShipments;
