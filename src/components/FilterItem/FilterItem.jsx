import css from "./FilterItem.module.css"
// import acFilter from "../../assets/icons/ac-filter-icon.svg"

function FilterItem( {icon, label, iconAltTag} ) {
  return (
    <>
    <li className={css.filterItem}>
      <img src={icon} alt={iconAltTag} className={css.filterItemIcon}/>
      <p className={css.filterItemLabel}>{label}</p>
    </li>
    </>
  )
}

export default FilterItem