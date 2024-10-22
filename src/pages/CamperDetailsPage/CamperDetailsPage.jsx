import { useDispatch, useSelector } from "react-redux";
import {
  selectCamperDetails,
  selectIsLoading,
  selectError,
} from "../../redux/selectors";
import { fetchCamperDetails } from "../../api/campersOps";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { NavLink, Outlet} from "react-router-dom";
import RatingLocationDetails from "../../components/RatingLocationDetails/RatingLocationDetails";
import VehiclePrice from "../../components/VehiclePrice/VehiclePrice";
import { clsx } from "clsx";
import css from "./CamperDetailsPage.module.css";

const isActiveLink = ({ isActive }) => clsx(css.link, {
  [css.active]: isActive
})

function CamperDetailsPage() {
  const dispatch = useDispatch();
  const details = useSelector(selectCamperDetails);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCamperDetails(id));
  }, [dispatch, id]);
  return (
    <div className={css.container}>
      {error && <div className={css.error}>{error}</div>}
      {isLoading && <div className={css.loading}>Loading...</div>}
      {!isLoading && !error && details && (
        <>
          <div className={css.titleContainer}>
            <h2 className={css.vehicleTitle}>{details.name}</h2>
            <RatingLocationDetails
              rating={details.rating}
              location={details.location}
              reviews={details.reviews}
            />
            <VehiclePrice price={details.price} />
          </div>
          <ul className={css.vehiclePhotos}>
            {details.gallery.map((photo, index) => (
              <li key={index} className={css.vehiclePhotoItem}>
                <img
                  src={photo.thumb}
                  alt="vehicle image"
                  className={css.vehicleImage}
                />
              </li>
            ))}
          </ul>
          <p className={css.description}>{details.description}</p>
          <ul className={css.links}>
            <NavLink to="features" className={isActiveLink}>
              Reviews
            </NavLink>
            <NavLink to="reviews" className={isActiveLink}>Features</NavLink>
          </ul>
          <div className={css.bottomSection}>
          <Outlet />
          <h1>Form</h1>
          </div>
        </>
      )}
    </div>
  );
}

export default CamperDetailsPage;
