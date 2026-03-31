import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AI Automation — AdmireTech";
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
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,43,0.15) 0%, transparent 70%)", display: "flex" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: "18px", color: "#FF6B2B", fontWeight: 700, letterSpacing: "2px", display: "flex" }}>SERVICE</div>
          <div style={{ fontSize: "56px", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.1, maxWidth: "800px" }}>AI Automation</div>
          <div style={{ fontSize: "24px", color: "#A0A0A0", maxWidth: "700px", lineHeight: 1.4 }}>
            Streamline operations with intelligent automation that reduces manual work and boosts efficiency.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span style={{ fontSize: "28px", fontWeight: 800, color: "#FFFFFF" }}>Admire</span>
            <span style={{ fontSize: "28px", fontWeight: 800, color: "#FF6B2B" }}>Tech</span>
          </div>
          <div style={{ display: "flex", gap: "24px", fontSize: "16px", color: "#A0A0A0" }}>
            <span>London</span>
            <span style={{ color: "#FF6B2B" }}>·</span>
            <span>Pune</span>
            <span style={{ color: "#FF6B2B" }}>·</span>
            <span>Lagos</span>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: "0", left: "0", width: "100%", height: "4px", background: "linear-gradient(90deg, #FF6B2B, #FFA040, #FF6B2B)", display: "flex" }} />
      </div>
    ),
    { ...size }
  );
}
