import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { buildQueryParams } from "../utils/utils";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";


export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (filters = {}, thunkAPI) => {
    try {
      const { equipment, vehicleType } = filters;

      // Build the query parameters using the new function
      const queryString = buildQueryParams(equipment, vehicleType);

      // Make the API request with constructed query parameters
      const response = await axios.get(`/campers?${queryString}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);