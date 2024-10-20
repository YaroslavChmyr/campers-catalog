import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    equipment: [],
    vehicleType: "",
  },
  reducers: {
    toggleEquipment: (state, action) => {
      const equipment = action.payload;
      if (state.equipment.includes(equipment)) {
        state.equipment = state.equipment.filter((item) => item !== equipment);
      } else {
        state.equipment.push(equipment);
      }
    },
    setVehicleType: (state, action) => {
      state.vehicleType = action.payload;
    },
  },
});

export const { toggleEquipment, setVehicleType } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;