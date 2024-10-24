import css from "./VehicleCard.module.css";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { addToFavorites, removeFromFavorites } from "../../redux/campersSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/selectors";
import VehicleAttributeList from "../VehicleAttributeList/VehicleAttributeList";
import RatingLocationDetails from "../RatingLocationDetails/RatingLocationDetails";
import VehiclePrice from "../VehiclePrice/VehiclePrice";
import MainButton from "../MainButton/MainButton";

function VehicleCard({ vehicle }) {
  const { name, id, price, rating, location, description, gallery, reviews } =
    vehicle;

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some((fav) => fav.id === id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(vehicle));
    }
  };

  return (
    <div className={css.vehicleCard}>
      <div className={css.vehicleImageContainer}>
        <img
          className={css.vehicleCardImage}
          src={gallery[0].thumb}
          alt="vehicle image"
        />
      </div>
      <div className={css.vehicleCardContent}>
        <div className={css.titleContainer}>
          <h2 className={css.vehicleTitle}>{name}</h2>
          <div className={css.priceContainer}>
            <VehiclePrice price={price} />
            <div className={css.heartContainer} onClick={toggleFavorite}>
              {isFavorite ? (
                <CiHeart className={css.heartIconFavorite} />
              ) : (
                <CiHeart className={css.heartIcon} />
              )}
            </div>
          </div>
        </div>
        <RatingLocationDetails
          rating={rating}
          location={location}
          reviews={reviews}
        />
        <p className={css.vehicleDescription}>{description}</p>
        <VehicleAttributeList vehicle={vehicle} />
        <Link
          to={`/catalog/${id}/features`}
          className={css.catalog}
          target="_blank"
        >
          <MainButton>Show More</MainButton>
        </Link>
      </div>
    </div>
  );
}

export default VehicleCard;
