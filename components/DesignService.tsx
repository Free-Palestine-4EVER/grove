"use client";

import { useRef, useState, useCallback } from "react";
import { useT } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function DesignService() {
  const { t } = useT();
  const [pos, setPos] = useState(50);
  const wrap = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClient = useCallback((clientX: number) => {
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  }, []);

  const onDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setFromClient(e.clientX);
  };
  const onMove = (e: React.PointerEvent) => { if (dragging.current) setFromClient(e.clientX); };
  const onUp = () => { dragging.current = false; };

  return (
    <section id="design" className="section container">
      <div style={{ maxWidth: 640, marginBottom: "3rem" }}>
        <Reveal><span className="eyebrow" style={{ color: "var(--brass)" }}>{t("design_eyebrow")}</span></Reveal>
        <Reveal delay={80}>
          <h2 className="display" style={{ fontSize: "clamp(2.2rem, 5.2vw, 4.4rem)", margin: "1rem 0 0.8rem" }}>{t("design_title")}</h2>
        </Reveal>
        <Reveal delay={140}><p style={{ color: "var(--ink-soft)", maxWidth: "50ch" }}>{t("design_sub")}</p></Reveal>
      </div>

      <Reveal delay={120}>
        <div
          ref={wrap}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerLeave={onUp}
          style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", borderRadius: 4, userSelect: "none", touchAction: "none", boxShadow: "0 30px 70px -40px rgba(0,0,0,0.4)" }}
        >
          {/* Delivered (full color) */}
          <img src="/grove/p06.jpg" alt={t("design_after")} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} draggable={false} />

          {/* Concept (clipped overlay) */}
          <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <img src="/grove/p06.jpg" alt={t("design_before")} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) contrast(1.04) brightness(1.04)" }} draggable={false} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(54,65,47,0.34), rgba(40,55,80,0.30))", mixBlendMode: "multiply" }} />
            <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(251,247,240,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(251,247,240,0.18) 1px, transparent 1px)", backgroundSize: "44px 44px", opacity: 0.5 }} />
          </div>

          {/* labels */}
          <Tag side="start" text={t("design_before")} />
          <Tag side="end" text={t("design_after")} />

          {/* handle */}
          <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, transform: "translateX(-50%)", width: 2, background: "var(--paper)", boxShadow: "0 0 18px rgba(0,0,0,0.4)", zIndex: 4 }}>
            <button
              onPointerDown={onDown}
              aria-label="Drag to compare"
              data-cursor="hover"
              style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 52, height: 52, borderRadius: "50%", background: "var(--paper)", border: "none", cursor: "none", display: "grid", placeItems: "center", boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}
            >
              <span style={{ color: "var(--ink)", fontSize: "1rem", letterSpacing: "-2px" }}>‹ ›</span>
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Tag({ side, text }: { side: "start" | "end"; text: string }) {
  return (
    <span style={{
      position: "absolute", top: "1.1rem", [side === "start" ? "insetInlineStart" : "insetInlineEnd"]: "1.1rem",
      zIndex: 3, background: "rgba(16,15,13,0.55)", backdropFilter: "blur(6px)", color: "var(--paper)",
      fontSize: "0.66rem", letterSpacing: "0.22em", textTransform: "uppercase", padding: "0.45rem 0.85rem", borderRadius: 100,
    } as React.CSSProperties}>{text}</span>
  );
}
