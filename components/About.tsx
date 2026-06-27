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

        {/* Bio 1 — Academic Tutor */}
        <div className="bio-col bio-academic">
          <div className="bio-label">
            Private Educator
          </div>
          <p>
            Teaching, for me, grew out of a love of learning — one that was
            sharpened and challenged by the academic study of history. After
            receiving a Bachelor&apos;s from Wellesley College and a
            Master&apos;s from Georgetown University, I resolutely headed
            towards law school. But Providence stopped me.
          </p>
          <p>
            Looking back, there was always a throughline — sharing the joy
            of learning with individuals at the heart of it.
          </p>
          <p>
            My past has taken me across continents and over a decade of
            teaching — elementary classrooms in Mexico and Beijing, studying
            in Taiwan and Peru, research in the Arctic, and mentoring
            first-generation college students in the DMV area.
          </p>
          <p>
            As of late, I have been co-experiencing something quietly
            extraordinary about every stage of learning. The pleasure of
            being there when your toddler student suddenly connects a sound
            to a word. The warmth felt conversing with the senior who picks
            up something new with a sense of wonder. I am convinced that
            learning is about loving — and that it flourishes in relationship.
          </p>
          <p>
            At the end of the day, the subject is just the doorway. You are
            who I&apos;m here for.
          </p>
        </div>

        {/* Bio 2 — Violin Teacher */}
        <div className="bio-col bio-violin">
          <div className="bio-divider-h" />
          <div className="bio-label">
            Violin Coach
          </div>
          <p>
            My violin story began in elementary school when a visiting
            teacher let me attempt &ldquo;Twinkle Twinkle Little Star.&rdquo;
            Something sparked. But by the time fifth grade came around, I
            wanted to quit — my mom said no, then never mentioned it again.
            That boundary gave me the freedom to make the instrument my own.
          </p>
          <p>
            Over the years, I have discovered that the violin can articulate
            what words sometimes cannot — grief, joy, delight, and more.
            Although I have performed at Segerstrom, Walt Disney Concert
            Hall, Irish churches, and the House of Blues with a Beatles
            tribute group, one of my most precious memories is sharing my
            grandfather&apos;s favorite hymn, &ldquo;Blessed Assurance,&rdquo;
            at his funeral.
          </p>
          <p>
            In college, lifts and practices as a varsity Track &amp; Field
            athlete gradually took over, and the violin quietly faded into
            the background. During the COVID pandemic, however, it
            resurfaced — and reminded me exactly why I had never been able
            to let it go.
          </p>
          <p>
            I teach the approaches I have gathered across more than two
            decades of playing and learning this instrument. Because I
            believe music is caught before it&apos;s taught. My job
            isn&apos;t just to correct bow hold — it&apos;s to make your
            child fall in love with the sound they&apos;re capable of making.
          </p>
        </div>
      </div>
    </section>
  );
}
