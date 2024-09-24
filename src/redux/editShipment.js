import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api().fetchTeamData
export const editShipment = createAsyncThunk(
  "shipment/editShipment",
  async ({ token, id, urlencoded }) => {
    // console.log(token, "from reducer");
    // console.log(id, "id from reducer");
    // console.log(urlencoded, "urlencoded from reducer");
    try {
      const response = await axios.put(
        `https://dev.eload.smart.sa/api/v1/shipment_types/${id}`,
        urlencoded,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "api-key":
              "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
          },
        }
      );
      const data = await response.data;
      // console.log(response, "response");
      return data;
    } catch (e) {
      // console.log(e);
    }
  }
);
// useSelector

// export const categoryEditReducer = createSlice({
//   name: "categories",
//   initialState: {
//     list: [],
//     // tableContainer: [],
//     status: true,
//   },

//   // reducers: {
//   //   filterdTable: (state, action) => {
//   //     state.table = state.tableContainer.filter((item, _) => {
//   //       item.id === action.payload;
//   //     });
//   //   },
//   // },

//   extraReducers: {
//     [editCategory.pending]: (state, action) => {
//       // state.status = true;
//     },
//     [editCategory.fulfilled]: (state, action) => {
//       state.status = false;
//       // state.table = action.payload.data.products;
//       state.table = action.payload;
//       // console.log(action, "action");
//       // state.tableContainer = action.payload.list;
//       // state.table = action.data.list.length > 0 ? action.data.list : [];
//     },
//     [editCategory.rejected]: (state, action) => {
//       state.status = true;
//       state.status = "failed";
//     },
//   },
// });
// export const { filterdTable } = categoryGetReducer.actions;
// export default categoryEditReducer.reducer;
