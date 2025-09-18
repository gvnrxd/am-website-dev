import { Link, NavLink } from "react-router-dom";

import styles from "./HomePage.module.css";

import HeroImg from "../assets/am-hero.jpg";
import SchoolLogo from "../assets/school-logo.png";

// Page components
import UpcomingGames from "../components/UpComingGames.jsx";
import TeamPrograms from "../components/TeamPrograms.jsx";
import Testimonials from "../components/Testimonials.jsx";
import PlayerHighlights from "../components/PlayerHighlights.jsx";

export default function HomePage() {
  return (
    <>
      <main>
        <section aria-labelledby="hero-section" className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1>
              Coach Anthony<br></br> McCutcheon
            </h1>
            <p>
              Developing athletes and inspiring students through{" "}
              <strong>discipline</strong>, <strong>teamwork</strong>, and{" "}
              <strong>skill development</strong>.
            </p>
            <div className={styles.heroBtnContainer}>
              <NavLink to="/error" end>
                Join The Travel Team<span>AAU/Club Program</span>
              </NavLink>
              <a
                href="https://www.somersetcanyons.com/apps/pages/index.jsp?uREC_ID=221452&type=d&termREC_ID=&pREC_ID=calendarv2"
                rel="noopener noreferrer"
                target="_blank"
              >
                See Varsity Schedule<span>Somerset Academy</span>
              </a>
              <NavLink to="/about" end>
                Learn more
              </NavLink>
            </div>
          </div>
          <a
            href="https://www.somersetcanyons.com/index1.jsp"
            target="_blank"
            rel="noopener noreferrer"
            id="school-link"
            className={styles.heroFooter}
          >
            <img src={SchoolLogo} alt="Somerset Academy logo" />
            <span>
              Head Coach at
              <br />
              Somerset Academy
            </span>
          </a>
        </section>
        <div className={styles.mainWrapper}>
          <UpcomingGames />
        </div>
        <div className={styles.mainWrapper}>
          <TeamPrograms />
        </div>
        <div className={styles.mainWrapper}>
          <Testimonials />
        </div>
        <div className={styles.mainWrapper}>
          <PlayerHighlights />
        </div>
      </main>
    </>
  );
}
