export const selectCampers = (state) => state.campers.items;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;
export const selectEquipment = (state) => state.filters.equipment;
export const selectVehicleType = (state) => state.filters.vehicleType;