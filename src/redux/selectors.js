export const selectCampers = (state) => state.campers.items;
export const selectCamperDetails = (state) => state.campers.details;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;
export const selectEquipment = (state) => state.filters.equipment;
export const selectVehicleType = (state) => state.filters.vehicleType;
export const selectLocation = (state) => state.filters.location;