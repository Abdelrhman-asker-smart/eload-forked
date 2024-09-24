import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import api from "config/api";
// import header from "config/header";

// api().fetchTeamData
export const fetchPartnerList = createAsyncThunk(
  "partner/fetchPartnerList",
  async (token) => {
    // // console.log(token, "from reducer");
    try {
      const response = await axios.get(
        "https://dev.eload.smart.sa/api/v1/providers?type=partner",
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
      // console.log(e);
    }
  }
);
// useSelector

export const partnerGetReducer = createSlice({
  name: "partner",
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
    [fetchPartnerList.pending]: (state, action) => {
      // state.status = true;
    },
    [fetchPartnerList.fulfilled]: (state, action) => {
      state.status = false;
      // state.table = action.payload.data.products;
      state.list = action?.payload?.data;
      // // console.log(action, "action");
      // state.tableContainer = action.payload.list;
      // state.table = action.data.list.length > 0 ? action.data.list : [];
    },
    [fetchPartnerList.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});
// export const { filterdTable } = categoryGetReducer.actions;
export default partnerGetReducer.reducer;
