import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
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
          Private tutoring and early learning, from toddlers through 12th
          grade. Academic subjects, test prep, creative projects, and college
          applications. At your home, the library, or online.
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
      <div className="hero-visual fade-up delay-4">
        <Image
          src="/josephine-photo.jpg"
          alt="Josephine, private tutor in Irvine"
          fill
          sizes="(max-width: 1100px) 100vw, 340px"
          quality={95}
          priority
        />
      </div>
    </section>
  );
}
