import { Link, NavLink } from "react-router-dom";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import NavLogo from "../assets/am-navLogo.png";
import DrawerNav from "./DrawerNav";
import MenuButton from "./MenuButton";

export default function NavBar() {
  const navRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [open, setOpen] = useState(false);

  // Resize logic + nav height var
  useLayoutEffect(() => {
    if (!navRef.current) return;

    const setNavHeight = () => {
      const h = Math.ceil(navRef.current.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--nav-h", `${h}px`);
    };

    setNavHeight();

    const ro = new ResizeObserver(setNavHeight);
    ro.observe(navRef.current);

    const onResize = () => {
      setNavHeight();
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);

    document.fonts?.ready?.then(setNavHeight);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/trainings-and-services", label: "Training & Services" },
    { to: "/pricing", label: "Pricing" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/facts-and-questions", label: "FAQs" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav id="site-nav" ref={navRef} className={styles.siteNav}>
      <NavLink to="/" className={styles.logoLink}>
        <img
          src={NavLogo}
          alt="Coach McCutcheon Logo"
          className={styles.logo}
        />
      </NavLink>

      {/* Desktop links */}
      {!isMobile && (
        <ul className={styles.navBar}>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end className="navLink">
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}

      {/* Mobile hamburger */}
      {isMobile && <MenuButton open={open} onToggle={setOpen} />}

      {/* Drawer */}
      <DrawerNav
        open={open}
        onClose={() => setOpen(false)}
        links={links}
        title="Menu"
        side="right"
      />
    </nav>
  );
}
