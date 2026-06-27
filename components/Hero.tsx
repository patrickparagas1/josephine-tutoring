import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-visual-wrap fade-up delay-4">
        <div className="hero-visual">
          <Image
            src="/josephine-photo.jpg"
            alt="Josephine, private tutor in Irvine"
            fill
            sizes="(max-width: 1100px) 100vw, 340px"
            quality={95}
            priority
          />
        </div>
      </div>
      <div className="hero-text">
        <div className="hero-eyebrow fade-up">
          Serving Irvine &amp; the Orange County Coast
        </div>
        <h1 className="fade-up delay-1">
          Patient help
          <br />
          for <em>every</em> kind
          <br />
          of learner.
        </h1>
        <div className="cta-group fade-up delay-2">
          <Link href="/contact" className="btn btn-primary">
            Book a free consultation
            <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
