import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api().fetchTeamData
export const EditItemFunction = createAsyncThunk(
  "items/EditItemFunction",
  async ({ token, id, formdata }) => {
    // console.log(token, "from reducer");
    // console.log(id, "id from reducer");
    // console.log(formdata, "urlencoded from reducer");
    try {
      const response = await axios.post(
        `https://dev.eload.smart.sa/api/v1/contract_items/${id}`,
        // `https://dev.eload.smart.sa/api/v1/contracts/${id}`,
        formdata,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "api-key":
              "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
          },
        }
      );
      const data = await response.data.data;
      // console.log(data, "datafromreeeitemeditttt");
      return data;
    } catch (e) {
      // console.log(e);
    }
  }
);
