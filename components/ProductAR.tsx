"use client";

import { createElement, useEffect, useState } from "react";
import { useT } from "@/lib/i18n";
import { models } from "@/lib/data";
import Reveal from "./Reveal";

export default function ProductAR() {
  const { t, lang } = useT();
  const [ready, setReady] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    let on = true;
    import("@google/model-viewer").then(() => on && setReady(true));
    return () => { on = false; };
  }, []);

  const m = models[idx];

  const viewer = ready
    ? createElement("model-viewer" as unknown as string, {
        key: m.id,
        src: m.src,
        alt: m.name[lang],
        "camera-controls": true,
        "auto-rotate": true,
        "auto-rotate-delay": 0,
        "rotation-per-second": "18deg",
        ar: true,
        "ar-modes": "webxr scene-viewer quick-look",
        "shadow-intensity": "1.1",
        "shadow-softness": "1",
        exposure: "1.05",
        "environment-image": "neutral",
        "camera-orbit": "30deg 78deg 105%",
        "min-camera-orbit": "auto 60deg auto",
        "interaction-prompt": "none",
        style: { width: "100%", height: "100%", backgroundColor: "transparent", "--poster-color": "transparent" } as React.CSSProperties,
      })
    : null;

  return (
    <section className="section" style={{ background: "var(--paper-2)" }}>
      <div className="container ar-grid">
        <div className="ar-copy">
          <Reveal><span className="eyebrow" style={{ color: "var(--brass)" }}>{t("ar_eyebrow")}</span></Reveal>
          <Reveal delay={80}>
            <h2 className="display" style={{ fontSize: "clamp(2.2rem, 5vw, 4.4rem)", margin: "1rem 0 0.9rem" }}>{t("ar_title")}</h2>
          </Reveal>
          <Reveal delay={140}><p style={{ color: "var(--ink-soft)", maxWidth: "42ch" }}>{t("ar_sub")}</p></Reveal>

          <Reveal delay={200}>
            <div style={{ marginTop: "2.2rem" }}>
              <div style={{ display: "flex", gap: "0.6rem", marginBottom: "1.6rem" }}>
                {models.map((mm, i) => (
                  <button key={mm.id} onClick={() => setIdx(i)} data-cursor="hover"
                    style={{
                      padding: "0.6em 1.1em", borderRadius: 100, cursor: "none", fontSize: "0.82rem", fontWeight: 500,
                      border: `1px solid ${i === idx ? "var(--ink)" : "var(--line)"}`,
                      background: i === idx ? "var(--ink)" : "transparent", color: i === idx ? "var(--paper)" : "var(--ink)",
                      transition: "all .3s var(--ease)",
                    }}>
                    {mm.name[lang]}
                  </button>
                ))}
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem" }}>{m.name[lang]}</div>
              <div style={{ color: "var(--ink-faint)", fontSize: "0.9rem", marginTop: 4 }}>{m.tagline[lang]}</div>
              <div style={{ marginTop: "0.9rem", fontWeight: 600, color: "var(--grove-2)", fontSize: "1.05rem" }}>{m.price}</div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="ar-stage-wrap">
          <div className="ar-stage">
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(60% 55% at 50% 60%, rgba(54,65,47,0.10), transparent 70%)" }} />
            {viewer ?? <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "var(--ink-faint)", fontSize: "0.85rem" }}>Loading 3D…</div>}
            <div className="ar-badge">
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--clay)", boxShadow: "0 0 0 4px rgba(178,116,87,0.22)" }} />
              {t("ar_drag")}
            </div>
            <a className="ar-viewbtn" href="#" onClick={(e) => e.preventDefault()} data-cursor="hover">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" /><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" /></svg>
              {t("ar_view")}
            </a>
          </div>
        </Reveal>
      </div>

      <style>{`
        .ar-grid { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: clamp(2rem, 5vw, 5rem); align-items: center; }
        .ar-stage { position: relative; aspect-ratio: 1/1; border-radius: 6px; background: linear-gradient(160deg, #fff, var(--bone)); border: 1px solid var(--line-soft); overflow: hidden; box-shadow: 0 40px 90px -50px rgba(0,0,0,0.35); }
        .ar-badge { position: absolute; top: 1rem; inset-inline-start: 1rem; z-index: 5; display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(251,247,240,0.85); backdrop-filter: blur(6px); border-radius: 100px; padding: 0.5rem 0.9rem; font-size: 0.72rem; letter-spacing: 0.04em; }
        .ar-viewbtn { position: absolute; bottom: 1rem; inset-inline-start: 50%; transform: translateX(-50%); z-index: 5; display: inline-flex; align-items: center; gap: 0.6rem; background: var(--ink); color: var(--paper); border-radius: 100px; padding: 0.85rem 1.4rem; font-size: 0.82rem; font-weight: 500; cursor: none; transition: background .3s var(--ease); white-space: nowrap; }
        html[dir="rtl"] .ar-viewbtn { transform: translateX(50%); }
        .ar-viewbtn:hover { background: var(--grove); }
        @media (max-width: 820px) { .ar-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
