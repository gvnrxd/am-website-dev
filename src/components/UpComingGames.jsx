// UpComingGames.jsx
import { useEffect, useState } from "react";

import BackArrow from "../assets/arrow-back.svg?react";
import ForwardArrow from "../assets/arrow-forward.svg?react";
import NextThreeGames from "./NextThreeGames";
import styles from "./UpComingGames.module.css";

export default function UpComingGames() {
  return (
    <section aria-labelledby="upcoming-games" className={styles.gameSec}>
      <h2 className={styles.heading} id="upcoming-games">
        Upcoming Games
        <span className={styles.schoolName}>For Somerset Academy</span>
      </h2>
      <div className={styles.wrapper}>
        <NextThreeGames />
      </div>
    </section>
  );
}
