import Image from "next/image";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        <div className="about-portrait-wrap">
          <div className="portrait-frame">
            <Image
              src="/josephine-about.jpg"
              alt="Josephine, private tutor in Irvine"
              fill
              className="portrait"
              sizes="(max-width: 900px) 240px, 30vw"
              quality={95}
              priority
            />
          </div>
        </div>

        <div className="about-bios">
          {/* Bio 2 — Violin Teacher — LEFT */}
          <div className="bio-col">
            <div className="bio-label">🎻 Violin Teacher</div>
            <p>
              My violin story started in elementary school when a visiting
              teacher let my class try Twinkle Twinkle Little Star. Something
              clicked. In fifth grade I almost quit — my mom said no, then
              never mentioned it again. That quiet belief gave me the freedom
              to make the instrument truly my own.
            </p>
            <p>
              I discovered the violin could say things I didn&apos;t have
              words for — grief, joy, wonder, all of it wordless and intimate.
              Some of my most precious memories are of performing at my
              grandfather&apos;s funeral and community events, offering the
              kind of comfort that only music can give. In college, early
              morning and evening track practices as a varsity Track &amp;
              Field athlete at Wellesley gradually took over, and the violin
              quietly faded into the background. But it never fully left.
              During COVID, when the world went still, it resurfaced — and
              reminded me exactly why I had never been able to let it go.
            </p>
            <p>
              I teach using the Suzuki Method alongside approaches I have
              gathered across more than two decades of playing, learning, and
              living with this instrument. Because I believe music is caught
              before it&apos;s taught. My job isn&apos;t just to correct bow
              hold — it&apos;s to make your child fall in love with the sound
              they&apos;re capable of making.
            </p>
          </div>

          <div className="bio-divider" />

          {/* Bio 1 — Academic Tutor — RIGHT */}
          <div className="bio-col">
            <div className="bio-label">📚 Academic Tutor</div>
            <p className="bio-opener">
              Learning only goes as deep as the relationship that holds it.
            </p>
            <p>
              I come to teaching through history — a Bachelor&apos;s from
              Wellesley College and a Master&apos;s from Georgetown University,
              where I was selected as a Global Cities cohort member and
              received both a research grant and a department travel award,
              both of which sent me to the official hometown of Santa Claus in
              the Arctic for graduate research. After graduate school I was on
              track toward law school, but God had other plans — and it only
              made sense looking backwards.
            </p>
            <p>
              That road had taken me across continents and over a decade of
              teaching — elementary classrooms in Mexico and Beijing, a year
              living and studying in Taiwan, research and travel through Peru,
              mentoring first-generation college students in the DMV area, and
              teaching immigrant students across multiple subjects here in
              Irvine. There is something quietly extraordinary about every
              stage of learning — the toddler who suddenly connects a sound to
              a word, the senior who picks up something new just because they
              can. I have had the privilege of witnessing all of it.
            </p>
            <p>
              I offer personalized support in core subjects, ISEE/SSAT test
              prep, college application prep, and success-building skills —
              both in-person and online.
            </p>
            <p>
              At the end of the day, the subject is just the doorway. You are
              who I&apos;m here for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
