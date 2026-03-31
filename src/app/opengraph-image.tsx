import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AdmireTech — AI-Powered Digital Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 50%, #0D0D0D 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gradient orb top-right */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,107,43,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        {/* Gradient orb bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,160,64,0.1) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            marginBottom: "24px",
          }}
        >
          <span style={{ fontSize: "64px", fontWeight: 800, color: "#FFFFFF" }}>
            Admire
          </span>
          <span style={{ fontSize: "64px", fontWeight: 800, color: "#FF6B2B" }}>
            Tech
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            color: "#A0A0A0",
            fontWeight: 400,
            letterSpacing: "-0.5px",
            marginBottom: "40px",
          }}
        >
          AI-Powered Digital Agency
        </div>

        {/* Locations */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            fontSize: "18px",
            color: "#A0A0A0",
          }}
        >
          <span>London</span>
          <span style={{ color: "#FF6B2B" }}>•</span>
          <span>Pune</span>
          <span style={{ color: "#FF6B2B" }}>•</span>
          <span>Lagos</span>
        </div>

        {/* Bottom border accent */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "4px",
            background: "linear-gradient(90deg, #FF6B2B, #FFA040, #FF6B2B)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
