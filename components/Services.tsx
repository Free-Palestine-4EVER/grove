"use client";

import { useT } from "@/lib/i18n";
import { services } from "@/lib/data";
import Reveal from "./Reveal";

const Icon = ({ name }: { name: string }) => {
  const common = { width: 30, height: 30, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "design":
      return (<svg {...common}><path d="M3 21l4-1 11-11a2.8 2.8 0 0 0-4-4L3 16l-1 5z" /><path d="M14 5l4 4" /></svg>);
    case "installment":
      return (<svg {...common}><rect x="2.5" y="6" width="19" height="12" rx="2" /><path d="M2.5 10h19" /><path d="M6 14.5h3" /></svg>);
    case "care":
      return (<svg {...common}><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" /></svg>);
    default:
      return (<svg {...common}><path d="M3 13l1-5h11l3 4h3v4h-2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /><path d="M9 17h6" /></svg>);
  }
};

export default function Services() {
  const { t, lang } = useT();
  return (
    <section className="section" style={{ background: "var(--grove)", color: "var(--paper)" }}>
      <div className="container">
        <div style={{ maxWidth: 620, marginBottom: "3.5rem" }}>
          <Reveal><span className="eyebrow" style={{ color: "var(--brass-2)" }}>{t("services_eyebrow")}</span></Reveal>
          <Reveal delay={80}>
            <h2 className="display" style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)", margin: "1rem 0 0", color: "var(--paper)" }}>{t("services_title")}</h2>
          </Reveal>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1px", background: "rgba(251,247,240,0.16)", border: "1px solid rgba(251,247,240,0.16)" }}>
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <div style={{ background: "var(--grove)", padding: "2.4rem 1.8rem 2.6rem", height: "100%" }}>
                <span style={{ color: "var(--brass-2)" }}><Icon name={s.icon} /></span>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 420, fontSize: "1.5rem", margin: "1.3rem 0 0.7rem" }}>{s.title[lang]}</h3>
                <p style={{ color: "rgba(251,247,240,0.74)", fontSize: "0.92rem", lineHeight: 1.65, margin: 0 }}>{s.body[lang]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
