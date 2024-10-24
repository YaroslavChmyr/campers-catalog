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
    favorites: [],
    details: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    addToFavorites: (state, action) => {
      const vehicle = action.payload;
      if (!state.favorites.find(fav => fav.id === vehicle.id)) {
        state.favorites.push(vehicle);
      }
    },
    removeFromFavorites: (state, action) => {
      const vehicleId = action.payload;
      state.favorites = state.favorites.filter(fav => fav.id !== vehicleId);
    }
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

export const { addToFavorites, removeFromFavorites } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;