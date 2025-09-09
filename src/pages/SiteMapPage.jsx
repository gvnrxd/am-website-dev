export default function SiteMapPage() {
  return (
    <>
      <main aria-labelledby="sitemap-title" className="wrapper">
        <h1 id="sitemap-title">Sitemap</h1>

        <section aria-labelledby="explore">
          <h2 id="explore">Explore</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/trainings-and-services">Training & Services</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/testimonials">Testimonials</a>
            </li>
            <li>
              <a href="/facts-and-questions">FAQs</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="follow">
          <h2 id="follow">Follow us</h2>
          <ul>
            <li>
              <a href="https://facebook.com/yourhandle">Facebook</a>
            </li>
            <li>
              <a href="https://instagram.com/yourhandle">Instagram</a>
            </li>
            <li>
              <a href="https://youtube.com/@yourhandle">YouTube</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/yourhandle">LinkedIn</a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="legal">
          <h2 id="legal">Legal</h2>
          <ul>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Use</a>
            </li>
            <li>
              <a href="/refunds">Refund Policy</a>
            </li>
          </ul>
        </section>
        <section aria-labelledby="subscribe">
          <h2 id="subscribe">Subscribe</h2>
          <form action="/subscribe" method="post">
            <label>
              <span className="sr-only">Email</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </label>
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </main>
    </>
  );
}
