// src/components/Navigation/Navigation.jsx
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const linkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={linkClass}>Home</NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={linkClass}>Contacts</NavLink>
      )}
    </nav>
  );
}