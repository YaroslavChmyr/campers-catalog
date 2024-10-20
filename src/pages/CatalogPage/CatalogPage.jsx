import LocationField from "../../components/LocationField/LocationField";
import FilterList from "../../components/FilterList/FilterList";
import MainButton from "../../components/MainButton/MainButton";
import VehicleCard from "../../components/VehicleCard/VehicleCard";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectIsLoading,
  selectError,
} from "../../redux/selectors";
import { useEffect } from "react";
import { fetchCampers } from "../../api/campersOps";
import css from "./CatalogPage.module.css";

function CatalogPage() {
  const dispatch = useDispatch();

  const { isLoading, error, campers } = useSelector((state) => ({
    isLoading: selectIsLoading(state),
    error: selectError(state),
    campers: selectCampers(state),
  }));

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

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
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong: {error.message}</p>}
      {!isLoading && !error && campers?.items?.length > 0 && (
        <ul className={css.catalogContainer}>
          {campers.items.map((camper) => (
            <li key={camper.id} className={css.vehicleCard}>
              <VehicleCard
                vehicle = {camper}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CatalogPage;
