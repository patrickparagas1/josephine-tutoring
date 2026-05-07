"use client";
import { useState, useEffect, useCallback } from "react";

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

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((index: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setVisible(true);
    }, 350);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % TESTIMONIALS.length;
        setVisible(false);
        setTimeout(() => setVisible(true), 350);
        return next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const q = TESTIMONIALS[current];

  return (
    <aside className="testimonial-slider" aria-label="Parent quotes">
      <div className="testimonial-slider-inner">
        <div
          className="testimonial-slider-quote"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.35s ease" }}
        >
          <div className="testimonial-quote-mark">&ldquo;</div>
          <blockquote>{q.text}</blockquote>
          <figcaption>{q.author}</figcaption>
        </div>
        <div className="testimonial-slider-dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`testimonial-dot ${i === current ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
