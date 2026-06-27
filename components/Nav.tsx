"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll while menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav>
      <div className="nav-main-row">
      <Link
        href="/"
        className="logo"
        aria-label="Josephine the Tutor, home"
        onClick={close}
      >
        <span className="logo-shield" aria-hidden="true">
          <svg
            className="logo-crest"
            viewBox="16 9 32 47"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="shield-clip">
                <path d="M 18 14 Q 22 10 26 13 Q 29 10 32 13 Q 35 10 38 13 Q 42 10 46 14 L 46 32 C 46 42 40 50 32 54 C 24 50 18 42 18 32 Z" />
              </clipPath>
            </defs>

            {/* Shield body — navy-dominant plaid with pine green + maroon accents */}
            <g clipPath="url(#shield-clip)">
              {/* Navy base */}
              <rect x="18" y="12" width="28" height="44" fill="#0f2547" />
              {/* Lighter navy vertical stripes (majority) */}
              <rect x="22" y="12" width="2" height="44" fill="#1a3a6b" fillOpacity="0.85" />
              <rect x="40" y="12" width="2" height="44" fill="#1a3a6b" fillOpacity="0.85" />
              {/* Pine green accent vertical */}
              <rect x="31" y="12" width="2" height="44" fill="#2d5a3d" fillOpacity="0.88" />
              {/* Deeper navy horizontal stripes */}
              <rect x="18" y="18" width="28" height="2" fill="#06162f" fillOpacity="0.8" />
              <rect x="18" y="42" width="28" height="2" fill="#06162f" fillOpacity="0.8" />
              {/* Maroon accent horizontal */}
              <rect x="18" y="30" width="28" height="2" fill="#7a2432" fillOpacity="0.85" />
              {/* Thin gold accent lines */}
              <rect x="18" y="24" width="28" height="0.6" fill="#c9a34a" fillOpacity="0.5" />
              <rect x="35" y="12" width="0.6" height="44" fill="#c9a34a" fillOpacity="0.4" />
              {/* Subtle cream crosshatch */}
              <line x1="26" y1="12" x2="26" y2="56" stroke="#f5efe1" strokeWidth="0.3" strokeOpacity="0.28" />
              <line x1="35" y1="12" x2="35" y2="56" stroke="#f5efe1" strokeWidth="0.3" strokeOpacity="0.28" />
              <line x1="18" y1="24" x2="46" y2="24" stroke="#f5efe1" strokeWidth="0.3" strokeOpacity="0.28" />
              <line x1="18" y1="36" x2="46" y2="36" stroke="#f5efe1" strokeWidth="0.3" strokeOpacity="0.28" />
              <line x1="18" y1="48" x2="46" y2="48" stroke="#f5efe1" strokeWidth="0.3" strokeOpacity="0.28" />
            </g>

            {/* Shadow offset behind shield */}
            <path
              d="M 19 15 Q 23 11 27 14 Q 30 11 33 14 Q 36 11 39 14 Q 43 11 47 15 L 47 33 C 47 43 41 51 33 55 C 25 51 19 43 19 33 Z"
              fill="#0f2547"
              opacity="0.3"
              style={{ mixBlendMode: "multiply" }}
            />
            {/* Shield border — dark navy outline */}
            <path
              d="M 18 14 Q 22 10 26 13 Q 29 10 32 13 Q 35 10 38 13 Q 42 10 46 14 L 46 32 C 46 42 40 50 32 54 C 24 50 18 42 18 32 Z"
              fill="none"
              stroke="#06162f"
              strokeWidth="1.8"
            />

            {/* J on navy shield — gold fill for warmth */}
            <text
              x="32"
              y="40"
              textAnchor="middle"
              className="logo-shield-letter"
            >
              J
            </text>
          </svg>
        </span>
        <span className="logo-text">
          Josephine the Tutor
          <span className="logo-tagline">Premier K-12 Private Educator</span>
        </span>
      </Link>

      <button
        type="button"
        className={`nav-toggle ${open ? "open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>
          <Link href="/" onClick={close}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={close}>
            About
          </Link>
        </li>
        <li>
          <Link href="/subjects" onClick={close}>
            Subjects
          </Link>
        </li>
      <li>
          <Link href="/rates" onClick={close}>
            Rates
          </Link>
        </li>
        <li>
          <Link href="/testimonials" onClick={close}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link href="/contact" className="nav-cta" onClick={close}>
            Book
          </Link>
        </li>
      </ul>
      </div>
      <div className="credentials-bar">
        <span>Wellesley College</span>
        <span className="credentials-dot">·</span>
        <span>Georgetown University</span>
        <span className="credentials-dot">·</span>
        <span>10+ Years Experience</span>
        <span className="credentials-dot">·</span>
        <span>International Educator</span>
      </div>
    </nav>
  );
}
