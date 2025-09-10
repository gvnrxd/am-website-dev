import { Link, NavLink } from "react-router-dom";
import styles from "./SiteMap.module.css";

export default function SiteMapPage() {
  return (
    <>
      <main aria-labelledby="sitemap-title" className={styles.wrapper}>
        <div className={styles.siteMapTitleBox}>
          <h1 id="sitemap-title" className={styles.siteMapTitle}>
            Sitemap
          </h1>
          <span>Center of Navigation</span>
        </div>

        <div className={styles.siteMapTop}>
          <nav aria-label="Explore" className={styles.siteMapNav}>
            <h3>Explore</h3>
            <ul className={styles.siteMapNavBar}>
              <li>
                <NavLink to="/" end>
                  Home
                </NavLink>
                <ul className={styles.siteMapSubLink}>
                  <li>
                    <NavLink to="/error" end>
                      Home Submenu
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/error" end>
                      Home Submenu
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/about" end>
                  About Us
                </NavLink>
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
            </ul>
          </nav>
          <nav aria-label="Follow us" className={styles.siteMapNav}>
            <h3 className={styles.siteMapNavHeader}>Follow Us</h3>
            <ul className={styles.siteMapBar}>
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
      </main>
    </>
  );
}
