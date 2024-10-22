import css from "./VehicleCard.module.css";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import VehicleAttributeList from "../VehicleAttributeList/VehicleAttributeList";
import RatingLocationDetails from "../RatingLocationDetails/RatingLocationDetails";
import VehiclePrice from "../VehiclePrice/VehiclePrice";
import MainButton from "../MainButton/MainButton";

function VehicleCard({ vehicle }) {
  const {
    name,
    id,
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
            <VehiclePrice price={price} />
            <CiHeart className={css.heartIcon} />
          </div>
        </div>
        <RatingLocationDetails rating={rating} location={location} reviews={reviews} />
        <p className={css.vehicleDescription}>{description}</p>
        <VehicleAttributeList vehicle={vehicle} />
        <Link to={`/catalog/${id}/features`} className={css.catalog}><MainButton>Show More</MainButton></Link>
      </div>
    </div>
  );
}

export default VehicleCard;
