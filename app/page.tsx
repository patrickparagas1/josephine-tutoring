import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Ornament from "@/components/Ornament";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
      <Hero />
      <section className="home-gallery">
        <div className="home-gallery-inner">
          <Link href="/subjects#little-ones" className="home-photo">
            <Image
              src="/photos/little-ones.jpg"
              alt="A child's watercolor painting and paint palette"
              width={800}
              height={600}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
            <span className="home-photo-label">Little ones</span>
          </Link>
          <Link href="/subjects#elementary" className="home-photo">
            <Image
              src="/photos/elementary.jpg"
              alt="Colorful school notebooks with a jar of pencils"
              width={800}
              height={600}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
            <span className="home-photo-label">Elementary</span>
          </Link>
          <Link href="/subjects#middle-school" className="home-photo">
            <Image
              src="/photos/middle-school.jpg"
              alt="Hand-drawn geometry diagrams from a vintage textbook"
              width={800}
              height={600}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
            <span className="home-photo-label">Middle school</span>
          </Link>
          <Link href="/subjects#high-school" className="home-photo">
            <Image
              src="/photos/high-school.jpg"
              alt="Lab bottles with handwritten labels"
              width={800}
              height={600}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
            <span className="home-photo-label">High school</span>
          </Link>
          <Link href="/subjects#creative" className="home-photo">
            <Image
              src="/photos/creative.jpg"
              alt="A vintage typewriter with paper"
              width={800}
              height={600}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
            <span className="home-photo-label">Creative &amp; college prep</span>
          </Link>
          <Link href="/subjects#english" className="home-photo">
            <Image
              src="/photos/english.jpg"
              alt="An open dictionary highlighting an English word"
              width={800}
              height={600}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
            <span className="home-photo-label">English for international learners</span>
          </Link>
        </div>
      </section>
      <section className="home-preview">
        <div className="home-preview-inner">
          <div className="section-eyebrow">What I help with</div>
          <h2 className="section-title">
            Every grade. <em>Every kind</em> of learner.
          </h2>
          <ul className="home-preview-list">
            <li>Little ones · Early learning, 18 months to 4</li>
            <li>Elementary foundations · Grades K to 5</li>
            <li>Middle school subjects · Grades 6 to 8</li>
            <li>High school academics · Grades 9 to 12</li>
            <li>Test prep strategy &amp; study lifestyle training</li>
            <li>Creative writing, art portfolios, college essays</li>
          </ul>
          <Link href="/subjects" className="btn btn-secondary">
            See all subjects
          </Link>
        </div>
      </section>
      <Testimonial ids={["fun", "warm"]} />
      <Ornament />
      <section className="home-cta">
        <div className="home-cta-inner">
          <div className="section-eyebrow">Let&apos;s find the right fit</div>
          <h2 className="section-title">
            Every family is <em>different</em>.
          </h2>
          <p className="home-cta-lede">
            Tell me a bit about your student. The first 15 minute
            consultation is always free, and there&apos;s no pressure either
            way.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Book a free consultation <span className="arrow">→</span>
          </Link>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
