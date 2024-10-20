import VehicleAttribute from "../VehicleAttribute/VehicleAttribute";
import acIcon from "../../assets/icons/ac-filter-icon.svg";
import automaticIcon from "../../assets/icons/automatic-filter-icon.svg";
import bathroomIcon from "../../assets/icons/bathroom-filter-icon.svg";
import gasIcon from "../../assets/icons/gas-filter-icon.svg";
import kitchenIcon from "../../assets/icons/kitchen-filter-icon.svg";
import microwaveIcon from "../../assets/icons/microwave-filter-icon.svg";
import petrolIcon from "../../assets/icons/petrol-filter-icon.svg";
import radioIcon from "../../assets/icons/radio-filter-icon.svg";
import refrigeratorIcon from "../../assets/icons/refrigerator-filter-icon.svg";
import tvIcon from "../../assets/icons/tv-filter-icon.svg";
import waterIcon from "../../assets/icons/water-filter-icon.svg";
import css from "./VehicleAttributeList.module.css";

function VehicleAttributeList({ vehicle }) {
  const { transmission, engine, ...attributes } = vehicle;

  const nonBooleanAttributes = {
    transmission: transmission,
    engine: engine,
  };

  const iconMap = {
    AC: { icon: acIcon, title: "Air Conditioning" },
    transmission: {
      automatic: { icon: automaticIcon, title: "Automatic" },
      manual: { icon: gasIcon, title: "Manual" },
    },
    engine: {
      petrol: { icon: petrolIcon, title: "Petrol" },
      diesel: { icon: gasIcon, title: "Diesel" },
    },
    bathroom: { icon: bathroomIcon, title: "Bathroom" },
    kitchen: { icon: kitchenIcon, title: "Kitchen" },
    TV: { icon: tvIcon, title: "TV" },
    radio: { icon: radioIcon, title: "Radio" },
    refrigerator: { icon: refrigeratorIcon, title: "Refrigerator" },
    gas: { icon: gasIcon, title: "Gas" },
    microwave: { icon: microwaveIcon, title: "Microwave" },
    water: { icon: waterIcon, title: "Water" },
  };

  const renderedBooleanAttributes = Object.keys(attributes)
    .filter((key) => typeof attributes[key] === "boolean" && attributes[key])
    .map((key) => iconMap[key]);

  const renderedNonBooleanAttributes = Object.keys(nonBooleanAttributes)
    .filter((key) => nonBooleanAttributes[key])
    .map((key) => {
      const attribute = iconMap[key]?.[nonBooleanAttributes[key]];
      return attribute ? attribute : null;
    })
    .filter((attribute) => attribute !== null);

  return (
    <ul className={css.vehicleAttributes}>
      {renderedBooleanAttributes.map(({ icon, title }, index) => (
        <li key={index}>
          <VehicleAttribute icon={icon} label={title} iconAltTag={title} />
        </li>
      ))}
      {renderedNonBooleanAttributes.map(({ icon, title }, index) => (
        <li key={index}>
          <VehicleAttribute icon={icon} label={title} iconAltTag={title} />
        </li>
      ))}
    </ul>
  );
}

export default VehicleAttributeList;
