// src/components/Layout/Layout.jsx
import AppBar from "../AppBar/AppBar";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.wrap}>
      <AppBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}