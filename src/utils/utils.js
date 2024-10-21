export const buildQueryParams = (selectedEquipment, selectedVehicleType, selectedLocation) => {
  const queryParams = new URLSearchParams();

  if (selectedVehicleType) {
    queryParams.append("form", selectedVehicleType.toLowerCase().replace(/ /g, ''));
  }

  if (selectedLocation) {
    queryParams.append("location", selectedLocation);
  }

  if (Array.isArray(selectedEquipment) && selectedEquipment.length > 0) {
    selectedEquipment.forEach((filter) => {
      switch (filter) {
        case "AC":
          queryParams.append("AC", true);
          break;
        case "Bathroom":
          queryParams.append("bathroom", true);
          break;
        case "Kitchen":
          queryParams.append("kitchen", true);
          break;
        case "TV":
          queryParams.append("TV", true);
          break;
        case "Radio":
          queryParams.append("radio", true);
          break;
        case "Refrigerator":
          queryParams.append("refrigerator", true);
          break;
        case "Microwave":
          queryParams.append("microwave", true);
          break;
        case "Gas":
          queryParams.append("gas", true);
          break;
        case "Water":
          queryParams.append("water", true);
          break;
        default:
          break;
      }
    });
  }

  return queryParams.toString();
};