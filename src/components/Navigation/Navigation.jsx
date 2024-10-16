import { NavLink } from "react-router-dom"
import logo from '../../assets/icons/Logo.svg'
import clsx from "clsx"
import css from "./Navigation.module.css"

const isActiveLink = ({ isActive }) => clsx(css.link, {
  [css.active]: isActive
})

function Navigation() {
  return (
    <nav className={css.nav}>
      <img src={logo} alt="logo" />
      <div className={css.navLinks}>
      <NavLink to="/" className={isActiveLink}>Home</NavLink>
      <NavLink to="/catalog" className={isActiveLink}>Catalog</NavLink>
      </div>
    </nav>
  )
}

export default Navigation