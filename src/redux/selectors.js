import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.campers.items;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;
export const selectEquipment = (state) => state.filters.equipment;
export const selectVehicleType = (state) => state.filters.vehicleType;

export const selectFilteredVehicles = createSelector(
  [selectCampers, selectEquipment, selectVehicleType],
  (vehicles, selectedEquipment, selectedVehicleType) => {
    return vehicles.filter((vehicle) => {
      // Check vehicle type
      const isTypeMatch = selectedVehicleType ? vehicle.form === selectedVehicleType.toLowerCase() : true;

      // Check equipment
      const isEquipmentMatch = selectedEquipment.every((filter) => {
        // Map the selected equipment filter to the corresponding vehicle property
        switch (filter) {
          case "AC":
            return vehicle.AC;
          case "bathroom":
            return vehicle.bathroom;
          case "kitchen":
            return vehicle.kitchen;
          case "TV":
            return vehicle.TV;
          case "radio":
            return vehicle.radio;
          case "refrigerator":
            return vehicle.refrigerator;
          case "microwave":
            return vehicle.microwave;
          case "gas":
            return vehicle.gas;
          case "water":
            return vehicle.water;
          default:
            return true;
        }
      });

      return isTypeMatch && isEquipmentMatch;
    });
  }
);