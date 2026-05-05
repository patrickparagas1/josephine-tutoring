import { ogSize, ogContentType, renderOg } from "@/lib/og";

export const alt = "Honest rates · Josephine Tutoring";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOg({
    eyebrow: "Simple, transparent pricing",
    titleLine1: "Honest",
    emphasis: "rates.",
    titleLine2: "No contracts.",
  });
}
