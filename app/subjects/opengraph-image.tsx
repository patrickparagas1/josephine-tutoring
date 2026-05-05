import { ogSize, ogContentType, renderOg } from "@/lib/og";

export const alt = "Subjects I teach · Josephine Tutoring";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOg({
    eyebrow: "What I help with",
    titleLine1: "Every grade.",
    emphasis: "Every kind",
    titleLine2: "of learner.",
  });
}
