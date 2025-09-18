import styles from "./TeamPrograms.module.css";
import { Link, NavLink } from "react-router-dom";

import programImg from "../assets/programImg.jpeg";

export default function TeamProgram() {
  return (
    <>
      <section aria-labelledby="team-programs" className={styles.teamSec}>
        <h2 className={styles.heading} id="team-programs">
          Teams / Programs
          <span className={styles.titleExtra}>Play Ball!</span>
        </h2>
        <div className={styles.programBox}>
          <div className={styles.programCard}>
            <div>
              <img
                alt="logo"
                src={programImg}
                className={styles.programImg}
              ></img>
            </div>
            <div className={styles.programText}>
              <h3>Travel Team</h3>
              <p>
                {"\u00A0 >"} Compete at a high level and develop your skills inn
                our AAU travel program.
              </p>
              <div className={styles.programBtnBox}>
                <NavLink to="/error" end className={styles.schedule}>
                  Join!
                </NavLink>
              </div>
            </div>
          </div>
          <div className={styles.programCard}>
            <div>
              <img
                alt="logo"
                src={programImg}
                className={styles.programImg}
              ></img>
            </div>
            <div className={styles.programText}>
              <h3>School Program</h3>
              <p>
                {"\u00A0 >"} Compete at a high level and elevate your game in
                our high school basketball program.
              </p>
              <div className={styles.programBtnBox}>
                <NavLink to="/error" end className={styles.schedule}>
                  Join!
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
