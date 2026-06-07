"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

export type Lang = "en" | "ar";

type Dict = Record<string, { en: string; ar: string }>;

const I18nContext = createContext<{
  lang: Lang;
  dir: "ltr" | "rtl";
  toggle: () => void;
  t: (key: keyof typeof STR) => string;
}>({ lang: "en", dir: "ltr", toggle: () => {}, t: (k) => String(k) });

export function useT() {
  return useContext(I18nContext);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang;
    el.dir = dir;
  }, [lang, dir]);

  const toggle = useCallback(() => setLang((l) => (l === "en" ? "ar" : "en")), []);
  const t = useCallback((key: keyof typeof STR) => STR[key][lang], [lang]);

  return (
    <I18nContext.Provider value={{ lang, dir, toggle, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export const STR = {
  nav_collections: { en: "Collections", ar: "المجموعات" },
  nav_tour: { en: "Virtual Showroom", ar: "الجولة الافتراضية" },
  nav_design: { en: "Design Studio", ar: "استوديو التصميم" },
  nav_visit: { en: "Visit Us", ar: "زورونا" },
  nav_book: { en: "Book a Visit", ar: "احجز زيارة" },

  hero_eyebrow: { en: "The Grove · Amman, Jordan", ar: "ذا غروف · عمّان، الأردن" },
  hero_l1: { en: "Your home,", ar: "بيتك،" },
  hero_l2: { en: "beautifully", ar: "بكل" },
  hero_l3: { en: "furnished.", ar: "تفاصيله." },
  hero_sub: {
    en: "A premium supplier for home furnishing — every room, every detail, under one roof.",
    ar: "المورّد الأول لأثاث المنزل — كل غرفة، كل تفصيل، تحت سقف واحد.",
  },
  hero_cta1: { en: "Explore the Collection", ar: "اكتشف المجموعة" },
  hero_cta2: { en: "Enter the Showroom", ar: "ادخل المعرض" },
  scroll: { en: "Scroll", ar: "مرّر" },

  manifesto_eyebrow: { en: "Furniture & Beyond", ar: "أثاث وأكثر" },
  manifesto_lead: {
    en: "We don't just sell furniture. We compose spaces — warm woods, soft tones, and quiet luxury, brought together for the way you actually live.",
    ar: "نحن لا نبيع الأثاث فحسب. نحن نصمّم المساحات — أخشاب دافئة، ألوان ناعمة، وفخامة هادئة، مجتمعة لتناسب أسلوب حياتك.",
  },
  manifesto_body: {
    en: "From a single statement piece to a fully designed home, The Grove brings together craftsmanship, comfort and care — with flexible installments and a design team that sees it through, from concept to delivery.",
    ar: "من قطعة واحدة مميزة إلى منزل متكامل التصميم، يجمع ذا غروف بين الحرفية والراحة والعناية — مع تقسيط مريح وفريق تصميم يرافقك من الفكرة حتى التسليم.",
  },

  collections_eyebrow: { en: "Collections", ar: "المجموعات" },
  collections_title: { en: "Explore by room", ar: "تصفّح حسب الغرفة" },

  tour_eyebrow: { en: "Virtual Showroom", ar: "المعرض الافتراضي" },
  tour_title: { en: "Walk through, from anywhere", ar: "تجوّل من أي مكان" },
  tour_sub: { en: "Drag to look around. Tap a point to reveal the piece.", ar: "اسحب للنظر حولك. انقر على نقطة لعرض القطعة." },
  tour_enter: { en: "Drag to explore", ar: "اسحب للاستكشاف" },

  ar_eyebrow: { en: "3D · Augmented Reality", ar: "ثلاثي الأبعاد · واقع معزّز" },
  ar_title: { en: "See it in your own room", ar: "شاهدها في غرفتك" },
  ar_sub: {
    en: "Spin any piece in 3D. On your phone, place it in your living room to true scale before you decide.",
    ar: "حرّك أي قطعة بثلاثة أبعاد. ومن هاتفك، ضعها في غرفتك بالحجم الحقيقي قبل أن تقرّر.",
  },
  ar_view: { en: "View in your room", ar: "اعرضها في غرفتك" },
  ar_drag: { en: "Drag to rotate", ar: "اسحب للتدوير" },

  shop_eyebrow: { en: "Shop the Look", ar: "تسوّق الإطلالة" },
  shop_title: { en: "One room. Every piece.", ar: "غرفة واحدة. كل قطعة." },
  shop_sub: { en: "Hover the markers to price each piece in the scene.", ar: "مرّر فوق العلامات لمعرفة سعر كل قطعة في المشهد." },

  design_eyebrow: { en: "Design & Execution", ar: "تصميم وتنفيذ" },
  design_title: { en: "From concept to delivered", ar: "من الفكرة إلى التسليم" },
  design_sub: {
    en: "Built-in closets, full interiors, turn-key fit-outs. Drag the handle to see a Grove space come to life.",
    ar: "خزائن حائطية، تصاميم داخلية كاملة، وتجهيز جاهز للسكن. اسحب المقبض لترى مساحة ذا غروف تنبض بالحياة.",
  },
  design_before: { en: "Concept", ar: "التصميم" },
  design_after: { en: "Delivered", ar: "التنفيذ" },

  services_eyebrow: { en: "The Grove Promise", ar: "وعد ذا غروف" },
  services_title: { en: "More than a showroom", ar: "أكثر من مجرد معرض" },

  visit_eyebrow: { en: "Visit Us", ar: "زورونا" },
  visit_title: { en: "Come find your space", ar: "تعال واكتشف مساحتك" },
  visit_addr: { en: "Khilda, Amman — Jordan", ar: "خلدا، عمّان — الأردن" },
  visit_hours: { en: "Sat – Thu · 10:00 — 22:00", ar: "السبت – الخميس · ١٠:٠٠ — ٢٢:٠٠" },
  visit_cta: { en: "Book a Showroom Visit", ar: "احجز زيارة للمعرض" },
  visit_call: { en: "Call the Studio", ar: "اتصل بالاستوديو" },

  footer_tag: { en: "Furniture & Beyond", ar: "أثاث وأكثر" },
  footer_rights: { en: "Premium Supplier for Home Furnishing", ar: "المورّد الأول لأثاث المنزل" },
  footer_demo: { en: "Concept preview — built for The Grove", ar: "نسخة تجريبية — صُمّمت لذا غروف" },

  proof_eyebrow: { en: "Loved across Amman", ar: "محبوب في كل عمّان" },
  proof_title: { en: "Homes, beautifully delivered", ar: "بيوت، سُلّمت بأبهى صورة" },
  proof_since: { en: "Furnishing Jordan's homes since 2017", ar: "نؤثّث بيوت الأردن منذ ٢٠١٧" },
  stat_homes: { en: "homes furnished", ar: "بيت تم تأثيثه" },
  stat_followers: { en: "community", ar: "متابع" },
  stat_rating: { en: "showroom rating", ar: "تقييم المعرض" },
  stat_delivery: { en: "delivery across Jordan", ar: "توصيل في كل الأردن" },

  consult: { en: "Book a Design Consultation", ar: "احجز استشارة تصميم" },
  wa_label: { en: "Chat on WhatsApp", ar: "تواصل عبر واتساب" },
  wa_msg: {
    en: "Hi The Grove! I'd love to book a design consultation.",
    ar: "مرحبًا ذا غروف! أودّ حجز استشارة تصميم.",
  },
} satisfies Dict;
