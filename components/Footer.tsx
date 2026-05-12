import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-cols">
          <div className="footer-col footer-brand">
            <div className="footer-brand-name">Josephine the Tutor</div>
            <p className="footer-brand-tagline">
              Patient, personalized tutoring. Toddlers to seniors, in your
              home, the library, or online.
            </p>
            <p className="footer-brand-meta">Irvine, California</p>
          </div>
          <div className="footer-col">
            <div className="footer-col-label">Reach me</div>
            <ul className="footer-list">
              <li>
                <a href="tel:+19493939913">949.393.9913</a>
              </li>
              <li>
                <a href="mailto:josephinethetutor@gmail.com">
                  josephinethetutor@gmail.com
                </a>
              </li>
              <li>
                <Link href="/contact" className="footer-cta-link">
                  Book a free 15 minute call &rarr;
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-label">Around the site</div>
            <ul className="footer-list">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/subjects">Subjects</Link>
              </li>
              <li>
                <Link href="/rates">Rates</Link>
              </li>
              <li>
                <Link href="/contact">Book</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            Made with <em>care</em> in Irvine, California
          </span>
          <span className="footer-bottom-sep" aria-hidden="true">
            ·
          </span>
          <span>&copy; 2026 Josephine Tutoring</span>
          <span className="footer-bottom-sep" aria-hidden="true">
            ·
          </span>
          <a
            href="https://www.facebook.com/profile.php?id=61588894690978"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61588894690978&sk=reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-review-link"
          >
            Leave a review ★
          </a>
        </div>
      </div>
    </footer>
  );
}
