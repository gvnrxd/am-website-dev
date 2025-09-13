import { Link, NavLink } from "react-router-dom";

import styles from "./HomePage.module.css";

import HeroImg from "../assets/am-hero.jpg";
import SchoolLogo from "../assets/school-logo.png";

// Page components

import UpcomingGames from "../components/UpComingGames.jsx";
export default function HomePage() {
  return (
    <>
      <main>
        <section aria-labelledby="hero-section" className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1>Coach Anthony McCutcheon</h1>
            <p>
              Developing athletes and inspiring students through discipline,
              teamwork, and skill development.
            </p>
            <div className={styles.heroBtnContainer}>
              <NavLink to="/error" end>
                Join The Travel Team<span>AAU/Club Program</span>
              </NavLink>
              <NavLink to="/error" end>
                See Varsity Schedule<span>Somerset Academy</span>
              </NavLink>
              <NavLink to="/about" end>
                Learn more
              </NavLink>
            </div>
          </div>
          <a
            href="https://www.somersetcanyons.com/index1.jsp"
            target="_blank"
            noopener
            norefferer
          >
            <div className={styles.heroFooter}>
              <img src={SchoolLogo} />
              <span>
                Head Coach at<br></br> Somerset Academy
              </span>
            </div>
          </a>
        </section>
        <div className={styles.mainWrapper}>
          <UpcomingGames />
        </div>
      </main>
    </>
  );
}
