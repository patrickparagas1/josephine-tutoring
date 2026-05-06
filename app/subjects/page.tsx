import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Subjects · Josephine Tutoring",
  description:
    "Academic subjects, test prep, creative projects, and college application help from kindergarten through 12th grade.",
};

export default function SubjectsPage() {
  return (
    <>
      <Nav />
      <Testimonial ids={["art", "potential"]} />
      <main id="main-content">
        <Services />
      </main>
      <Footer />
    </>
  );
}
