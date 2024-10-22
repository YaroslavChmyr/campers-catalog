import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperDetails } from "../api/campersOps";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    details: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.items;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCamperDetails.pending, handlePending)
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.details = action.payload;
      })
      .addCase(fetchCamperDetails.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;