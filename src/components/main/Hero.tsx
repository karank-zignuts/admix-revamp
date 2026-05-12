"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { company, heroContent } from "@/data/main";

import { Header } from "./Header";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-neutral-950 text-white">
      <Image
        src={heroContent.image}
        alt={heroContent.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/25" />

      <Header />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
        >
          <div className="space-y-7">
            <Badge className="rounded-lg bg-white/10 px-3 py-2 font-micro text-lg font-semibold tracking-normal text-white ring-1 ring-white/20 backdrop-blur">
              {company.gst}
            </Badge>
            <h1 className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-normal sm:text-6xl lg:text-8xl">
              {heroContent.title}
            </h1>
          </div>

          <div className="max-w-xl space-y-6">
            <p className="text-base leading-7 text-white/78 sm:text-lg">{heroContent.body}</p>
            <div className="grid gap-3 min-[440px]:grid-cols-2">
              <a
                href={heroContent.primaryCta.href}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#eef3cf] px-5 text-sm font-medium text-neutral-950 transition hover:bg-white"
              >
                {heroContent.primaryCta.label} <ArrowRight className="size-4" />
              </a>
              <a
                href={heroContent.secondaryCta.href}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/35 px-5 text-sm font-medium text-white transition hover:bg-white hover:text-neutral-950"
              >
                {heroContent.secondaryCta.label} <ChevronRight className="size-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
