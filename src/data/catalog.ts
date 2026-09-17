import type { Package, ProcessStep, Project, ServiceArea } from "./types";

/** Prefija con la base del despliegue: en GitHub Pages el sitio vive en /<repo>/. */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const serviceAreas: ServiceArea[] = [
  {
    id: "identidad",
    number: "01",
    range: "$40 — $900",
    items: [
      { id: "logo", name: "Logo Design", price: "$100 — $150" },
      { id: "minikit", name: "Logo + Mini Brand Kit", price: "$175 — $250" },
      { id: "starter", name: "Brand Starter", price: "$300 — $500" },
      { id: "identity", name: "Brand Identity", price: "$600 — $900" },
      { id: "card", name: "Business Card", price: "$40 — $70" },
    ],
  },
  {
    id: "digital",
    number: "02",
    range: "$15 — $250",
    items: [
      { id: "post", name: "Social Media Post", price: "$25 — $40", unit: "piece" },
      { id: "carousel", name: "Instagram Carousel", price: "$50 — $80" },
      { id: "story", name: "Social Media Story", price: "$20 — $30", unit: "piece" },
      { id: "pack", name: "Social Media Pack", price: "$150 — $250" },
      { id: "flyer", name: "Flyer / Poster", price: "$50 — $75" },
      { id: "ad", name: "Digital Ad", price: "$35 — $60", unit: "piece" },
      { id: "banner", name: "Web Banner", price: "$40 — $70" },
      { id: "slides", name: "Presentation Design", price: "$15 — $25", unit: "slide" },
      { id: "thumb", name: "YouTube Thumbnail", price: "$30 — $50" },
      { id: "ytbanner", name: "YouTube Channel Banner", price: "$50 — $80" },
    ],
  },
  {
    id: "audiovisual",
    number: "03",
    range: "$40 — $300",
    items: [
      { id: "reel", name: "Reel / Short", price: "$40 — $75" },
      { id: "editing", name: "Video Editing", price: "$75 — $150" },
      { id: "promo", name: "Promotional Video", price: "$150 — $300" },
      { id: "youtube", name: "YouTube Video", price: "$100 — $250" },
      { id: "motion", name: "Motion Graphics", price: "$100 — $200" },
      { id: "podcast", name: "Podcast Visual Package", price: "$100 — $200" },
    ],
  },
  {
    id: "creativa",
    number: "04",
    range: "$30 — $200",
    items: [
      { id: "manipulation", name: "Photo Manipulation", price: "$50 — $100" },
      { id: "composite", name: "Creative Composite", price: "$75 — $150" },
      { id: "aicreative", name: "AI-Assisted Creative", price: "$50 — $150" },
      { id: "aips", name: "AI + Photoshop Composition", price: "$100 — $200" },
      { id: "enhance", name: "Image Enhancement", price: "$30 — $60" },
    ],
  },
];

export const packages: Package[] = [
  { id: "social-starter", name: "Social Starter", price: "$99" },
  { id: "content-creator", name: "Content Creator", price: "$149" },
  { id: "social-growth", name: "Social Growth", price: "$179" },
  { id: "brand-starter-pack", name: "Brand Starter Pack", price: "$249" },
  { id: "creative-brand", name: "Creative Brand", price: "$399", featured: true },
];

export const addOnIds = [
  "revisions",
  "express",
  "format",
  "platform",
  "source",
  "extra",
  "guidelines",
] as const;

export const processSteps: ProcessStep[] = [
  { id: "discover", number: "01", name: "Discover" },
  { id: "concept", number: "02", name: "Concept" },
  { id: "design", number: "03", name: "Design" },
  { id: "refine", number: "04", name: "Refine" },
  { id: "deliver", number: "05", name: "Deliver" },
];

export const projects: Project[] = [
  { id: "p1", image: asset("work/01-branding.jpg"), span: "tall" },
  { id: "p2", image: asset("work/02-social.jpg"), span: "square" },
  { id: "p3", image: asset("work/03-motion.jpg"), span: "wide" },
  { id: "p4", image: asset("work/04-packaging.jpg"), span: "tall" },
  { id: "p5", image: asset("work/05-editorial.jpg"), span: "wide" },
  { id: "p6", image: asset("work/06-ai.jpg"), span: "square" },
];

export const contact = {
  whatsappDisplay: "+1 (904) 480-6045",
  whatsappHref: "https://wa.me/19044806045",
  email: "correasami97@gmail.com",
  emailHref: "mailto:correasami97@gmail.com",
  catalogHref: asset("catalogo-samuel-correa.pdf"),
};

export const tools = [
  "Photoshop",
  "Illustrator",
  "Premiere Pro",
  "Creative Cloud",
  "IA Asistida",
];
