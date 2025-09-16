import { Link, NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className={styles.footerTop}>
          <p>
            <span>Mission:</span> Empower athletes with pro-level training.
          </p>
          <nav aria-label="Explore" className={styles.footerNav}>
            <h3>Explore</h3>
            <ul className={styles.navBar}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/trainings-and-services" end>
                  Training & Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/pricing" end>
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink to="/testimonials" end>
                  Testimonials
                </NavLink>
              </li>
              <li>
                <NavLink to="/facts-and-questions" end>
                  FAQs
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" end>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/site-map" end>
                  Site Map
                </NavLink>
              </li>
            </ul>
          </nav>
          <nav aria-label="Follow us">
            <h3 className={styles.navBarHeader}>Follow Us</h3>
            <ul className={styles.navBar}>
              <li>
                <a
                  href="https://www.instagram.com/"
                  noreferrer
                  noopener
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  noreferrer
                  noopener
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://x.com/" noreferrer noopener target="_blank">
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  noreferrer
                  noopener
                  target="_blank"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  noreferrer
                  noopener
                  target="_blank"
                >
                  LinkIn
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <section className={styles.footerFormContainer}>
            <div className={styles.formDesc}>
              <h3>Let's get connected.</h3>
              <span>Fill out this form to inquire.</span>
            </div>

            <form
              className={styles.footerForm}
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form has been submitted");
              }}
            >
              <label>
                <span className={styles.srOnly}>First Name:</span>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  required
                  pattern="^[\p{L}]+([\p{L} '-][\p{L}]+)*$"
                />
              </label>
              <label>
                <span className={styles.srOnly}>Last Name:</span>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  required
                  pattern="^[\p{L}]+([\p{L} '-][\p{L}]+)*$"
                />
              </label>
              <label>
                <span className={styles.srOnly}>Email:</span>
                <input
                  type="email"
                  name="email"
                  pattern=".+@example\.com"
                  placeholder="Email"
                  required
                />
              </label>
              <button className={styles.formBtn} tpe="submit">
                Submit
              </button>
            </form>
          </section>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.policyContainer}>
            <ul className={styles.policyNav}>
              <li>
                <NavLink to="/privacy-policy" end>
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms-of-use" end>
                  Terms of Use
                </NavLink>
              </li>
              <li>
                <NavLink to="/refund-policy" end>
                  Refund Policy
                </NavLink>
              </li>
            </ul>
          </div>

          <p className={styles.copyright}>
            Copyright &copy; {new Date().getFullYear()} Anthony McCutcheon. All
            rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
