import VehicleAttribute from "../VehicleAttribute/VehicleAttribute";
import {
  acIcon,
  automaticIcon,
  bathroomIcon,
  gasIcon,
  kitchenIcon,
  microwaveIcon,
  petrolIcon,
  radioIcon,
  refrigeratorIcon,
  tvIcon,
  waterIcon,
} from "../../assets/icons/icons";
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
      manual: { icon: automaticIcon, title: "Manual" },
    },
    engine: {
      petrol: { icon: petrolIcon, title: "Petrol" },
      diesel: { icon: petrolIcon, title: "Diesel" },
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
