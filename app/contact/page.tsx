import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import Faq from "@/components/Faq";
import Ornament from "@/components/Ornament";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Book a Consultation · Josephine Tutoring",
  description:
    "Book a free 15 minute consultation with Josephine. Private tutoring in Irvine, in person or online.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="main-content" style={{ paddingTop: "9rem" }}>
        <BookingForm />
      </main>
      <Faq />
      <Ornament />
      <Testimonial ids={["video"]} />
      <Footer />
    </>
  );
}
