import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "About · Josephine Tutoring",
  description:
    "A note from Josephine on how she teaches and why. Warm, patient, and built around each student.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <Testimonial ids={["warm"]} />
      <main id="main-content" style={{ paddingTop: "9rem" }}>
        <About />
      </main>
      <Testimonial ids={["identity"]} />
      <Process />
      <Footer />
    </>
  );
}
