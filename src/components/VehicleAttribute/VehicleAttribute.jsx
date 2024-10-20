import css from "./VehicleAttribute.module.css"

function VehicleAttribute({icon, label, iconAltTag}) {
  return (
    <div className={css.vehicleAttribute}>
      <img src={icon} alt={iconAltTag} className={css.vehicleAttributeIcon}/>
      <p className={css.label}>{label}</p>
    </div>
  )
}

export default VehicleAttribute