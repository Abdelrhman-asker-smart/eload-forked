import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import api from "config/api";
// import header from "config/header";

// api().fetchTeamData
export const fetchCommoditList = createAsyncThunk(
  "category/fetchCommoditList",
  async (token) => {
    console.log(token, "from reducer");
    try {
      const response = await axios.get(
        "https://dev.eload.smart.sa/api/v1/commodities",
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
      const data = await response.data;
      // console.log(data, "data");
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);
// useSelector

export const commoditGetReducer = createSlice({
  name: "commodit",
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
    [fetchCommoditList.pending]: (state, action) => {
      // state.status = true;
    },
    [fetchCommoditList.fulfilled]: (state, action) => {
      state.status = false;
      // state.table = action.payload.data.products;
      state.list = action?.payload?.data;
      // console.log(action, "action");
      // state.tableContainer = action.payload.list;
      // state.table = action.data.list.length > 0 ? action.data.list : [];
    },
    [fetchCommoditList.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});
// export const { filterdTable } = categoryGetReducer.actions;
export default commoditGetReducer.reducer;
