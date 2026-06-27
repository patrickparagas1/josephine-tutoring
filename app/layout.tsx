import type { Metadata, Viewport } from "next";
import { Lora, Inter_Tight } from "next/font/google";
import "./globals.css";

const fraunces = Lora({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://josephinethetutor.com"),
  title: {
    default: "Josephine · Private Tutoring in Irvine & Orange County & Orange County",
    template: "%s · Josephine Tutoring",
  },
  description:
    "Patient, personalized tutoring in Irvine and along the Orange County coast — from pre-K to 12th grade. Academic subjects, test prep, college applications, and creative projects. At home or online.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Josephine · Private Tutoring in Irvine & Orange County & Orange County",
    description:
      "Patient, personalized tutoring from pre-K to 12th grade. Academic subjects, test prep, college applications, and creative projects. At home or online.",
    siteName: "Josephine Tutoring",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Josephine · Private Tutoring in Irvine & Orange County & Orange County",
    description:
      "Patient, personalized tutoring for students from kindergarten through 12th grade. At home or online.",
  },
  keywords: [
    "Irvine tutor",
    "private tutor Irvine",
    "Newport Beach tutor",
    "private tutor Newport Beach",
    "Dana Point tutor",
    "Orange County private tutor",
    "K-12 tutoring",
    "SAT prep Irvine",
    "SAT prep Newport Beach",
    "ACT prep Irvine",
    "ACT prep Newport Beach",
    "college application essays Irvine",
    "college application essays Newport Beach",
    "IUSD tutor",
    "creative writing coach",
    "math tutor Irvine",
    "math tutor Newport Beach",
  ],
  authors: [{ name: "Josephine" }],
  creator: "Josephine",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fdf7de",
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://josephinethetutor.com",
  name: "Josephine Tutoring",
  url: "https://josephinethetutor.com",
  telephone: "+1-949-393-9913",
  email: "josephinethetutor@gmail.com",
  description:
    "Patient, personalized tutoring in Irvine and along the Orange County coast — from pre-K to 12th grade. Academic subjects, test prep, college applications, and creative projects.",
  areaServed: [
    { "@type": "City", name: "Irvine" },
    { "@type": "City", name: "Newport Beach" },
    { "@type": "City", name: "Dana Point" },
    { "@type": "City", name: "Tustin" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Irvine",
    addressRegion: "CA",
    addressCountry: "US",
  },
  priceRange: "$85-$175",
  knowsAbout: [
    "Reading",
    "Writing",
    "Math",
    "SAT preparation",
    "ACT preparation",
    "College application essays",
    "Creative writing",
    "Art portfolios",
    "Early learning",
    "English for International Learners",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${interTight.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </body>
    </html>
  );
}
