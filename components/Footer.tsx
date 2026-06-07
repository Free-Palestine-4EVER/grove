"use client";

import Logo from "./Logo";
import { useT } from "@/lib/i18n";

export default function Footer() {
  const { t, lang } = useT();
  const social = [
    { label: "Instagram", href: "https://www.instagram.com/thegrovejo/" },
    { label: "Facebook", href: "https://www.facebook.com/thegrovefurniturejo/" },
    { label: "YouTube", href: "https://www.youtube.com/@TheGroveFurnitureBeyond-v2v" },
  ];
  return (
    <footer style={{ background: "var(--ink)", color: "var(--paper)", paddingTop: "clamp(4rem,8vw,7rem)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "3rem", paddingBottom: "4rem", borderBottom: "1px solid rgba(251,247,240,0.14)" }}>
          <div style={{ maxWidth: 420 }}>
            <Logo tone="paper" size={1.25} />
            <p style={{ marginTop: "1.8rem", color: "rgba(251,247,240,0.6)", fontSize: "0.95rem", lineHeight: 1.6, fontFamily: "var(--font-display)", fontStyle: lang === "ar" ? "normal" : "italic" }}>
              {t("footer_rights")}
            </p>
          </div>

          <div style={{ display: "flex", gap: "4rem", flexWrap: "wrap" }}>
            <div>
              <span className="eyebrow" style={{ color: "rgba(251,247,240,0.5)", fontSize: "0.62rem" }}>{lang === "en" ? "Connect" : "تواصل"}</span>
              <ul style={{ listStyle: "none", margin: "1.2rem 0 0", padding: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                {social.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" data-cursor="hover" style={{ fontSize: "0.95rem", color: "rgba(251,247,240,0.85)" }}>{s.label} <span style={{ opacity: 0.5 }}>↗</span></a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="eyebrow" style={{ color: "rgba(251,247,240,0.5)", fontSize: "0.62rem" }}>{lang === "en" ? "Visit" : "زورونا"}</span>
              <p style={{ margin: "1.2rem 0 0", color: "rgba(251,247,240,0.85)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                {t("visit_addr")}<br />{t("visit_hours")}
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", paddingBlock: "1.8rem", fontSize: "0.78rem", color: "rgba(251,247,240,0.45)" }}>
          <span>© {2026} The Grove · {t("footer_tag")}</span>
          <span>{t("footer_demo")}</span>
        </div>
      </div>
    </footer>
  );
}
