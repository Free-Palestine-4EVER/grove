"use client";

import { useT } from "@/lib/i18n";
import { testimonials, stats } from "@/lib/data";
import Reveal from "./Reveal";

export default function Proof() {
  const { t, lang } = useT();
  return (
    <section className="section" style={{ background: "var(--bone)" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 3.4rem" }}>
          <Reveal><span className="eyebrow" style={{ color: "var(--brass)" }}>{t("proof_eyebrow")}</span></Reveal>
          <Reveal delay={80}>
            <h2 className="display" style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)", margin: "1rem 0 0.7rem" }}>{t("proof_title")}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="serif-i" style={{ color: "var(--grove-2)", fontSize: "1.05rem" }}>{t("proof_since")}</p>
          </Reveal>
        </div>

        {/* stats */}
        <Reveal delay={120}>
          <div className="proof-stats">
            {stats.map((s) => (
              <div key={s.label} className="proof-stat">
                <span className="display" style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)", color: "var(--grove)" }}>{s.value}</span>
                <span style={{ fontSize: "0.74rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-faint)" }}>{t(s.label)}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* testimonials */}
        <div className="proof-grid">
          {testimonials.map((tm, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure className="proof-card">
                <span className="proof-quote">&ldquo;</span>
                <blockquote style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "1.18rem", lineHeight: 1.45, color: "var(--ink)" }}>
                  {tm.quote[lang]}
                </blockquote>
                <figcaption style={{ marginTop: "1.5rem", display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <span style={{ width: 34, height: 34, borderRadius: "50%", background: "var(--grove)", color: "var(--paper)", display: "grid", placeItems: "center", fontSize: "0.85rem", fontFamily: "var(--font-display)" }}>{tm.name[0]}</span>
                  <span>
                    <span style={{ display: "block", fontWeight: 600, fontSize: "0.92rem" }}>{tm.name}</span>
                    <span style={{ display: "block", fontSize: "0.78rem", color: "var(--ink-faint)" }}>{tm.role[lang]}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .proof-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--line-soft); border-block: 1px solid var(--line-soft); margin-bottom: 3.5rem; }
        .proof-stat { background: var(--bone); padding: 1.8rem 1rem; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; text-align: center; }
        .proof-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem; }
        .proof-card { position: relative; margin: 0; background: var(--paper); border: 1px solid var(--line-soft); border-radius: 4px; padding: 2.2rem 1.8rem 2rem; height: 100%; overflow: hidden; }
        .proof-quote { position: absolute; top: 0.2rem; inset-inline-end: 1rem; font-family: var(--font-display); font-size: 5rem; color: var(--brass); opacity: 0.22; line-height: 1; }
        @media (max-width: 820px) { .proof-grid { grid-template-columns: 1fr; } .proof-stats { grid-template-columns: 1fr 1fr; } }
      `}</style>
    </section>
  );
}
