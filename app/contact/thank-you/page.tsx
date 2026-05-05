import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thanks · Josephine Tutoring",
  description: "Your inquiry was received.",
  robots: { index: false },
};

export default function ThankYou() {
  return (
    <>
      <Nav />
      <main id="main-content" className="page-center">
        <div className="page-center-inner">
          <div className="section-eyebrow">Thank you</div>
          <h1 className="section-title">
            Your note is <em>in</em>.
          </h1>
          <p className="home-cta-lede">
            I&apos;ll reply within 24 hours. In the meantime, here are a few
            places you might explore:
          </p>
          <ul className="thanks-links">
            <li>
              <Link href="/about">More about my approach</Link>
            </li>
            <li>
              <Link href="/subjects">Subjects I teach</Link>
            </li>
            <li>
              <Link href="/blog">Recent notes</Link>
            </li>
          </ul>
          <Link href="/" className="btn btn-secondary">
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
