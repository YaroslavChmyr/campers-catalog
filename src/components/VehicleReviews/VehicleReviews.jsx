import css from "./VehicleReviews.module.css";
import { useContext } from "react";
import { CamperDetailsContext } from "../../pages/CamperDetailsPage/CamperDetailsPage";
import ReactStars from "react-rating-stars-component";

function VehicleReviews() {
  const details = useContext(CamperDetailsContext);
  const avatarLetterFormatter = (name) => {
    return name.charAt(0);
  };

  return (
    <div className={css.container}>
      {details.reviews.map((review, index) => (
        <div key={index} className={css.review}>
          <div className={css.reviewTopContainer}>
            <div className={css.avatarContainer}>
              <h2 className={css.avatarLetter}>
                {avatarLetterFormatter(review.reviewer_name)}
              </h2>
            </div>
            <div className={css.authorRatingContainer}>
              <p className={css.reviewAuthor}>{review.reviewer_name}</p>
              <ReactStars
                value={review.reviewer_rating}
                size={20}
                edit={false}
              />
            </div>
          </div>
          <p className={css.reviewText}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default VehicleReviews;
