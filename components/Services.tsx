import Image from "next/image";

const CARD_PHOTOS: Record<string, string> = {
  "little-ones": "/photos/little-ones.jpg",
  "elementary": "/photos/elementary.jpg",
  "middle-school": "/photos/middle-school.jpg",
  "high-school": "/photos/high-school.jpg",
  "creative": "/photos/creative.jpg",
  "english": "/photos/english.jpg",
};

export default function Services() {
  return (
    <section id="services">
      <div className="services-header">
        <div className="section-eyebrow">What I help with</div>
        <h2 className="section-title">
          Subjects &amp; <em>support</em>
        </h2>
        <p className="services-subhead">
          Built patiently, around how each student actually learns.
        </p>
      </div>
      <div className="services-grid">
        {[
          {
            id: "little-ones",
            num: "01",
            title: "Little Ones · Ages 18 months to 4",
            items: ["Creative Play And Expression", "Pre-Reading And Storytelling", "Art Projects And Fine Motor Skills", "Social And Emotional Engagement", "Music Appreciation, Movement, And Listening", "Violin Lessons (Suzuki Method)"],
          },
          {
            id: "elementary",
            num: "02",
            title: "Elementary · Grades K to 5",
            items: ["Reading Fluency & Comprehension", "Writing & Spelling", "Math Foundations", "Homework Help & Study Habits"],
          },
          {
            id: "middle-school",
            num: "03",
            title: "Middle School · Grades 6 to 8",
            items: ["Prealgebra & Algebra", "Essay Writing", "Reading & Vocabulary", "Science & History", "Organization & Planning"],
          },
          {
            id: "high-school",
            num: "04",
            title: "High School · Grades 9 to 12",
            items: ["Algebra, Geometry, Precalculus", "English & Essay Coaching", "History Subjects", "Study Organization & Time Management", "Student Leadership Coaching"],
          },
          {
            id: "test-prep",
            num: "05",
            title: "Test Prep",
            items: ["ISEE", "PSAT", "SAT", "ACT", "AP"],
          },
          {
            id: "creative",
            num: "06",
            title: "Creative & College Applications",
            extra: "feature",
            items: ["College Application Essays", "Writing Competitions", "Art Portfolio Feedback", "Creative Writing Coaching"],
          },
          {
            id: "english",
            num: "07",
            title: "English for International Learners",
            items: ["Building Confidence", "Speaking & Presentation Practice", "Pronunciation & Conversational Practice", "Listening & Comprehension", "Cursive & Penmanship"],
          },
          {
            id: "violin",
            num: "08",
            title: "Violin Lessons",
            items: ["Foundations", "Ear Training", "Sightreading", "Care & Maintenance", "Suzuki Method", "Musicality"],
          },
        ].map((card) => (
          <div
            key={card.id}
            className={`service-card${card.extra ? ` ${card.extra}` : ""}`}
            id={card.id}
          >
            {CARD_PHOTOS[card.id] && (
              <div className="service-card-bg">
                <Image
                  src={CARD_PHOTOS[card.id]}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  aria-hidden="true"
                />
              </div>
            )}
            <div className="service-card-content">
              <div className="service-number serif">{card.num}</div>
              <h3 className="service-title">{card.title}</h3>
              <ul className="service-list">
                {card.items.map((item) => (
                  <li key={item} className={/violin|guitar/i.test(item) ? "music" : undefined}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
