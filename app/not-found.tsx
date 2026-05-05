import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main-content" className="page-center">
        <div className="page-center-inner">
          <div className="section-eyebrow">Page not found</div>
          <h1 className="section-title">
            I can&apos;t find that <em>page</em>.
          </h1>
          <p className="home-cta-lede">
            The link may have moved or never existed. Try the home page, or
            reach out and I&apos;ll help you find what you were looking for.
          </p>
          <div className="cta-group">
            <Link href="/" className="btn btn-primary">
              Back to home
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Send me a note
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
