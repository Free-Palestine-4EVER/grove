"use client";

import { useT } from "@/lib/i18n";
import { collections } from "@/lib/data";
import Reveal from "./Reveal";

export default function Collections() {
  const { t, lang } = useT();

  return (
    <section id="collections" className="section" style={{ background: "var(--bone)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "3.5rem" }}>
          <div>
            <Reveal><span className="eyebrow" style={{ color: "var(--brass)" }}>{t("collections_eyebrow")}</span></Reveal>
            <Reveal delay={80}>
              <h2 className="display" style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", margin: "1rem 0 0" }}>{t("collections_title")}</h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <span style={{ fontSize: "0.85rem", color: "var(--ink-faint)", maxWidth: "26ch" }}>
              {lang === "en" ? "Six worlds, one address in Khilda." : "ستة عوالم، عنوان واحد في خلدا."}
            </span>
          </Reveal>
        </div>

        <div className="coll-grid">
          {collections.map((c, i) => (
            <Reveal key={c.id} delay={i * 70} className={`coll-cell coll-${c.span ?? "std"}`}>
              <a href="#tour" className="coll-card" data-cursor="hover">
                <div className="coll-imgwrap">
                  <img src={c.img} alt={c.name[lang]} className="coll-img" />
                  <div className="coll-scrim" />
                </div>
                <div className="coll-meta">
                  <div>
                    <span style={{ display: "block", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(251,247,240,0.7)", marginBottom: 6 }}>{c.count[lang]}</span>
                    <span className="display" style={{ fontSize: "clamp(1.4rem, 2.4vw, 2rem)", color: "var(--paper)" }}>{c.name[lang]}</span>
                  </div>
                  <span className="coll-arrow">↗</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .coll-grid { display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 230px; gap: 14px; }
        .coll-cell { grid-row: span 1; }
        .coll-std { grid-column: span 1; grid-row: span 1; }
        .coll-tall { grid-column: span 1; grid-row: span 2; }
        .coll-wide { grid-column: span 2; grid-row: span 1; }
        .coll-card { position: relative; display: block; height: 100%; overflow: hidden; border-radius: 3px; }
        .coll-imgwrap { position: absolute; inset: 0; }
        .coll-img { width: 100%; height: 100%; object-fit: cover; transition: transform 1.2s var(--ease), filter 1.2s var(--ease); transform: scale(1.02); filter: saturate(0.96); }
        .coll-card:hover .coll-img { transform: scale(1.1); }
        .coll-scrim { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 35%, rgba(16,15,13,0.72) 100%); }
        .coll-meta { position: absolute; inset-inline: 0; bottom: 0; padding: 1.3rem 1.4rem; display: flex; align-items: flex-end; justify-content: space-between; gap: 1rem; }
        .coll-arrow { color: var(--paper); font-size: 1.1rem; opacity: 0; transition: opacity .5s var(--ease), transform .5s var(--ease); }
        .coll-card:hover .coll-arrow { opacity: 1; transform: translateY(-3px); }
        @media (max-width: 980px) {
          .coll-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 200px; }
          .coll-wide { grid-column: span 2; }
          .coll-tall { grid-row: span 2; }
        }
        @media (max-width: 560px) {
          .coll-grid { grid-template-columns: 1fr 1fr; grid-auto-rows: 160px; }
          .coll-wide, .coll-tall { grid-column: span 2; grid-row: span 1; }
        }
      `}</style>
    </section>
  );
}
