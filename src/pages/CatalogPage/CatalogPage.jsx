import LocationField from "../../components/LocationField/LocationField";
import FilterList from "../../components/FilterList/FilterList";
import MainButton from "../../components/MainButton/MainButton";
import css from "./CatalogPage.module.css";

function CatalogPage() {
  return (
    <div className={css.container}>
      <div className={css.filtersContainer}>
        <div className={css.locationField}>
          <p className={css.locationLabel}>Location</p>
          <LocationField>Kyiv, Ukraine</LocationField>
        </div>
        <div className={css.vehicleFilters}>
          <p className={css.vehicleFiltersLabel}>Filters</p>
          <FilterList title="Vehicle equipment" />
          <FilterList title="Vehicle type" />
        </div>
        <MainButton>Search</MainButton>
      </div>
      <div className={css.catalogContainer}></div>
    </div>
  );
}

export default CatalogPage;
