import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Ornament from "@/components/Ornament";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
      <Hero />
       <TestimonialSlider />
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
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Testimonials · Josephine Tutoring",
  description: "What families say about working with Josephine.",
};

const TESTIMONIALS = [
  {
    id: "fun",
    text: "My son has so much fun in your classes. Thank you for teaching him so much. We hope he can keep working with you.",
    author: "Parent, NorCal",
    style: { gridColumn: "1 / 2", gridRow: "1 / 2", transform: "rotate(-1.5deg)" },
  },
  {
    id: "identity",
    text: "Our kids had so much fun exploring ideas of identity, belonging, and diversity. You helped them think about themselves and their own history.",
    author: "Parent, NorCal",
    style: { gridColumn: "2 / 3", gridRow: "1 / 3", transform: "rotate(0.5deg)", background: "var(--cream-dark)" },
  },
  {
    id: "warm",
    text: "So warm, patient, and kind. It meant a lot to us during a tough week.",
    author: "Parent, Lake Forest",
    style: { gridColumn: "3 / 4", gridRow: "1 / 2", transform: "rotate(1deg)" },
  },
  {
    id: "art",
    text: "Your classes expand his view of art and teach him about aesthetics and culture.",
    author: "Parent, NorCal",
    style: { gridColumn: "1 / 2", gridRow: "2 / 3", transform: "rotate(1.5deg)" },
  },
  {
    id: "progress",
    text: "Thank you for your detailed and insightful progress report. It was so helpful.",
    author: "Parent, Irvine",
    style: { gridColumn: "3 / 4", gridRow: "2 / 3", transform: "rotate(-1deg)" },
  },
  {
    id: "video",
    text: "She got very interested in the video making process after the last workshop. She's enjoying it so much.",
    author: "Parent, NorCal",
    style: { gridColumn: "1 / 2", gridRow: "3 / 4", transform: "rotate(-0.5deg)", background: "var(--cream-dark)" },
  },
  {
    id: "potential",
    text: "You brought out their inner potential and interest, not only in language but in creative projects.",
    author: "Parent, South Korea",
    style: { gridColumn: "2 / 4", gridRow: "3 / 4", transform: "rotate(1deg)" },
  },
];

const Stars = () => (
  <div className="collage-stars" aria-label="5 stars">
    {"★★★★★".split("").map((s, i) => (
      <span key={i}>{s}</span>
    ))}
  </div>
);

export default function TestimonialsPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <section className="testimonials-page">
          <div className="testimonials-page-header">
            <div className="section-eyebrow">Kind words</div>
            <h1 className="section-title">What families <em>say</em>.</h1>
          </div>
          <div className="testimonials-collage">
            {TESTIMONIALS.map((q) => (
              <figure
                key={q.id}
                className="collage-card"
                style={q.style}
              >
                <div className="collage-quote-mark">&ldquo;</div>
                <blockquote>{q.text}</blockquote>
                <Stars />
                <figcaption>{q.author}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
