"use client";

import { useT } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Manifesto() {
  const { t } = useT();
  return (
    <section className="section container" style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "2.5rem", alignItems: "end" }}>
      <div style={{ gridColumn: "1 / span 7" }} className="mani-text">
        <Reveal>
          <span className="eyebrow" style={{ color: "var(--brass)" }}>{t("manifesto_eyebrow")}</span>
        </Reveal>
        <Reveal delay={80}>
          <p className="display" style={{ fontSize: "clamp(1.7rem, 3.4vw, 3.2rem)", margin: "1.4rem 0 0", lineHeight: 1.12, fontWeight: 360 }}>
            {t("manifesto_lead")}
          </p>
        </Reveal>
        <Reveal delay={160}>
          <p style={{ maxWidth: "46ch", marginTop: "2rem", color: "var(--ink-soft)", fontSize: "1.02rem", lineHeight: 1.7 }}>
            {t("manifesto_body")}
          </p>
        </Reveal>
      </div>

      <div className="mani-img" style={{ gridColumn: "9 / span 4" }}>
        <Reveal delay={120}>
          <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", borderRadius: 2 }}>
            <img src="/grove/p11.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <span style={{ display: "block", marginTop: "0.8rem", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-faint)" }}>
            Helios Brass Collection
          </span>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .mani-text { grid-column: 1 / -1 !important; }
          .mani-img { grid-column: 1 / -1 !important; max-width: 360px; }
        }
      `}</style>
    </section>
  );
}
