export default function Rates() {
  return (
    <section className="rates" id="rates">
      <div className="rates-inner">
        <div className="section-eyebrow">Simple, transparent pricing</div>
        <h2 className="section-title">
          Honest <em>rates</em>.
          <br />
          No contracts.
        </h2>
        <p className="rates-intro">
          Pay per session. No contracts. The first 15-minute consultation is always free. Packages are available for families booking regularly.
        </p>

        <div className="rate-row">
          <div>
            <div className="rate-label">Little Ones · Not yet in kindergarten</div>
            <div className="rate-desc">
              One hour session · in person
            </div>
          </div>
          <div className="rate-price">
            $95<span>/hr</span>
          </div>
        </div>

        <div className="rate-row">
          <div>
            <div className="rate-label">Elementary · Kindergarten through Grade 5</div>
            <div className="rate-desc">
              One hour session · in person or online
            </div>
          </div>
          <div className="rate-price">
            $95<span>/hr</span>
          </div>
        </div>

        <div className="rate-row">
          <div>
            <div className="rate-label">Middle School · Grades 6 to 8</div>
            <div className="rate-desc">
              One hour session · in person or online
            </div>
          </div>
          <div className="rate-price">
            $100<span>/hr</span>
          </div>
        </div>

        <div className="rate-row">
          <div>
            <div className="rate-label">High School · Grades 9 to 12</div>
            <div className="rate-desc">
              One hour session · in person or online
            </div>
          </div>
          <div className="rate-price">
            $120<span>/hr</span>
          </div>
        </div>

        <div className="rate-row">
          <div>
            <div className="rate-label">
              Test Prep &amp; Strategy
            </div>
            <div className="rate-desc">
              SAT, ACT, ISEE, and academic strategy · all ages · in person or online
            </div>
          </div>
          <div className="rate-price">
            $150<span>/hr</span>
          </div>
        </div>

        <div className="rate-row">
          <div>
            <div className="rate-label">
              Creative &amp; College Prep{" "}
              <span className="rate-badge">specialty</span>
            </div>
            <div className="rate-desc">
              90 minute session · in person or online
            </div>
          </div>
          <div className="rate-price">
            $175<span>/hr</span>
          </div>
        </div>

        <div className="rate-row">
          <div>
            <div className="rate-label">Violin Lessons</div>
            <div className="rate-desc">
              30 minute session · in person or online
            </div>
          </div>
          <div className="rate-price">
            $45<span>/30min</span>
          </div>
        </div>

        <div className="rates-note">
          Honesty is a form of respect, so the rates are what you see.
          Sibling discount: 15% off a second student&apos;s sessions.
          Referral bonus: $50 credit when a friend books their first
          session. Cancellations with 48 hours&apos; notice are free.
        </div>
      </div>
    </section>
  );
}
