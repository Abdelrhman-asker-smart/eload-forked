import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as EditIcon } from "../../../icons/editicon.svg";
import { ReactComponent as DeleteIcon } from "../../../icons/deleteicon.svg";

const ButtonEdit = () => (
  <div className="w-100">
    <NavLink to="/addshipment">
      <button className="btn-table active">
        <EditIcon className="mx-1" />
        EDIT
      </button>
    </NavLink>

    <button className="btn-table">
      <DeleteIcon className="mx-1" />
      REMOVE
    </button>
  </div>
);

export const columns = [
  {
    name: "ID",
    selector: "id",
    sortable: false,
  },
  {
    name: "Title",
    selector: "name",
    sortable: true,
  },

  {
    name: "Edit / remove",
    selector: "edit",
    sortable: false,
  },
];

export const data = [
  {
    id: 1,
    name: "kareem",
    edit: <ButtonEdit />
  },
  {
    id: 2,
    name: "eman",
    edit: <ButtonEdit />
  },
  {
    id: 3,
    name: "ahmed",
    edit: <ButtonEdit />
  },
  {
    id: 5,
    name: "ali",
    edit: <ButtonEdit />
  },

  {
    id: 6,
    name: "freelancer",
    edit: <ButtonEdit />
  },
];
