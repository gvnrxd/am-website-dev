import styles from "./PlayerCard.module.css";
import { Link, NavLink } from "react-router-dom";
import Pfp from "../assets/pfp.svg";

export default function PlayerCard({ playerName, playerPosition, ...props }) {
  return (
    <>
      <a
        href="https://www.maxpreps.com/basketball/girls/"
        rel="noopener noreferrer"
        className={styles.cardBox}
        target="_blank"
      >
        <img src={Pfp} alt="Picture of Player" className={styles.pfp} />
        <div className={styles.meta}>
          <h4>{playerName}</h4>
          <p>{playerPosition}</p>
        </div>
      </a>
    </>
  );
}
