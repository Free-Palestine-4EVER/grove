"use client";

import { useState, type FormEvent } from "react";
import Logo from "./Logo";
import { useT } from "@/lib/i18n";
import { Rise } from "@/components/motion";

export default function Footer() {
  const { t, lang } = useT();
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const en = lang === "en";

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() !== "") setSubmitted(true);
  };

  const explore: { href: string; en: string; ar: string }[] = [
    { href: "/shop", en: "Shop", ar: "تسوّق" },
    { href: "/collections", en: "Collections", ar: "المجموعات" },
    { href: "/showroom", en: "Virtual Showroom", ar: "المعرض الافتراضي" },
    { href: "/design", en: "Design Service", ar: "خدمة التصميم" },
    { href: "/visit", en: "Visit Us", ar: "زورونا" },
  ];

  const social = [
    { label: "Instagram", href: "https://www.instagram.com/thegrovejo/" },
    { label: "Facebook", href: "https://www.facebook.com/thegrovefurniturejo/" },
    { label: "YouTube", href: "https://www.youtube.com/@TheGroveFurnitureBeyond-v2v" },
  ];

  return (
    <footer className="ft" lang={lang}>
      <style>{`
        .ft {
          background: var(--ink);
          color: var(--paper);
          padding-top: clamp(3.5rem, 7vw, 6rem);
        }

        /* ---- newsletter band ---- */
        .ft__news {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: clamp(1.5rem, 5vw, 4rem);
          padding-bottom: clamp(2.5rem, 5vw, 3.5rem);
          border-bottom: 1px solid rgba(251,247,240,0.14);
        }
        .ft__news-title {
          margin: 0;
          font-family: var(--font-display);
          font-weight: 400;
          font-size: clamp(1.5rem, 3vw, 2.1rem);
          line-height: 1.15;
          color: var(--paper);
        }
        .ft__news-sub {
          margin: 0.7rem 0 0;
          max-width: 44ch;
          color: rgba(251,247,240,0.6);
          font-size: 0.92rem;
          line-height: 1.6;
        }
        .ft__form { display: flex; align-items: stretch; gap: 0.75rem; flex: 0 0 auto; min-width: min(360px, 100%); }
        .ft__input {
          flex: 1 1 auto;
          min-width: 0;
          background: transparent;
          border: 1px solid rgba(251,247,240,0.28);
          border-radius: 2px;
          color: var(--paper);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          padding: 0.7em 0.9em;
          outline: none;
          transition: border-color 0.3s var(--ease);
        }
        .ft__input::placeholder { color: rgba(251,247,240,0.45); }
        .ft__input:focus { border-color: var(--brass-2); }
        .ft__input:-webkit-autofill { -webkit-text-fill-color: var(--paper); transition: background-color 9999s ease 0s; }
        .ft__btn {
          flex: 0 0 auto;
          background: var(--paper);
          color: var(--ink);
          border: 1px solid var(--paper);
          border-radius: 2px;
          font-size: 0.9rem;
          font-weight: 500;
          padding: 0 1.4em;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.3s var(--ease), border-color 0.3s var(--ease);
        }
        .ft__btn:hover { background: var(--brass-2); border-color: var(--brass-2); }
        .ft__thanks { color: var(--brass-2); font-family: var(--font-display); font-size: 1rem; }

        /* ---- link columns ---- */
        .ft__cols {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: clamp(2rem, 4vw, 4rem);
          padding-block: clamp(2.5rem, 5vw, 4rem);
          border-bottom: 1px solid rgba(251,247,240,0.14);
        }
        .ft__brand { max-width: 30ch; }
        .ft__rights {
          margin: 1.4rem 0 0;
          color: rgba(251,247,240,0.6);
          font-family: var(--font-display);
          font-style: ${en ? "italic" : "normal"};
          font-size: 0.92rem;
          line-height: 1.6;
        }
        .ft__cap {
          display: block;
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(251,247,240,0.5);
          margin-bottom: 1.1rem;
        }
        html[lang="ar"] .ft__cap { letter-spacing: 0.05em; }
        .ft__list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.7rem; }
        .ft__link {
          color: rgba(251,247,240,0.82);
          font-size: 0.92rem;
          transition: color 0.3s var(--ease);
        }
        .ft__link:hover { color: var(--paper); }
        .ft__addr { margin: 0; color: rgba(251,247,240,0.82); font-size: 0.92rem; line-height: 1.7; }

        /* ---- legal bar ---- */
        .ft__legal {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
          padding-block: 1.6rem;
          font-size: 0.76rem;
          color: rgba(251,247,240,0.45);
        }

        @media (max-width: 860px) {
          .ft__news { flex-direction: column; align-items: flex-start; }
          .ft__form { width: 100%; min-width: 0; }
          .ft__cols { grid-template-columns: 1fr 1fr; }
          .ft__brand { grid-column: 1 / -1; }
        }
        @media (max-width: 520px) {
          .ft__cols { grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ft__input, .ft__btn, .ft__link { transition: none; }
        }
      `}</style>

      <div className="container">
        {/* newsletter */}
        <div className="ft__news">
          <Rise>
            <h2 className="ft__news-title">{t("news_title")}</h2>
            <p className="ft__news-sub">{t("news_body")}</p>
          </Rise>
          <Rise delay={0.1}>
            {submitted ? (
              <span className="ft__thanks">{t("news_thanks")}</span>
            ) : (
              <form className="ft__form" onSubmit={onSubmit}>
                <input
                  type="email"
                  required
                  className="ft__input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("news_placeholder")}
                  aria-label={t("news_placeholder")}
                  autoComplete="email"
                  dir={en ? "ltr" : "rtl"}
                />
                <button type="submit" className="ft__btn">{t("news_cta")}</button>
              </form>
            )}
          </Rise>
        </div>

        {/* columns */}
        <div className="ft__cols">
          <Rise className="ft__brand">
            <Logo tone="paper" size={1.25} />
            <p className="ft__rights">{t("footer_rights")}</p>
          </Rise>

          <Rise delay={0.06} as="nav">
            <span className="ft__cap">{en ? "Explore" : "استكشف"}</span>
            <ul className="ft__list">
              {explore.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="ft__link">{en ? l.en : l.ar}</a>
                </li>
              ))}
            </ul>
          </Rise>

          <Rise delay={0.12}>
            <span className="ft__cap">{en ? "Connect" : "تواصل"}</span>
            <ul className="ft__list">
              {social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="ft__link">{s.label}</a>
                </li>
              ))}
            </ul>
          </Rise>

          <Rise delay={0.18}>
            <span className="ft__cap">{en ? "Visit" : "زورونا"}</span>
            <p className="ft__addr">
              {t("visit_addr")}
              <br />
              {t("visit_hours")}
            </p>
          </Rise>
        </div>

        {/* legal */}
        <div className="ft__legal">
          <span>© {2026} The Grove · {t("footer_tag")}</span>
          <span>{t("footer_demo")}</span>
        </div>
      </div>
    </footer>
  );
}
