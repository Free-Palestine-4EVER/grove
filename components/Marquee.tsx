"use client";

import { useT } from "@/lib/i18n";
import { marqueeItems } from "@/lib/data";

export default function Marquee() {
  const { lang } = useT();
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee" style={{ background: "var(--grove)", color: "var(--paper)", paddingBlock: "1.05rem", borderBlock: "1px solid rgba(0,0,0,0.15)" }}>
      <div className="marquee__track" aria-hidden>
        {items.map((it, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-display)", fontStyle: lang === "ar" ? "normal" : "italic", fontSize: "1.25rem", fontWeight: 400, padding: "0 1.4rem", opacity: 0.95 }}>
              {it[lang]}
            </span>
            <span style={{ color: "var(--brass-2)", fontSize: "0.7rem" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
