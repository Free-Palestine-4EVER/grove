export type Bi = { en: string; ar: string };

export type Collection = {
  id: string;
  name: Bi;
  count: Bi;
  img: string;
  span?: "tall" | "wide";
};

export const collections: Collection[] = [
  {
    id: "bedrooms",
    name: { en: "Bedrooms", ar: "غرف النوم" },
    count: { en: "42 pieces", ar: "٤٢ قطعة" },
    img: "/grove/p07.jpg",
    span: "tall",
  },
  {
    id: "dining",
    name: { en: "Dining", ar: "غرف الطعام" },
    count: { en: "36 pieces", ar: "٣٦ قطعة" },
    img: "/grove/p03.jpg",
  },
  {
    id: "sofas",
    name: { en: "Sofa Sets", ar: "أطقم الكنب" },
    count: { en: "28 pieces", ar: "٢٨ قطعة" },
    img: "/grove/p08.jpg",
  },
  {
    id: "accessories",
    name: { en: "Accessories", ar: "إكسسوارات" },
    count: { en: "90+ pieces", ar: "+٩٠ قطعة" },
    img: "/grove/p11.jpg",
    span: "tall",
  },
  {
    id: "living",
    name: { en: "Living", ar: "غرف المعيشة" },
    count: { en: "31 pieces", ar: "٣١ قطعة" },
    img: "/grove/p06.jpg",
  },
  {
    id: "garden",
    name: { en: "Grove Garden", ar: "حديقة غروف" },
    count: { en: "Outdoor", ar: "مساحات خارجية" },
    img: "/grove/p05.jpg",
    span: "wide",
  },
];

export type Hotspot = {
  id: string;
  x: number; // 0..1 across the panorama width
  y: number; // 0..1 down the height
  name: Bi;
  price: string;
};

// Hotspots for the virtual tour (panorama = p07 warm bedroom)
export const tourHotspots: Hotspot[] = [
  { id: "bed", x: 0.5, y: 0.62, name: { en: "Aspen Oak Bed", ar: "سرير أسبن البلوط" }, price: "1,290 JOD" },
  { id: "lamp", x: 0.26, y: 0.52, name: { en: "Amber Table Lamp", ar: "مصباح آمبر" }, price: "85 JOD" },
  { id: "nightstand", x: 0.735, y: 0.7, name: { en: "Linen Nightstand", ar: "كومودينو لينين" }, price: "210 JOD" },
  { id: "mirror", x: 0.80, y: 0.34, name: { en: "Halo Wall Mirror", ar: "مرآة هالو" }, price: "140 JOD" },
];

// Hotspots for the shoppable room (p11 brass coffee table / curved sofa)
export const shopHotspots: Hotspot[] = [
  { id: "table", x: 0.46, y: 0.66, name: { en: "Helios Brass Coffee Table", ar: "طاولة هيليوس النحاسية" }, price: "360 JOD" },
  { id: "sofa", x: 0.7, y: 0.34, name: { en: "Dune Curved Sofa", ar: "كنبة ديون المنحنية" }, price: "1,640 JOD" },
  { id: "plant", x: 0.5, y: 0.2, name: { en: "Olive Tree Planter", ar: "حوض شجرة الزيتون" }, price: "55 JOD" },
];

export type ModelDef = {
  id: string;
  name: Bi;
  tagline: Bi;
  price: string;
  src: string;
};

export const models: ModelDef[] = [
  {
    id: "sofa",
    name: { en: "Velvet Lounge Sofa", ar: "كنبة فيلفيت لاونج" },
    tagline: { en: "Three-seater · deep emerald velvet", ar: "ثلاثة مقاعد · مخمل زمردي" },
    price: "1,640 JOD",
    src: "/models/sofa.glb",
  },
  {
    id: "chair",
    name: { en: "Sheen Accent Chair", ar: "كرسي شين المميّز" },
    tagline: { en: "Hand-finished frame · sheen weave", ar: "إطار يدوي · نسيج لامع" },
    price: "430 JOD",
    src: "/models/chair.glb",
  },
];

export const marqueeItems: Bi[] = [
  { en: "Furniture & Beyond", ar: "أثاث وأكثر" },
  { en: "Built-in Closets", ar: "خزائن حائطية" },
  { en: "Interior Design", ar: "تصميم داخلي" },
  { en: "Flexible Installments", ar: "تقسيط مريح" },
  { en: "Care & Cleaning", ar: "عناية وتنظيف" },
  { en: "Free Delivery in Amman", ar: "توصيل مجاني في عمّان" },
];

export const testimonials: { quote: Bi; name: string; role: Bi }[] = [
  {
    quote: {
      en: "They designed our whole apartment — from the closets to the last cushion. It feels like a hotel.",
      ar: "صمّموا شقتنا بالكامل — من الخزائن حتى آخر وسادة. صار البيت يشبه الفنادق.",
    },
    name: "Lara H.",
    role: { en: "Homeowner · Abdoun", ar: "صاحبة منزل · عبدون" },
  },
  {
    quote: {
      en: "The quality is on another level, and the installments made it easy. Delivery team was flawless.",
      ar: "الجودة بمستوى ثاني، والتقسيط سهّل كل شي. فريق التوصيل كان ممتاز.",
    },
    name: "Omar K.",
    role: { en: "Homeowner · Khalda", ar: "صاحب منزل · خلدا" },
  },
  {
    quote: {
      en: "We furnished two villas through The Grove. Their design team just gets the brief, every time.",
      ar: "أثّثنا فيلتين مع ذا غروف. فريق التصميم بيفهم المطلوب من أول مرة، دائمًا.",
    },
    name: "Studio Noon",
    role: { en: "Interior Studio · Amman", ar: "استوديو تصميم · عمّان" },
  },
];

export const stats: { value: string; label: "stat_homes" | "stat_followers" | "stat_rating" | "stat_delivery" }[] = [
  { value: "2,400+", label: "stat_homes" },
  { value: "103K", label: "stat_followers" },
  { value: "4.9★", label: "stat_rating" },
  { value: "100%", label: "stat_delivery" },
];

export const services: { icon: string; title: Bi; body: Bi }[] = [
  {
    icon: "design",
    title: { en: "Design Studio", ar: "استوديو التصميم" },
    body: {
      en: "Our in-house team designs and executes full interiors and built-in closets — concept, 3D, install.",
      ar: "فريقنا الداخلي يصمّم وينفّذ التصاميم الداخلية والخزائن الحائطية — فكرة، ثلاثي الأبعاد، تركيب.",
    },
  },
  {
    icon: "installment",
    title: { en: "Pay Your Way", ar: "ادفع بطريقتك" },
    body: {
      en: "Buy at the cash price with the comfort of installments up to 3 years through Safwa Islamic Bank.",
      ar: "اشترِ بسعر الكاش مع راحة التقسيط حتى ٣ سنوات عبر بنك صفوة الإسلامي.",
    },
  },
  {
    icon: "care",
    title: { en: "Care & Cleaning", ar: "العناية والتنظيف" },
    body: {
      en: "Keep every piece looking new — professional upholstery cleaning and after-sale care.",
      ar: "حافظ على رونق كل قطعة — تنظيف احترافي للمفروشات وعناية ما بعد البيع.",
    },
  },
  {
    icon: "delivery",
    title: { en: "Delivered & Set", ar: "توصيل وتركيب" },
    body: {
      en: "White-glove delivery across Jordan — we carry, place and set every piece for you.",
      ar: "توصيل بعناية فائقة في كل الأردن — نحمل ونضع ونركّب كل قطعة لك.",
    },
  },
];
