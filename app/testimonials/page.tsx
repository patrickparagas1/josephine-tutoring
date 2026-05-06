import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Testimonials · Josephine Tutoring",
  description: "What families say about working with Josephine.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Testimonial ids={["fun", "warm"]} />
        <Testimonial ids={["progress", "art"]} />
        <Testimonial ids={["identity", "video"]} />
        <Testimonial ids={["potential", "fun"]} />
      </main>
      <Footer />
    </>
  );
}
