"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useT } from "@/lib/i18n";
import { tourHotspots, type Hotspot } from "@/lib/data";
import Reveal from "./Reveal";

const R = 10;
const ARC = 2.5; // radians of visible wall
const IMG_ASPECT = 2048 / 1365;
const H = (R * ARC) / IMG_ASPECT;
const MAXYAW = ARC / 2 - 0.66;

function TourScene({ onSelect, selected }: { onSelect: (h: Hotspot) => void; selected: string | null }) {
  const group = useRef<THREE.Group>(null);
  const tex = useTexture("/grove/p05.jpg");
  const drag = useRef({ active: false, lastX: 0, yaw: 0, target: 0 });

  useMemo(() => {
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.repeat.x = -1; // un-mirror for BackSide
    tex.offset.x = 1;
  }, [tex]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!drag.current.active) return;
      const dx = e.clientX - drag.current.lastX;
      drag.current.lastX = e.clientX;
      drag.current.target = THREE.MathUtils.clamp(drag.current.target + dx * 0.0022, -MAXYAW, MAXYAW);
    };
    const onUp = () => { drag.current.active = false; document.body.style.cursor = ""; };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => { window.removeEventListener("pointermove", onMove); window.removeEventListener("pointerup", onUp); };
  }, []);

  useFrame(() => {
    const d = drag.current;
    d.yaw += (d.target - d.yaw) * 0.09;
    if (group.current) group.current.rotation.y = d.yaw;
  });

  return (
    <group ref={group}>
      <mesh
        onPointerDown={(e) => { drag.current.active = true; drag.current.lastX = e.nativeEvent.clientX; }}
      >
        <cylinderGeometry args={[R, R, H, 80, 1, true, Math.PI - ARC / 2, ARC]} />
        <meshBasicMaterial map={tex} side={THREE.BackSide} toneMapped={false} />
      </mesh>

      {tourHotspots.map((h) => {
        const theta = Math.PI + (h.x - 0.5) * ARC;
        const pos: [number, number, number] = [Math.sin(theta) * (R - 0.3), (0.5 - h.y) * H, Math.cos(theta) * (R - 0.3)];
        const open = selected === h.id;
        return (
          <Html key={h.id} position={pos} center distanceFactor={11} zIndexRange={[20, 0]}>
            <button
              className="hs"
              onClick={(e) => { e.stopPropagation(); onSelect(h); }}
              style={{
                position: "relative", width: 30, height: 30, borderRadius: "50%", border: "none", cursor: "none",
                background: open ? "var(--brass-2)" : "rgba(251,247,240,0.92)", display: "grid", placeItems: "center",
              }}
            >
              <span style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1.5px solid rgba(251,247,240,0.85)", animation: "pulse-ring 2.4s var(--ease) infinite" }} />
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--ink)" }} />
            </button>
          </Html>
        );
      })}
    </group>
  );
}

export default function VirtualTour() {
  const { t, lang } = useT();
  const [mounted, setMounted] = useState(false);
  const [sel, setSel] = useState<Hotspot>(tourHotspots[0]);
  useEffect(() => setMounted(true), []);

  return (
    <section id="tour" className="section" style={{ background: "#100f0d", color: "var(--paper)", paddingBlock: "clamp(4rem,8vw,7rem)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "2.4rem" }}>
          <div>
            <Reveal><span className="eyebrow" style={{ color: "var(--brass-2)" }}>{t("tour_eyebrow")}</span></Reveal>
            <Reveal delay={80}><h2 className="display" style={{ fontSize: "clamp(2.2rem, 5.2vw, 4.4rem)", margin: "0.9rem 0 0", color: "var(--paper)" }}>{t("tour_title")}</h2></Reveal>
          </div>
          <Reveal delay={120}><p style={{ color: "rgba(251,247,240,0.6)", maxWidth: "34ch", fontSize: "0.92rem" }}>{t("tour_sub")}</p></Reveal>
        </div>

        <Reveal delay={120}>
          <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 5, overflow: "hidden", background: "#0c0b0a", boxShadow: "0 50px 100px -50px rgba(0,0,0,0.8)", border: "1px solid rgba(251,247,240,0.08)" }}>
            {mounted && (
              <Canvas camera={{ position: [0, 0, 0.1], fov: 74 }} dpr={[1, 2]} gl={{ antialias: true }} style={{ cursor: "grab" }}>
                <Suspense fallback={null}>
                  <TourScene selected={sel.id} onSelect={setSel} />
                </Suspense>
              </Canvas>
            )}

            {/* vignette */}
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", boxShadow: "inset 0 0 140px 30px rgba(0,0,0,0.55)" }} />

            {/* drag hint */}
            <div style={{ position: "absolute", top: "1rem", insetInline: 0, display: "flex", justifyContent: "center", pointerEvents: "none" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(16,15,13,0.5)", backdropFilter: "blur(6px)", color: "rgba(251,247,240,0.85)", borderRadius: 100, padding: "0.5rem 1rem", fontSize: "0.72rem", letterSpacing: lang === "ar" ? "0" : "0.16em", textTransform: "uppercase" }}>
                ↔ {t("tour_enter")}
              </span>
            </div>

            {/* product card */}
            <div style={{ position: "absolute", bottom: "1.1rem", insetInlineStart: "1.1rem", zIndex: 10, background: "rgba(251,247,240,0.96)", color: "var(--ink)", borderRadius: 5, padding: "1rem 1.3rem", minWidth: 200, boxShadow: "0 20px 50px -20px rgba(0,0,0,0.6)", pointerEvents: "none" }}>
              <span style={{ display: "block", fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ink-faint)", marginBottom: 5 }}>{lang === "en" ? "In this room" : "في هذه الغرفة"}</span>
              <span style={{ display: "block", fontFamily: "var(--font-display)", fontSize: "1.25rem", lineHeight: 1.15 }}>{sel.name[lang]}</span>
              <span style={{ display: "block", marginTop: 5, fontWeight: 600, color: "var(--grove-2)" }}>{sel.price}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
