import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Why Every Business Needs an AI Strategy in 2026";
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
          justifyContent: "space-between",
          padding: "60px",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,43,0.15) 0%, transparent 70%)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: "-120px", left: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,160,64,0.08) 0%, transparent 70%)", display: "flex" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ background: "rgba(255,107,43,0.15)", padding: "6px 16px", borderRadius: "20px", fontSize: "16px", color: "#FF6B2B", fontWeight: 600, display: "flex" }}>Strategy</div>
            <div style={{ fontSize: "16px", color: "#A0A0A0", display: "flex" }}>6 min read</div>
          </div>
          <div style={{ fontSize: "48px", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.15, maxWidth: "900px" }}>
            Why Every Business Needs an AI Strategy in 2026
          </div>
          <div style={{ fontSize: "22px", color: "#A0A0A0", maxWidth: "750px", lineHeight: 1.4 }}>
            From startups to enterprises, a practical roadmap that delivers real results.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span style={{ fontSize: "28px", fontWeight: 800, color: "#FFFFFF" }}>Admire</span>
            <span style={{ fontSize: "28px", fontWeight: 800, color: "#FF6B2B" }}>Tech</span>
          </div>
          <div style={{ fontSize: "16px", color: "#A0A0A0", display: "flex" }}>admireit.co/blog</div>
        </div>

        <div style={{ position: "absolute", bottom: "0", left: "0", width: "100%", height: "4px", background: "linear-gradient(90deg, #FF6B2B, #FFA040, #FF6B2B)", display: "flex" }} />
      </div>
    ),
    { ...size }
  );
}
