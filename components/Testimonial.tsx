type Quote = {
  id: string;
  text: string;
  author: string;
};

const TESTIMONIALS: Quote[] = [
  {
    id: "fun",
    text: "My son has so much fun in your classes. Thank you for teaching him so much. We hope he can keep working with you.",
    author: "Parent, NorCal",
  },
  {
    id: "art",
    text: "Your classes expand his view of art and teach him about aesthetics and culture.",
    author: "Parent, Irvine",
  },
  {
    id: "identity",
    text: "Our kids had so much fun exploring ideas of identity, belonging, and diversity. You helped them think about themselves and their own history.",
    author: "Parent, Irvine",
  },
  {
    id: "warm",
    text: "So warm, patient, and kind. It meant a lot to us during a tough week.",
    author: "Parent, Lake Forest",
  },
  {
    id: "progress",
    text: "Thank you for your detailed and insightful progress report. It was so helpful.",
    author: "Parent, Irvine",
  },
  {
    id: "video",
    text: "She got very interested in the video making process after the last workshop. She's enjoying it so much.",
    author: "Parent, Irvine",
  },
  {
    id: "potential",
    text: "You brought out their inner potential and interest, not only in language but in creative projects.",
    author: "Parent, Irvine",
  },
];

type Props = {
  /** IDs of which testimonials to show (1 or 2). Falls back to the first one. */
  ids?: [string] | [string, string];
};

export default function Testimonial({ ids }: Props) {
  const items: Quote[] = ids
    ? (ids
        .map((id) => TESTIMONIALS.find((t) => t.id === id))
        .filter(Boolean) as Quote[])
    : TESTIMONIALS.slice(0, 1);

  if (items.length === 0) return null;

  const single = items.length === 1;

  return (
    <section className="testimonial" id="testimonials">
      <div className="testimonial-eyebrow">From the families I work with</div>
      <div className={single ? "testimonial-single" : "testimonial-pair"}>
        {items.map((q) => (
          <figure key={q.id} className="testimonial-quote">
            <div className="testimonial-quote-mark" aria-hidden="true">
              &ldquo;
            </div>
            <blockquote>{q.text}</blockquote>
            <figcaption>{q.author}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function getTestimonial(id: string): Quote | undefined {
  return TESTIMONIALS.find((t) => t.id === id);
}
