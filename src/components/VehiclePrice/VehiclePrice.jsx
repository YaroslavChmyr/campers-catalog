import css from "./VehiclePrice.module.css"

function VehiclePrice({ price }) {
  return (
    <p className={css.vehiclePrice}>€{price.toFixed(2)}</p>
  )
}

export default VehiclePrice