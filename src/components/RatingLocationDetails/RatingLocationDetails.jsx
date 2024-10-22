import css from "./RatingLocationDetails.module.css";
import { FaStar } from "react-icons/fa6";
import mapIcon from "../../assets/icons/map-icon.svg";

function RatingLocationDetails({ rating, location, reviews }) {
  return (
    <div className={css.container}>
      <div className={css.rating}>
        <FaStar className={css.starIcon} />
        <p className={css.ratingText}>
          {rating} ({reviews.length} Reviews)
        </p>
      </div>
      <div className={css.location}>
        <img src={mapIcon} alt="map icon" className={css.mapIcon} />
        <p className={css.ratingText}>{location}</p>
      </div>
    </div>
  );
}

export default RatingLocationDetails;
