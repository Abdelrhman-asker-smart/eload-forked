import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api().fetchTeamData
export const EditgroupFunction = createAsyncThunk(
  "driver/EditDriverFunction",
  async ({ token, id, urlencoded }) => {
    // console.log(token, "from reducer");
    // console.log(id, "id from reducer");
    // console.log(urlencoded, "urlencoded from reducer");
    try {
      const response = await axios.post(
        `https://dev.eload.smart.sa/api/v1/groups/${id}`,
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
