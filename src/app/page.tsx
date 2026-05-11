"use client";

import Image from "next/image";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  Phone,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { FormEvent, useState } from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Applications", href: "#applications" },
  { label: "Products", href: "#products" },
  { label: "Quality", href: "#quality" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "2018", label: "WAVE FRP cover manufacturing started" },
  { value: "2.5-5T", label: "Load bearing range" },
  { value: "4+", label: "Export regions served" },
];

const applications = [
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
];

const productSizes = [
  ["Square", "12 x 12", "300 x 300", "3.3", "12"],
  ["Square", "15 x 15", "380 x 380", "5.1", "8"],
  ["Square", "18 x 18", "450 x 450", "7.2", "6"],
  ["Square", "21 x 21", "530 x 530", "9", "4"],
  ["Square", "24 x 24", "600 x 600", "12.5", "3"],
  ["Square", "28 x 28", "700 x 700", "18.5", "2"],
  ["Square", "30 x 30", "750 x 750", "23.5", "1"],
  ["Rectangle", "18 x 24", "450 x 600", "9.5", "4"],
  ["Round", '16" R', "405 D", "4", "8"],
];

const qualityPoints = [
  "Theft proof because the covers do not contain metallic or plastic material.",
  "Abrasion-resistant top layer for demanding utility environments.",
  "UV stabilized pigments to resist sunlight exposure.",
  "Zero permanent set across all sizes and load bearings.",
  "SS 304 rod and ring combination provided for lifting.",
  "Non-brittle construction with locking arrangement available on request.",
];

const servicePromises = ["Packaging", "100% Quality", "World Class Service", "Fast Delivery"];

const reviews = [
  {
    title: "Best response & follow up",
    text: "Good approach",
    by: "Rashmin Electricals, Cuddalore Tamil Nadu",
  },
  {
    title: "Very good and strong product.",
    text: "A reliable product for site use.",
    by: "Karan Patel",
  },
  {
    title: "Nice product",
    text: "Your product is good.",
    by: "Sarlin",
  },
];

const productImages = [
  "/media/product-01.jpeg",
  "/media/product-02.jpeg",
  "/media/product-03.jpeg",
  "/media/product-04.jpeg",
  "/media/product-05.jpeg",
];

function reveal(index = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.65, delay: index * 0.08, ease: "easeOut" as const },
  };
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-xs font-medium text-neutral-700">
      <span className="h-1 w-1 rounded-full bg-neutral-950" />
      {children}
    </div>
  );
}

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [formState, setFormState] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    product: "FRP Manhole Covers",
    message: "",
  });

  const motionProps = shouldReduceMotion ? {} : reveal();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Hello Admix Metacraft, I want to inquire about your products.",
      `Name: ${formState.name || "-"}`,
      `Business: ${formState.business || "-"}`,
      `Phone: ${formState.phone || "-"}`,
      `Email: ${formState.email || "-"}`,
      `Product: ${formState.product}`,
      `Message: ${formState.message || "-"}`,
    ].join("\n");

    window.open(`https://wa.me/918866649043?text=${encodeURIComponent(message)}`, "_blank");
  }

  return (
    <main className="min-h-screen bg-[#f8f8f2] text-neutral-950">
      <Hero />

      <section id="about" className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div {...motionProps} className="space-y-8">
            <SectionLabel>About us</SectionLabel>
            <div className="space-y-6">
              <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-normal text-neutral-950 sm:text-5xl">
                Precision-engineered FRP access covers from a Rajkot manufacturing team.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
                Admix Metacraft LLP began as a small engineering workshop started by two young
                entrepreneurs. The company now develops its own products and customized engineering
                solutions, with FRP manhole covers manufactured under the WAVE brand since 2018.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((item) => (
                <Card key={item.value} className="rounded-lg bg-[#f6f7ef] py-5 ring-neutral-200">
                  <CardContent className="space-y-2 px-5">
                    <div className="text-2xl font-medium">{item.value}</div>
                    <p className="text-sm leading-5 text-neutral-600">{item.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...(shouldReduceMotion ? {} : reveal(1))}
            className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-neutral-100 sm:mt-16">
              <Image
                src="/media/product-02.jpeg"
                alt="FRP manhole cover manufacturing detail"
                fill
                sizes="(min-width: 1024px) 360px, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[5/4] overflow-hidden rounded-lg bg-neutral-100">
              <Image
                src="/media/mission.jpg"
                alt="Admix Metacraft industrial mission"
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="applications" className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1fr_0.45fr] lg:items-start">
            <SectionLabel>Applications</SectionLabel>
            <div>
              <h2 className="text-3xl font-medium leading-tight sm:text-5xl">Built for utility networks</h2>
              <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-600 sm:text-base">
                FRP covers are used across drainage, cabling, telecom, energy, and landscape
                infrastructure where durability, safety, and theft resistance matter.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex h-11 w-fit items-center gap-2 rounded-lg bg-[#f3f6d8] px-5 text-sm font-medium text-neutral-950 transition hover:bg-[#e6efb8]"
            >
              Inquire now <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
            <motion.div
              {...(shouldReduceMotion ? {} : reveal())}
              className="relative min-h-[360px] overflow-hidden rounded-lg bg-neutral-200 sm:min-h-[460px]"
            >
              <Image
                src={productImages[selectedApplication % productImages.length]}
                alt={applications[selectedApplication].title}
                fill
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <p className="max-w-md text-lg font-medium">{applications[selectedApplication].title}</p>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/75">
                  {applications[selectedApplication].body}
                </p>
              </div>
            </motion.div>

            <div className="grid gap-3">
              {applications.map((item, index) => (
                <motion.button
                  key={item.title}
                  type="button"
                  onClick={() => setSelectedApplication(index)}
                  {...(shouldReduceMotion ? {} : reveal(index))}
                  className={`group flex min-h-20 items-center justify-between rounded-lg border px-5 text-left transition ${
                    selectedApplication === index
                      ? "border-neutral-950 bg-neutral-950 text-white"
                      : "border-neutral-200 bg-[#f4f4f1] text-neutral-950 hover:border-neutral-300"
                  }`}
                >
                  <span>
                    <span className="block text-lg font-medium">{item.title}</span>
                    <span
                      className={`mt-1 block text-sm ${
                        selectedApplication === index ? "text-white/70" : "text-neutral-500"
                      }`}
                    >
                      {item.body}
                    </span>
                  </span>
                  <ChevronRight className="size-5 shrink-0 transition group-hover:translate-x-1" />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="bg-[#f8f8f2] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div className="space-y-5">
              <SectionLabel>Products & specs</SectionLabel>
              <h2 className="text-3xl font-medium leading-tight sm:text-5xl">FRP Manhole Covers</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">
              A non-metallic alternative to cast iron, ductile iron, and RCC manhole covers,
              available in circular, square, and rectangular shapes with 2.5 to 5 ton load capacity.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {productImages.slice(0, 3).map((src, index) => (
              <motion.div
                key={src}
                {...(shouldReduceMotion ? {} : reveal(index))}
                className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-200"
              >
                <Image
                  src={src}
                  alt={`Admix FRP manhole cover ${index + 1}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-lg border border-neutral-200 bg-white">
            <Table>
              <TableHeader>
                <TableRow className="bg-neutral-950 hover:bg-neutral-950">
                  <TableHead className="text-white">Shape</TableHead>
                  <TableHead className="text-white">Size in inches</TableHead>
                  <TableHead className="text-white">Size in mm</TableHead>
                  <TableHead className="text-white">Weight kg</TableHead>
                  <TableHead className="text-white">Packing</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {productSizes.map(([shape, inches, mm, weight, packing]) => (
                  <TableRow key={`${shape}-${inches}`}>
                    <TableCell className="font-medium">{shape}</TableCell>
                    <TableCell>{inches}</TableCell>
                    <TableCell>{mm}</TableCell>
                    <TableCell>{weight}</TableCell>
                    <TableCell>{packing}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      <section id="quality" className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <motion.div {...motionProps} className="space-y-8">
            <SectionLabel>Quality & mission</SectionLabel>
            <h2 className="text-3xl font-medium leading-tight sm:text-5xl">
              Designed for durability, service, and dependable delivery.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-neutral-600">
              The mission is to deliver quality products and solutions by continuously improving
              products and introducing new technologies for changing market needs.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {servicePromises.map((item) => (
                <Badge
                  key={item}
                  className="justify-center rounded-lg bg-[#eef3cf] px-3 py-3 text-center text-neutral-950"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-3">
            {qualityPoints.map((point, index) => (
              <motion.div
                key={point}
                {...(shouldReduceMotion ? {} : reveal(index))}
                className="flex gap-4 rounded-lg border border-neutral-200 bg-[#f8f8f2] p-5"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white">
                  <Check className="size-4" />
                </span>
                <p className="text-sm leading-6 text-neutral-700">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div {...motionProps} className="space-y-7">
            <SectionLabel>
              <span className="text-white">Global presence</span>
            </SectionLabel>
            <h2 className="text-3xl font-medium leading-tight sm:text-5xl">
              Export-ready manufacturing support for growing markets.
            </h2>
            <p className="max-w-xl text-base leading-7 text-white/65">
              Admix Metacraft LLP operates in Nepal, Bhutan, Sri Lanka, and African countries,
              supporting regional customers through long-term partnerships.
            </p>
            <a
              href="#contact"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-white px-5 text-sm font-medium text-neutral-950 transition hover:bg-[#eef3cf]"
            >
              Export enquiry <ArrowRight className="size-4" />
            </a>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {["Nepal", "Bhutan", "Sri Lanka", "African countries"].map((region, index) => (
              <motion.div
                key={region}
                {...(shouldReduceMotion ? {} : reveal(index))}
                className="rounded-lg border border-white/10 bg-white/5 p-6"
              >
                <MapPin className="mb-8 size-5 text-[#eef3cf]" />
                <div className="text-2xl font-medium">{region}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionLabel>Customer notes</SectionLabel>
            <h2 className="text-3xl font-medium leading-tight sm:text-5xl">
              Trusted by customers looking for response, strength, and site-ready quality.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {reviews.map((review, index) => (
              <motion.div key={review.title} {...(shouldReduceMotion ? {} : reveal(index))}>
                <Card className="h-full rounded-lg bg-[#f8f8f2] py-6 ring-neutral-200">
                  <CardContent className="flex h-full flex-col justify-between gap-8 px-6">
                    <div>
                      <div className="mb-4 flex gap-1 text-sm text-neutral-950">★★★★★</div>
                      <h3 className="text-lg font-medium">{review.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-neutral-600">{review.text}</p>
                    </div>
                    <p className="text-sm font-medium text-neutral-950">{review.by}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f8f8f2] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.aside {...motionProps} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-neutral-200">
            <SectionLabel>Contact us</SectionLabel>
            <h2 className="mt-8 text-3xl font-medium leading-tight">Do you have any questions?</h2>
            <p className="mt-4 text-sm leading-6 text-neutral-600">
              Fill out the inquiry form or contact the team directly.
            </p>
            <Separator className="my-8" />
            <div className="space-y-5 text-sm">
              <ContactLink icon={<Phone className="size-4" />} label="Phone" value="+91 88666 49043" href="tel:+918866649043" />
              <ContactLink icon={<Mail className="size-4" />} label="Email" value="admixmetacraft@gmail.com" href="mailto:admixmetacraft@gmail.com" />
              <ContactLink
                icon={<MapPin className="size-4" />}
                label="Office"
                value="Bajrang Industrial Area-2, Ribda, Gondal, Rajkot"
                href="https://maps.app.goo.gl/cFA6rYV45TxB4YTg6"
              />
            </div>
          </motion.aside>

          <motion.form
            {...(shouldReduceMotion ? {} : reveal(1))}
            onSubmit={handleSubmit}
            className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-neutral-200 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name">
                <Input
                  required
                  value={formState.name}
                  onChange={(event) => setFormState({ ...formState, name: event.target.value })}
                  placeholder="Enter name"
                  className="h-11 rounded-none border-x-0 border-t-0 px-0 shadow-none focus-visible:ring-0"
                />
              </Field>
              <Field label="Email">
                <Input
                  required
                  type="email"
                  value={formState.email}
                  onChange={(event) => setFormState({ ...formState, email: event.target.value })}
                  placeholder="Enter email"
                  className="h-11 rounded-none border-x-0 border-t-0 px-0 shadow-none focus-visible:ring-0"
                />
              </Field>
              <Field label="Phone">
                <Input
                  value={formState.phone}
                  onChange={(event) => setFormState({ ...formState, phone: event.target.value })}
                  placeholder="Enter phone"
                  className="h-11 rounded-none border-x-0 border-t-0 px-0 shadow-none focus-visible:ring-0"
                />
              </Field>
              <Field label="Business Name">
                <Input
                  value={formState.business}
                  onChange={(event) => setFormState({ ...formState, business: event.target.value })}
                  placeholder="Enter company name"
                  className="h-11 rounded-none border-x-0 border-t-0 px-0 shadow-none focus-visible:ring-0"
                />
              </Field>
              <Field label="Product">
                <select
                  value={formState.product}
                  onChange={(event) => setFormState({ ...formState, product: event.target.value })}
                  className="h-11 w-full border-x-0 border-t-0 border-input bg-transparent text-sm outline-none"
                >
                  <option>FRP Manhole Covers</option>
                  <option>Main Door Handle</option>
                </select>
              </Field>
              <Field label="Subject">
                <Input
                  placeholder="Product inquiry"
                  className="h-11 rounded-none border-x-0 border-t-0 px-0 shadow-none focus-visible:ring-0"
                />
              </Field>
              <Field label="Message" className="sm:col-span-2">
                <Textarea
                  value={formState.message}
                  onChange={(event) => setFormState({ ...formState, message: event.target.value })}
                  placeholder="Tell us your size, quantity, or site requirement"
                  className="min-h-28 rounded-none border-x-0 border-t-0 px-0 shadow-none focus-visible:ring-0"
                />
              </Field>
            </div>
            <Button type="submit" size="lg" className="mt-8 h-11 rounded-lg bg-neutral-950 px-5 text-white hover:bg-neutral-800">
              Send on WhatsApp <ArrowRight className="size-4" />
            </Button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-neutral-950 text-white">
      <Image
        src="/media/Admix-hero-image.png"
        alt="Admix FRP manhole cover banner"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/25" />

      <Header />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
        >
          <div className="space-y-7">
            <Badge className="rounded-lg bg-white/10 px-3 py-2 text-white ring-1 ring-white/20 backdrop-blur">
              GST No. 24ABVFA1777G1Z5
            </Badge>
            <h1 className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-normal sm:text-6xl lg:text-8xl">
              Engineered FRP Covers for Modern Infrastructure
            </h1>
          </div>
          <div className="max-w-xl space-y-6">
            <p className="text-base leading-7 text-white/78 sm:text-lg">
              Admix Metacraft LLP manufactures WAVE FRP manhole covers for utility,
              industrial, and infrastructure applications, with quality-focused engineering from Rajkot.
            </p>
            <div className="grid gap-3 min-[440px]:grid-cols-2">
              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#eef3cf] px-5 text-sm font-medium text-neutral-950 transition hover:bg-white"
              >
                Inquire now <ArrowRight className="size-4" />
              </a>
              <a
                href="#products"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/35 px-5 text-sm font-medium text-white transition hover:bg-white hover:text-neutral-950"
              >
                View sizes <ChevronRight className="size-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <a href="#" className="relative block h-10 w-32">
          <Image
            src="/media/admix-logo.png"
            alt="Admix Metacraft"
            fill
            priority
            sizes="128px"
            className="object-contain brightness-0 invert"
          />
        </a>
        <nav className="hidden items-center gap-8 text-xs font-medium text-white/80 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="tel:+918866649043"
            className="inline-flex h-9 items-center gap-2 rounded-lg bg-white px-4 text-xs font-medium text-neutral-950 transition hover:bg-[#eef3cf]"
          >
            <Phone className="size-3.5" /> Contact us
          </a>
        </div>

        <Sheet>
          <SheetTrigger className="inline-flex size-10 items-center justify-center rounded-lg bg-white text-neutral-950 lg:hidden">
            <Menu className="size-5" />
            <span className="sr-only">Open navigation</span>
          </SheetTrigger>
          <SheetContent className="w-[88vw] max-w-sm bg-white">
            <SheetHeader>
              <SheetTitle>Admix Metacraft</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col px-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="border-b border-neutral-100 py-4 text-base font-medium">
                  {item.label}
                </a>
              ))}
              <a
                href="tel:+918866649043"
                className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-neutral-950 px-5 text-sm font-medium text-white"
              >
                <Phone className="size-4" /> Contact us
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block space-y-2 ${className ?? ""}`}>
      <span className="text-xs font-medium text-neutral-950">{label}</span>
      {children}
    </label>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a href={href} className="flex gap-3 rounded-lg p-2 transition hover:bg-neutral-50" target={href.startsWith("http") ? "_blank" : undefined}>
      <span className="mt-0.5 text-neutral-950">{icon}</span>
      <span>
        <span className="block text-xs text-neutral-500">{label}</span>
        <span className="mt-1 block leading-5 text-neutral-950">{value}</span>
      </span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-neutral-950 px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.2fr] md:items-end">
        <div>
          <Image src="/media/admix-logo.png" alt="Admix Metacraft" width={150} height={50} className="brightness-0 invert" />
          <p className="mt-5 max-w-md text-sm leading-6 text-white/60">
            Admix Metacraft LLP manufactures FRP manhole covers and engineering products for
            infrastructure, utilities, and export markets.
          </p>
        </div>
        <div>
          <Accordion className="md:hidden">
            <AccordionItem value="links">
              <AccordionTrigger className="text-white">Quick links</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-3 text-white/70">
                  {navItems.map((item) => (
                    <a key={item.href} href={item.href}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="hidden justify-end gap-7 text-sm text-white/65 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
          <p className="mt-8 text-sm text-white/45 md:text-right">
            Copyright ©2023 Admix Meta Craft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
