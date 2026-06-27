const FAQ_ITEMS = [
  {
    q: "Where do sessions happen?",
    a: "Most often at your home, where students feel most comfortable. I also meet at libraries across Orange County, including Heritage Park, University Park, and others closer to your family. Online sessions over video work well too. Whatever fits your student best.",
  },
  {
    q: "How long is each session?",
    a: "Most sessions are one hour. College application coaching runs 90 minutes because the work is denser. We can adjust the length if it would help.",
  },
  {
    q: "What if my student is shy or unsure at first?",
    a: "Most students are. The first 15 minutes are usually about getting comfortable rather than diving in. There is no pressure to perform, and I follow the student's pace. Confidence is part of the work.",
  },
  {
    q: "Do you offer test prep?",
    a: "Yes. SAT and ACT strategy, study lifestyle training, and study skills coaching for students at all levels. The focus is on building habits that hold up beyond the test, not just drilling.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Cancellations with 48 hours notice are free. Things come up, and the policy is built to be reasonable. Patterns of last minute cancellations we will talk about together if they happen.",
  },
  {
    q: "How do I pay?",
    a: "Pay per session, or in small packages if you prefer. I will share specifics once we talk and figure out the right fit. No contracts.",
  },
];

export default function Faq() {
  return (
    <>
      <section className="faq" id="faq">
        <div className="faq-inner">
          <div className="section-eyebrow">Common questions</div>
          <h2 className="section-title">
            A few things parents <em>often ask</em>.
          </h2>
          <div className="faq-list">
            {FAQ_ITEMS.map((item) => (
              <details key={item.q} className="faq-item">
                <summary className="faq-question">{item.q}</summary>
                <p className="faq-answer">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
    </>
  );
}
