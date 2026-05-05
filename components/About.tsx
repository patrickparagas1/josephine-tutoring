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
              sizes="(max-width: 900px) 280px, 35vw"
              quality={95}
              priority
            />
          </div>
        </div>
        <div className="about-text-col">
          <div className="section-eyebrow">A note from Josephine</div>
          <h2 className="section-title">
            Every student
            <br />
            learns <em>uniquely</em>.
          </h2>
          <div className="about-intro">
            <p>
              Every student learns uniquely. I started tutoring because I
              believe no one should feel lost and alone. Some need a fresh
              way to see a daunting essay prompt. Some need someone to help
              them break down a math problem. Some just need an hour where
              they feel engaged and curious, not hurried.
            </p>
            <p>
              I work with families across Irvine, in their homes, at the
              library, or over video. Lessons are calm, focused, and built
              around what your student actually needs, not a prepackaged
              curriculum.
            </p>
            <p>
              If you think I might be a good fit, reach out. The first
              conversation is always free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
