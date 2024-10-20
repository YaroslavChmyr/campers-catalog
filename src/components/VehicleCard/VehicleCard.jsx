import css from "./VehicleCard.module.css";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import mapIcon from "../../assets/icons/map-icon.svg";
import VehicleAttributeList from "../VehicleAttributeList/VehicleAttributeList";
import MainButton from "../MainButton/MainButton";

function VehicleCard({ vehicle }) {
  const {
    name,
    price,
    rating,
    location,
    description,
    gallery,
    reviews,
  } = vehicle;

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
            <p className={css.vehiclePrice}>${price}</p>
            <CiHeart className={css.heartIcon} />
          </div>
        </div>
        <div className={css.ratingContainer}>
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
        <p className={css.vehicleDescription}>{description}</p>
        <VehicleAttributeList vehicle={vehicle} />
        <MainButton>Show More</MainButton>
      </div>
    </div>
  );
}

export default VehicleCard;
