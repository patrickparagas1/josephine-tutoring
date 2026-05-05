import { ImageResponse } from "next/og";

export type OgContent = {
  eyebrow?: string;
  titleLine1: string;
  titleLine2?: string;
  emphasis?: string;
};

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function renderOg(content: OgContent) {
  const { eyebrow, titleLine1, titleLine2, emphasis } = content;
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
          background: "#fdf7de",
          color: "#0f2547",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        {eyebrow ? (
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
            {eyebrow}
          </div>
        ) : null}
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
          <span>{titleLine1}</span>
          {titleLine2 ? (
            <span>
              {emphasis ? (
                <span style={{ fontStyle: "italic", color: "#3d6b52" }}>
                  {emphasis}
                </span>
              ) : null}
              {emphasis ? <span> </span> : null}
              <span>{titleLine2}</span>
            </span>
          ) : null}
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
    { ...ogSize },
  );
}
