import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <>
      <section className={styles.testimonialSec}>
        <h2 className={styles.heading}>Testimonials</h2>
        <div className={styles.testimonial}>
          <p>
            "Coach McCutcheon hashed a tremendous impact on our daughter's
            development and confidence. We are grateful for his dedication to
            the team."
          </p>
          <span>-Parent of Player</span>
        </div>
        <div className={styles.testimonial}>
          <p>
            "Coach McCutcheon hashed a tremendous impact on our daughter's
            development and confidence. We are grateful for his dedication to
            the team."
          </p>
          <span>-Parent of Player</span>
        </div>
      </section>
    </>
  );
}
