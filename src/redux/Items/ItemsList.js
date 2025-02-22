import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import api from "config/api";
// import header from "config/header";

// api().fetchTeamData
export const fetchitemsList = createAsyncThunk(
  "items/fetchitemsList",
  async (token, id) => {
    // // console.log(token, "from reducer");
    try {
      const response = await axios.get(
        // "https://dev.eload.smart.sa/api/v1/contract_items",
        `https://dev.eload.smart.sa/api/v1/contracts/${id}`,
        {
          // headers: header(token).headerForJson,
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token.token}`,
            "api-key":
              "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
          },
        }
      );
      const data = await response.data.items;
      // console.log(data, "datafromreeeitemlist");
      return data;
    } catch (e) {
      // console.log(e);
    }
  }
);
// useSelector

export const ItemsGetReducer = createSlice({
  name: "items",
  initialState: {
    list: [],
    // tableContainer: [],
    status: true,
  },

  // reducers: {
  //   filterdTable: (state, action) => {
  //     state.table = state.tableContainer.filter((item, _) => {
  //       item.id === action.payload;
  //     });
  //   },
  // },

  extraReducers: {
    [fetchitemsList.pending]: (state, action) => {
      // state.status = true;
    },
    [fetchitemsList.fulfilled]: (state, action) => {
      state.status = false;
      // state.table = action.payload.data.products;
      state.list = action?.payload?.data;
      // // console.log(action, "action");
      // state.tableContainer = action.payload.list;
      // state.table = action.data.list.length > 0 ? action.data.list : [];
    },
    [fetchitemsList.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});
// export const { filterdTable } = categoryGetReducer.actions;
export default ItemsGetReducer.reducer;
