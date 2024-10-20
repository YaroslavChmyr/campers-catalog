import css from "./VehicleAttribute.module.css"

function VehicleAttribute({icon, label, iconAltTag}) {
  return (
    <li className={css.vehicleAttribute}>
      <img src={icon} alt={iconAltTag} className={css.vehicleAttributeIcon}/>
      <p className={css.label}>{label}</p>
    </li>
  )
}

export default VehicleAttribute