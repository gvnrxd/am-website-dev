import { useEffect, useRef } from "react";
import styles from "./DrawerNav.module.css";
import { NavLink } from "react-router-dom";

export default function DrawerNav({
  open,
  onClose,
  links = [],
  title = "Menu",
  side = "right",
}) {
  const containerRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Lock scroll + ESC to close + focus management
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Move focus to the close button when opened
    const id = requestAnimationFrame(() => closeBtnRef.current?.focus());

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      cancelAnimationFrame(id);
    };
  }, [open, onClose]);

  // Close when the route changes via NavLink click
  const handleNavClick = () => {
    onClose?.();
  };

  return (
    <div
      className={[styles.wrapper, open ? styles.open : styles.closed].join(" ")}
      aria-hidden={!open}
    >
      {/* Overlay */}
      <button
        type="button"
        className={styles.overlay}
        aria-label="Close menu"
        onClick={onClose}
      />

      {/* Drawer panel */}
      <aside
        ref={containerRef}
        className={[
          styles.drawer,
          side === "left" ? styles.left : styles.right,
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button
            ref={closeBtnRef}
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close menu"
          >
            <span className={styles.closeIcon} aria-hidden>
              ×
            </span>
          </button>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.list}>
            {links.map((link) => (
              <li key={link.to} className={styles.item}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    [styles.link, isActive ? styles.active : ""].join(" ")
                  }
                  onClick={handleNavClick}
                  end
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
