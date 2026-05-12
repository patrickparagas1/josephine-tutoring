import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-visual-wrap fade-up delay-4">
        <div className="hero-credentials">
          Wellesley College &amp; Georgetown University Alumna
        </div>
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
          Private Tutoring · Irvine, CA
        </div>
        <h1 className="fade-up delay-1">
          Patient help
          <br />
          for <em>every</em> kind
          <br />
          of learner.
        </h1>
        <p className="hero-lede fade-up delay-2">
          ✎ Private tutoring and outside-the-box learning, from toddlers to seniors.
          <br />
          ✎ Academic subjects, test prep, college apps, life skills, and creative projects.
          <br />
          ✎ At your home, the library, or online.
        </p>
        <div className="cta-group fade-up delay-3">
          <Link href="/contact" className="btn btn-primary">
            Book a free consultation
            <span className="arrow">→</span>
          </Link>
          <Link href="/rates" className="btn btn-secondary">
            See rates
          </Link>
        </div>
      </div>
    </section>
  );
}
