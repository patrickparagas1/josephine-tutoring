import { getTestimonial } from "./Testimonial";

type Props = {
  id: string;
};

export default function PullQuote({ id }: Props) {
  const q = getTestimonial(id);
  if (!q) return null;

  return (
    <figure className="pull-quote">
      <blockquote>&ldquo;{q.text}&rdquo;</blockquote>
      <figcaption>{q.author}</figcaption>
    </figure>
  );
}
