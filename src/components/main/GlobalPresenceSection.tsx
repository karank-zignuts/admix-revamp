"use client";

import { ArrowRight, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { exportRegions, globalPresenceContent } from "@/data/main";

import { reveal } from "./animations";
import { SectionLabel } from "./SectionLabel";

export function GlobalPresenceSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#111] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          {...(shouldReduceMotion ? {} : reveal())}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <SectionLabel className="text-white/75">{globalPresenceContent.eyebrow}</SectionLabel>
          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-5xl">
            {globalPresenceContent.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/65">
            {globalPresenceContent.body}
          </p>
          <a
            href={globalPresenceContent.cta.href}
            className="mt-7 inline-flex h-11 items-center gap-2 rounded-lg bg-white px-5 text-sm font-medium text-neutral-950 transition hover:bg-[#eef3cf]"
          >
            {globalPresenceContent.cta.label} <ArrowRight className="size-4" />
          </a>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {exportRegions.map((region, index) => (
            <motion.div
              key={region}
              {...(shouldReduceMotion ? {} : reveal(index))}
              className="rounded-lg border border-white/10 bg-white/5 p-8 text-center"
            >
              <MapPin className="mx-auto mb-8 size-5 text-[#eef3cf]" />
              <div className="text-2xl font-medium">{region}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
