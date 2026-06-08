"use client";

import { useEffect, useRef, useState } from "react";
import { Rise, RevealLines, motion } from "@/components/motion";

interface Piece {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  photo: string;
  model: string;
  meta: string[];
  accent: string;
}

const PIECES: Piece[] = [
  {
    id: "chesterfield-cream",
    name: "The Cream Chesterfield",
    tagline: "Chic design meets ultimate coziness",
    desc:
      "Deep-buttoned tufting, generous rolled arms and hand-set studwork, wrapped in a soft natural linen. A timeless club piece built around a single sink-in cushion — quietly grand, endlessly comfortable.",
    photo: "/grove/chesterfield-cream.jpg",
    model: "/models/chesterfield-cream.glb",
    meta: ["Hand-tufted linen", "Solid turned legs", "Made to order"],
    accent: "#b8a98c",
  },
  {
    id: "lounge-orange",
    name: "The Bold Orange Lounge",
    tagline: "Bold in colour, soft in style",
    desc:
      "A sculptural sling lounge with a plush pillow seat in burnt-orange leather, slung on a blackened-steel frame. Arrives with its matching ottoman — your new favourite seat, made to be noticed.",
    photo: "/grove/lounge-orange.jpg",
    model: "/models/lounge-orange.glb",
    meta: ["Burnt-orange leather", "Blackened steel frame", "Chair + ottoman"],
    accent: "#c0703a",
  },
];

/* One 3D panel. Shows the photo as a poster; only mounts the (large) model-viewer
   once the panel scrolls into view, so each GLB downloads on demand — not on load. */
function Viewer3D({ piece: p, mvReady }: { piece: Piece; mvReady: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const active = inView && mvReady;

  return (
    <div ref={ref} className="cx__viewer" style={{ ["--accent" as string]: p.accent }}>
      <span className="cx__badge">3D · Live</span>
      {/* photo poster sits under the canvas until the model has painted */}
      <img className={`cx__poster ${loaded ? "is-hidden" : ""}`} src={p.photo} alt="" aria-hidden />
      {active && (
        <model-viewer
          src={p.model}
          poster={p.photo}
          alt={`${p.name} 3D model`}
          camera-controls
          touch-action="pan-y"
          auto-rotate
          auto-rotate-delay="500"
          rotation-per-second="16deg"
          interaction-prompt="none"
          ar
          ar-modes="webxr scene-viewer quick-look"
          ar-placement="floor"
          shadow-intensity="1.1"
          shadow-softness="1"
          exposure="1.05"
          environment-image="neutral"
          loading="eager"
          reveal="auto"
          onLoad={() => setLoaded(true)}
          style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
        >
          <div slot="progress-bar" className="cx__bar" />
        </model-viewer>
      )}
      {!loaded && <span className="cx__loading-tag">Loading 3D…</span>}
      <span className="cx__hint">⟲ Drag to spin</span>
    </div>
  );
}

export default function ClientExample() {
  // Load the model-viewer web component once, on the client only.
  const [mvReady, setMvReady] = useState(false);
  useEffect(() => {
    let active = true;
    import("@google/model-viewer").then(() => active && setMvReady(true));
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="cx">
      {/* Intro */}
      <header className="cx__head container">
        <Rise as="span" className="eyebrow" style={{ color: "var(--brass)", display: "block" }}>
          Featured Pieces · Spin in 3D
        </Rise>
        <RevealLines
          className="display cx__title"
          lines={["Two pieces,", "in full dimension."]}
          italicIndex={1}
          italicColor="var(--brass)"
          delay={0.08}
        />
        <Rise delay={0.16}>
          <p className="cx__lead">
            Straight from the showroom floor. See each piece in photograph, then drag to turn it
            over in your hands — every angle, every stitch.
          </p>
        </Rise>
      </header>

      {/* Pieces */}
      <div className="cx__list">
        {PIECES.map((p, i) => (
          <article key={p.id} className={`cx__row ${i % 2 ? "cx__row--rev" : ""}`}>
            {/* Photograph */}
            <Rise className="cx__media" delay={0.05}>
              <figure className="cx__photo">
                <img src={p.photo} alt={`${p.name} — ${p.tagline}`} loading="lazy" />
                <figcaption>As shown · The Grove, Khilda</figcaption>
              </figure>
            </Rise>

            {/* 3D viewer — loads only when scrolled into view */}
            <Rise className="cx__media" delay={0.12}>
              <Viewer3D piece={p} mvReady={mvReady} />
            </Rise>

            {/* Copy */}
            <div className="cx__copy">
              <Rise delay={0.05}>
                <span className="cx__index">0{i + 1}</span>
                <h2 className="display cx__name">{p.name}</h2>
                <p className="cx__tag">{p.tagline}</p>
                <p className="cx__desc">{p.desc}</p>
                <ul className="cx__meta">
                  {p.meta.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
                <a href={`https://wa.me/962796666375?text=${encodeURIComponent("Hi The Grove — I'm interested in " + p.name)}`} className="btn btn-solid cx__cta" data-cursor="hover">
                  Enquire on WhatsApp <span className="arrow">→</span>
                </a>
              </Rise>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .cx { background: var(--paper); padding-block: clamp(6rem, 12vw, 10rem); overflow: hidden; }
        .cx__head { max-width: 760px; margin-bottom: clamp(3rem, 7vw, 6rem); }
        .cx__title { font-size: clamp(2.6rem, 7vw, 5.4rem); margin: 1rem 0 0; }
        .cx__lead { color: var(--ink-soft); font-size: clamp(1rem, 1.4vw, 1.2rem); line-height: 1.65; max-width: 52ch; margin-top: 1.6rem; }

        .cx__list { display: flex; flex-direction: column; gap: clamp(5rem, 12vw, 9rem); }
        .cx__row { width: 100%; max-width: 1480px; margin-inline: auto; padding-inline: var(--gut);
          display: grid; grid-template-columns: 1fr 1fr; grid-template-areas: "photo viewer" "copy copy"; gap: clamp(1rem, 2.4vw, 2rem); align-items: stretch; }

        .cx__media { min-height: 0; }
        .cx__photo { position: relative; margin: 0; border-radius: 6px; overflow: hidden; height: 100%; box-shadow: 0 40px 80px -50px rgba(0,0,0,0.5); }
        .cx__photo img { width: 100%; height: 100%; min-height: clamp(320px, 42vw, 560px); object-fit: cover; display: block; }
        .cx__photo figcaption { position: absolute; bottom: 0; inset-inline: 0; padding: 1.4rem 1.2rem 0.9rem; color: var(--paper);
          font-size: 0.66rem; letter-spacing: 0.2em; text-transform: uppercase; background: linear-gradient(transparent, rgba(16,15,13,0.6)); }

        .cx__viewer { position: relative; height: 100%; min-height: clamp(320px, 42vw, 560px); border-radius: 6px; overflow: hidden;
          background: radial-gradient(120% 100% at 50% 10%, #fff 0%, var(--paper-2) 55%, #ece4d6 100%);
          border: 1px solid var(--line-soft); box-shadow: inset 0 1px 0 rgba(255,255,255,0.6); }
        .cx__viewer model-viewer { --poster-color: transparent; }
        .cx__badge { position: absolute; top: 1rem; inset-inline-start: 1rem; z-index: 3; display: inline-flex; align-items: center; gap: 0.45rem;
          background: var(--ink); color: var(--paper); font-size: 0.6rem; letter-spacing: 0.18em; text-transform: uppercase; padding: 0.4em 0.8em; border-radius: 100px; }
        .cx__badge::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 8px var(--accent); }
        .cx__hint { position: absolute; bottom: 1rem; inset-inline-end: 1rem; z-index: 3; color: var(--ink-faint);
          font-size: 0.64rem; letter-spacing: 0.16em; text-transform: uppercase; pointer-events: none; }
        .cx__poster { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1;
          transition: opacity 0.8s var(--ease); filter: saturate(0.96); }
        .cx__poster.is-hidden { opacity: 0; pointer-events: none; }
        .cx__viewer model-viewer { position: relative; z-index: 2; }
        .cx__loading-tag { position: absolute; bottom: 1rem; inset-inline-start: 1rem; z-index: 3; color: var(--paper);
          font-size: 0.62rem; letter-spacing: 0.16em; text-transform: uppercase; background: rgba(16,15,13,0.5);
          padding: 0.35em 0.8em; border-radius: 100px; backdrop-filter: blur(4px); }
        .cx__bar { display: grid; place-items: center; height: 100%; color: var(--ink-faint); font-size: 0.8rem; }

        .cx__copy { grid-area: copy; padding-top: clamp(1rem, 2vw, 1.6rem); max-width: 60ch; }
        .cx__index { font-family: var(--font-display); color: var(--brass); font-size: 0.9rem; letter-spacing: 0.1em; }
        .cx__name { font-size: clamp(1.9rem, 4vw, 3rem); margin: 0.4rem 0 0; }
        .cx__tag { font-family: var(--font-display); font-style: italic; color: var(--brass); font-size: clamp(1.05rem, 1.6vw, 1.35rem); margin: 0.5rem 0 0; }
        html[dir="rtl"] .cx__tag { font-style: normal; }
        .cx__desc { color: var(--ink-soft); line-height: 1.7; margin: 1.1rem 0 0; }
        .cx__meta { list-style: none; padding: 0; margin: 1.5rem 0 0; display: flex; flex-wrap: wrap; gap: 0.6rem; }
        .cx__meta li { font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-soft);
          border: 1px solid var(--line); border-radius: 100px; padding: 0.5em 1em; }
        .cx__cta { margin-top: 2rem; }

        /* Desktop: copy sits beside the active media for an editorial split */
        @media (min-width: 861px) {
          .cx__row { grid-template-columns: 1.05fr 1fr; grid-template-areas: "photo viewer" "copy viewer"; align-items: start; }
          .cx__row--rev { grid-template-columns: 1fr 1.05fr; grid-template-areas: "viewer photo" "viewer copy"; }
          .cx__copy { align-self: end; padding-bottom: 0.5rem; }
        }

        @media (max-width: 860px) {
          .cx__row { grid-template-columns: 1fr; grid-template-areas: "photo" "viewer" "copy"; gap: 1rem; }
          .cx__photo img, .cx__viewer { min-height: 78vw; }
          .cx__copy { padding-top: 0.6rem; }
          .cx__cta { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
}
