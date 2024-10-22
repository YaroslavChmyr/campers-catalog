import css from "./VehiclePrice.module.css"

function VehiclePrice({ price }) {
  return (
    <p className={css.vehiclePrice}>${price}</p>
  )
}

export default VehiclePrice