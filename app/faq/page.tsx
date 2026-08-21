import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "FAQ · Josephine Tutoring",
  description:
    "Answers to the questions parents ask most about sessions, scheduling, test prep, and payment.",
};

export default function FaqPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Faq />
      </main>
      <Footer />
    </>
  );
}
