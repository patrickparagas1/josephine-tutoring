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
    size: "large",
  },
  {
    id: "warm",
    text: "So warm, patient, and kind. It meant a lot to us during a tough week.",
    author: "Parent, Lake Forest",
    size: "small",
  },
  {
    id: "art",
    text: "Your classes expand his view of art and teach him about aesthetics and culture.",
    author: "Parent, NorCal",
    size: "small",
  },
  {
    id: "identity",
    text: "Our kids had so much fun exploring ideas of identity, belonging, and diversity. You helped them think about themselves and their own history.",
    author: "Parent, NorCal",
    size: "large",
  },
  {
    id: "progress",
    text: "Thank you for your detailed and insightful progress report. It was so helpful.",
    author: "Parent, Irvine",
    size: "small",
  },
  {
    id: "video",
    text: "She got very interested in the video making process after the last workshop. She's enjoying it so much.",
    author: "Parent, NorCal",
    size: "small",
  },
  {
    id: "potential",
    text: "You brought out their inner potential and interest, not only in language but in creative projects.",
    author: "Parent, South Korea",
    size: "large",
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
              <figure key={q.id} className={`collage-card collage-card--${q.size}`}>
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
