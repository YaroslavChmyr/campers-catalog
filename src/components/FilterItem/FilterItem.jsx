import css from "./FilterItem.module.css";
import clsx from "clsx";

function FilterItem({ icon, label, iconAltTag, isActive, onClick }) {
  return (
    <>
      <li
        className={clsx(css.filterItem, { [css.selected]: isActive })}
        onClick={onClick}
      >
        <img src={icon} alt={iconAltTag} className={css.filterItemIcon} />
        <p className={css.filterItemLabel}>{label}</p>
      </li>
    </>
  );
}

export default FilterItem;
