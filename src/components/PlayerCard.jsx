import styles from "./PlayerCard.module.css";
import { Link, NavLink } from "react-router-dom";

export default function PlayerCard({ playerName, playerPosition, ...props }) {
  return (
    <>
      <NavLink to="/about" end className={styles.cardBox}>
        <h4>{playerName}</h4>
        <p>{playerPosition}</p>
      </NavLink>
    </>
  );
}
