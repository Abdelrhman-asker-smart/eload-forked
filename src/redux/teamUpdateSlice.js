import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "config/api";
import header from "config/header";

export const updateTeam = createAsyncThunk("team/updateTeam", async ({ form, token }) => {
  try {
    const response = await axios.post(api().updateTeam, form, {
      headers: header(token).headerToUpdateForm,
    });
    const data = response.data;
    return data;
  } catch (e) {
    // console.log(e);
    return e;
  }
});

export const teamUpdateReducer = createSlice({
  name: "updateTeam",
  initialState: {
    table: [],
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [updateTeam.pending]: (state, action) => {
      // state.status = true;
    },
    [updateTeam.fulfilled]: (state, action) => {
      state.status = false;
      // state.table = action.payload.data.products;
      state.table = action.payload;
      // console.log(action.payload, "action.payload");
      // state.table = action.data.list.length > 0 ? action.data.list : [];
    },
    [updateTeam.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});
export default teamUpdateReducer.reducer;
