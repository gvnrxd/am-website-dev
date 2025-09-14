// UpComingGames.jsx
import { useEffect, useState } from "react";

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
        <a
          className={styles.schedule}
          target="_blank"
          noreferrer
          noopener
          href="https://www.somersetcanyons.com/apps/events/index.jsp?id=d221452#today"
        >
          View Full Schedule
        </a>
      </div>
    </section>
  );
}
