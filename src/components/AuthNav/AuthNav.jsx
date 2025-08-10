// src/components/AuthNav/AuthNav.jsx
import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

export default function AuthNav() {
  const linkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <div className={styles.wrap}>
      <NavLink to="/register" className={linkClass}>Register</NavLink>
      <NavLink to="/login" className={linkClass}>Login</NavLink>
    </div>
  );
}