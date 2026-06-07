"use client";

import { useT } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Visit() {
  const { t, lang } = useT();
  return (
    <section id="visit" className="section container">
      <div className="visit-grid">
        <div className="visit-info">
          <Reveal><span className="eyebrow" style={{ color: "var(--brass)" }}>{t("visit_eyebrow")}</span></Reveal>
          <Reveal delay={80}>
            <h2 className="display" style={{ fontSize: "clamp(2.4rem, 6vw, 4.6rem)", margin: "1.1rem 0 2rem" }}>{t("visit_title")}</h2>
          </Reveal>

          <Reveal delay={140}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem", maxWidth: 420 }}>
              <Row label={lang === "en" ? "Showroom" : "المعرض"} value={t("visit_addr")} />
              <div className="rule" />
              <Row label={lang === "en" ? "Hours" : "ساعات العمل"} value={t("visit_hours")} />
              <div className="rule" />
              <Row label={lang === "en" ? "Find us" : "تابعونا"} value="@thegrovejo · 103k" />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", marginTop: "2.4rem" }}>
              <a href="#" className="btn btn-solid">{t("consult")} <span className="arrow">→</span></a>
              <a href="#" className="btn btn-ghost">{t("visit_cta")}</a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="visit-mapwrap">
          <div className="visit-map">
            <img src="/grove/p04.jpg" alt="The Grove showroom" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div className="visit-pin">
              <span className="visit-pin-dot" />
              <span>Khilda · Amman</span>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .visit-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(2rem, 5vw, 5rem); align-items: center; }
        .visit-map { position: relative; aspect-ratio: 4/5; overflow: hidden; border-radius: 3px; }
        .visit-pin { position: absolute; bottom: 1.2rem; inset-inline-start: 1.2rem; display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(251,247,240,0.92); backdrop-filter: blur(6px); padding: 0.55rem 0.95rem; border-radius: 100px; font-size: 0.78rem; font-weight: 600; }
        .visit-pin-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--clay); box-shadow: 0 0 0 4px rgba(178,116,87,0.25); }
        @media (max-width: 820px) { .visit-grid { grid-template-columns: 1fr; } .visit-mapwrap { order: -1; } .visit-map { aspect-ratio: 16/10; } }
      `}</style>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: "1.5rem", alignItems: "baseline" }}>
      <span style={{ fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-faint)", flexShrink: 0 }}>{label}</span>
      <span style={{ fontSize: "1.05rem", textAlign: "end", color: "var(--ink)" }}>{value}</span>
    </div>
  );
}
