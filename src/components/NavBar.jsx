import { Link, NavLink } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
import styles from "./NavBar.module.css";
import NavLogo from "../assets/am-navLogo.png";

export default function NavBar() {
  const navRef = useRef(null);

  useLayoutEffect(() => {
    if (!navRef.current) return;

    const setNavHeight = () => {
      const h = Math.ceil(navRef.current.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--nav-h", `${h}px`);
    };

    setNavHeight();

    const ro = new ResizeObserver(setNavHeight);
    ro.observe(navRef.current);

    const onResize = () => setNavHeight();
    window.addEventListener("resize", onResize);

    document.fonts?.ready?.then(setNavHeight);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <nav id="site-nav" ref={navRef} className={styles.siteNav}>
      <NavLink to="/" className={styles.logoLink}>
        <img
          src={NavLogo}
          alt="Coach McCutcheon Logo"
          className={styles.logo}
        />
      </NavLink>
      <ul className={styles.navBar}>
        <li className={styles.homeNav}>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" end>
            About
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
  );
}
