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
            items: ["Creative play and expression", "Pre-reading and storytelling", "Art projects and fine motor skills", "Music appreciation, movement, and listening", "Social and emotional engagement"],
          },
          {
            id: "elementary",
            num: "02",
            title: "Elementary · Grades K to 5",
            items: ["Reading fluency & comprehension", "Writing & spelling", "Math foundations", "Homework help & study habits", "Violin Lessons (Suzuki method)", "Guitar Lessons (via chords)"],
          },
          {
            id: "middle-school",
            num: "03",
            title: "Middle School · Grades 6 to 8",
            items: ["Prealgebra & algebra", "Essay writing", "Reading & vocabulary", "Science & history", "Organization & planning", "Violin Lessons (Suzuki method)", "Guitar Lessons (via chords)"],
          },
          {
            id: "high-school",
            num: "04",
            title: "High School · Grades 9 to 12",
            items: ["Algebra, geometry, precalculus", "English & essay coaching", "History subjects", "Study organization & time management", "Violin Lessons in Musicality"],
          },
          {
            id: "creative",
            num: "05",
            title: "Creative & College Prep",
            extra: "feature",
            items: ["College application essays", "Writing competitions", "Art portfolio feedback", "Test prep strategy & study lifestyle training", "Creative writing coaching"],
          },
          {
            id: "english",
            num: "06",
            title: "English for International Learners",
            items: ["Building confidence", "Speaking & presentation practice", "Pronunciation", "Conversational practice", "Listening & comprehension"],
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
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
