import css from './LocationField.module.css'
import mapIcon from '../../assets/icons/map-icon.svg'

function LocationField({children}) {
  return (
    <div className={css.locationField}>
      <img src={mapIcon} alt="map icon" />
      <p>{children}</p>
    </div>
  )
}

export default LocationField