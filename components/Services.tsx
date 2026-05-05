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
        <div className="service-card" id="little-ones">
          <div className="service-number serif">01</div>
          <h3 className="service-title">Little Ones · Ages 18 months to 4</h3>
          <ul className="service-list">
            <li>Creative play and expression</li>
            <li>Pre-reading and storytelling</li>
            <li>Art projects and fine motor skills</li>
            <li>Music, movement, and listening</li>
            <li>Social and emotional engagement</li>
          </ul>
        </div>
        <div className="service-card" id="elementary">
          <div className="service-number serif">02</div>
          <h3 className="service-title">Elementary · Grades K to 5</h3>
          <ul className="service-list">
            <li>Reading fluency &amp; comprehension</li>
            <li>Writing &amp; spelling</li>
            <li>Math foundations</li>
            <li>Homework help</li>
            <li>Study habits</li>
          </ul>
        </div>
        <div className="service-card" id="middle-school">
          <div className="service-number serif">03</div>
          <h3 className="service-title">Middle School · Grades 6 to 8</h3>
          <ul className="service-list">
            <li>Prealgebra &amp; algebra</li>
            <li>Essay writing</li>
            <li>Reading &amp; vocabulary</li>
            <li>Science &amp; history</li>
            <li>Organization &amp; planning</li>
          </ul>
        </div>
        <div className="service-card" id="high-school">
          <div className="service-number serif">04</div>
          <h3 className="service-title">High School · Grades 9 to 12</h3>
          <ul className="service-list">
            <li>Algebra, geometry, precalculus</li>
            <li>English &amp; essay coaching</li>
            <li>History subjects</li>
            <li>Study organization</li>
            <li>Time management</li>
          </ul>
        </div>
        <div className="service-card feature" id="creative">
          <div className="service-number serif">05</div>
          <h3 className="service-title">Creative &amp; College Prep</h3>
          <ul className="service-list">
            <li>College application essays</li>
            <li>Writing competitions</li>
            <li>Art portfolio feedback</li>
            <li>Test Prep Strategy &amp; Study Lifestyle Training</li>
            <li>Creative writing coaching</li>
          </ul>
        </div>
        <div className="service-card" id="english">
          <div className="service-number serif">06</div>
          <h3 className="service-title">English for International Learners</h3>
          <ul className="service-list">
            <li>Building confidence</li>
            <li>Speaking &amp; presentation practice</li>
            <li>Pronunciation</li>
            <li>Conversational practice</li>
            <li>Listening &amp; comprehension</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
