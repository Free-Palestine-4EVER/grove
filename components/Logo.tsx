"use client";

export default function Logo({ tone = "ink", size = 1 }: { tone?: "ink" | "paper"; size?: number }) {
  const color = tone === "paper" ? "#FBF7F0" : "#1B1916";
  return (
    <span
      aria-label="The Grove — Furniture & Beyond"
      style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", lineHeight: 1, color, direction: "ltr", transition: "color .4s var(--ease)" }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          fontFamily: "var(--font-sans)",
          fontWeight: 300,
          letterSpacing: "0.12em",
          fontSize: `${1.18 * size}rem`,
          textTransform: "uppercase",
        }}
      >
        THE
        <span style={{ width: `${0.7 * size}em`, height: 1, background: color, margin: "0 -0.06em", display: "inline-block" }} />
        GROVE
      </span>
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          letterSpacing: "0.42em",
          fontSize: `${0.46 * size}rem`,
          textTransform: "uppercase",
          marginTop: `${0.32 * size}em`,
          marginInlineStart: "0.42em",
          opacity: 0.92,
        }}
      >
        Furniture &amp; Beyond
      </span>
    </span>
  );
}
