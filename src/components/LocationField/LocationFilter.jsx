import css from "./LocationFilter.module.css";
import mapIcon from "../../assets/icons/map-icon.svg";
import { setLocation } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectLocation } from "../../redux/selectors";

function LocationFilter() {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);

  const handleLocationChange = (event) => {
    dispatch(setLocation(event.target.value));
  }

  return (
    <div className={css.locationField}>
      <img src={mapIcon} alt="map icon" />
      <input
        value={location}
        onChange={handleLocationChange}
        type="text"
        placeholder="Enter location"
        className={css.locationInput}
      />
    </div>
  );
}

export default LocationFilter;
