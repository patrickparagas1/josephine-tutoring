import { ogSize, ogContentType, renderOg } from "@/lib/og";

export const alt = "A note from Josephine · Private Tutoring in Irvine";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOg({
    eyebrow: "A note from Josephine",
    titleLine1: "Every student",
    emphasis: "learns",
    titleLine2: "uniquely.",
  });
}
