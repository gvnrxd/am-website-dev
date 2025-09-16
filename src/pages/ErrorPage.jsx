export default function ErrorPage() {
  return (
    <div style={styles.wrapper}>
      <CourtBackground />
      <main style={styles.card} role="main" aria-labelledby="hoops-404-title">
        <h1 id="hoops-404-title" style={styles.title}>
          <span style={styles.num}>4</span>
          <Basketball />
          <span style={styles.num}>4</span>
        </h1>
        <p style={styles.subtitle}>Oops — that page took a shot and missed.</p>
        <div style={styles.actions}>
          <a href="/" style={{ ...styles.btn, ...styles.primary }}>
            Go Home
          </a>
          <button
            onClick={() => window.history.back()}
            style={{ ...styles.btn, ...styles.ghost }}
          >
            Go Back
          </button>
        </div>
      </main>
    </div>
  );
}

function Basketball() {
  return (
    <div aria-hidden style={styles.ballWrap}>
      <svg viewBox="0 0 120 120" style={styles.ball}>
        <defs>
          <radialGradient id="ballGlow" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffb27f" />
            <stop offset="40%" stopColor="#ff8c42" />
            <stop offset="100%" stopColor="#d85820" />
          </radialGradient>
        </defs>
        <circle
          cx="60"
          cy="60"
          r="52"
          fill="url(#ballGlow)"
          stroke="#8a3a18"
          strokeWidth="6"
        />
        {/* seams */}
        <path d="M8 60h104" stroke="#4b1f0f" strokeWidth="6" fill="none" />
        <path d="M60 8v104" stroke="#4b1f0f" strokeWidth="6" fill="none" />
        <path
          d="M20 25c20 12 60 12 80 0"
          stroke="#4b1f0f"
          strokeWidth="6"
          fill="none"
        />
        <path
          d="M20 95c20-12 60-12 80 0"
          stroke="#4b1f0f"
          strokeWidth="6"
          fill="none"
        />
      </svg>
    </div>
  );
}

function CourtBackground() {
  return (
    <svg
      aria-hidden
      style={styles.court}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <rect x="0" y="0" width="100" height="100" fill="#0f172a" />
      {/* subtle lines */}
      <g stroke="#1e293b" strokeWidth=".5" opacity="0.5">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`v-${i}`} x1={i * 10} y1="0" x2={i * 10} y2="100" />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} />
        ))}
      </g>
      {/* center circle */}
      <circle
        cx="50"
        cy="50"
        r="10"
        fill="none"
        stroke="#334155"
        strokeWidth="1"
      />
    </svg>
  );
}

// --- styles ---
const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(180deg, #0b1220 0%, #0a0f1a 100%)",
    color: "#e2e8f0",
    position: "relative",
    overflow: "hidden",
    padding: "2rem",
  },
  court: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    opacity: 0.45,
  },
  card: {
    position: "relative",
    zIndex: 1,
    width: "min(900px, 96vw)",
    background: "rgba(15, 23, 42, 0.65)",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 10px 30px rgba(0,0,0,.35)",
    borderRadius: "24px",
    padding: "2.25rem",
    textAlign: "center",
    backdropFilter: "blur(6px)",
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    fontSize: "clamp(3rem, 6vw, 7rem)",
    letterSpacing: "2px",
    margin: 0,
  },
  num: {
    color: "#94a3b8",
    textShadow: "0 2px 8px rgba(0,0,0,.35)",
  },
  subtitle: {
    margin: "0.5rem 0 1.5rem",
    fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
    color: "#cbd5e1",
  },
  actions: {
    display: "flex",
    gap: ".75rem",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  btn: {
    cursor: "pointer",
    padding: ".8rem 1.1rem",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,.2)",
    fontWeight: 600,
    fontSize: "1rem",
    transition: "transform .15s ease, background .2s ease, box-shadow .2s ease",
  },
  primary: {
    background: "linear-gradient(135deg,#ff7a1a,#ff4d00)",
    color: "#0b0f1a",
    boxShadow: "0 8px 20px rgba(255,100,20,.35)",
  },
  ghost: {
    background: "transparent",
    color: "#e2e8f0",
  },
  ballWrap: {
    width: "1em",
    height: "1em",
    display: "inline-block",
    transform: "translateY(6px)",
    animation: "bounce 1.6s ease-in-out infinite",
  },
  ball: {
    width: "1em",
    height: "1em",
    filter: "drop-shadow(0 6px 10px rgba(0,0,0,.4))",
  },
};

// Inject keyframes once
const styleTag = document.createElement("style");
styleTag.textContent = `
@keyframes bounce {
  0%, 100% { transform: translateY(6px); }
  50% { transform: translateY(-8px); }
}

/* hover effects */
button:hover, a:hover {
  transform: translateY(-2px);
}
button:active, a:active {
  transform: translateY(0);
}
`;
if (
  typeof document !== "undefined" &&
  !document.getElementById("hoops404-keyframes")
) {
  styleTag.id = "hoops404-keyframes";
  document.head.appendChild(styleTag);
}
