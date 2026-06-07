"use client";

import { useState, type FormEvent } from "react";
import { useT } from "@/lib/i18n";
import { Rise, RevealLines, Magnetic } from "@/components/motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Newsletter() {
  const { t, lang } = useT();
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() !== "") setSubmitted(true);
  };

  return (
    <section
      lang={lang}
      style={{
        background: "var(--grove)",
        color: "var(--paper)",
        paddingBlock: "clamp(3.5rem, 7vw, 6rem)",
      }}
    >
      <style>{`
        .news-grid {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: clamp(2rem, 5vw, 5rem);
        }
        .news-left { max-width: 46ch; }
        .news-right { flex: 0 0 auto; min-width: min(360px, 100%); }
        .news-form {
          display: flex;
          align-items: flex-end;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .news-input {
          flex: 1 1 220px;
          min-width: 0;
          background: transparent;
          border: none;
          border-block-end: 1px solid rgba(251,247,240,0.4);
          color: var(--paper);
          font-family: var(--font-sans);
          font-size: 1rem;
          letter-spacing: 0.01em;
          padding: 0.65em 0.1em;
          cursor: none;
          outline: none;
          transition: border-color 0.4s ${`var(--ease)`};
          border-radius: 0;
        }
        .news-input::placeholder { color: rgba(251,247,240,0.5); }
        .news-input:focus { border-block-end-color: var(--brass-2); }
        .news-input:-webkit-autofill {
          -webkit-text-fill-color: var(--paper);
          transition: background-color 9999s ease-in-out 0s;
        }
        .news-btn {
          background: var(--paper);
          color: var(--ink);
          border-color: var(--paper);
          white-space: nowrap;
        }
        .news-btn:hover { background: var(--brass-2); border-color: var(--brass-2); color: var(--ink); }
        @media (max-width: 860px) {
          .news-grid { flex-direction: column; align-items: flex-start; }
          .news-right { width: 100%; min-width: 0; }
          .news-form { width: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .news-input { transition: none; }
        }
      `}</style>

      <div className="container">
        <div className="news-grid">
          <div className="news-left">
            <RevealLines
              lines={[t("news_title")]}
              className="display"
              style={{ color: "var(--paper)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            />
            <Rise
              delay={0.12}
              style={{
                marginBlockStart: "1rem",
                color: "rgba(251,247,240,0.72)",
                maxWidth: "40ch",
                fontSize: "0.95rem",
                lineHeight: 1.65,
              }}
            >
              {t("news_body")}
            </Rise>
          </div>

          <div className="news-right">
            {submitted ? (
              <Rise style={{ color: "var(--brass-2)", fontSize: "1rem", fontFamily: "var(--font-display)" }}>
                {t("news_thanks")}
              </Rise>
            ) : (
              <Rise delay={0.18}>
                <form className="news-form" onSubmit={onSubmit} noValidate={false}>
                  <input
                    type="email"
                    required
                    className="news-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("news_placeholder")}
                    aria-label={t("news_placeholder")}
                    autoComplete="email"
                    dir={lang === "ar" ? "rtl" : "ltr"}
                  />
                  <Magnetic>
                    <button
                      type="submit"
                      className="btn news-btn"
                      style={{ background: "var(--paper)", color: "var(--ink)" }}
                    >
                      {t("news_cta")}
                    </button>
                  </Magnetic>
                </form>
              </Rise>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
