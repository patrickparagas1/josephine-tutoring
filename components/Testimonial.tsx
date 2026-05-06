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
    author: "Parent, NorCal",
  },
  {
    id: "identity",
    text: "Our kids had so much fun exploring ideas of identity, belonging, and diversity. You helped them think about themselves and their own history.",
    author: "Parent, NorCal",
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
    author: "Parent, NorCal",
  },
  {
    id: "potential",
    text: "You brought out their inner potential and interest, not only in language but in creative projects.",
    author: "Parent, South Korea",
  },
];

type Props = {
  /** IDs of the two testimonials to show side-by-side as a banner. */
  ids?: [string, string];
};

export default function Testimonial({ ids }: Props) {
  const pickedIds: [string, string] = ids ?? ["fun", "warm"];
  const items: Quote[] = pickedIds
    .map((id) => TESTIMONIALS.find((t) => t.id === id))
    .filter(Boolean) as Quote[];

  if (items.length !== 2) return null;

  return (
    <aside className="testimonial-banner" aria-label="Parent quotes">
      <div className="testimonial-banner-inner">
        {items.map((q) => (
          <figure key={q.id} className="testimonial-banner-quote">
            <blockquote>&ldquo;{q.text}&rdquo;</blockquote>
            <figcaption>{q.author}</figcaption>
          </figure>
        ))}
      </div>
    </aside>
  );
}

export function getTestimonial(id: string): Quote | undefined {
  return TESTIMONIALS.find((t) => t.id === id);
}
