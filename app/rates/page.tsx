import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Rates from "@/components/Rates";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Rates · Josephine Tutoring",
  description:
    "Transparent hourly rates for private tutoring in Irvine. Pay per session, no contracts, first consultation always free.",
};

export default function RatesPage() {
  return (
    <>
      <Nav />
      <main id="main-content" style={{ paddingTop: "9rem" }}>
        <Rates />
      </main>
      <Testimonial ids={["potential"]} />
      <Footer />
    </>
  );
}
