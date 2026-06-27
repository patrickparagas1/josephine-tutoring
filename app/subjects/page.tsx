import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Subjects · Josephine Tutoring",
  description:
    "Academic subjects, test prep, college applications, and creative projects — from pre-K to 12th grade.",
};

export default function SubjectsPage() {
  return (
    <>
      <Nav />
      <main id="main-content" style={{ paddingTop: "4rem" }}>
        <Services />
      </main>
      <Footer />
    </>
  );
}
