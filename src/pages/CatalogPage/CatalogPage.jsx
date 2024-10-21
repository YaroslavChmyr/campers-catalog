import LocationFilter from "../../components/LocationField/LocationFilter";
import FilterList from "../../components/FilterList/FilterList";
import MainButton from "../../components/MainButton/MainButton";
import VehicleCard from "../../components/VehicleCard/VehicleCard";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectIsLoading,
  selectError,
  selectEquipment,
  selectVehicleType,
  selectLocation,
} from "../../redux/selectors";
import { useEffect, useState } from "react";
import { fetchCampers } from "../../api/campersOps";
import css from "./CatalogPage.module.css";

function CatalogPage() {
  const dispatch = useDispatch();
  const { isLoading, error, equipment, vehicleType, location } = useSelector(
    (state) => ({
      isLoading: selectIsLoading(state),
      error: selectError(state),
      equipment: selectEquipment(state),
      vehicleType: selectVehicleType(state),
      location: selectLocation(state),
    })
  );

  const allVehicles = useSelector(selectCampers);

  const [visibleVehicles, setVisibleVehicles] = useState(4);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleSearch = () => {
    const filters = {
      equipment,
      vehicleType,
      location,
    };
    dispatch(fetchCampers(filters));
    setVisibleVehicles(4);
  };

  const loadMore = () => {
    setVisibleVehicles((prevVisible) => prevVisible + 4);
  };

  return (
    <div className={css.container}>
      <div className={css.filtersContainer}>
        <div className={css.locationField}>
          <p className={css.locationLabel}>Location</p>
          <LocationFilter>Kyiv, Ukraine</LocationFilter>
        </div>
        <div className={css.vehicleFilters}>
          <p className={css.vehicleFiltersLabel}>Filters</p>
          <FilterList title="Vehicle equipment" />
          <FilterList title="Vehicle type" />
        </div>
        <MainButton onClick={handleSearch}>Search</MainButton>
      </div>

      {isLoading && <p>Loading...</p>}
      {error?.includes("404") ? (
        <p>There are no campers in this location, please try again</p>
      ) : (
        error && <p>Something went wrong: {error}</p>
      )}

      {!isLoading && !error && (
        <div className={css.catalogContainer}>
          <ul className={css.catalog}>
            {allVehicles.slice(0, visibleVehicles).map((camper) => (
              <li key={camper.id} className={css.vehicleCard}>
                <VehicleCard vehicle={camper} />
              </li>
            ))}
          </ul>

          {visibleVehicles < allVehicles.length && (
            <div className={css.loadMoreContainer}>
              <LoadMoreButton onClick={loadMore} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CatalogPage;
