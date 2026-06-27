import Image from "next/image";

const CARD_PHOTOS: Record<string, string> = {
  "little-ones": "/photos/little-ones.jpg",
  "elementary": "/photos/elementary.jpg",
  "middle-school": "/photos/middle-school.jpg",
  "high-school": "/photos/high-school.jpg",
  "creative": "/photos/creative.jpg",
  "english": "/photos/english.jpg",
  "test-prep": "/photos/test-prep.jpg",
  "violin": "/photos/violin-lessons.jpg",
};

export default function Services() {
  return (
    <section id="services">
      <div className="services-header">
        <div className="section-eyebrow">What I Design</div>
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
            items: ["Pre-Reading And Storytelling", "Creative Play And Expression", "Art Projects And Fine Motor Skills", "Science Experiments", "Social And Emotional Engagement", "Music Appreciation, Movement, And Listening"],
          },
          {
            id: "elementary",
            num: "02",
            title: "Elementary · Grades K to 5",
            items: ["Reading Fluency & Comprehension", "Writing & Spelling", "Math Foundations", "Science Experiments", "Cursive & Penmanship", "Homework Help & Study Habits", "Creative Projects"],
          },
          {
            id: "middle-school",
            num: "03",
            title: "Middle School · Grades 6 to 8",
            items: ["Prealgebra & Algebra", "Reading & Vocabulary", "Essay Writing", "Science", "History", "Organization & Planning"],
          },
          {
            id: "high-school",
            num: "04",
            title: "High School · Grades 9 to 12",
            items: ["Algebra, Geometry, Precalculus", "Literature", "Reading & Writing", "History Subjects", "Homework & Project Help", "Exam Review", "Study Organization & Time Management"],
          },
          {
            id: "test-prep",
            num: "05",
            title: "Test Prep & Strategy",
            items: ["ISEE", "PSAT", "SAT", "ACT", "AP"],
          },
          {
            id: "creative",
            num: "06",
            title: "Creative & College Prep",
            extra: "feature",
            items: ["College Application Essays", "Student Leadership Coaching", "Creative Writing Coaching", "Writing Competitions", "Art Portfolio Feedback"],
          },
          {
            id: "english",
            num: "07",
            title: "English for International Learners",
            items: ["Building Confidence", "Pronunciation & Conversational Practice", "Listening & Comprehension", "Speaking & Presentation Practice", "Cursive & Penmanship"],
          },
          {
            id: "violin",
            num: "08",
            title: "Violin Lessons",
            items: ["Foundations", "Ear Training", "Sightreading", "Suzuki Method", "Musicality", "Care & Maintenance"],
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
              <h3 className="service-title">
                {card.title.includes(" · ") ? (
                  <>
                    {card.title.split(" · ")[0]}
                    <br />
                    <span className="service-title-sub">{card.title.split(" · ")[1]}</span>
                  </>
                ) : card.title}
              </h3>
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
