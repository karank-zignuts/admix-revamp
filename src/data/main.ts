export const navItems = [
  { label: "Quality", href: "#quality" },
  { label: "Applications", href: "#applications" },
  { label: "Products", href: "#products" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Global Presence", href: "#globalPresence" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const company = {
  name: "Admix Metacraft",
  legalName: "Admix Metacraft LLP",
  gst: "GST No. 24ABVFA1777G1Z5",
  logo: "/media/admix-logo.png",
  phone: "+91 88666 49043",
  phoneHref: "tel:+918866649043",
  whatsappNumber: "918866649043",
  email: "admixmetacraft@gmail.com",
  emailHref: "mailto:admixmetacraft@gmail.com",
  office: "Bajrang Industrial Area-2, Ribda, Gondal, Rajkot",
  mapHref: "https://maps.app.goo.gl/cFA6rYV45TxB4YTg6",
} as const;

export const heroContent = {
  image: "/media/Admix-hero-image.png",
  imageAlt: "Admix FRP manhole cover banner",
  title: "Engineered FRP Covers for Modern Infrastructure",
  body: "Admix Metacraft LLP manufactures WAVE FRP manhole covers for utility, industrial, and infrastructure applications, with quality-focused engineering from Rajkot.",
  primaryCta: { label: "Inquire now", href: "#contact" },
  secondaryCta: { label: "View sizes", href: "#products" },
} as const;

export const headerContent = {
  contactLabel: "Contact us",
  navigationLabel: "Open navigation",
} as const;

export const aboutContent = {
  eyebrow: "About us",
  title: "Precision-engineered FRP access covers from a Rajkot manufacturing team.",
  body: "Admix Metacraft LLP began as a small engineering workshop started by two young entrepreneurs. The company now develops its own products and customized engineering solutions, with FRP manhole covers manufactured under the WAVE brand since 2018.",
  images: [
    {
      src: "/media/product-02.jpeg",
      alt: "FRP manhole cover manufacturing detail",
    },
    {
      src: "/media/mission.jpg",
      alt: "Admix Metacraft industrial mission",
    },
  ],
} as const;

export const stats = [
  { value: "2018", label: "WAVE FRP cover manufacturing started" },
  { value: "2.5-5T", label: "Load bearing range" },
  { value: "4+", label: "Export regions served" },
] as const;

export const applicationsContent = {
  eyebrow: "Applications",
  title: "Built for utility networks",
  body: "FRP covers are used across drainage, cabling, telecom, energy, and landscape infrastructure where durability, safety, and theft resistance matter.",
  cta: { label: "Inquire now", href: "#contact" },
} as const;

export const applications = [
  {
    title: "Sewerage Inspection",
    body: "Durable covers for inspection chambers and utility access points.",
  },
  {
    title: "Electrical Cabling",
    body: "Non-metallic covers for underground electrical infrastructure.",
  },
  {
    title: "Telecom Networks",
    body: "Reliable access covers for telecom cabling and field installations.",
  },
  {
    title: "Water, Gas & Petroleum",
    body: "FRP covers for utility corridors where corrosion resistance matters.",
  },
  {
    title: "Landscape Projects",
    body: "Clean, theft-resistant solutions for gardens and public spaces.",
  },
] as const;

export const productImages = [
  "/media/product-01.jpeg",
  "/media/product-02.jpeg",
  "/media/product-03.jpeg",
  "/media/product-04.jpeg",
  "/media/product-05.jpeg",
] as const;

export const productsContent = {
  eyebrow: "Products & specs",
  title: "FRP Manhole Covers",
  body: "A non-metallic alternative to cast iron, ductile iron, and RCC manhole covers, available in circular, square, and rectangular shapes with 2.5 to 5 ton load capacity.",
  imageAltPrefix: "Admix FRP manhole cover",
} as const;

export const productSizes = [
  { shape: "Square", inches: "12 x 12", mm: "300 x 300", weightKg: "3.3", packing: "12" },
  { shape: "Square", inches: "15 x 15", mm: "380 x 380", weightKg: "5.1", packing: "8" },
  { shape: "Square", inches: "18 x 18", mm: "450 x 450", weightKg: "7.2", packing: "6" },
  { shape: "Square", inches: "21 x 21", mm: "530 x 530", weightKg: "9", packing: "4" },
  { shape: "Square", inches: "24 x 24", mm: "600 x 600", weightKg: "12.5", packing: "3" },
  { shape: "Square", inches: "28 x 28", mm: "700 x 700", weightKg: "18.5", packing: "2" },
  { shape: "Square", inches: "30 x 30", mm: "750 x 750", weightKg: "23.5", packing: "1" },
  { shape: "Rectangle", inches: "18 x 24", mm: "450 x 600", weightKg: "9.5", packing: "4" },
  { shape: "Round", inches: '16" R', mm: "405 D", weightKg: "4", packing: "8" },
] as const;

export const productTableColumns = ["Shape", "Size in inches", "Size in mm", "Weight kg", "Packing"] as const;

export const qualityContent = {
  eyebrow: "Quality & mission",
  title: "Designed for durability, service, and dependable delivery.",
  body: "The mission is to deliver quality products and solutions by continuously improving products and introducing new technologies for changing market needs.",
} as const;

export const qualityPoints = [
  "Theft proof because the covers do not contain metallic or plastic material.",
  "Abrasion-resistant top layer for demanding utility environments.",
  "UV stabilized pigments to resist sunlight exposure.",
  "Zero permanent set across all sizes and load bearings.",
] as const;

export const servicePromises = [
  "Packaging",
  "100% Quality",
  "World Class Service",
  "Fast Delivery",
] as const;

export const textEffectContent = {
  prefix: "Quality you can trust 🤝🏻 for ",
  words: [
    "public utilities",
    "industrial projects",
    "infrastructure work",
    "long-term installations"
  ],
} as const;

export const globalPresenceContent = {
  eyebrow: "Global presence",
  title: "Export-ready manufacturing support for growing markets.",
  body: "Admix Metacraft LLP operates in Nepal, Bhutan, Sri Lanka, and African countries, supporting regional customers through long-term partnerships.",
  cta: { label: "Export enquiry", href: "#contact" },
} as const;

export const exportRegions = ["Nepal", "Bhutan", "Sri Lanka", "African countries"] as const;

export const testimonialsContent = {
  eyebrow: "Testimonials",
  title: "What our customers say",
  body: "See how buyers and site teams describe Admix product quality, response, and delivery.",
} as const;

export const testimonials = [
  {
    text: "Best response and follow up from the team. Their approach made product selection simple for our site requirement.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&q=80",
    name: "Rashmin Electricals",
    role: "Cuddalore, Tamil Nadu",
  },
  {
    text: "Very good and strong product. The covers feel reliable for site use and the finish is consistent.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&q=80",
    name: "Karan Patel",
    role: "Project Buyer",
  },
  {
    text: "Nice product with dependable quality. The team understood our need for a non-metallic cover solution.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&q=80",
    name: "Sarlin",
    role: "Infrastructure Contractor",
  },
  {
    text: "Admix helped us match the right cover size and packing quantity for repeat site orders without delay.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&q=80",
    name: "Mehul Shah",
    role: "Utility Supplier",
  },
  {
    text: "The lightweight FRP construction made handling easier for our team while keeping the required strength.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&q=80",
    name: "Nidhi Mehta",
    role: "Procurement Lead",
  },
  {
    text: "Good coordination from enquiry to dispatch. The product arrived site-ready and met our expectations.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=96&q=80",
    name: "Pooja Nair",
    role: "Operations Coordinator",
  },
  {
    text: "The covers are practical for public infrastructure areas where corrosion resistance and theft resistance matter.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&q=80",
    name: "Arvind Rao",
    role: "Civil Engineer",
  },
  {
    text: "Reliable quality across sizes. Their response time helped us close urgent requirements quickly.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=96&q=80",
    name: "Hiral Joshi",
    role: "Purchase Manager",
  },
  {
    text: "A clean alternative to conventional covers for landscape and utility projects. We would order again.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=96&q=80",
    name: "Jignesh Trivedi",
    role: "Site Consultant",
  },
] as const;

export const testimonialColumns = [
  testimonials.slice(0, 3),
  testimonials.slice(3, 6),
  testimonials.slice(6, 9),
] as const;

export const contactContent = {
  eyebrow: "Contact us",
  title: "Do you have any questions?",
  body: "Fill out the inquiry form or contact the team directly.",
  detailsEyebrow: "Contact details",
  submitLabel: "Send on WhatsApp",
  introMessage: "Hello Admix Metacraft, I want to inquire about your products.",
} as const;

export const contactDetails = [
  {
    icon: "phone",
    label: "Phone",
    value: company.phone,
    href: company.phoneHref,
  },
  {
    icon: "mail",
    label: "Email",
    value: company.email,
    href: company.emailHref,
  },
  {
    icon: "map",
    label: "Office",
    value: company.office,
    href: company.mapHref,
  },
] as const;

export const inquiryProductOptions = ["FRP Manhole Covers", "Main Door Handle"] as const;

export const contactFormFields = {
  name: { label: "Name", placeholder: "Enter name" },
  email: { label: "Email", placeholder: "Enter email" },
  phone: { label: "Phone", placeholder: "Enter phone" },
  business: { label: "Business Name", placeholder: "Enter company name" },
  product: { label: "Product" },
  subject: { label: "Subject", placeholder: "Product inquiry" },
  message: {
    label: "Message",
    placeholder: "Tell us your size, quantity, or site requirement",
  },
} as const;

export const inquiryMessageLabels = {
  name: "Name",
  business: "Business",
  phone: "Phone",
  email: "Email",
  product: "Product",
  subject: "Subject",
  message: "Message",
} as const;

export const footerContent = {
  description:
    "Admix Metacraft LLP manufactures FRP manhole covers and engineering products for infrastructure, utilities, and export markets.",
  linksLabel: "Quick links",
  copyright: "Copyright 2023 Admix Meta Craft. All rights reserved.",
} as const;
