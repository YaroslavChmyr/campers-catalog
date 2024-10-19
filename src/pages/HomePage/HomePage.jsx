import MainButton from "../../components/MainButton/MainButton";
import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={css.container}>
      <div className={css.titlesContainer}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <h2 className={css.subtitle}>
          You can find everything you want in our catalog
        </h2>
      </div>
      <Link to="/catalog"><MainButton>View Now</MainButton></Link>
    </div>
  );
}

export default HomePage;
