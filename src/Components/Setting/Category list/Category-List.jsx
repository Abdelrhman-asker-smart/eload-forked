import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { ReactComponent as EditIcon } from "../../../icons/editicon.svg";
import { ReactComponent as DeleteIcon } from "../../../icons/deleteicon.svg";

import "./Category-List.css";
// import { data } from "jquery";

const CategoryList = () => {
  const [categoryList, setCategoryList] = useState([]);

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
              Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOWY4YTc3NDNhNmY4MzAwMTA3YWE0NTVhZmZiYjkzM2QzMzM1YWNlZmJjNmQ0ZThlNjcwYTI4Mjg2ZjM4YjIxYjdlYzI0YjAzYmYwNWJjZTkiLCJpYXQiOjE2NzIyMjIxMTguMTE2MDc2OTQ2MjU4NTQ0OTIxODc1LCJuYmYiOjE2NzIyMjIxMTguMTE2MDgwMDQ1NzAwMDczMjQyMTg3NSwiZXhwIjoxNzAzNzU4MTE4LjExMjM1OTA0NjkzNjAzNTE1NjI1LCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.rnz0wHsys2ONo2zlyfQQ4ZopqVii0DcZ1U9wluIiKnGIBm-Ahc0YY9Aj28XXCIj3jOcC60nUChuQD7lH-4Vl96Ug-Y4zMjG5QWVGkUrfKobSEgrVwj-yMxEK0Hgwknf91pdWWIVSf0xethAqPjxwXTUGjRdjQ76p70Vs798iKwsn-rnuVjLx8SZhwWyFq-zSTFz_372k7aH9mlWdqcYCMjIv7V4HM41beMTSrbtM1_YhQetsBdMsRx4JilH--aIBkQOANhn-2dlQ_TD28JsOQjMgLbEq6EmUU6JomiO_AOIQRNi2jkoimcYlvKBh8ZSXsXju_6NbxxViwIIGYJQGmxtiNfXPx-ZVvPMuiiH7Dz3nRMBy8j_y62aTz1Vglq7mvTYBCp01_huqUb3guPHlNPaWvZJkvqktMcobrvQcSnbLx4d1ZTMrUK2OdXZHB0RoBhhawIdkeJLmu9OafMrFeQAhh0ukux041QEev_jFgrZz1-7qdjQ5W9QB8uMNUFbd_1C3zvnTRfFqjeLoYvU1aBhMZKNYiITIn7VB4oOKfJbsXUEPj83gOEr0hucnzH8AV7FhO3PuQExY4t1zxzdo5mj0DWlM1c30wyYF_2LrBCuv0F6rzaWfLMZMQBz_8havQwmerfTwLgnJJlUe7DoGQn_M_a9U6bQHuoSmOBDDVTI`,
              "api-key":
                "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
            },
          }
        );

        const data = response.data.data;
        console.log(data);
        setCategoryList(data);
        return data;
      } catch (e) {
        console.log(e);
      }
    };

    allCategory();
  }, []);

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
        <div className="category-table">
          <table class="table">
            <thead>
              <tr className="head-tr">
                <th scope="col" className="taple-head">
                  #
                </th>
                <th scope="col" className="taple-head">
                  Name
                </th>
                <th scope="col" className="taple-head"></th>
                <th scope="col" className="taple-head"></th>
                <th scope="col" className="taple-head">
                  Edit / remove
                </th>
              </tr>
            </thead>
            <tbody>
              {categoryList.map((category, index) => {
                return (
                  <tr className="body-tr" key={index}>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    <td></td>
                    <td></td>
                    <td>
                      <NavLink to="/catogry-edit">
                        <button className="btn-table active">
                          <EditIcon className="mx-1" />
                          EDIT
                        </button>
                      </NavLink>
                      <button className="btn-table">
                        <DeleteIcon className="mx-1" />
                        REMOVE
                      </button>
                    </td>
                  </tr>
                );
              })}

              {/* <tr className='body-tr'>
              <td>2</td>
                <td>Freelance Driver</td>
                <td></td>
                <td></td>
                <td>
                  <NavLink to="/catogry-add">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr> */}
              {/* <tr className='body-tr'>
              <td>3</td>
                <td>Freelance Driver</td>
                <td></td>
                <td></td>
                <td>
                  <NavLink to="/catogry-add">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr> */}
              {/* <tr className='body-tr'>
              <td>4</td>
                <td>Freelance Driver</td>
                <td></td>
                <td></td>
                <td>
                  <NavLink to="/catogry-add">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr> */}
              {/* <tr className='body-tr'>
              <td>5</td>
                <td>Freelance Driver</td>
                <td></td>
                <td></td>
                <td>
                  <NavLink to="/catogry-add">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr> */}
              {/* <tr className='body-tr'>
              <td>6</td>
                <td>Freelance Driver</td>
                <td></td>
                <td></td>
                <td>
                  <NavLink to="/catogry-add">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr> */}
              {/* <tr className='body-tr'>
              <td>7</td>
                <td>Freelance Driver</td>
                <td></td>
                <td></td>
                <td>
                  <NavLink to="/catogry-add">
                  <button className='btn-table active'>
                    <EditIcon className='mx-1'/>
                    EDIT</button>
                    </NavLink>
                  <button className='btn-table'>
                  <DeleteIcon className='mx-1' />
                    REMOVE</button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
