// src/components/UserMenu/UserMenu.jsx
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.menu}>
      <span className={styles.name}>{user?.name || user?.email}</span>
      <button className={styles.btn} onClick={() => dispatch(logout())}>
        Log out
      </button>
    </div>
  );
}