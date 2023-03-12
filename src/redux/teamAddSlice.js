import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "config/api";
import header from "config/header";

export const addTeam = createAsyncThunk(
  "team/addTeam",
  async ({ form, token }) => {
    try {
      const response = await axios.post(api().addTeamMember, form, {
        headers: header(token).headerForForm,
      });
      const data = response;
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const teamAddReducer = createSlice({
  name: "teamAdd",
  initialState: {
    data: {},
    status: true,
  },
  extraReducers: {
    [addTeam.pending]: (state, action) => {},
    [addTeam.fulfilled]: (state, action) => {
      state.status = false;
      // state.data = action.payload;
    },
    [addTeam.rejected]: (state, action) => {
      state.status = true;
    },
  },
});

export default teamAddReducer.reducer;
