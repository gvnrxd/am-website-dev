// MenuButton.jsx
import styles from "./MenuButton.module.css";

export default function MenuButton({ open, onToggle, className = "" }) {
  return (
    <button
      type="button"
      className={[styles.menuBtn, className].join(" ")}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      onClick={() => onToggle?.(!open)}
    >
      <svg
        className={`${styles.icon} ${open ? styles.iconOpen : ""}`}
        viewBox="0 0 24 24"
        aria-hidden
      >
        <line className={styles.line} x1="3" y1="6" x2="21" y2="6" />
        <line className={styles.line} x1="3" y1="12" x2="21" y2="12" />
        <line className={styles.line} x1="3" y1="18" x2="21" y2="18" />
      </svg>
    </button>
  );
}
