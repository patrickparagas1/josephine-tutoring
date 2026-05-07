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
    id: "george",
    text: "Josephine is an outstanding and energetic teacher. She is highly dedicated, passionate about teaching, and very innovative, having developed a set of methods that make learning easy for students to understand. My son George has learned a great deal from her.",
    author: "Josephine Wang, Irvine",
    style: { gridColumn: "1 / 3", gridRow: "3 / 4", transform: "rotate(-0.5deg)", background: "var(--cream-dark)" },
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
