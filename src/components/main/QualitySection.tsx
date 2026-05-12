"use client";

import { Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { qualityContent, qualityPoints, servicePromises } from "@/data/main";

import { reveal } from "./animations";
import { SectionLabel } from "./SectionLabel";

export function QualitySection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="quality" className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          {...(shouldReduceMotion ? {} : reveal())}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <SectionLabel>{qualityContent.eyebrow}</SectionLabel>
          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-5xl">
            {qualityContent.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600">
            {qualityContent.body}
          </p>
          <div className="mt-8 grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {servicePromises.map((item) => (
              <div
                key={item}
                className="flex min-h-12 w-full items-center justify-center rounded-lg border border-[#dfe8aa] bg-[#eef3cf] px-3 text-center text-sm font-medium leading-5 text-neutral-950"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {qualityPoints.map((point, index) => (
            <motion.div
              key={point}
              {...(shouldReduceMotion ? {} : reveal(index))}
              className="flex min-h-20 items-center gap-4 rounded-lg border border-neutral-200 bg-[#f8f8f2] p-6 sm:p-8"
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
  );
}
