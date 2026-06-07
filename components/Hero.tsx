"use client";

import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";

export default function Hero() {
  const { t, lang } = useT();
  const ease = [0.22, 1, 0.36, 1] as const;

  const up = {
    hidden: { y: "108%" },
    show: (i: number) => ({ y: "0%", transition: { duration: 1.0, ease, delay: 0.35 + i * 0.1 } }),
  };
  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease, delay },
  });

  return (
    <section id="top" className="hero">
      {/* LEFT — solid grove panel */}
      <div className="hero__panel grain">
        <div className="hero__panel-glow" />
        <div className="hero__content">
          <motion.span {...fade(0.2)} className="eyebrow" style={{ color: "var(--brass-2)", display: "block" }}>
            {t("hero_eyebrow")}
          </motion.span>

          <h1 className="display hero__title">
            {[t("hero_l1"), t("hero_l2"), t("hero_l3")].map((line, i) => (
              <span key={i} style={{ display: "block", overflow: "hidden", paddingBottom: "0.06em" }}>
                <motion.span variants={up} custom={i} initial="hidden" animate="show" style={{ display: "inline-block" }}>
                  {i === 1 ? <span className="serif-i" style={{ color: "var(--brass-2)" }}>{line}</span> : line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p {...fade(0.85)} className="hero__sub">{t("hero_sub")}</motion.p>

          <motion.div {...fade(1.0)} className="hero__cta">
            <a href="#collections" className="btn hero__cta-1">{t("hero_cta1")} <span className="arrow">→</span></a>
            <a href="#tour" className="btn hero__cta-2">{t("hero_cta2")}</a>
          </motion.div>

          <motion.div {...fade(1.15)} className="hero__meta">
            <span>103K+ {lang === "en" ? "following" : "متابع"}</span>
            <span className="hero__dot" />
            <span>{lang === "en" ? "Khilda · Amman" : "خلدا · عمّان"}</span>
            <span className="hero__dot" />
            <span>{lang === "en" ? "Est. Jordan" : "صُنع في الأردن"}</span>
          </motion.div>
        </div>

        <div className="hero__rule" />
      </div>

      {/* RIGHT — image */}
      <motion.div
        className="hero__image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease }}
      >
        <div className="hero__img-inner" style={{ backgroundImage: "url(/grove/p07.jpg)" }} />
        <div className="hero__img-scrim" />
        <div className="hero__img-top" />
        <motion.div {...fade(1.1)} className="hero__tag">
          <span className="hero__tag-k">{lang === "en" ? "Featured" : "مميّز"}</span>
          {lang === "en" ? "The Aspen Bedroom" : "غرفة نوم أسبن"}
        </motion.div>
        <motion.div {...fade(1.3)} className="hero__scroll">
          <span>{t("scroll")}</span>
          <span className="hero__scroll-line" />
        </motion.div>
      </motion.div>

      <style>{`
        .hero { position: relative; display: flex; min-height: 100svh; background: var(--grove); }
        .hero__panel { position: relative; flex: 1 1 50%; background: var(--grove); display: flex; align-items: center; overflow: hidden; }
        .hero__panel-glow { position: absolute; inset: 0; background:
            radial-gradient(70% 50% at 22% 18%, rgba(140,154,120,0.20), transparent 60%),
            radial-gradient(60% 60% at 90% 100%, rgba(20,26,18,0.55), transparent 60%);
          pointer-events: none; }
        .hero__content { position: relative; z-index: 2; width: 100%; padding-inline: clamp(1.6rem, 5vw, 5.5rem); padding-block: clamp(7rem, 12vh, 9rem) clamp(2.5rem, 6vh, 4rem); max-width: 720px; margin-inline-start: auto; }
        .hero__title { color: var(--paper); font-size: clamp(3rem, 6.6vw, 6.4rem); margin: 1.5rem 0 0; font-weight: 360; }
        .hero__sub { color: rgba(251,247,240,0.80); font-size: clamp(1rem, 1.25vw, 1.2rem); line-height: 1.6; max-width: 40ch; margin: 1.8rem 0 0; font-weight: 300; }
        .hero__cta { display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 2.2rem; }
        .hero__cta-1 { background: var(--paper); color: var(--ink); }
        .hero__cta-1:hover { background: var(--brass-2); transform: translateY(-2px); }
        .hero__cta-2 { border: 1px solid rgba(251,247,240,0.42); color: var(--paper); }
        .hero__cta-2:hover { background: rgba(251,247,240,0.10); border-color: var(--paper); }
        .hero__meta { display: flex; align-items: center; flex-wrap: wrap; gap: 0.85rem; margin-top: 2.6rem; color: rgba(251,247,240,0.62); font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; }
        .hero__dot { width: 4px; height: 4px; border-radius: 50%; background: var(--brass-2); }
        .hero__rule { position: absolute; inset-inline-end: 0; top: 12%; bottom: 12%; width: 1px; background: linear-gradient(transparent, rgba(197,160,106,0.5), transparent); }

        .hero__image { position: relative; flex: 1 1 50%; overflow: hidden; }
        .hero__img-inner { position: absolute; inset: 0; background-size: cover; background-position: center 38%; animation: kenburns 22s ease-out forwards; }
        .hero__img-scrim { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(54,65,47,0.55) 0%, transparent 22%); }
        .hero__img-top { position: absolute; inset-inline: 0; top: 0; height: 160px; background: linear-gradient(rgba(16,15,13,0.62), rgba(16,15,13,0.12) 55%, transparent); }
        .hero__tag { position: absolute; bottom: 1.6rem; inset-inline-end: 1.6rem; z-index: 3; display: inline-flex; align-items: center; gap: 0.7rem; background: rgba(251,247,240,0.92); backdrop-filter: blur(8px); color: var(--ink); padding: 0.6rem 1rem 0.6rem 0.7rem; border-radius: 100px; font-size: 0.84rem; font-family: var(--font-display); }
        .hero__tag-k { background: var(--grove); color: var(--paper); font-family: var(--font-sans); font-size: 0.6rem; letter-spacing: 0.18em; text-transform: uppercase; padding: 0.3em 0.7em; border-radius: 100px; }
        .hero__scroll { position: absolute; bottom: 1.7rem; inset-inline-start: 1.6rem; z-index: 3; display: flex; flex-direction: column; align-items: center; gap: 8px; color: rgba(251,247,240,0.9); }
        .hero__scroll span:first-child { font-size: 0.6rem; letter-spacing: ${lang === "ar" ? "0.1em" : "0.3em"}; text-transform: uppercase; writing-mode: vertical-rl; }
        .hero__scroll-line { width: 1px; height: 40px; background: linear-gradient(rgba(251,247,240,0.85), transparent); animation: bob 2.4s ease-in-out infinite; }

        @media (max-width: 860px) {
          .hero { flex-direction: column; min-height: auto; }
          .hero__panel { flex: none; min-height: 78svh; }
          .hero__image { flex: none; height: 46svh; }
          .hero__img-scrim { background: linear-gradient(0deg, rgba(54,65,47,0.5), transparent 30%); }
          .hero__rule { display: none; }
        }
      `}</style>
    </section>
  );
}
