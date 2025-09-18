import { useEffect, useState } from "react";
import styles from "./NextThreeGames.module.css";

const API_URL =
  "https://am-api-gvnrxd.netlify.app/.netlify/functions/upcoming-games";

function formatDateRange(start, end) {
  const opts = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  };
  const s = new Date(start).toLocaleString(undefined, opts);
  if (!end) return s;
  const sameDay =
    new Date(start).toDateString() === new Date(end).toDateString();
  const e = new Date(end).toLocaleString(
    undefined,
    sameDay ? { hour: "numeric", minute: "2-digit" } : opts
  );
  return sameDay ? `${s} – ${e}` : `${s} → ${e}`;
}

export default function NextThreeGames() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(API_URL, { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const { events } = await res.json();
        if (!cancelled) setEvents(events || []);
      } catch {
        if (!cancelled) setError("Could not load schedule.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <div aria-live="polite">Loading games…</div>;
  if (error) return <div role="alert">{error}</div>;
  if (!events.length) return null;

  return (
    <section aria-labelledby="upcoming-games">
      <h3 id="upcoming-games" style={{ position: "absolute", left: "-9999px" }}>
        Upcoming games
      </h3>
      <ul className={styles.list}>
        {events.slice(0, 3).map((e) => {
          // limit to 3 if you want
          const key = `${e.title}-${new Date(e.start).toISOString()}`;
          return (
            <li key={key} className={styles.gameCard}>
              <div className={styles.title}>
                {e.title}
                <span className={styles.meta}>
                  {formatDateRange(e.start, e.end)}
                </span>
              </div>

              <small className={styles.meta}>
                {e.location && (
                  <span className={styles.loc}>
                    <span className={styles.reset}>Location:</span> {e.location}
                  </span>
                )}
              </small>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
