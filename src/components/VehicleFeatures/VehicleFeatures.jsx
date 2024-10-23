import css from "./VehicleFeatures.module.css";
import { useContext } from "react";
import { CamperDetailsContext } from "../../pages/CamperDetailsPage/CamperDetailsPage";
import VehicleAttributeList from "../VehicleAttributeList/VehicleAttributeList";

function VehicleFeatures() {
  const details = useContext(CamperDetailsContext);
  const vehicleFormFormatter = (form) => {
    switch (form) {
      case "fullyIntegrated":
        return "Fully Integrated";
      case "alcove":
        return "Alcove";
      default:
        return form;
  }
  }

  return (
    <div className={css.container}>
      <div className={css.attributeContainer}>
        <VehicleAttributeList vehicle={details} />
      </div>
      <h2 className={css.title}>Vehicle details</h2>
      <hr className={css.underline}/>
      <ul className={css.vehicleFeatures}>
        <li className={css.vehicleFeature}>
          <p className={css.featureTitle}>Form</p>
          <p className={css.featureValue}>{vehicleFormFormatter(details.form)}</p>
        </li>
        <li className={css.vehicleFeature}>
          <p className={css.featureTitle}>Length</p>
          <p className={css.featureValue}>{details.length}</p>
        </li>
        <li className={css.vehicleFeature}>
          <p className={css.featureTitle}>Width</p>
          <p className={css.featureValue}>{details.width}</p>
        </li>
        <li className={css.vehicleFeature}>
          <p className={css.featureTitle}>Height</p>
          <p className={css.featureValue}>{details.height}</p>
        </li>
        <li className={css.vehicleFeature}>
          <p className={css.featureTitle}>Tank</p>
          <p className={css.featureValue}>{details.tank}</p>
        </li>
        <li className={css.vehicleFeature}>
          <p className={css.featureTitle}>Consumption</p>
          <p className={css.featureValue}>{details.consumption}</p>
        </li>
      </ul>
    </div>
  );
}

export default VehicleFeatures;
