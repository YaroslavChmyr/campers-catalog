import css from "./FilterList.module.css";
import FilterItem from "../FilterItem/FilterItem";
import acFilter from "../../assets/icons/ac-filter-icon.svg";
import alcoveFilter from "../../assets/icons/alcove-filter-icon.svg";

function FilterList({ title }) {
  return (
    <div className={css.vehicleFilters}>
      <h2 className={css.vehicleFiltersTitle}>{title}</h2>
      {/* <hr className={css.divider}/> */}
      <ul className={css.vehicheFiltersList}>
          <FilterItem icon={alcoveFilter} label="Alcove" iconAltTag="alcove"/>
          <FilterItem icon={acFilter} label="AC" iconAltTag="ac"/>
          <FilterItem icon={acFilter} label="AC" iconAltTag="ac"/>
          <FilterItem icon={acFilter} label="AC" iconAltTag="ac"/>
      </ul>
    </div>
  );
}

export default FilterList;
