import { ogSize, ogContentType, renderOg } from "@/lib/og";

export const alt = "Book a free 15 minute call · Josephine Tutoring";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOg({
    eyebrow: "Book a free consultation",
    titleLine1: "Let's find",
    titleLine2: "the right fit.",
    emphasis: "",
  });
}
