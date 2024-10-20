export const buildQueryParams = (selectedEquipment, selectedVehicleType) => {
  const queryParams = new URLSearchParams();

  if (selectedVehicleType) {
    queryParams.append("form", selectedVehicleType.toLowerCase().replace(/ /g, ''));
  }

  if (Array.isArray(selectedEquipment) && selectedEquipment.length > 0) {
    selectedEquipment.forEach((filter) => {
      switch (filter) {
        case "AC":
          queryParams.append("AC", true);
          break;
        case "bathroom":
          queryParams.append("bathroom", true);
          break;
        case "kitchen":
          queryParams.append("kitchen", true);
          break;
        case "TV":
          queryParams.append("TV", true);
          break;
        case "radio":
          queryParams.append("radio", true);
          break;
        case "refrigerator":
          queryParams.append("refrigerator", true);
          break;
        case "microwave":
          queryParams.append("microwave", true);
          break;
        case "gas":
          queryParams.append("gas", true);
          break;
        case "water":
          queryParams.append("water", true);
          break;
        default:
          break;
      }
    });
  }

  return queryParams.toString();
};