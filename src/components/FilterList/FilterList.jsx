import css from "./FilterList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleEquipment, setVehicleType } from "../../redux/filtersSlice";
import { selectEquipment, selectVehicleType } from "../../redux/selectors";
import FilterItem from "../FilterItem/FilterItem";
import {
  acIcon,
  automaticIcon,
  kitchenIcon,
  tvIcon,
  bathroomIcon,
  vanIcon,
  fullyIntegratedIcon,
  alcoveIcon,
} from "../../assets/icons/icons";

function FilterList({ title }) {
  const dispatch = useDispatch();
  const equipment = useSelector(selectEquipment);
  const vehicleType = useSelector(selectVehicleType);

  const handleEquipmentClick = (label) => {
    dispatch(toggleEquipment(label));
  };

  const handleVehicleTypeClick = (label) => {
    dispatch(setVehicleType(label));
  };

  const equipmentMap = [
    { icon: acIcon, label: "AC" },
    { icon: automaticIcon, label: "Automatic" },
    { icon: kitchenIcon, label: "Kitchen" },
    { icon: tvIcon, label: "TV" },
    { icon: bathroomIcon, label: "Bathroom" },
  ];

  const vehicleTypeMap = [
    { icon: vanIcon, label: "Van" },
    { icon: fullyIntegratedIcon, label: "Fully Integrated" },
    { icon: alcoveIcon, label: "Alcove" },
  ];

  return (
    <div className={css.vehicleFilters}>
      <h2 className={css.vehicleFiltersTitle}>{title}</h2>
      {title === "Vehicle equipment" && (
        <ul className={css.vehicheFiltersList}>
          {equipmentMap.map((item) => (
            <FilterItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              iconAltTag={item.label}
              isActive={equipment.includes(item.label)}
              onClick={() => handleEquipmentClick(item.label)}
            />
          ))}
        </ul>
      )}
      {title === "Vehicle type" && (
        <ul className={css.vehicheFiltersList}>
          {vehicleTypeMap.map((item) => (
            <FilterItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              iconAltTag={item.label}
              isActive={vehicleType === item.label}
              onClick={() => handleVehicleTypeClick(item.label)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default FilterList;
