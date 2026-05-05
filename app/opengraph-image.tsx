import { ImageResponse } from "next/og";

export const alt = "Josephine · Private Tutoring in Irvine";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5efe1",
          color: "#0f2547",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#3d6b52",
            marginBottom: 48,
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
            fontWeight: 500,
          }}
        >
          Private Tutoring · Irvine, CA
        </div>
        <div
          style={{
            fontSize: 96,
            textAlign: "center",
            lineHeight: 1.05,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>Patient help for</span>
          <span>
            <span style={{ fontStyle: "italic", color: "#3d6b52" }}>every</span>
            <span> kind of learner.</span>
          </span>
        </div>
        <div
          style={{
            fontSize: 28,
            marginTop: 64,
            color: "#3d6b52",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          josephinethetutor.com
        </div>
      </div>
    ),
    { ...size },
  );
}
