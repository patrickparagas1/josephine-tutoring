"use client";

export default function BookingForm() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="section-eyebrow">Book a free consultation</div>
        <h2 className="section-title">
          Let&apos;s find the right <em>fit</em>.
        </h2>
        <p className="contact-lede">
          Every family is different, so tell me a bit about your student and
          I&apos;ll get back to you within 24 hours to schedule a free 15
          minute consultation. No pressure, no contracts.
        </p>

        <form
          className="booking-form"
          action="https://formsubmit.co/josephinethetutor@gmail.com"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="New tutoring inquiry from your website"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            value="https://josephinethetutor.com/contact/thank-you"
          />

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="parent-name">
                Your name <span className="req">*</span>
              </label>
              <input
                type="text"
                id="parent-name"
                name="parent_name"
                required
                placeholder="Parent or guardian"
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">
                Email <span className="req">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="phone">
                Phone <span className="optional">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="949.393.9913"
              />
            </div>
            <div className="form-field">
              <label htmlFor="student-name">
                Student&apos;s first name <span className="req">*</span>
              </label>
              <input
                type="text"
                id="student-name"
                name="student_name"
                required
                placeholder="First name only"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="grade">
                Grade level <span className="req">*</span>
              </label>
              <select id="grade" name="grade" required defaultValue="">
                <option value="" disabled>
                  Select grade
                </option>
                <option value="Little one (18 months to 4)">
                  Little one (18 months to 4)
                </option>
                <option value="K">Kindergarten</option>
                <option value="1">1st grade</option>
                <option value="2">2nd grade</option>
                <option value="3">3rd grade</option>
                <option value="4">4th grade</option>
                <option value="5">5th grade</option>
                <option value="6">6th grade</option>
                <option value="7">7th grade</option>
                <option value="8">8th grade</option>
                <option value="9">9th grade</option>
                <option value="10">10th grade</option>
                <option value="11">11th grade</option>
                <option value="12">12th grade</option>
                <option value="College prep">College prep</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="format">
                Session format <span className="req">*</span>
              </label>
              <select id="format" name="format" required defaultValue="">
                <option value="" disabled>
                  How would you like to meet?
                </option>
                <option value="At your home">At your home</option>
                <option value="At a library or cafe">
                  At a library or café
                </option>
                <option value="Online">Online (video)</option>
                <option value="Not sure">Not sure yet</option>
              </select>
            </div>
          </div>

          <div className="form-field">
            <label>
              Subject(s) needed <span className="req">*</span>
            </label>
            <div className="checkbox-grid">
              <label className="check-item">
                <input type="checkbox" name="subjects" value="Math" />{" "}
                <span>Math</span>
              </label>
              <label className="check-item">
                <input type="checkbox" name="subjects" value="Reading" />{" "}
                <span>Reading</span>
              </label>
              <label className="check-item">
                <input type="checkbox" name="subjects" value="Writing" />{" "}
                <span>Writing</span>
              </label>
              <label className="check-item">
                <input type="checkbox" name="subjects" value="Science" />{" "}
                <span>Science</span>
              </label>
              <label className="check-item">
                <input type="checkbox" name="subjects" value="History" />{" "}
                <span>History</span>
              </label>
              <label className="check-item">
                <input
                  type="checkbox"
                  name="subjects"
                  value="Test Prep Strategy"
                />{" "}
                <span>Test Prep Strategy</span>
              </label>
              <label className="check-item">
                <input
                  type="checkbox"
                  name="subjects"
                  value="College essays"
                />{" "}
                <span>College essays</span>
              </label>
              <label className="check-item">
                <input
                  type="checkbox"
                  name="subjects"
                  value="Creative writing"
                />{" "}
                <span>Creative writing</span>
              </label>
              <label className="check-item">
                <input
                  type="checkbox"
                  name="subjects"
                  value="Art projects"
                />{" "}
                <span>Art projects</span>
              </label>
              <label className="check-item">
                <input
                  type="checkbox"
                  name="subjects"
                  value="Writing competitions"
                />{" "}
                <span>Writing competitions</span>
              </label>
              <label className="check-item">
                <input
                  type="checkbox"
                  name="subjects"
                  value="Study skills"
                />{" "}
                <span>Study skills</span>
              </label>
              <label className="check-item">
                <input
                  type="checkbox"
                  name="subjects"
                  value="Homework help"
                />{" "}
                <span>General homework</span>
              </label>
              <label className="check-item">
                <input
                  type="checkbox"
                  name="subjects"
                  value="Early learning"
                />{" "}
                <span>Early learning</span>
              </label>
              <label className="check-item">
                <input
                  type="checkbox"
                  name="subjects"
                  value="English for International Learners"
                />{" "}
                <span>English for International Learners</span>
              </label>
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="other-subject">
              Other subject not listed{" "}
              <span className="optional">(optional)</span>
            </label>
            <input
              type="text"
              id="other-subject"
              name="other_subject"
              placeholder="Anything else you're hoping I can help with"
            />
          </div>

          <div className="form-field">
            <label htmlFor="availability">
              Best days or times to meet{" "}
              <span className="optional">(optional)</span>
            </label>
            <input
              type="text"
              id="availability"
              name="availability"
              placeholder="e.g. Weekday afternoons, Saturday mornings"
            />
          </div>

          <div className="form-field">
            <label htmlFor="message">
              Tell me about your student{" "}
              <span className="optional">(optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="What's going well, what's been tough, what you're hoping to see change. Anything helps."
            />
          </div>

          <div className="form-field">
            <label htmlFor="referral">
              How did you hear about me?{" "}
              <span className="optional">(optional)</span>
            </label>
            <input
              type="text"
              id="referral"
              name="referral"
              placeholder="Friend, Google, flyer, Nextdoor"
            />
          </div>

          {/* Honeypot for spam (formsubmit convention) */}
          <input
            type="text"
            name="_honey"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <button type="submit" className="btn btn-primary form-submit">
            Send inquiry
            <span className="arrow">→</span>
          </button>
          <p className="form-note">
            I&apos;ll reply within 24 hours. Your info stays private.
          </p>
        </form>

        <div className="or-divider">
          <span>or book a 15 minute consultation</span>
        </div>

        <div className="cal-embed">
          <iframe
            src="https://cal.com/josephine-the-tutor/15min?embed=true&theme=light&layout=month_view"
            title="Book a free 15 minute consultation with Josephine"
            loading="lazy"
          />
        </div>

        <div className="or-divider">
          <span>or reach out another way</span>
        </div>

        <div className="contact-methods">
          <a
            href="mailto:josephinethetutor@gmail.com"
            className="contact-method"
          >
            <div className="contact-method-label">Email</div>
            <div className="contact-method-value">
              josephinethetutor
              <br />
              @gmail.com
            </div>
          </a>
          <a href="tel:+19493939913" className="contact-method">
            <div className="contact-method-label">Text or call</div>
            <div className="contact-method-value">949.393.9913</div>
          </a>
          <a
            href="https://cal.com/josephine-the-tutor"
            className="contact-method"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-method-label">Book online</div>
            <div className="contact-method-value">Cal.com</div>
          </a>
        </div>
      </div>
    </section>
  );
}
